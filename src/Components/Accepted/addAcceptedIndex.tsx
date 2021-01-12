import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';

type AcceptedState = {
    schoolName: string,
    address: string,
    inState: string,
    accepted: string,
    pros: string,
    cons: string,
    notes: string,
}

interface Props {
    // updateToken: (newToken: string) => void
    token: string
}

export default class AddAcceptedIndex extends Component<Props, AcceptedState>{
    constructor(props: Props) {
        super(props)
        this.state = {
            schoolName: '',
            address: '',
            inState: '',
            accepted: '',
            pros: '',
            cons: '',
            notes: '',
        }
    }

    setSchoolName(e: string) {
        this.setState({
            schoolName: (e)
        })
    }

    setAddress(e: string) {
        this.setState({
            address: (e)
        })
    }

    setInState(e: string) {
        this.setState({
            inState: (e)
        })
    }

    setAccepted(e: string) {
        this.setState({
            accepted: (e)
        })
    }

    setPros(e: string) {
        this.setState({
            pros: (e)
        })
    }

    setCons(e: string) {
        this.setState({
            cons: (e)
        })
    }

    setNotes(e: string) {
        this.setState({
            notes: (e)
        })
    }

    // componentDidMount() {
    //     console.log(localStorage.getItem('token'))
    //     console.log(this.props.token);
    //   }

    addAccepted(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        fetch('http://localhost:3000/accepted/addschool', {
            method: 'POST',
            body: JSON.stringify({
                schoolName: this.state.schoolName,
                address: this.state.address,
                inState: this.state.inState,
                accepted: this.state.accepted,
                pros: this.state.pros,
                cons: this.state.cons,
                notes: this.state.notes
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                // 'Authorization': `${localStorage.getItem('token')}`
                'Authorization': this.props.token,
            })
        })
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                //this.props.fetchAccepted();
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.addAccepted(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setState({schoolName: (e.target.value)})} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" onChange={(e)=>this.setState({address: (e.target.value)})} />
                    <TextField id="outlined-basic" label="In state?(true or false)" variant="outlined" onChange={(e)=>this.setState({inState: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Accepted? (true or false)" variant="outlined" onChange={(e)=>this.setState({accepted: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Pros" variant="outlined" onChange={(e)=>this.setState({pros: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Cons" variant="outlined" onChange={(e)=>this.setState({cons: (e.target.value)})} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setState({notes: (e.target.value)})} />
                    <Button type='submit' variant="contained">Add school</Button>
                </form>
            </div>
        )
    }
}