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

export default class UpdateFavoritesIndex extends Component<Props, FavoritesState>{
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

    componentDidMount() {
        console.log("addSchool didMount: ", this.props.token);
      }

    updateAccepted(e: any) {
        e.preventDefault();
        fetch(`${APIURL}}/accepted/addschool`, {
            method: 'POST',
            body: JSON.stringify({
                schoolName: this.state.schoolName,
                address: this.state.address,
                inState: this.state.inState,
                notes: this.state.notes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `${localStorage.getItem('token')}`
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
                <form onSubmit={(e)=>this.updateAccepted(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" onChange={(e)=>this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="In state?(true or false)" variant="outlined" onChange={(e)=>this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Update school</Button>
                </form>
            </div>
        )
    }
}