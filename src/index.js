import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import routes from "./routes";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";

// Can initialize server state here using configureStore()...
const store = configureStore();

// Dispatching an action on Page Load...
// store.dispatch(bootstrap());

injectTapEventPlugin();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
    ,document.getElementById("container")
);