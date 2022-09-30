import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import Head from "next/head";
import Layout from '../component/layout/Layout';
import { FilterContextProvider } from '../store/filterContext';

function MyApp({ Component, pageProps }) {
return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta> 
    <meta name="format-detection" content="telephone=no"></meta> 
    <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap" rel="stylesheet"></link>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
  </Head>
  <Provider session={pageProps.session}>
  <FilterContextProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </FilterContextProvider>
  </Provider>
  </>
  );
}
export default MyApp;