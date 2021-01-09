import React, { Component } from 'react';
import SchoolDisplay from './schoolDisplay';


type FetchResults = {
    search: string,
    pageNumber: number,
    results: any,
};

class DisplayResults extends Component<{}, FetchResults> {
    constructor(props: any) {
        super(props)
        this.state = {
            search: '',
            pageNumber: 0,
            results: [], 
        };
    }
    searchFunction(event: any) {
        this.setState({
            search: (event)
        })
    }
}