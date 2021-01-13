import React, { Component } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import SchoolDisplay from './schoolDisplay';
import APIURL from '../../helpers/environment';

type FetchResultsState = {
    search: string,
    pageNumber: number,
    results: any,
}

interface Props {
    token: string
}


export default class SchoolSearch extends Component<Props, FetchResultsState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            search: '',
            pageNumber: 0,
            results: [], 
        };
    }
    searchFunction(event: any) {
        this.setState({
            search: (event)
        })
        console.log("hello4")

    }


    // fetchResults = () => {
    fetchResults(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    fetch(`${APIURL}/schools/all`, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token,
        })
        
    }) .then((res) => res.json())
    .then(data => {
        console.log(data)
        this.setState({
            results: data
        })
    }) .catch (( error) =>
    console.log(error)
    )
}

    

    handleSubmit(event: any) {
        event.preventDefault()
        this.fetchResults(event)
    }

    nextPage(event: any){
        event.preventDefault()
        this.setState({
            pageNumber: this.state.pageNumber+1
        })
        this.fetchResults(event)
    }

    previousPage(event: any){
        event.preventDefault()
        if(this.state.pageNumber > 0) {
        this.setState({
            pageNumber: this.state.pageNumber-1
        })
        this.fetchResults(event)
    }
    }

    render() {
        return (
        <div className="main">
        <div className="mainDiv">
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Search: </label>
                <input type ="text" name ="search" onChange ={(e) => this.setState({search: e.target.value})} />
                <br />
                <button type='submit'>Search</button>
                <hr />
                <SchoolDisplay results={this.state.results} />
                <button onClick={(e)=> this.previousPage(e)}>Previous Page</button>
                <button onClick={(e)=> this.nextPage(e)}>Next Page</button>
            </form>
        </div>
        </div>
        );
    }
}

// export default SchoolSearch;