import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToDo from "@/components/ToDo";

describe("ToDo component", () => {
  const item = {
    _id: "1",
    title: "Test task",
    isDone: false,
  };
  const setList = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const setList = jest.fn();
    const { container } = render(<ToDo item={item} setList={setList} />);
    expect(container).toMatchSnapshot();
  });

  it("should render the todo item correctly", () => {
    const { getByText, getByRole } = render(
      <ToDo item={item} setList={setList} />
    );

    expect(getByText("Test task")).toBeInTheDocument();
    expect(getByRole("checkbox")).not.toBeChecked();
  });

  it("should show the edit overlay when the Edit menu item is clicked", () => {
    const { getByRole, getByText } = render(
      <ToDo item={item} setList={setList} />
    );

    fireEvent.click(getByRole("button"));

    const editMenuItem = getByText("Edit");
    fireEvent.click(editMenuItem);

    expect(getByRole("dialog")).toBeInTheDocument();
  });
});
