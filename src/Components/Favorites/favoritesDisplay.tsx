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
    // handleOpen: boolean
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
            // handleOpen: false
        }
    }

    componentDidMount() {
        console.log('hi im here in the componenetDidMount')
        this.fetchFavorites();
    }

    fetchFavorites() {
        console.log("orange")
        fetch('http://localhost:3000/favorites/myfavorites', {
            method: 'GET',
            headers: new Headers({
                // 'Content-Type': 'application/json',
                'Authorization': this.props.token,
            })
        }).then((res) => res.json())
            .then(data => {
                this.setState({
                    favorites: data
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
                            <CardContent>{favorites.schoolName}</CardContent>
                            <CardContent>{favorites.address}</CardContent>
                            <CardContent>{favorites.inState}</CardContent>
                            <CardContent>{favorites.notes}</CardContent>
                            {/* <Button onClick={ this.handleOpen }></Button> */}
                            <Button onClick={() => { this.fetchFavorites() }}></Button>

                        </Card>
                    )
                })};
            </div>
        )
    }
}