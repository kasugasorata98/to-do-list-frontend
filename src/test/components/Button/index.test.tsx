import Button from "@/components/Button";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Button component", () => {
  it("calls onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
