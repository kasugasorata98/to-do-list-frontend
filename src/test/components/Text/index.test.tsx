import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Text from "@/components/Text";

describe("Text component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Text>Hello world</Text>);
    expect(container).toMatchSnapshot();
  });
  it("renders text correctly", () => {
    const text = "Hello, world!";
    const { getByText } = render(<Text>{text}</Text>);
    const renderedText = getByText(text);
    expect(renderedText).toBeInTheDocument();
  });

  it("applies style prop to text element", () => {
    const style = { fontWeight: "bold" };
    const { getByText } = render(<Text style={style}>Text with style</Text>);
    const textElement = getByText("Text with style");
    expect(textElement).toHaveStyle("font-weight: bold");
  });
});
