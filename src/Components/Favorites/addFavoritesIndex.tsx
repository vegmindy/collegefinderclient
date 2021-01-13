import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';
import APIURL from '../../helpers/environment';

type FavoritesState = {
    schoolName: string,
    address: string,
    inState: string,
    notes: string
}

interface Props {
    // updateToken: (newToken: string) => void
    token: string
}

export default class AddFavoritesIndex extends Component<Props, FavoritesState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: '',
            address: '',
            inState: '',
            notes: ''
        }
    }

    setSchoolName(e: string) {
        this.setState({
            schoolName: (e)
        })
    }

    setAddress(e: string) {
        this.setState({
            address: (e)
        })
    }

    setInState(e: string) {
        this.setState({
            inState: (e)
        })
    }

    setNotes(e: string) {
        this.setState({
            notes: (e)
        })
    }

    addFavorites(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        fetch(`${APIURL}/favorites/addschool`, {
            method: 'POST',
            body: JSON.stringify({
                schoolName: this.state.schoolName,
                address: this.state.address,
                inState: this.state.inState,
                notes: this.state.notes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
            })
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.addFavorites(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setState({schoolName: (e.target.value)})} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" onChange={(e)=>this.setState({address: (e.target.value)})} />
                    <TextField id="outlined-basic" label="In state?(true or false)" variant="outlined" onChange={(e)=>this.setState({inState: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setState({notes: (e.target.value)})} />
                    <Button type='submit' variant="contained">Add school</Button>
                </form>
            </div>
        )
    }
}