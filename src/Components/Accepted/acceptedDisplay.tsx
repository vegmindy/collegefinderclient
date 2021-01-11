// import React, { useState, FormEvent } from 'react';
// import AddAccepted from './addAccepted';
// import UpdateAccepted from './updateAccepted';


// type AcceptedShowAllState {
//     id: number,
//     schoolName: string,
//     inState: string,
//     address: string,
//     accepted: string,
//     pros: string,
//     cons: string,
//     notes: string
// }

// interface Props {
//     token: string | null
// }

// export default class AcceptedShowAll extends Component<Props, AcceptedShowAllState>{
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             id: '',
//             schoolName: '',
//             inState: '',
//             address: '',
//             pros: '',
//             accepted: '',
//             cons: '',
//             notes: ''
//         }
//         this.handleFormDisplay = this.handleFormDisplay.bind(this)
//     }

//     handleFormEdit(e: FormEvent) {
//         e.preventDefault();
//         // fetch('http://localhost:3000/accepted/updateschool/:id')
//         fetch(`http://localhost:3000/accepted/updateschool/${this.state.id}`),{
//             method: 'PUT',
//             body: JSON.stringify({
//                 schoolName: this.state.schoolName,
//                 address: this.state.address,
//                 inState: this.state.inState,
//                 accepted: this.state.accepted,
//                 pros: this.state.pros,
//                 cons: this.state.cons,
//                 notes: this.state.notes
//             }),
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 // 'Authorization': `${localStorage.getItem('token')}`
//                 'Authorization': `${this.props.token}`,
//             })
//         })
//         .then((response) => response.json())
//             .then((data) => {
//                 console.log(data)
//             }) .catch((error) =>
//             console.log(error)
//             )
//         }
//         handleFormDisplay = () => {
//             console.log("i'm tired")
//             return this.state.accepted.map((accepted: Accepted) => {
//                 return(
//                     <ul key={accepted.id}>
//                         <li>{accepted.schoolName}</li>
//                         <li>{accepted.inState}</li>
//                         <li>{accepted.address}</li>
//                         <li>{accepted.accepted}</li>
//                         <li>{accepted.cons}</li>
//                         <li>{accepted.pros}</li>
//                         <li>{accepted.notes}</li>
//                     </ul>
//                 )
//             });
//         };
//         componentDidMount() {
//             this.
//         }
//     }
// }

import React, { useState, FormEvent } from 'react';
import AddAccepted from './addAccepted';
import UpdateAccepted from './updateAccepted';
