import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BookListing from "./BookListing";
import Search from "./Search";

class BooksApp extends React.Component {
	state = {
		books:[]
	}

	componentDidMount() {
		BooksAPI.getAll()
			.then((books)=>{this.setState({books})
				.catch(response => console.error("Unable to get booklist from server", response));
			});
	}

	moveBook = (book, shelf) => {
		if (this.state.books) {
			BooksAPI.update(book,shelf)
				.then(() => {book.shelf = shelf;this.setState(state => ({
					books: state.books.filter(b => b.id !== book.id).concat([ book ])
				}));
				})
				.catch(response => console.error(`Unable to set shelf for ${book.id} to ${shelf}`, response));
		}
	}

	render() {
		return (
			<div className="app">
				<Route path='/search' render={() => (
					<Search
						myBooks={this.state.books}
						moveBook={this.moveBook}
					/>
				)}/>

				<Route exact path='/' render={() => (
					<BookListing
						books={this.state.books}
						moveBook={this.moveBook}
					/>
				)}/>
			</div>
		);
	}
}

export default BooksApp;