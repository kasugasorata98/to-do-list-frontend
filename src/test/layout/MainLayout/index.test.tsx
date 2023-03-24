import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MainLayout from "@/layout/MainLayout";

describe("MainLayout", () => {
  it("matches snapshot", () => {
    const { container } = render(<MainLayout>Hello world</MainLayout>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the children", () => {
    const { getByText } = render(
      <MainLayout>
        <div>Test Children</div>
      </MainLayout>
    );

    const childElement = getByText("Test Children");
    expect(childElement).toBeInTheDocument();
  });

  it("applies the style prop", () => {
    const { getByTestId } = render(
      <MainLayout data-testid="main-layout" style={{ backgroundColor: "red" }}>
        <div>Test Children</div>
      </MainLayout>
    );

    const mainLayoutElement = getByTestId("main-layout");
    expect(mainLayoutElement).toHaveStyle("background-color: red");
  });

  it("applies style prop to Box component", () => {
    const style = {
      width: "50%",
      height: "50%",
      backgroundColor: "red",
    };
    const { container } = render(
      <MainLayout style={style} children={undefined} />
    );
    const box = container.firstChild;

    expect(box).toHaveStyle("width: 50%");
    expect(box).toHaveStyle("height: 50%");
    expect(box).toHaveStyle("background-color: red");
  });
});
