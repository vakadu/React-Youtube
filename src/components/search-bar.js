import React, { Component } from 'react';

// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        // return (<input onChange={event => console.log(event.target.value)} />);
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search"/>
                {/*Value of Input: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term)
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
