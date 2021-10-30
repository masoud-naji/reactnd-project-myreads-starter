import React, { useState } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import SearchBook from "./Components/Search";
import Currently from "./Components/Currently";
import WantRead from "./Components/WantRead";
import ReadBook from "./Components/Read";
import { Link, Route, Switch } from "react-router-dom";

const BooksApp = () => {
  const [Category, setCategory] = useState("Category");

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <SearchBook />
        </Route>
        <Route path="/Library">
          <div className="list-books">
            {/* <div className="list-books-title"> */}
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
                </select>
              </div>
            </div>
            <div className="list-books-content">
              <div>
                {Category === "CurrentlyCat" && <Currently />}
                {Category === "WantCat" && <WantRead />}
                {Category === "ReadCat" && <ReadBook />}
                {Category === "Category" && (
                  <section>
                    {" "}
                    <Currently /> <WantRead /> <ReadBook />{" "}
                  </section>
                )}
              </div>
            </div>
            <div className="open-search">
              <Link to="/">
                <button>Add a book</button>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default BooksApp;
