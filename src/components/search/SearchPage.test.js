import React from "react";
import test from "tape";
import { mount, shallow } from "enzyme";
import { SearchPage } from "./SearchPage";
import muiTheme from "material-ui/styles/baseThemes/lightBaseTheme";

import jsdom from "jsdom";
const doc = jsdom.jsdom("<html><body></body></html>");
global.document = doc
global.window = doc.defaultView;

function setup() {
    const props = {
        actions: { getInitialState: () => {}, search: (query) => {} },
        params: {},
        searchState: { hits: { hits: [] }, query: "", indicatorStatus: "loading", pageNumber: 0 },
        router: { push: (url) => {} }
    }
    
    return mount(<SearchPage {...props}/>, { context: { muiTheme }});
}

test("Returns true when url contains the search term and page number", (t) => {
    var wrapper = setup();
    t.end();
});