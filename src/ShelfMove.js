import React from "react";
import PropTypes from "prop-types";

function ShelfMove(props) {
	const { book, onmoveBook } = props;

	return (
		<div className="book-shelf-changer">
			<select
				defaultValue={book.shelf ? book.shelf : "none" }
				onChange={(event) => onmoveBook(book, event.target.value)}
			>
				<option value="none" disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantingToRead">Wanting to Read</option>
				<option value="alreadyRead">Already Read</option>
				<option value="none">None</option>
			</select>
		</div>
	);
}

ShelfMove.propTypes = {
	book: PropTypes.object.isRequired,
	onmoveBook: PropTypes.func.isRequired
};

export default ShelfMove;