import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as consts from "../BooksAPI";
import Shelf from "./shelf";

const SearchBook = () => {
  const [query, setquery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const [AllBooks, setAllBooks] = useState([]);
  const [shelfUpdate, setShelfUpdtae] = useState(false);

  useEffect(
    () => {
      const timeoutID = setTimeout(() => {
        if (query !== "") {
          consts.search(query).then(
            books => books !== null && setSearchBooks(books)
            // : console.log(books)
          );
        }
        // else {
        //   console.log("waiting or not found");
        // }
      }, 500);
      return () => {
        clearTimeout(timeoutID);
      };
    },
    [query]
  );

  useEffect(
    () => {
      consts.getAll().then(books => setAllBooks(books));
    },
    [AllBooks, shelfUpdate]
  );

  const ChangeHandler = newbook => {
    // console.log(newbook + " Changed ");
    setShelfUpdtae(true);
  };

  const SearchHandler = e => {
    const SearchItem = e.target.value;
    setquery(SearchItem);
  };
  const SearchTerms = require("./Require/SearchTerms.json");
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div>
          <Link to="/">
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
            <option key={0}  defaultValue >Search Terms</option>
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
                    <Shelf change={ChangeHandler} book={book} />
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
