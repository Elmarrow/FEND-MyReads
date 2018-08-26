import React from "react";
import PropTypes from "prop-types";
import ShelfMove from "./ShelfMove";

function Books(props) {
	const { books, moveBook, title } = props;
	
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{title}</h2>
			<div className="bookshelf-books">
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
			</div>
		</div>
	);
}

Books.propTypes = {
	title: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	moveBook: PropTypes.func.isRequired
};

export default Books;