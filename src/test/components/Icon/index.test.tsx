import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Icon from "@/components/Icon";
import { FaUser, FaSearch } from "react-icons/fa";

describe("Icon component", () => {
  it("renders icon correctly", () => {
    const { container } = render(<Icon as={FaUser} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom style", () => {
    const { container } = render(
      <Icon style={{ color: "red", fontSize: "24px" }} />
    );
    expect(container.firstChild).toHaveStyle("color: red; font-size: 24px;");
  });

  it("renders a specific icon based on the 'as' prop", () => {
    const { container } = render(<Icon as={FaSearch} />);
    const svg = container.querySelector("svg");

    expect(svg).toBeInTheDocument();
  });
});
