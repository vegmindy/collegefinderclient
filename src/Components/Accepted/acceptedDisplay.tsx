import React, { Component } from 'react'
import AddAccepted from './addAccepted'
// import Button from '@material-ui/core/Button';
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
import { Button, Card, CardContent } from '@material-ui/core';



type AcceptedState = {
    accepted: Array<{
        id: number,
        schoolName: string,
        address: string,
        accepted: string,
        pros: string,
        cons: string,
        notes: string,
        inState: string,
    }>
    // handleOpen: boolean
}

interface Props {
    token: string
}

console.log('oh hi mark')

export default class AcceptedDisplay extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            accepted: []
            // handleOpen: false
        }
    }

    componentDidMount() {
        console.log('hi im here in the componenetDidMount')
        this.fetchAccepted();
    }

    fetchAccepted() {
        console.log("orange")
        fetch('http://localhost:3000/accepted/myaccepted', {
            method: 'GET',
            headers: new Headers({
                // 'Content-Type': 'application/json',
                'Authorization': this.props.token,
            })
        }).then((res) => res.json())
            .then(data => {
                this.setState({
                    accepted: data
                })
                console.log("potato")
                console.log(data)
                // console.log(this.state)
                // this.setState({
                //     results: data
                // })
            }).catch((error) =>
                console.log(error)
            )
    }

    handleSubmit() {
        // event.preventDefault()
        this.fetchAccepted()
    }
    // handleOpen = () => {
    //     this.setState({
    //         handleOpen: true
    //     })
    // }


    render() {
        return (
            <div>
                {this.state.accepted.map(accepted => {
                    return(
                        <Card key={accepted.id}>
                        <CardContent>{accepted.schoolName}</CardContent>
                        <CardContent>{accepted.address}</CardContent>
                        <CardContent>{accepted.accepted}</CardContent>
                        <CardContent>{accepted.pros}</CardContent>
                        <CardContent>{accepted.cons}</CardContent>
                        <CardContent>{accepted.notes}</CardContent>
                        <CardContent>{accepted.inState}</CardContent>
                        {/* <Button onClick={ this.handleOpen }></Button> */}
                        <Button onClick={() => {this.fetchAccepted()}}></Button>

                    </Card>
                    )
                })};
            </div>
        )
    }
}