import type { AppProps } from "next/app";
import Head from "next/head";
import { IdProvider } from "@radix-ui/react-id";
import globalStyles from "../styles/globals";
import Layout from "../components/Layout/Layout";
import { TitleContextProvider } from "../store/title-context";

function App({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles();

  return (
    <IdProvider>
      <Head>
        <title>Divide & Conquer</title>
      </Head>
      <TitleContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TitleContextProvider>
    </IdProvider>
  );
}

export default App;