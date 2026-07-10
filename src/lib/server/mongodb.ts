import { MongoClient } from "mongodb";

declare global {
  var __mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri(): string | undefined {
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }

  const username = process.env.MONGODB_USERNAME;
  const password = process.env.MONGODB_PASSWORD;
  const clusterName = process.env.MONGODB_CLUSTER_NAME;
  const dbName = process.env.MONGODB_DB_NAME;

  if (!username || !password || !clusterName || !dbName) {
    return undefined;
  }

  const protocol = clusterName.startsWith("mongodb+srv://") ? "mongodb+srv" : "mongodb";
  const host = clusterName.replace(/^mongodb(\+srv)?:\/\//, "");
  const credentials = `${encodeURIComponent(username)}:${encodeURIComponent(password)}`;

  return `${protocol}://${credentials}@${host}/${encodeURIComponent(dbName)}?authSource=admin`;
}

export async function getMongoClient(): Promise<MongoClient> {
  const mongoUri = getMongoUri();

  if (!mongoUri) {
    throw new Error("MongoDB connection environment variables are not configured.");
  }

  if (!globalThis.__mongoClientPromise) {
    const client = new MongoClient(mongoUri);
    globalThis.__mongoClientPromise = client.connect();
  }

  return globalThis.__mongoClientPromise;
}
