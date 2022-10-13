//// Hotel/[id]
import { useRouter } from "next/router";
import HotelDetailWrapper from "../../../component/Hotel/HotelDetailLayout";
import HotelDetail from "../../../component/Hotel/HotelDetail";
import { getHotelData,getSingleHotelData } from "../../api/hotelData";
import DatePickContext from '../../../store/datePickContext'
import { useContext,useEffect } from "react";
import { actionType } from "../../../store/actionType";

const hotelDetailPage = (props) => {
  const router = useRouter();
  const { hotelId } = router.query;
  const selectedCtx = useContext(DatePickContext);
  const singleHotel = Object.values(props)

  useEffect(() => {
    selectedCtx.dispatchPickup({type:actionType.DATA_INSERT, payload:{singleHotel}})
   }, [])

   console.log('----------converted array-------------')
   console.log(Object.values(props))

  return (
    <>
      <HotelDetailWrapper>
        <HotelDetail singleHotelData={props.singleHotelData}>
        </HotelDetail>
      </HotelDetailWrapper>
    </>
  );
};

export default hotelDetailPage;

export async function getStaticPaths() {
  const hotels = await getHotelData({}, { _id: 1 });

  return {
    fallback: "blocking",
    paths: hotels.map((hotel) => ({
      params: { hotelId: hotel._id.toString() },
    })),
  };
}

//context係getServerSide就係handler req res 但context係StaticProps就會變成有params既Obj
//透過context.params.hotelId(gor folder name) 就拎到當前dynamic params
export async function getStaticProps(context) {
  console.log(context.params.hotelId)
  const hotelId = context.params.hotelId
  const selectedHotel = await getSingleHotelData(hotelId);

  console.log(selectedHotel)

  return {
    props: {
      singleHotelData: {
        ...selectedHotel,
        id: selectedHotel._id.toString(),
      }
    },
    revalidate: 1,
  }
}