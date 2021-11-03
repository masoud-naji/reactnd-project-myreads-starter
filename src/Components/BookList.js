import React, { Fragment, useState } from "react";
import Shelf from "./shelf";

const BookList = ({ setUpdated, AllBooks, updated }) => {
  const [shelfUpdate, setShelfUpdtae] = useState(false);
  

  const ChangeHandler = e => {
     setShelfUpdtae(!shelfUpdate);
    setUpdated(!updated);
    };

  return (
    <Fragment>
      {/* /////////////////////////////////////Currently///////////////////////// */}
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
                      <Shelf change={ChangeHandler} book={book} />
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
      {/* ///////////////////////////////////////want///////////////////////////// */}
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
      {/* ///////////////////////////////////////////read////////////////// */}
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
    </Fragment>
  );
};

export default BookList;
