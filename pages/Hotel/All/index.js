// Hotel/All
import AllHotelPage from "../../../component/Hotel/AllHotel";
import React, { useEffect, useContext } from "react";
import HotelContext from "../../../store/hotelContext";
import { getHotelData } from "../../api/hotelData";
import { actionType } from "../../../store/actionType";

const AllHotel = (props) => {
  const ctx = useContext(HotelContext);
  const hotels = props.hotels

  useEffect(() => {
    ctx.dispatchFilter({
      type: actionType.DATA_INSERT,
      payload: {
        hotels
      },
    });
  }, []);

  return (
    <>
      <AllHotelPage></AllHotelPage>
    </>
  );
};

export async function getStaticProps() {
  const hotels = await getHotelData();

  return {
    props: { hotels },
    revalidate: 1,
  };
}

export default AllHotel;
