import React, { useEffect, useState } from "react";
import ShelfChanger from "./ShelfChanger";
import * as consts from "../BooksAPI";

const WantRead = () => {
  const [AllBooks, setAllBooks] = useState([]);
  // const [shelf, setShelf] = useState([]);

  useEffect(() => {
    consts.getAll().then(books => setAllBooks(books));
  }, []);


  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {AllBooks.filter(book => book.shelf === "wantToRead").map(book => (
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
                  <ShelfChanger />
                </div>

                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
          <li />
        </ol>
      </div>
    </div>
  );
};

export default WantRead;
