import React, { Component } from 'react';
import "./Search.css"
export default class Search extends Component {

    state = {
        term: ''
    }
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    }

    render() {
        return(
            <div className="app__search">
                <h3>Поиск валют</h3>
                <input className="app__input" type="text"
                    placeholder="Поиск по названию валюты" 
                    value={this.state.term}
                    onChange={this.onSearchChange} />
            </div>
        )
    }
}