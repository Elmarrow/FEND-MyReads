import React from "react";
import PropTypes from "prop-types";
import ShelfMove from "./ShelfMove";

function Books(props) {
	const { books, moveBook } = props;

	return (
		<ol className="books-grid">
			{books.map((book) => (
				<li key={book.id}>
					<div className="book">
						<div className="book-top">
							<div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks && book.imageLinks.thumbnail}")`}}></div>
							<ShelfMove
								book={book}
								onmoveBook={moveBook}
							/>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors && book.authors.join(", ")}</div>
					</div>
				</li>
			))}
		</ol>
	);
}

Books.propTypes = {
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default Books;