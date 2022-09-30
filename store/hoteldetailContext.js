// import React, { useState } from "react";

// const HotelDetailContext = React.createContext({
//   hotelPopularAmenities: {},
//   ondetailDataHandler: () => {}
// });


// export const HotelDetailContextProvider = (props) => {
//   const [data, setData] = useState({});

//   const detailDataHandler = (hotelPopularAmenities) => {
//     setData(hotelPopularAmenities)
//     console.log(data)
//   }

  
//   return (
//     <HotelDetailContext.Provider
//       value={{ hotelPopularAmenities: data, ondetailDataHandler: detailDataHandler }}
//     >
//       {props.children}
//     </HotelDetailContext.Provider>
//   );
// }

// export default HotelDetailContext;