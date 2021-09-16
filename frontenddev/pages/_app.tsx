import type { AppProps } from "next/app";
import Head from "next/head";
import { AuthProvider } from "utils/store";
import "antd/dist/antd.css";
import { useEffect } from "react";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>sangle docs</title>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default RootApp;
