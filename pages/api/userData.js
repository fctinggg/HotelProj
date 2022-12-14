import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "mongodb";

async function userData(req, res) {
  try {
    if (req.method === "PATCH") {
      const data = req.body;
      const { userId, cartList, wishList, subscribedList } = data;

      const client = await connectToDatabase();
      const usersCollection = client.db().collection("users");
      const user = await usersCollection.findOne({
        _id: ObjectId(userId),
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
        client.close();
        return;
      }

      async function cartResult() {
        if (cartList) {
          return (cartResult = await usersCollection.updateOne(
            { _id: ObjectId(userId) },
            { $set: { cart: cartList } }
          ));
        }
      }

      async function favResult() {
        if (wishList && subscribedList) {
          return (cartResult = await usersCollection.updateOne(
            { _id: ObjectId(userId) },
            { $set: { saved: wishList , liked: subscribedList } }
          ));
        }
      }


      const cartData = await cartResult()
      const favData = await favResult()

      res.status(201).json({ cartData, favData });

      client.close();
    }

    if (req.method === "POST") {
      const data = req.body;
      const { userId } = data;

      const client = await connectToDatabase();
      const db = client.db();

      const user = await db
        .collection("users")
        .findOne({ _id: ObjectId(userId) });

      if (!user) {
        res.status(404).json({ message: "User not found" });
        client.close();
        return;
      }

      res.status(201).json({ user });

      client.close();
    }
  } catch (e) {
    console.error(e);
  }
}

export default userData;
