import React from "react";
import { shallow } from "enzyme";
import ResultList from "./ResultList";
import test from "tape";

function setup(results = [], pageNumber = 1, totalCount = 25) {
    let props = {
        results: results,
        onPaginateClick: () => {},
        pageNumber: pageNumber,
        totalCount: totalCount,
        onReadMailClick: () => {}
    }

    return shallow(<ResultList {...props}/>);
}

test("Show the number of hits when the count is greater than zero", (t) => {
    const wrapper = setup();
    t.equal(wrapper.find("#count-header").props().style.display, "flex");
    t.end();
});

test("Hide the number of hits when the count is greater than zero", (t) => {
    const wrapper = setup([], 1, 0);
    t.equal(wrapper.find("#count-header").props().style.display, "none");
    t.end();
});

test("Calculate the page count", (t) => {
    const wrapper = setup();
    let paginate = wrapper.find("#paginate-controls").props();
    t.equal(paginate.pageCount, Math.ceil(25/15));
    t.end();
});

test("Show first result item", (t) => {
    const wrapper = setup([{_id: "1013"}, {_id: "1014"}]);
    t.equal(wrapper.find("ResultItem").last().key(), "1014");
    t.end();
});

test("Set the onPageChange to onPaginateClick", (assert) => {
  const wrapper = setup();
  assert.equal(wrapper.find("#paginate-controls").props().onPageChange.name, "onPaginateClick");
  assert.end();
});

test("Set the onPageChange to onPaginateClick", (assert) => {
  const wrapper = setup([{_id: "1013"}]);
  assert.equal(wrapper.find("ResultItem").last().props().onReadMailClick.name, "onReadMailClick");
  assert.end();
});