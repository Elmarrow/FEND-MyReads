import React from "react";
import * as Tags from "./Tags.js";
import PropTypes from "prop-types";

function ShelfMove (props) {
	const { book, onChangeShelf } = props;
	return (
		<div className="book-shelf-changer">
			<select defaultValue={book.shelf ? book.shelf : "none" }
				onChange={(event) => onChangeShelf(book, event.target.value)}>
				<option value="none" disabled>Move to...</option>
				{Tags.shelfNames.map(({ name, tag }) => <option key={tag} value={tag}>{name}</option>)}
				<option value="none">None</option>
			</select>
		</div>
	);
}
ShelfMove.propTypes = {
	book: PropTypes.object.isRequired,
	onChangeShelf: PropTypes.func.isRequired
};

export default ShelfMove;