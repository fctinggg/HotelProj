import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import Layout from "../component/layout/Layout";
import { HotelContextProvider } from "../store/hotelContext";
import { DatePickContextProvider } from "../store/datePickContext";
import { CartContextProvider } from "../store/cartContext";
import { FavouriteContextProvider } from "../store/favouriteContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        ></meta>
        <meta name="format-detection" content="telephone=no"></meta>
      </Head>
      <Provider session={pageProps.session}>
        <CartContextProvider>
          <FavouriteContextProvider>
            <HotelContextProvider>
              <DatePickContextProvider>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </DatePickContextProvider>
            </HotelContextProvider>
          </FavouriteContextProvider>
        </CartContextProvider>
      </Provider>
    </>
  );
}
export default MyApp;
