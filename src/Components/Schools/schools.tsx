// import React, { Component } from 'react';
// import SchoolDisplay from './schoolDisplay';


// type FetchResults = {
//     search: string,
//     pageNumber: number,
//     results: any,
// };

// class DisplayResults extends Component<{}, FetchResults> {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             search: '',
//             pageNumber: 0,
//             results: [], 
//         };
//     }
//     searchFunction(event: any) {
//         this.setState({
//             search: (event)
//         })
//     }
// }


import React, { Component } from 'react';
import SchoolDisplay from './schoolDisplay';

type FetchResults = {
    search: string,
    pageNumber: number,
    results: any,
};

interface Props {
    token: string | null
}


const baseURL = 'http://localhost:3000/schools/all';

// console.log(results)
console.log("hello1")
class DisplayResults extends Component<{}, FetchResults> {
    
    constructor(props: any) {
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


    fetchResults = () => {
        // let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`;
        // let url = baseURL;

        console.log("hello2")
        fetch(baseURL)
            .then(res => res.json())
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
        this.fetchResults()
    }

    nextPage(event: any){
        event.preventDefault()
        this.setState({
            pageNumber: this.state.pageNumber+1
        })
        this.fetchResults()
    }

    previousPage(event: any){
        event.preventDefault()
        if(this.state.pageNumber > 0) {
        this.setState({
            pageNumber: this.state.pageNumber-1
        })
        this.fetchResults()
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

export default DisplayResults;