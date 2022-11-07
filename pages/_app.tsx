import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/global.css";

import { Layout } from "../components/layout";

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
