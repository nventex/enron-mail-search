import React from "react";
import { shallow } from "enzyme";
import ResultItem from "./ResultItem";
import test from "tape";

function setup() {
    let props = {
        resultItem: {
            _source: {
                from: "from@mail.com",
                to: "to@mail.com",
                subject: "subject 123",
            },
            _id: "ABC123",
            highlight: {
                body: [
                    "snippet 1",
                    "snippet 2"
                ]
            }
        }
    }

    return shallow(<ResultItem {...props}/>);
}

test("Join the collection of body text", (t) => {
    let wrapper = setup();
    var listItem = wrapper.find("ListItem");
    t.equal(listItem.props().primaryText.props.dangerouslySetInnerHTML.__html, "snippet 1 snippet 2");
    t.end();
});