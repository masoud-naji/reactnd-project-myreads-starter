import React, { useState } from "react";
import * as consts from "../BooksAPI";

const Shelf = props => {
  const [defaultshelf, setDefaultShelf] = useState(props.book.shelf);
  const changeHandler = e => {
    const newSelectedShelf = e.target.value;
     props.change();
    consts
      .update(props.book, newSelectedShelf)
      .then(setDefaultShelf(newSelectedShelf));
  };

  return (
    <div className="book-shelf-changer">
    
      <select
        value={defaultshelf}
        onChange={e => {
          // if (window.confirm("Are you sure you wish to Change Category?"))
            changeHandler(e);
        }}
      >
        <option className="listsearch" value="move" disabled>
          Move to...{defaultshelf}
        </option>
        <option className="listsearch" value="None">
          None
        </option>
        <option className="listsearch" value="currentlyReading">
          Currently Reading
        </option>
        <option className="listsearch" value="wantToRead">
          Want to Read
        </option>
        <option className="listsearch" value="read">
          Read
        </option>
      </select>
    </div>
  );
};

export default Shelf;
