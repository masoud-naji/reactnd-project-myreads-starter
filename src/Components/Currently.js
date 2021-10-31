import React, { useEffect, useState } from "react";
import Shelf from "./shelf";
import * as consts from "../BooksAPI";

const Currently = () => {
  const [AllBooks, setAllBooks] = useState([]);
  const [shelfUpdate, setShelfUpdtae] = useState(false);

  useEffect(() => {
    consts.getAll().then(books => setAllBooks(books));
  }, [AllBooks,shelfUpdate]);
  
  const ChangeHandler = newbook => {
    // console.log(newbook + " Changed ");
    setShelfUpdtae(true);
 
  };
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {AllBooks.filter(book => book.shelf === "currentlyReading").map(
            book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                      }}
                    />
                     <Shelf change={ChangeHandler} book={book}  />
                  </div>

                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            )
          )}
          <li />
        </ol>
      </div>
    </div>
  );
};

export default Currently;
