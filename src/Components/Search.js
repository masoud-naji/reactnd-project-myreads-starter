import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as consts from "../BooksAPI";
import ShelfChanger from "./ShelfChanger";

const SearchBook = () => {
  const [query, setquery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(
    () => {
      const timeoutID = setTimeout(() => {
        if (query !== "") {
          consts
            .search(query)
            .then(books =>
              books !== null ? setSearchBooks(books) : console.log(books)
            );
        } else {
          console.log("waiting");
        }
      }, 500);
      return () => {
        clearTimeout(timeoutID);
      };
    },
    [query]
  );


  const SearchHandler = e => {
    const SearchItem = e.target.value;
    setquery(SearchItem);
  };
  const SearchTerms = require("./Require/SearchTerms.json");
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div>
          <Link to="/Library">
            <button className="close-search">Close</button>
          </Link>
        </div>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={SearchHandler}
          />
        </div>


        <div className="selectbook">
          <select className="link" onClick={e => setquery(e.target.value)}>
            {SearchTerms.map(searchTerm => (
              <option
                className="listsearch"
                key={searchTerm.id}
                value={searchTerm.Search_term}
              >
                {searchTerm.Search_term}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBooks.error !== "empty query" ? (
            searchBooks.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: book.imageLinks
                          ? `url(${book.imageLinks.thumbnail})`
                          : ""
                      }}
                    />
                    <ShelfChanger />
                  </div>

                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))
          ) : (
            <h2>Noting Found</h2>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
