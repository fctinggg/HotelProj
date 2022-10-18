import { connectToDatabase } from "../../lib/db";
import { ObjectId } from "mongodb";


async function updateSaved(req, res) {
  try {
    if (req.method === "PATCH") {
      const data = req.body
      const {userId , savedList, likedList} = data

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

        const result = await usersCollection.updateOne(
          { _id: ObjectId(userId) },
          { $set: { saved: savedList , liked: likedList} }
        );
      
      client.close();
      res.status(200).json({ message: "favourite hotel updated" });
    }
  } catch (e) {
    console.error(e);
  }
}

export default updateSaved;