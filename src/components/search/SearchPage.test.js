import React from "react";
import test from "tape";
import { shallow } from "enzyme";
import { SearchPage } from "./SearchPage";

function setup(data) {
    const props = {
        actions: { getInitialState: () => {}, search: (query) => { return Promise.resolve() } },
        params: {},
        searchState: { hits: { hits: [] }, query: "", indicatorStatus: "loading", pageNumber: 0 },
        router: { push: (url) => {}, getCurrentLocation: () => { return { pathname: data.pathname } } }
    }
    
    return shallow(<SearchPage {...props}/>);
}

test("Returns true when the uri requested contains search, the term and page number", (t) => {
    const wrapper = setup({ pathname: "/search/term/1" });
    let result = wrapper.instance().hasUriParams();
    t.true(result);
    t.end();
});

test("Returns false when the uri requested does not contain search", (t) => {
    const wrapper = setup({ pathname: "/path/term/1" });
    let result = wrapper.instance().hasUriParams();
    t.false(result);
    t.end();
});

test("Returns false when the uri requested does not contain the term", (t) => {
    const wrapper = setup({ pathname: "/search/1" });
    let result = wrapper.instance().hasUriParams();
    t.false(result);
    t.end();
});

test("Returns false when the uri requested does not contain the page number", (t) => {
    const wrapper = setup({ pathname: "/search/term" });
    let result = wrapper.instance().hasUriParams();
    t.false(result);
    t.end();
});