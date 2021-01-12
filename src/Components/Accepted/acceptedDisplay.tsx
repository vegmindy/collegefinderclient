// import React, { Component } from 'react'
// import AddAccepted from './addAccepted'
// import Button from '@material-ui/core/Button';
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import UpdateAccepted from './updateAccepted'


// type AcceptedState = {
//     acceptedUpdate: any;
//     acceptedUpdateActive: boolean;
//     acceptedCreateActive: boolean;
//     userAccepted: Array<{
//         id: number,
//         schoolName: string,
//         inState: string,
//         accepted: string,
//         pros: string,
//         cons: string,
//         notes: string,
//     }> | null
// }

// interface Props {
//     token: string
//     // acceptedEdit: any
// }

// console.log('oh hi mark')

// export default class AcceptedDisplay extends Component<Props, AcceptedState>{
//     constructor(props: Props) {
//         super(props)
//         this.state ={
//             acceptedUpdate: {},
//             userAccepted: null,
//             acceptedUpdateActive: false,
//             acceptedCreateActive: false,
//         }
//     }
    
//     componentDidMount() {
//         console.log('hi im here in the componenetDidMount')
//         this.fetchAccepted();
//     }
    
//     fetchAccepted(){
//         console.log("orange")
//         fetch('http://localhost:3000/accepted/myaccepted', {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': this.props.token,
//             })
//         }) .then((res) => res.json())
//         .then(data => {
//             // console.log("potato")
//             console.log(data)
//             // console.log(this.state)
//             this.setState({
//                 userAccepted: data.userAccepted
//             })
//         }) .catch (( error) =>
//         console.log(error)
//         )
//     }

//     acceptedDelete(){
//         fetch(`http://localhost:3000/accepted/:id`, {
//       method: 'DELETE',
//       headers: new Headers({
//         'Content-Type': 'application/json',
//         'Authorization': this.props.token,
//       }),
//     }).then(() => this.fetchAccepted());
//   };

//   componentWillMount() {
//     this.fetchAccepted();
//   }

//   editMyAccepted = (accepted: any) => {
//     this.setState({
//       acceptedUpdate: accepted,
//     });
//   };

//   updateOn = () => {
//     this.setState({
//         acceptedUpdateActive: true,
//     });
//   };

//   updateOff = () => {
//     this.setState({
//         acceptedUpdateActive: false,
//     });
//   };

//     // handleSubmit(event: any) {
//     //     event.preventDefault()
//     //     this.fetchAccepted(event)
//     // }


// //     render() {
// //         return(
// //             <div>
// //                 <Button onClick={() => {this.fetchAccepted()}}></Button>
// //                 <Card>
// //                     {/* <li>{this.fetchAccepted()}</li> */}
// //                     <li>{this.state.userAccepted}</li>
// //                 </Card>
// //             </div>
// //         )
// //     }
// // }


// render() {
//     return (
//       <div>
//         {/* <AddAccepted token={this.props.token} fetchAccepted={this.fetchAccepted} /> */}
//         {/* <AddAccepted token={this.props.token} /> */}
//         <Button onClick={() => {this.fetchAccepted()}}></Button>

//         {this.state.userAccepted           ? this.state.userAccepted.map((accepted) => (
//               <ul key={accepted.id}>

//                 <Card>
//                   <li>{accepted.schoolName}</li>
//                   <li>In state?: {accepted.inState}</li>
//                   <li>Pros: {accepted.pros}</li>
//                   <li>Cons: {accepted.cons}</li>
//                   <li>Notes: {accepted.notes}</li>
//                   <li>Accepted: {accepted.accepted}</li>
//                   <button
//                     onClick={() => {
//                       this.editMyAccepted(accepted);
//                       this.updateOn();
//                     }}
//                   >
//                     Update
//                   </button>
//                   <button
//                     onClick={() => {
//                       this.acceptedDelete();
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </Card>
//               </ul>
//             ))
//           : undefined}
//         <h1>Hello</h1>
//         <br />
//         {this.state.acceptedUpdateActive 
//         // ? (
//         //   <UpdateAccepted
//         //     acceptedUpdate={this.state.acceptedUpdate}
//         //     updateOff={this.updateOff.bind(this)}
//         //     token={this.props.token}
//         //     fetchItems={this.fetchAccepted}
//         //   />
//         // ) : (
//         //   <></>
//         // )
//         }

//       </div>
//     );
//   }
// }










import React, { Component } from 'react'
import AddAccepted from './addAccepted'
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";


type AcceptedState = {
    accepted: any
}

interface Props {
    token: string
}

console.log('oh hi mark')

export default class AcceptedDisplay extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state ={
            accepted: []
        }
    }
    
    componentDidMount() {
        console.log('hi im here in the componenetDidMount')
        this.fetchAccepted();
    }
    
    fetchAccepted(){
        console.log("orange")
        fetch('http://localhost:3000/accepted/myaccepted', {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token,
            })
        }) .then((res) => res.json())
        .then(data => {
            console.log("potato")
            console.log(data)
            // console.log(this.state)
            // this.setState({
            //     results: data
            // })
        }) .catch (( error) =>
        console.log(error)
        )
    }

    handleSubmit() {
        // event.preventDefault()
        this.fetchAccepted()
    }


    render() {
        return(
            <div>
                <Button onClick={() => {this.fetchAccepted()}}></Button>
            </div>
        )
    }
}