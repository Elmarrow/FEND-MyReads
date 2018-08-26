import React from "react";
import PropTypes from "prop-types";
import Books from "./Books";

const Bookshelves = [
	{
		title: "Currently Reading",
		id: "currentlyReading"
	},
	{
		title: "Wanting to Read",
		id: "wantingToRead"
	},
	{
		title: "Already Read",
		id: "alreadyRead"
	} 
];
  
function BookListing(props) {
	const { books, moveBook } = props;
  
	return  (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReading Library</h1>
			</div>
			<div className="list-books-content" aria-label="A list of the books that I want to read, that I am reading and that I have already read">
				<div>
					{Bookshelves.map((bookshelf) => (
						<Books
							key={bookshelf.id}
							title={bookshelf.title}
							books={books.filter((book) => book.shelf === bookshelf.id)}
							moveBook={moveBook}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
  
BookListing.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
};
  
export default BookListing;