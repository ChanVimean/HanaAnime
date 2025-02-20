import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

if (!uri) throw new Error("⚠️ Missing MONGODB_URI in environment variables")

// const options = { useNewUrlParser: true, useUnifiedTopology: true, }

let client = global._mongoClientPromise || new MongoClient(uri)
let clientPromise = global._mongoClientPromise

clientPromise = client.connect()

export default clientPromise