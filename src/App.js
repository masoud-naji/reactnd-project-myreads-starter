import React, { useEffect, useState } from "react";
import * as consts from "./BooksAPI";
import "./App.css";
import SearchBook from "./Components/Search";
import Currently from "./Components/Currently";
import WantRead from "./Components/WantRead";
import ReadBook from "./Components/Read";
import AllBook from "./Components/All";
import { Link, Route, Switch } from "react-router-dom";

// import Book from "./Components/BookList";

const BooksApp = () => {
  const [AllBooks, setAllBooks] = useState([]);
  const [Category, setCategory] = useState("Category");
  const [updated, setUpdated] = useState(false);

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
      };
    },
    [AllBooks, updated, Category]
  );

  const shelfCangeHandler = e => {
    setUpdated(true);
  };

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div className="list-books">
            <div className="list-books-title">
              <div className="topTitle">
                <h1>MyReads</h1>
              </div>
              <div className="selectbook">
                <select
                  className="link"
                  onClick={e => setCategory(e.target.value)}
                >
                  <option className="listsearch" key="1" value="Category">
                    All Category
                  </option>
                  <option className="listsearch" key="2" value="CurrentlyCat">
                    Currently
                  </option>
                  <option className="listsearch" key="3" value="WantCat">
                    Want Read
                  </option>
                  <option className="listsearch" key="4" value="ReadCat">
                    Read
                  </option>
                  <option className="listsearch" key="5" value="None">
                    No Category
                  </option>
                </select>
              </div>
            </div>
            <div className="list-books-content">
              <div>
                {/*                 
                <Book
                   setUpdated={setUpdated}
                   updated={updated}
                   AllBooks={AllBooks}/> */}
                {Category === "CurrentlyCat" && (
                  <Currently
                    setUpdated={shelfCangeHandler}
                    AllBooks={AllBooks}
                  />
                )}
                {Category === "WantCat" && (
                  <WantRead setUpdated={setUpdated} AllBooks={AllBooks} />
                )}
                {Category === "ReadCat" && (
                  <ReadBook setUpdated={setUpdated} AllBooks={AllBooks} />
                )}
                {Category === "Category" && (
                  <section>
                    <Currently setUpdated={setUpdated} AllBooks={AllBooks} />
                    <WantRead setUpdated={setUpdated} AllBooks={AllBooks} />
                    <ReadBook setUpdated={setUpdated} AllBooks={AllBooks} />
                  </section>
                )}
                {Category === "None" && (
                  <AllBook setUpdated={setUpdated} AllBooks={AllBooks} />
                )}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        </Route>
        <Route path="/search">
          <SearchBook setUpdated={setUpdated} AllBooks={AllBooks} />
        </Route>
      </Switch>
    </div>
  );
};

export default BooksApp;
