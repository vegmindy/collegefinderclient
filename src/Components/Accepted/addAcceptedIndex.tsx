
import React, { Component } from 'react';
import APIURL from '../../helpers/environment';
// import { TextField, Button} from '@material-ui/core';
import {
    Button,
    FormGroup,
    FormLabel,
    FormControl,
    InputLabel,
    Box,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
   DialogActions,
} from '@material-ui/core';

type AcceptedState = {
    schoolName: string,
    address: string,
    inState: string,
    accepted: string,
    pros: string,
    cons: string,
    notes: string,
    handleopen: boolean;
}

interface Props {
    // updateToken: (newToken: string) => void
    token: string
}

export default class AddAcceptedIndex extends React.Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: '',
            address: '',
            inState: '',
            accepted: '',
            pros: '',
            cons: '',
            notes: '',
            handleopen: false,
        }
    }

    // setSchoolName(e: string) {
    //     this.setState({
    //         schoolName: (e)
    //     })
    // }

    // setAddress(e: string) {
    //     this.setState({
    //         address: (e)
    //     })
    // }

    // setInState(e: string) {
    //     this.setState({
    //         inState: (e)
    //     })
    // }

    // setAccepted(e: string) {
    //     this.setState({
    //         accepted: (e)
    //     })
    // }

    // setPros(e: string) {
    //     this.setState({
    //         pros: (e)
    //     })
    // }

    // setCons(e: string) {
    //     this.setState({
    //         cons: (e)
    //     })
    // }

    // setNotes(e: string) {
    //     this.setState({
    //         notes: (e)
    //     })
    // }

    // componentDidMount() {
    //     console.log(localStorage.getItem('token'))
    //     console.log(this.props.token);
    //   }

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

    setAccepted(e: string) {
        this.setState({
            accepted: (e)
        })
    }

    setPros(e: string) {
        this.setState({
            pros: (e)
        })
    }

    setCons(e: string) {
        this.setState({
            cons: (e)
        })
    }

    setNotes(e: string) {
        this.setState({
            notes: (e)
        })
    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        fetch(`${APIURL}/accepted/addschool`, {
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
                // 'Authorization': `${localStorage.getItem('token')}`
                'Authorization': this.props.token,
            })
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                //this.props.fetchAccepted();
            })
            this.handleClose();
    }
    handleOpen = () => {
        this.setState({
            handleopen: true,
        });
    };

    handleClose = () => {
        this.setState({
            handleopen: false,
        });
    };

    render() {
        return (
        <div className="container">
        <Button onClick={this.handleOpen} id="CreateButton" variant="outlined" >Add A School</Button>
        <Dialog
            fullWidth
            open={this.state.handleopen}
            onClose={this.handleClose}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description">

            <DialogTitle id="scroll-dialog-title">Add School</DialogTitle>
            <DialogContent id="Create">
            <TextField
                    margin="dense"
                    label="School Name"
                    type="text"
                    fullWidth
                    value={this.state.schoolName}
                    onChange={(event) => this.setState({schoolName: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="Address"
                    type="text"
                    fullWidth
                    value={this.state.address}
                    onChange={(event) => this.setState({address: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="Have you been accepted?"
                    type="text"
                    fullWidth
                    value={this.state.accepted}
                    onChange={(event) => this.setState({accepted: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="Pros?"
                    type="text"
                    fullWidth
                    value={this.state.pros}
                    onChange={(event) => this.setState({pros: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="cons?"
                    type="text"
                    fullWidth
                    value={this.state.cons}
                    onChange={(event) => this.setState({cons: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="Extra Notes:"
                    type="text"
                    fullWidth
                    value={this.state.notes}
                    onChange={(event) => this.setState({notes: event.target.value})}
                />
                <TextField
                    margin="dense"
                    label="Is it in state?"
                    type="text"
                    fullWidth
                    value={this.state.inState}
                    onChange={(event) => {this.setState({inState: event.target.value})}}
                />
                <Button onClick={this.handleSubmit} id="btn">Submit</Button>
            </DialogContent>
            <DialogActions id="Createbtn">
                
                {/* <Button onClick={this.handleSubmit} >Submit</Button> */}
            </DialogActions>
        </Dialog>
    </div>
        )
    }
}