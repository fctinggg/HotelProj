// Hotel/All
import AllHotelPage from "../../../component/Hotel/AllHotel";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

// const DUMMY_HOTELS = [
//   {
//     id: "h1",
//     hotelName: "Dummy Hotel 1",
//     location: "Shatin, Hong Kong",
//     region: "New Territories",
//     openYear: "2019",
//     popularAmenities: {
//       parking: true,
//       airportService: true,
//       swimmingPool: true,
//       smokingArea: true,
//     },
//     roomTypes: [
//       {
//         roomName: "Standard Twin Room",
//         beds: "2 single beds",
//         smoking: false,
//         roomAmenities: {
//           Wi_Fi: true,
//           LCDTv: true,
//           airCondition: true,
//           shower: true,
//           bathTub: false,
//           basicToiletries: true,
//         },
//       },
//       {
//         roomName: "Standard Queen Room",
//         beds: "1 queen beds",
//         smoking: false,
//         roomAmenities: {
//           Wi_Fi: true,
//           LCDTv: true,
//           airCondition: true,
//           shower: true,
//           bathTub: true,
//           basicToiletries: true,
//         },
//       },
//     ],
//     review: {
//       cleanliness: 4.5,
//       location: 4.0,
//       service: 4.4,
//       facilities: 4.3,
//     },
//     totalReview: 4.3,
//   },
//   {
//     id: "h2",
//     hotelName: "Dummy Hotel 2",
//     location: "MongKok, Hong Kong",
//     region: "Kowloon",
//     openYear: "2019",
//     popularAmenities: {
//       parking: false,
//       airportService: false,
//       swimmingPool: true,
//       smokingArea: true,
//     },
//     roomTypes: [
//       {
//         roomName: "Twin Room",
//         beds: "2 single beds",
//         smoking: false,
//         roomAmenities: {
//           Wi_Fi: true,
//           LCDTv: true,
//           airCondition: true,
//           shower: true,
//           bathTub: false,
//           basicToiletries: true,
//         },
//       },
//       {
//         roomName: "Queen Room",
//         beds: "1 queen beds",
//         smoking: false,
//         roomAmenities: {
//           Wi_Fi: true,
//           LCDTv: true,
//           airCondition: true,
//           shower: true,
//           bathTub: true,
//           basicToiletries: true,
//         },
//       },
//     ],
//     review: {
//       cleanliness: 3.5,
//       location: 4.0,
//       service: 3.4,
//       facilities: 5.0,
//     },
//     totalReview: 3.5,
//   },
// ];

const AllHotel = (props) => {
  console.log(props);
  console.log(props.hotelRoomTypes);

  let filteredRegion = [...props.hotels]
  const filterHandler = (region) => {
    console.log(region)
    filteredRegion = props.hotels.filter(
      (hotel) => hotel.region !== region
    );
  };

  return (
    <Fragment>
      <AllHotelPage
        hotels={filteredRegion}
        onFilter={filterHandler}
      ></AllHotelPage>
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://fctinggg0526:ghYKPn9YLDRtPHo8@cluster0.b2cnewc.mongodb.net/auth-demo?retryWrites=true&w=majority"
  );

  const db = client.db();

  const hotelCollection = db.collection("hotels");

  const hotels = await hotelCollection.find().toArray();
  // console.log(hotels);

  let hotelPopularAmenities = [];
  for (let i = 0; i < hotels.length; i++) {
    hotelPopularAmenities.push(hotels[i].popularAmenities);
  }

  let hotelReviews = [];
  for (let i = 0; i < hotels.length; i++) {
    hotelReviews.push(hotels[i].review);
  }

  let hotelRoomTypes = [];
  for (let i = 0; i < hotels.length; i++) {
    for (let j = 0; j < hotels[i].roomTypes.length; j++) {
      hotelRoomTypes.push(hotels[i].roomTypes[j]);
    }
  }

  let roomAmenities = [];
  for (let i = 0; i < hotels.length; i++) {
    for (let j = 0; j < hotels[i].roomTypes.length; j++) {
      roomAmenities.push(hotels[i].roomTypes[j].amenities);
    }
  }

  let hotelRoomType = [...hotelRoomTypes];
  for (let i = 0; i < hotelRoomTypes.length; i++) {
    hotelRoomTypes.concat().roomAmenities;
  }

  client.close();

  return {
    props: {
      hotels: hotels.map((hotel) => ({
        hotelName: hotel.hotelName,
        location: hotel.location,
        region: hotel.region,
        openYear: hotel.openYear,
        id: hotel._id.toString(),
        totalReview: hotel.totalReview,
      })),
      hotelReviews: hotelReviews,
      hotelPopularAmenities: hotelPopularAmenities,
      hotelRoomTypes: hotelRoomType,
    },
    revalidate: 1,
  };
}

export default AllHotel;
