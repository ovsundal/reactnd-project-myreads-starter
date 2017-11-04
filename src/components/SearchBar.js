import React, {Component} from 'react'

/**
 * Component for book searching input field
 */
class SearchBar extends Component {

    state = {
        query: ''
    };

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    };

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">

                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                    <div className="search-books-input-wrapper">
                        {

                            JSON.stringify(this.state)}
                        }
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}





export default SearchBar;