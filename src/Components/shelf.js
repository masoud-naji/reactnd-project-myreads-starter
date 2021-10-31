import React from "react";
import * as consts from "../BooksAPI";

const Shelf = props => {
  const changeHandler = e => {
    const newSelectedShelf = e.target.value;
    // console.log(newSelectedShelf);
    props.change(props.book.id + "  " + newSelectedShelf);
    //   console.log(prop.change(prop.book + "  " + newSelectedShelf));

    consts
      .update(props.book, newSelectedShelf)
      .then(console.log(props.book.shelf));
  };

  return (
    <div className="book-shelf-changer">
      
      {/* <select onChange={changeHandler}> */}
      <select onChange={e=> {if (window.confirm('Are you sure you wish to Change Category?')) changeHandler(e)}}>
        <option className="listsearch" value="move" disabled defaultValue>
          Move to...
        </option>
        <option className="listsearch" value="None">
          None
        </option>
        <option className="listsearch" value="currentlyReading" >
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
