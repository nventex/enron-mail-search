import React from "react";
import test from "tape";
import { mount, shallow } from "enzyme";
import { SearchPage } from "./SearchPage";
import muiTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

function setup() {
    const promise = {
        then: (fn) => { }
    }
    
    const props = {
        actions: { getInitialState: () => {}, search: (query) => { return Promise.resolve() } },
        params: {},
        searchState: { hits: { hits: [] }, query: "", indicatorStatus: "loading", pageNumber: 0 },
        router: { push: (url) => {}, getCurrentLocation: () => { return { pathName: "/search" } } }
    }
    
    return mount(<MuiThemeProvider><SearchPage {...props}/></MuiThemeProvider>, 
        { context: { router: { push: (url) => { } } } });
}

test("Returns true when url contains the search term and page number", (t) => {
    const wrapper = setup();
    const searchButton = wrapper.find("button");
    searchButton.simulate("click");
    debugger;
    t.end();
});