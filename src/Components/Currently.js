import React from "react";
import Shelf from "./shelf";

const Currently = ({ setUpdated, AllBooks }) => {
 

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
                    <Shelf change={setUpdated} book={book} />
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
