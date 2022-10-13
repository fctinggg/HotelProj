// our-domain.com/
import MainPage from '../component/MainPage/MainPage';
import React from "react";
import { getHotelData } from "./api/hotelData";

function HomePage(props) {
  const hotels = props.hotels

  return (
  <MainPage hotelsData={hotels}></MainPage>)
}

export async function getStaticProps() {
  const hotels = await getHotelData();

  return {
    props: {
    hotels
  },
    revalidate: 1,
  };
}

export default HomePage;