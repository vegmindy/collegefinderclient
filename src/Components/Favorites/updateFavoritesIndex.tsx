import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import APIURL from '../../helpers/environment';

type Props = {
    updateFavorites: any,
    updateOff: () => void,
    fetchFavorites: () => void,
    token: string
}

type FavoritesState = {
    schoolName: string,
    address: string,
    inState: string,
    notes: string,
    handleopen: boolean
}



export default class UpdateFavoritesIndex extends Component<Props, FavoritesState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: this.props.updateFavorites.schoolName,
            address: this.props.updateFavorites.address,
            inState: this.props.updateFavorites.inState,
            notes: this.props.updateFavorites.notes,
            handleopen: false,
        }
    }

    updateFavoritesSchool = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}}/favorites/updateschool/${this.props.updateFavorites.id}`, {
            method: 'PUT',
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
            .then(() => {
                this.props.fetchFavorites();
                this.props.updateOff();
            }).catch((error) => console.log(error))
    }

    updateFavoritesForm = () => {
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
        console.log(this.props.updateFavorites);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateFavoritesSchool} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" value={this.state.schoolName} onChange={(e) => this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" value={this.state.address} onChange={(e) => this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="Is the school in state?" variant="outlined" value={this.state.inState} onChange={(e) => this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" value={this.state.notes} onChange={(e) => this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Update school</Button>
                </form>
            </div>
        )
    }
}