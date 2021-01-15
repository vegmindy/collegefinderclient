import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import APIURL from '../../helpers/environment';

type Props = {
    // updateToken: (newToken: string) => void
    // fetchAccepted: () => void
    updateAccepted: any,
    updateOff: () => void,
    fetchAccepted: () => void,
    token: string
}

type AcceptedState = {
    schoolName: string,
    address: string,
    inState: string,
    accepted: string,
    pros: string,
    cons: string,
    notes: string,
    handleopen: boolean
}



export default class UpdateAcceptedIndex extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: this.props.updateAccepted.schoolName,
            address: this.props.updateAccepted.address,
            inState: this.props.updateAccepted.inState,
            accepted: this.props.updateAccepted.accepted,
            pros: this.props.updateAccepted.pros,
            cons: this.props.updateAccepted.cons,
            notes: this.props.updateAccepted.notes,
            handleopen: false,
        }
    }

    updateAcceptedSchool = (e: any) => {
        e.preventDefault();
        console.log(this.props.updateAccepted.schoolName);
        console.log("token:" , this.props.token)
        fetch(`${APIURL}/accepted/updateschool/${this.props.updateAccepted.id}`, {
            method: 'PUT',
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
                'Authorization': this.props.token,
            })
        })

            .then(() => {
                this.props.fetchAccepted();
                this.props.updateOff();
            }) .catch((error) => console.log(error))
    }

    updateAcceptedForm = () => {
        this.props.updateOff();
    }

    handleOpen = () => {
        this.setState({
            handleopen: true,
        })
    }

    handleClose = () => {
        this.setState({
            handleopen: false,
        })
    }

    setSchoolName(event: string) {
        this.setState({
            schoolName: (event)
        })
    }

    setAddress(event: string) {
        this.setState({
            address: (event)
        })
    }

    setInState(event: string) {
        this.setState({
            inState: (event)
        })
    }

    setAccepted(event: string) {
        this.setState({
            accepted: (event)
        })
    }

    setPros(event: string) {
        this.setState({
            pros: (event)
        })
    }

    setCons(event: string) {
        this.setState({
            cons: (event)
        })
    }

    setNotes(event: string) {
        this.setState({
            notes: (event)
        })
    }

    componentDidMount() {
        console.log("addSchool didMount: ", this.props.token);
        console.log(this.props.updateAccepted);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateAcceptedSchool} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" value={this.state.schoolName} onChange={(e) => this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" value={this.state.address} onChange={(e) => this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="Is the school in state?" variant="outlined" value={this.state.inState} onChange={(e) => this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Have you been accepted?" variant="outlined" value={this.state.accepted} onChange={(e) => this.setAccepted(e.target.value)} />
                    <TextField id="outlined-basic" label="Pros" variant="outlined" value={this.state.pros} onChange={(e) => this.setPros(e.target.value)} />
                    <TextField id="outlined-basic" label="Cons" variant="outlined" value={this.state.cons} onChange={(e) => this.setCons(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" value={this.state.notes} onChange={(e) => this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Update school</Button>
                </form>
            </div>
        )
    }
}
