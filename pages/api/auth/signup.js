import { connectToDatabase } from "../../../lib/db";
import { hashPassword } from "../../../lib/auth";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { email, password, name } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    !password.trim().length > 7 ||
    !name
  ) {
    res.status(442).json({
      message: "Invalid input - password should also at least 7 characters",
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: "User exists already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
    name: name,
    cart: [],
    liked: [],
    saved: [],
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
