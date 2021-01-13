
import React, { Component } from 'react';
import { TextField, Button} from '@material-ui/core';
import APIURL from '../../helpers/environment';


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

export default class UpdateAcceptedIndex extends Component<Props, AcceptedState>{
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

    componentDidMount() {
        console.log("addSchool didMount: ", this.props.token);
      }

    updateAccepted(e: any) {
        e.preventDefault();
        fetch(`${APIURL}/accepted/addschool`, {
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
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.updateAccepted(e)} >
                    <TextField id="outlined-basic" label="School Name" variant="outlined" onChange={(e)=>this.setSchoolName(e.target.value)} />
                    <TextField id="outlined-basic" label="School Address" variant="outlined" onChange={(e)=>this.setAddress(e.target.value)} />
                    <TextField id="outlined-basic" label="Is the school in state?" variant="outlined" onChange={(e)=>this.setInState(e.target.value)} />
                    <TextField id="outlined-basic" label="Have you been accepted?" variant="outlined" onChange={(e)=>this.setAccepted(e.target.value)} />
                    <TextField id="outlined-basic" label="Pros" variant="outlined" onChange={(e)=>this.setPros(e.target.value)} />
                    <TextField id="outlined-basic" label="Cons" variant="outlined" onChange={(e)=>this.setCons(e.target.value)} />
                    <TextField id="outlined-basic" label="Notes" variant="outlined" onChange={(e)=>this.setNotes(e.target.value)} />
                    <Button type='submit' variant="contained">Update school</Button>
                </form>
            </div>
        )
    }
}