import type { AppProps } from "next/app";
import Head from "next/head";
import "antd/dist/antd.css";

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>sangle docs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default RootApp;
