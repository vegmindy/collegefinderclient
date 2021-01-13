import React, { Component } from 'react'
import AddFavorites from './addFavorites'
import { Button, Card, CardContent } from '@material-ui/core';



type FavoritesState = {
    favorites: Array<{
        id: number,
        schoolName: string,
        address: string,
        inState: string,
        notes: string
    }>

}

interface Props {
    token: string
}

console.log('oh hi mark')

export default class FavoritesDisplay extends Component<Props, FavoritesState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            favorites: []
        }
    }

    componentDidMount() {
        // console.log('hi im here in the componenetDidMount')
        this.fetchFavorites();
    }

    fetchFavorites() {
        // console.log("orange")
        fetch('http://localhost:3000/favorites/myfavorites', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
            })
        }).then((res) => res.json())
            .then(data => {
                this.setState({
                    favorites: data
                })
                // console.log("potato")
                console.log(data)

            }).catch((error) =>
                console.log(error)
            )
    }

    handleSubmit() {
        // event.preventDefault()
        this.fetchFavorites()
    }
    // handleOpen = () => {
    //     this.setState({
    //         handleOpen: true
    //     })
    // }


    render() {
        return (
            <div>
                {this.state.favorites.map(favorites => {
                    return (
                        <Card key={favorites.id}>
                            <CardContent>School Name: {favorites.schoolName}</CardContent>
                            <CardContent>Address: {favorites.address}</CardContent>
                            <CardContent>Is it in state?{favorites.inState}</CardContent>
                            <CardContent>Notes?{favorites.notes}</CardContent>
                            {/* <Button onClick={ this.handleOpen }></Button> */}
                            {/* <Button onClick={() => { this.fetchFavorites() }}></Button> */}
                        </Card>
                    )
                })};
            </div>
        )
    }
}