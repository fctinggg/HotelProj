import { connectToDatabase } from '../../lib/db';
import { ObjectId } from "mongodb";

// client side:
// export default async function getHotel(req, res) {
//   if (req.method !== 'GET') {
//     return null
//   }
// }

// Server Side直接問DB拎HotelData
// Data access layer
export async function getHotelData(props) {
  try {
    const client = await connectToDatabase();

    const db = client.db();

    const hotelCollection = db.collection("hotels");

    const hotels = await hotelCollection.find(props).toArray();

    client.close();

    // yau bug cant use res.json
    // console.log(JSON.parse(JSON.stringify(hotels)))

    return (JSON.parse(JSON.stringify(hotels)));

  } catch (e) {
    console.error(e)
  }
}

export async function getSingleHotelData(props) {
  try {
    const client = await connectToDatabase();

    const db = client.db();

    const hotelCollection = db.collection("hotels");

    const selectedHotel = await hotelCollection.findOne({_id: ObjectId(props)});

    client.close();

    // yau bug cant use res.json
    // console.log(JSON.parse(JSON.stringify(selectedHotel)))

    return (JSON.parse(JSON.stringify(selectedHotel)));

  } catch (e) {
    console.error(e)
  }
}