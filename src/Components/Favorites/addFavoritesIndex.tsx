import React, { Component } from 'react';
import APIURL from '../../helpers/environment';

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

type FavoritesState = {
    schoolName: string,
    address: string,
    inState: string,
    notes: string
    handleopen: boolean;
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
            notes: '',
            handleopen: false,
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

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
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
                this.setState({schoolName: "",address: "", inState: "", notes: "" })
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