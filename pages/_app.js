import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import Head from "next/head";
import Layout from '../component/layout/Layout';
import { HotelContextProvider } from '../store/hotelContext';

function MyApp({ Component, pageProps }) {
return (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta> 
    <meta name="format-detection" content="telephone=no"></meta> 
  </Head>
  <Provider session={pageProps.session}>
  <HotelContextProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </HotelContextProvider>
  </Provider>
  </>
  );
}
export default MyApp;