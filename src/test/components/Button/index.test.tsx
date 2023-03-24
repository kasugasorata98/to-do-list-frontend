import Button from "@/components/Button";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("renders correctly", () => {
    const tree = render(<Button>Click me</Button>);
    expect(tree).toMatchSnapshot();
  });
  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
  it("renders its children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    const buttonText = getByText("Click me");
    expect(buttonText).toBeInTheDocument();
  });
  it("renders with custom style", () => {
    const style = { backgroundColor: "red" };
    const { getByRole } = render(<Button style={style}>Custom style</Button>);
    const button = getByRole("button");
    expect(button).toHaveStyle("background-color: red");
  });
});
