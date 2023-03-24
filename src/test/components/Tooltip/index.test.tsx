import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "@/components/Tooltip";

describe("Tooltip component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Tooltip label="This is a tooltip">Hover me</Tooltip>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders children", () => {
    const { getByText } = render(<Tooltip>Tooltip content</Tooltip>);
    expect(getByText("Tooltip content")).toBeInTheDocument();
  });
});
