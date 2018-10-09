import React from "react";
import { mount } from "enzyme";
import Note from "./Note";

const props = { note: { text: "test note" } };
describe("Note loads up", () => {
  let note = mount(<Note {...props} />);

  it("renders note text", () => {
    console.log(note.debug());
    expect(note.find("p").text()).toEqual("test note");
  });
});
