import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

type AcceptedState = {
    schoolName: string,
    address: string,
    inState: boolean,
    notes: string
}

interface Props {
    // updateToken: (newToken: string) => void
    token: string | null
}

export default class AcceptedIndex extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: '',
            address: '',
            inState: true,
            notes: ''
        }
    }

    setSchoolName(e: any) {
        this.setState({
            schoolName: (e)
        })
    }

    setAddress(e: any) {
        this.setState({
            address: (e)
        })
    }

    setInState(e: any) {
        this.setState({
            inState: (e)
        })
    }

    setNotes(e: any) {
        this.setState({
            notes: (e)
        })
    }

    addAccepted(e: any) {
        e.preventDefault();
        fetch('http://localhost:3000/favorites/addschool', {
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
                'Authorization': `${this.props.token}`,
            })
        })
        // .then((response) => response.json())
        //     .then((data) => {
        //         this.props.updateToken(data.token)
        //         // setSubmitSuccess
        //     })
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.addAccepted(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined"
                    onChange={(e)=>this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="In state?(true or false)" variant="outlined" onChange={(e)=>this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Add school</Button>
                </form>
            </div>
        )
    }
}