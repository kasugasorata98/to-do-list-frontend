export const LocalStorageHandler = {
  setUserToken: (access_token: string, refresh_token: string) => {
    localStorage.setItem(
      "tokens",
      JSON.stringify({
        access_token,
        refresh_token,
      })
    );
  },
  getUserToken: (): {
    access_token: string;
    refresh_token: string;
  } | null => {
    const tokens = localStorage.getItem("tokens");
    if (tokens) return JSON.parse(tokens);
    else return null;
  },
};
