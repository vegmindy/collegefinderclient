import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

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
    }

    setFirstName(e: any) {
        this.setState({
            firstName: (e)
        })
    }

    setLastName(e: any) {
        this.setState({
            lastName: (e)
        })
    }

    setEmail(e: any) {
        this.setState({
            email: (e)
        })
    }

    setPassword(e: any) {
        this.setState({
            password: (e)
        })
    }

    setCurrentState(e: any) {
        this.setState({
            currentState: (e)
        })
    }

    setRole(e: any) {
        this.setState({
            role: (e)
        })
    }

    signUpUser(e: any) {
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
                <form onSubmit={(e)=>this.signUpUser(e)} >
                    <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e)=>this.setFirstName(e.target.value)} />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined"
                    onChange={(e)=>this.setLastName(e.target.value)} />
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>this.setEmail(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setPassword(e.target.value)} />
                    <TextField id="outlined-basic" label="Home State" variant="outlined" onChange={(e)=>this.setCurrentState(e.target.value)} />
                    <TextField id="outlined-basic" label="Role" variant="outlined" onChange={(e)=>this.setRole(e.target.value)} />
                    <Button type='submit' variant="contained">Create Account</Button>
                </form>
            </div>
        )
    }
}