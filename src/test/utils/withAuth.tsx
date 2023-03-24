import React from "react";
import { useRouter } from "next/router";
import { render } from "@testing-library/react";
import withAuth from "@/utils/withAuth";
import { LocalStorageHandler } from "@/utils/LocalStorageHandler";

jest.mock("next/router");

describe("withAuth", () => {
  const MockComponent = () => <div>Mock Component</div>;

  it("should redirect to login page if user is not authenticated", () => {
    LocalStorageHandler.getUserToken = jest.fn().mockReturnValue(null);
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(withAuth(MockComponent)({}));

    expect(push).toHaveBeenCalledWith("/login");
  });

  it("should not redirect if user is authenticated", () => {
    LocalStorageHandler.getUserToken = jest.fn().mockReturnValue({
      access_token: "access_token",
      refresh_token: "refresh_token",
    });
    const push = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push });

    render(withAuth(MockComponent)({}));

    expect(push).not.toHaveBeenCalled();
  });
});
