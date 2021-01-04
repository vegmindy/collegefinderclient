import React from "react"
// import "./Auth.css"
import { Button } from '@material-ui/core'



class Auth extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "",
        curretnState: "",
        login: true,
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        let url = this.state.login ? "http://localhost:3000/user/login" : "http://localhost:3000/user/register"

        const body = this.state.login ? {
            email: this.state.email,
            password: this.state.password
        } : {
                email: this.state.email,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("sessionToken", data.token)
            })
    }

    handleLogout = () => {
            localStorage.setItem("sessionToken", "")
    }

    title = () => {
        return this.state.login ? "Login" : "Signup";
    }

    logginToggle = (event: any) => {
        event.preventDefault();
        this.setState({ login: !this.state.login })
    }

    signupFields = () => {
        return !this.state.login ?
            <div>
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.setState({ firstName: event.target.value })}
                    name="firstName"
                    placeholder="First Name"
                ></input>
                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.setState({ lastName: event.target.value })}
                    name="lastName"
                    placeholder="Last Name"
                ></input>
            </div>
            :
            null
    }

    loginButtons = () => {
        return this.state.login ?
            <div>
                <Button
                    type="submit"
                >Login!</Button>
                <Button
                    onClick={(e) => this.logginToggle(e)}
                >Sign Up!</Button>
            </div> 
            :
            <div>
                <Button
                    type="submit"
                >Register!</Button>
                <Button
                    onClick={(e) => this.logginToggle(e)}
                >Login!</Button>
            </div>
    }

    render() {

        return (
            <div className="container">
                <div className="innerCard">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <h2>{this.title()}</h2>
                        {this.signupFields()}
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })}
                            name="email"
                            placeholder="Email@email.com"
                        ></input>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })}
                            name="password"
                            placeholder="password"
                        ></input>
                        <br />
                        {this.loginButtons()}
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;