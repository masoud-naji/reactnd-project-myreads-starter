import React, { useEffect, useState } from "react";
import * as consts from "../BooksAPI";
import Shelf from "./shelf";
const ReadBook = () => {
  const [AllBooks, setAllBooks] = useState([]);
  const [shelfUpdate, setShelfUpdtae] = useState(false);

  useEffect(
    () => {
      let isUnmount = false;
      (async () => {
        consts.getAll().then(books => {
          if (!isUnmount) {
            setAllBooks(books);
          }
        });
      })();

      return () => {
        isUnmount = true;
        setShelfUpdtae(false);
      };
    },
    [AllBooks, shelfUpdate]
  );

  const ChangeHandler = newbook => {
    // console.log(newbook + " Changed ");
    setShelfUpdtae(true);
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {AllBooks.filter(book => book.shelf === "read").map(book => (
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

                  <Shelf change={ChangeHandler} book={book} />
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

export default ReadBook;
