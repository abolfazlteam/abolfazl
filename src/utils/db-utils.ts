import { MongoClient } from "mongodb";

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const cluster_name = process.env.MONGODB_CLUSTER_NAME;
const db_name = process.env.MONGODB_DB_NAME;

const connectionString = `mongodb+srv://${username}:${password}@${cluster_name}.6fz8ugz.mongodb.net/${db_name}?retryWrites=true&w=majority`;

export const connectDatabase = async () => {
  const client = await MongoClient.connect(connectionString);

  return client;
};

export const getOneBlog = async (
  client: MongoClient,
  collection: string,
  slug: string,
) => {
  const db = client.db();
  const document = await db.collection(collection).findOne({ slug });

  return document;
};

export const updateOneBlogViews = async (
  client: MongoClient,
  collection: string,
  docSlug: string,
  value: number,
) => {
  const db = client.db();
  const document = await db
    .collection(collection)
    .updateOne({ slug: docSlug }, { $set: { views: value } });

  return document;
};

export const insertNewDoc = async (
  client: MongoClient,
  collection: string,
  documentData: { slug: string; views: number; likes: number },
) => {
  const db = client.db();
  const document = await db.collection(collection).insertOne(documentData);
  return document;
};

export const updateOneBlogLikes = async (
  client: MongoClient,
  collection: string,
  docSlug: string,
  value: number,
) => {
  const db = client.db();
  const document = await db
    .collection(collection)
    .updateOne({ slug: docSlug }, { $set: { likes: value } });

  return document;
};
