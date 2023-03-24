import { LocalStorageHandler } from "@/utils/LocalStorageHandler";
import "@testing-library/react";

describe("LocalStorageHandler", () => {
  it("sets and gets user token correctly", () => {
    const access_token = "my_access_token";
    const refresh_token = "my_refresh_token";
    LocalStorageHandler.setUserToken(access_token, refresh_token);

    const tokens = LocalStorageHandler.getUserToken();
    expect(tokens).toEqual({ access_token, refresh_token });
  });

  it("removes user token correctly", () => {
    const access_token = "my_access_token";
    const refresh_token = "my_refresh_token";
    LocalStorageHandler.setUserToken(access_token, refresh_token);

    LocalStorageHandler.removeUserToken();

    const tokens = LocalStorageHandler.getUserToken();
    expect(tokens).toBeNull();
  });
});
