import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

type AcceptedState = {
    schoolName: string,
    address: string,
    inState: boolean,
    accepted: boolean,
    pros: string,
    cons: string,
    notes: string,
}

interface Props {
    updateToken: (newToken: string) => void
}

export default class AcceptedIndex extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: '',
            address: '',
            inState: true,
            accepted: true,
            pros: '',
            cons: '',
            notes: '',
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

    setAccepted(e: any) {
        this.setState({
            accepted: (e)
        })
    }

    setPros(e: any) {
        this.setState({
            pros: (e)
        })
    }

    setCons(e: any) {
        this.setState({
            cons: (e)
        })
    }

    setNotes(e: any) {
        this.setState({
            notes: (e)
        })
    }

    addAccepted(e: any) {
        e.preventDefault();
        fetch('http://localhost:3000/accepted/addschool', {
            method: 'POST',
            body: JSON.stringify({
                schoolName: this.state.schoolName,
                address: this.state.address,
                inState: this.state.inState,
                accepted: this.state.accepted,
                pros: this.state.pros,
                cons: this.state.cons,
                notes: this.state.notes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `${localStorage.getItem('token')}`
            })
        })
        // .then((response) => response.json())
        //     .then((data) => {
        //         this.props.updateToken(data.token)
        //         // setSubmitSuccess
        //     })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.addAccepted(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined"
                    onChange={(e)=>this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="In state?(true or false)" variant="outlined" onChange={(e)=>this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Accepted? (true or false)" variant="outlined" onChange={(e)=>this.setAccepted(e.target.value)} />
                    <TextField id="outlined-basic" label="Pros" variant="outlined" onChange={(e)=>this.setPros(e.target.value)} />
                    <TextField id="outlined-basic" label="Cons" variant="outlined" onChange={(e)=>this.setCons(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Add school</Button>
                </form>
            </div>
        )
    }
}