import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LocalStorageHandler } from "./LocalStorageHandler";

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const tokens = LocalStorageHandler.getUserToken();
      if (!tokens) router.push("/login");
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
