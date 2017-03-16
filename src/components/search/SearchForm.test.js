import React from "react";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import SearchForm from "./SearchForm";
import test from "tape";

function setup(query = "my query", indicatorStatus = "loading") {
  let props = {
    query,
    indicatorStatus,
    onQueryChange: () => {},
    onSearchClick: () => {}
  }

  return shallow(<SearchForm {...props}/>);
}

test("Renders the query prop onto the TextField", (assert) => {
  const wrapper = setup();
  assert.equal(wrapper.find("TextField").props().value, "my query");
  assert.end();
});

test("Set the onChange event handler on the TextField to onQueryChange", (assert) => {
  const wrapper = setup();
  assert.equal(wrapper.find("TextField").props().onChange.name, "onQueryChange");
  assert.end();
});

test("Set the onClick event handler on the RaisedButton to onSearchClick", (assert) => {
  const wrapper = setup();
  assert.equal(wrapper.find("RaisedButton").props().onClick.name, "onSearchClick");
  assert.end();
});

test("Set the status of the RefreshIndicator", (assert) => {
  const wrapper = setup("query", "loading");
  assert.equal(wrapper.find("RefreshIndicator").props().status, "loading");
  assert.end();
});

test("Set the RefreshIndicator to inline-block", (assert) => {
  const wrapper = setup("query", "loading");
  assert.equal(wrapper.find("RefreshIndicator").props().style.display, "inline-block");
  assert.end();
});

test("Set the RefreshIndicator to inline-block", (assert) => {
  const wrapper = setup("query", "hide");
  assert.equal(wrapper.find("RefreshIndicator").props().style.display, "none");
  assert.end();
});