import React, { Component } from 'react';
import Main from './Components/index';


// type AppState = {
//     token: string
//     // schoolsUpdate: any
// }

export default class AppIndex extends Component {
    // constructor(){
    //     super(props)
    //     this.state = {
    //         token: localStorage.getItem('token') ? localStorage.getItem('token') : '' ,
    //         // schoolsUpdate: []
    //     }
    // }


    state = {
        token: ""
    }

    componentWillMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                token: localStorage.getItem('token')
            })
        }
        console.log(this.state.token)
    }


    componentDidMount() {
        console.log(this.state.token)
    }


    updateToken = (newToken: string) => {
        localStorage.setItem('token', newToken)
        this.setState({
            token: newToken
        })
    }

    clearToken = () => {
        localStorage.clear();
        this.setState({
            token: ''
        })
    }

    render() {
        return (
            <div className='app'>
                <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
            </div>
        )
    }
}