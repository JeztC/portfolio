import React from "react";
import { render } from "@testing-library/react";
import About from "./About";
import {skillsList} from "../data";

test("About component should contain the correct text", () => {
    const { getByText } = render(<About/>);

    const expectedText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, purus a lobortis semper, dui lectus aliquet dui, non pharetra purus justo vel leo.";

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const textElement = getByText(expectedText);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const randomSkill = getByText(skillsList[0].title)

    expect(textElement).toBeDefined();
    expect(randomSkill).toBeDefined();
});
