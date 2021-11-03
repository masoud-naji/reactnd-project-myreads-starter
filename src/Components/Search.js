import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as consts from "../BooksAPI";
import Shelf from "./shelf";
import Mountain from "../Components/Require/flat-mountains.svg"

const SearchBook = ({ setUpdated, AllBooks }) => {
  const [query, setquery] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(
    () => {
      const timeoutID = setTimeout(() => {
        if (query !== "") {
          consts.search(query).then(books => {
            if (books !== null && books.length > 1) {
              books = books.map(book => {
                const bookOnShelf = AllBooks.find(({ id }) => book.id === id);
                const shelf = bookOnShelf ? bookOnShelf.shelf : "none";
                return {
                  ...book,
                  shelf
                };
              });
              // setSearchBooks(books);
              books !== null && setSearchBooks(books);
            } else {
              setSearchBooks([]);
            }
          });
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
          <select className="Slink" onClick={e => setquery(e.target.value)}>
            <option key={0} defaultValue>
              Search Terms
            </option>
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
      {query === "" ? <img src={Mountain} className="searchimg"/> : (
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
                      <Shelf change={setUpdated} book={book} />
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
      )}
    </div>
  );
};

export default SearchBook;
