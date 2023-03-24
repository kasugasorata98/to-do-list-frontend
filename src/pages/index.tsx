import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const pathName = router.pathname.slice(1);
    if (!pathName) {
      router.push({
        pathname: "/login",
      });
    }
  }, [router]);
  return (
    <>
      <Head>
        <title>To Do App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
