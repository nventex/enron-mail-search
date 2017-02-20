import React from "react";
import { Route, IndexRoute } from "react-router";

import App from "./components/App";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import SearchPage from "./components/search/SearchPage";
import AdvancedSearchPage from "./components/search/advanced/AdvancedSearchPage";
import AdvancedResultsPage from "./components/search/advanced/AdvancedResultsPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="search" component={SearchPage} />
        <Route path="search/:query" component={SearchPage} />
        <Route path="search/:query/:pageNumber" component={SearchPage} />
        <Route path="advanced/search" component={AdvancedSearchPage} />
        <Route path="advanced/search/:pageNumber" component={AdvancedResultsPage} />
    </Route>
);