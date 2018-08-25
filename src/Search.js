import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";
import Books from "./Books";


class Search extends Component {
	static propTypes = {
		myBooks: PropTypes.array.isRequired,
		moveBook: PropTypes.func.isRequired
	}

	state = {
		query: "",
		books: []
	}

	updateQuery = (query) => {
		query = query.trim();
		this.setState({
			query,
			books: []
		});
		if (query.length > 0) {
			BooksAPI.search(query).then((books) => {
				if (Array.isArray(books)) {
					this.setState({
						books: books.map((book) => {
							return this.props.myBooks.find((myBook) => myBook.id === book.id) || book;
						})
					});
				}
			});
		}
	}

	render() {
		const {query, books} = this.state;
		const {moveBook} = this.props;

		return (<div className = "search-books">
			<div className = "search-books-bar">
				<Link className = "close-search" to = "/"> Close </Link> 
				<div className = "search-books-input-wrapper">
					<input type = "text" placeholder = "Search by title or author" value = { query }
						onChange = {(event) => this.updateQuery(event.target.value)
						}
					/>

				</div> 
			</div>
			<div className = "search-books-results" >
				<ol className = "books-grid" >
					<Books books = {books}
						moveBook = {moveBook}
					/> 
				</ol> 
			</div>
		</div>
		);
	}
}

export default Search;