import React, { Component } from 'react';
import Main from './Components/index';

type AppState = {
    token: string | null
    // schoolsUpdate: any
}

export default class AppIndex extends Component<{}, AppState>{
    constructor(props: AppState){
        super(props)
        this.state = {
            token: localStorage.getItem('token') ? localStorage.getItem('token') : '' ,
            // schoolsUpdate: []
        }
    }

    updateToken = (newToken: string)=> {
        localStorage.setItem('token', newToken)
        this.setState({
            token: newToken
        })
    }

    clearToken = ()=> {
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