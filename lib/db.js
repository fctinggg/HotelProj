import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://fctinggg0526:ghYKPn9YLDRtPHo8@cluster0.b2cnewc.mongodb.net/auth-demo?retryWrites=true&w=majority')
  return client;
}
