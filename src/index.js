import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App.jsx";
import MoviePage from "./components/MoviePage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddMovieForm from "./components/AddMovieForm.jsx";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider
    store={createStore(reducers, composeEnhancers(applyMiddleware(thunk)))}
  >
    <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/movies/:id" component={MoviePage} />
      <Route exact path="/movies" component={AddMovieForm} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
