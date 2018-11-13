import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onInputChange(term){
        this.setState({
            term: term
        });
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className='search-bar'>
                <input 
                    value={this.state.term}
                    onChange={e => this.onInputChange(e.target.value)}
                />
            </div>
        )
    }
}