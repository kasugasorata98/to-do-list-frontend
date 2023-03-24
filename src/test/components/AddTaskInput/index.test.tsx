import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { colors } from "@/styles/colors";
import "@testing-library/jest-dom";
import AddTask from "@/components/AddTaskInput";

describe("AddTask component", () => {
  it("matches the snapshot", () => {
    const tree = render(<AddTask />);
    expect(tree).toMatchSnapshot();
  });
  it("calls onEnterPressed function with correct text when Enter key is pressed", () => {
    const handleEnterPressed = jest.fn();
    const { getByPlaceholderText } = render(
      <AddTask onEnterPressed={handleEnterPressed} />
    );

    const input = getByPlaceholderText("Add a task...");
    fireEvent.change(input, { target: { value: "Test task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(handleEnterPressed).toHaveBeenCalledWith("Test task");
  });

  it("clears input value when Enter key is pressed", () => {
    const handleEnterPressed = jest.fn();
    const { getByPlaceholderText } = render(
      <AddTask onEnterPressed={handleEnterPressed} />
    );

    const input = getByPlaceholderText("Add a task...");
    fireEvent.change(input, { target: { value: "Test task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(input).toHaveValue("");
  });

  it("applies style prop to input element", () => {
    const { getByPlaceholderText } = render(
      <AddTask style={{ fontWeight: "bold" }} />
    );
    const input = getByPlaceholderText("Add a task...");

    expect(input).toHaveStyle({ fontWeight: "bold" });
  });

  it("applies containerStyle prop to input group element", () => {
    const { getByTestId } = render(
      <AddTask containerStyle={{ padding: "20px" }} data-testid="input-group" />
    );
    const inputGroup = getByTestId("input-group");

    expect(inputGroup).toHaveStyle({ padding: "20px" });
  });

  it("renders input element with correct placeholder text color", () => {
    const { getByPlaceholderText } = render(<AddTask />);
    const input = getByPlaceholderText("Add a task...");

    expect(input).toHaveStyle({ color: colors.textColor });
  });
});
