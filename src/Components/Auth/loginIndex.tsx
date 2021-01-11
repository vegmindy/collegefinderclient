import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

type LoginState = {
    email: string,
    password: string
}

interface Props {
    updateToken: (newToken: string) => void
}

export default class LoginIndex extends Component<Props, LoginState>{
    constructor(props: Props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    // setEmail(e: any){
    //     this.setState({
    //         email: (e)
    //     })
    // }

    // setPassword(e: any){
    //     this.setState({
    //         password: (e)
    //     })
    // }

    loginUser(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch('http://localhost:3000/user/login',{
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        // }).then((response)=> response.json())
        //     .then((data)=> {
        //         this.props.updateToken(data.token)
        //     })
        }) .then (
            (response) => response.json()
        ) .then((data) => {
            console.log(data)
        }) .catch (( error) =>
            console.log(error)
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.loginUser(e)} >
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>this.setState({email: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setState({password: (e.target.value)})} />
                    <Button type='submit' variant='contained'>LOG IN</Button>
                </form>
            </div>
        )
    }
}