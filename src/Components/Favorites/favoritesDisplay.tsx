// import React, { Component } from 'react'
// import AddFavorites from './addFavorites'
// import { Button, Card, CardContent } from '@material-ui/core';
// import './favoritesDisplay.css'

import React, { Component } from 'react'
import APIURL from '../../helpers/environment';
import AddFavorites from './addFavorites'
import { Button, Card, CardContent } from '@material-ui/core';
import './favoritesDisplay.css';
import UpdateFavoritesIndex from './updateFavoritesIndex';
import UpdateFavorites from './updateFavorites';



type FavoritesState = {
    favorites: Array<{
        id: number,
        schoolName: string,
        address: string,
        inState: string,
        notes: string
    }>
    updateFavorites: {};
    setUpdateActive: boolean;
}

interface Props {
    token: string
}

// console.log('oh hi mark')

export default class FavoritesDisplay extends Component<Props, FavoritesState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            favorites: [],
            updateFavorites: {},
            setUpdateActive: false
        }
    }

    componentDidMount() {
        // console.log('hi im here in the componenetDidMount')
        this.fetchFavorites();
    }

    fetchFavorites() {
        // console.log("orange")
        fetch(`${APIURL}/favorites/myfavorites`, {
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

    deleteFavorites = (favorites: any) => {
        fetch(`${APIURL}/favorites/delete/${favorites.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'content-type': 'application/json',
                'Authorization': this.props.token,
            })
        })
            .then(() => this.fetchFavorites())
    }


    editUpdateFavorites = (favorites: any) => {
        console.log(favorites);
        this.setState({ updateFavorites: favorites })
    }

    updateOn = () => {
        this.setState({ setUpdateActive: true })
    }

    updateOff = () => {
        this.setState({ setUpdateActive: false })
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
                        <Card id="overallCard" key={favorites.id}>
                            <CardContent>School Name: </CardContent>
                            <CardContent id="schoolName">{favorites.schoolName}</CardContent>
                            <CardContent>Address: {favorites.address}</CardContent>
                            <CardContent>Notes:  {favorites.notes}</CardContent>
                            <CardContent>Is the school in state?  {favorites.inState}</CardContent>
                            {/* <Button onClick={() => {this.fetchAccepted()}}>Fetch</Button> */}
                            <Button onClick={() => {
                                this.editUpdateFavorites(favorites);
                                this.updateOn();

                            }} >Update</Button>
                            <Button onClick={() => {
                                this.deleteFavorites(favorites);
                            }}>Delete</Button>
                        </Card>
                    )
                })};
                {this.state.setUpdateActive ? (
                    <UpdateFavoritesIndex
                        updateOff={this.updateOff}
                        token={this.props.token}
                        fetchFavorites={this.fetchFavorites}
                        updateFavorites={this.state.updateFavorites}
                    />
                ) : (
                        <></>
                    )
                }
            </div>
        )
    }
}

//     render() {
//         return (
//             <div>
//                 {this.state.favorites.map(favorites => {
//                     return (
//                         <Card id="overallCard" key={favorites.id}>
//                             <CardContent id="schoolName">School Name: {favorites.schoolName}</CardContent>
//                             <CardContent>Address: {favorites.address}</CardContent>
//                             <CardContent>Is it in state?{favorites.inState}</CardContent>
//                             <CardContent>Notes?{favorites.notes}</CardContent>
//                             {/* <Button onClick={ this.handleOpen }></Button> */}
//                             {/* <Button onClick={() => { this.fetchFavorites() }}></Button> */}
//                             <Button>Update</Button>
//                             <Button>Delete</Button>
//                         </Card>
//                     )
//                 })};
//             </div>
//         )
//     }
// }