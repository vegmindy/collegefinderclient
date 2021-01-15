// import React from 'react';
// import APIURL from '../../helpers/environment';
// import {
//     Button,
//     Card,
//     CardContent,
//     Table,
// } from '@material-ui/core';
// // import { render } from '@testing-library/react';

// type Props = {
//     // myAccepted: any,
//     myAccepted: Array<{ 
//         id: number,
//         schoolName: string,
//         address: string,
//         accepted: string,
//         pros: string,
//         cons: string,
//         notes: string,
//         inState: string, 
//     }>
//     editUpdateAccepted: (accepted: any) => void,
//     updateOn: () => void,
//     fetchAccepted: () => void,
//     token: string
// }
// export default class AcceptedTable extends React.Component<Props> {
//     constructor(props: Props) {
//         super(props);
//     }

//     deletePost = (accepted: any) => {
//         fetch(`${APIURL}/accepted/delete/${accepted.id}`, {
//             method: 'DELETE',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token
//             })
//         }).then(() => this.props.fetchAccepted())
//     }

//     render() {
//         return (
//             <div>
//                 {this.props.myAccepted ? this.props.myAccepted.map((myAccepted) => (
//                         <Card key={myAccepted.id}>
//                             <CardContent>{myAccepted.schoolName}</CardContent>
//                             <CardContent>{myAccepted.address}</CardContent>
//                             <CardContent>{myAccepted.accepted}</CardContent>
//                             <CardContent>{myAccepted.pros}</CardContent>
//                             <CardContent>{myAccepted.cons}</CardContent>
//                             <CardContent>{myAccepted.notes}</CardContent>
//                             <CardContent>{myAccepted.inState}</CardContent>
//                             <CardContent>
//                                 <Button variant="outlined" onClick={() => { this.props.editUpdateAccepted(myAccepted); this.props.updateOn() }}>Edit</Button>
//                                 <Button variant="outlined" onClick={() => { this.deletePost(myAccepted) }}>delete</Button>
//                             </CardContent>
//                         </Card>
//                     ))
//                     : undefined}
//             </div>
//         )
//     }
// }

export {}