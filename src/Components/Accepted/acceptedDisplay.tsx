import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import AddAccepted from './addAccepted'
import { Button, Card, CardContent } from '@material-ui/core';
import './acceptedDisplay.css'


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
        }
    }

    componentDidMount() {
        console.log('hi im here in the componenetDidMount')
        this.fetchAccepted();
    }

    fetchAccepted() {
        console.log("orange")
        fetch(`${APIURL}/accepted/myaccepted`, {
            method: 'GET',
            headers: new Headers({
                'Authorization': this.props.token,
            })
        }).then((res) => res.json())
            .then(data => {
                this.setState({
                    accepted: data
                })
                console.log("potato")
                console.log(data)

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
                        <Card id="overallCard" key={accepted.id}>
                            <CardContent>School Name: </CardContent>
                        <CardContent id="schoolName">{accepted.schoolName}</CardContent>
                        <CardContent>Address: {accepted.address}</CardContent>
                        <CardContent>Have I been accepted:  {accepted.accepted}</CardContent>
                        <CardContent>Pros:  {accepted.pros}</CardContent>
                        <CardContent>Cons:  {accepted.cons}</CardContent>
                        <CardContent>Notes:  {accepted.notes}</CardContent>
                        <CardContent>Is the school in state?  {accepted.inState}</CardContent>
                        {/* <Button onClick={() => {this.fetchAccepted()}}>Fetch</Button> */}
                        <Button >Update</Button>
                        <Button>Delete</Button>
                    </Card>
                    )
                })};
            </div>
        )
    }
}