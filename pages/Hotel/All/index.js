// Hotel/All
import AllHotelPage from "../../../component/Hotel/AllHotel";
import React, { createContext, useEffect, useState, useContext } from "react";
import HotelContext from '../../../store/hotelContext'
import {getHotelData} from '../../api/hotelData'


const AllHotel = (props) => {
 const ctx = useContext(HotelContext)
  
 useEffect(() => {
  ctx.dataHandler(props.hotels);
 }, [])

 
  
//   const formattedHotels = (updatedHotels, hotelamenities) =>
//     updatedHotels.map((obj, i) => ({
//       ...obj,
//       updatedHotels: hotelamenities[i],
//     }));
//   const updatedHotelsWithAmen = formattedHotels(updatedHotels, hotelamenities);

//   const [data, setData] = useState(updatedHotelsWithAmen);

//   const filteredRegion = ctx.filteredRegion;
//   const filteredAmenities = ctx.filteredAmenities;
  

//   const applyAmenitiesFilter = () => {
//     if (filteredAmenities) {
//       let filteredHotels = []
//       updatedHotelsWithAmen.filter((item) => {
//           for (let i = 0; i < filteredAmenities.length; i++) {
//           if (item.updatedHotels.includes((filteredAmenities[i].toString()))) {
//             if (filteredHotels.find((filteredHotel) => filteredHotel.id === item.id)) {
//               return
//             } filteredHotels.push(item)
//           }
//         }
//       })
//     setData(filteredHotels)
// }
//     if (filteredAmenities === null) {
//       setData(updatedHotelsWithAmen)
//       }
// }

//   const applyRegionFilter = () => {
//     if (filteredRegion) {
//       const result = updatedHotelsWithAmen.filter((hotel) => {
//         return hotel.region === filteredRegion;
//       });
//       setData(result);
//     }
//     if (filteredRegion === null) {
//       const result = updatedHotelsWithAmen.filter((hotel) => {
//         return hotel.region !== filteredRegion;
//       });
//       setData(result);
//     }
//   };

//   useEffect(() => {
//     applyRegionFilter();
//     applyAmenitiesFilter();
//   }, [filteredRegion, filteredAmenities]);

  return (
    <>
      <AllHotelPage
        // hotels={data}
        // amenities={props.hotelPopularAmenities}
      ></AllHotelPage>
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
