import React, { Component } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, FormHelperText } from '@material-ui/core';

type SignUpState = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    currentState: string,
    role: string
}

interface Props {
    updateToken: (newToken: string) => void
}

export default class SignUpIndex extends Component<Props, SignUpState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            currentState: '',
            role: ''
        }
        // this.handleInputChange = this.handleImputChange.bind(this)
    }

    // handleChange(event) {
    //     // this.setState({firstName: event.target.value})
    //     const target = event.target;
    //     const value = target.type === 
    // }

    setFirstName(e: string) {
        this.setState({
            firstName: (e)
        })
    }

    setLastName(e: string) {
        this.setState({
            lastName: (e)
        })
    }

    setEmail(e: string) {
        this.setState({
            email: (e)
        })
    }

    setPassword(e: string) {
        this.setState({
            password: (e)
        })
    }

    setCurrentState(e: string) {
        this.setState({
            currentState: (e)
        })
    }

    setRole(e: string) {
        this.setState({
            role: (e)
        })
    }

    signUpUser(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                currentState: this.state.currentState,
                role: this.state.role
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
            .then((data) => {
                this.props.updateToken(data.token)
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.signUpUser(e)} >
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e) => this.setState({ firstName: (e.target.value) })} />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e) => this.setLastName(e.target.value)} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => this.setState({ email: (e.target.value) })} />
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={(e) => this.setState({ password: (e.target.value) })} />
                    <TextField id="outlined-basic" label="Home State" variant="outlined" onChange={(e) => this.setState({ currentState: (e.target.value) })} />
                    <TextField id="outlined-basic" label="Role" variant="outlined" onChange={(e)=>this.setState({role: (e.target.value)})} />
                    <Button type='submit' variant="contained">Create Account</Button>
                </form>
            </div>
        )
    }
}