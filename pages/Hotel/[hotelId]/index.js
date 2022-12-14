//// Hotel/[id]
import { useRouter } from "next/router";
import HotelDetailLayout from "../../../component/Hotel/HotelDetailLayout";
import HotelDetail from "../../../component/Hotel/HotelDetail";
import { getHotelData, getSingleHotelData } from "../../api/hotelData";
import DatePickContext from "../../../store/datePickContext";
import { useContext, useEffect } from "react";
import { actionType } from "../../../store/actionType";

const HotelDetailPage = (props) => {
  const router = useRouter();
  const { hotelId } = router.query;
  const selectedCtx = useContext(DatePickContext);
  const singleHotel = Object.values(props);

  console.log(props);
  console.log(singleHotel);

  useEffect(() => {
    if (Object.keys(singleHotel[0]).length !== 0) {
      console.log("datepickContext data updated");
      selectedCtx.dispatchPickup({
        type: actionType.DATA_INSERT,
        payload: { singleHotel },
      });
    }
  }, []);

  //  console.log('----------converted array-------------')
  //  console.log(Object.values(props))

  return (
    <>
      <HotelDetailLayout>
        <HotelDetail />
      </HotelDetailLayout>
    </>
  );
};

export default HotelDetailPage;

export async function getStaticPaths() {
  const hotels = await getHotelData({}, { _id: 1 });

  return {
    fallback: true,
    paths: hotels.map((hotel) => ({
      params: { hotelId: hotel._id.toString() },
    })),
  };
}

//context係getServerSide就係handler req res 但context係StaticProps就會變成有params既Obj
//透過context.params.hotelId(gor folder name) 就拎到當前dynamic params
export async function getStaticProps(context) {
  console.log(context.params.hotelId);
  const hotelId = context.params.hotelId;
  const selectedHotel = await getSingleHotelData(hotelId);

  console.log(selectedHotel);

  return {
    props: {
      singleHotelData: {
        ...selectedHotel,
      },
    },
    revalidate: 1,
  };
}
