import { MongoClient } from "mongodb";
import {
  connectDatabase,
  getOneBlog,
  insertNewDoc,
  updateOneBlogLikes,
  updateOneBlogViews,
} from "../db-utils";
import { Mock } from "vitest";

vi.mock("mongodb", () => {
  const mockedCollection = {
    findOne: vi.fn(),
    insertOne: vi.fn(),
    updateOne: vi.fn(),
  };

  const mockedDb = {
    collection: vi.fn(() => mockedCollection),
  };

  const mockedClient = {
    db: vi.fn(() => mockedDb),
    close: vi.fn(),
  };

  return {
    MongoClient: { connect: vi.fn(() => Promise.resolve(mockedClient)) },
  };
});

describe("database util helpers test suite", () => {
  let client: MongoClient;

  beforeAll(async () => {
    // connect to mocked database
    client = await connectDatabase();
  });

  afterAll(() => {
    // close the connection after all
    client.close();
  });

  afterEach(() => {
    vi.clearAllMocks(); // we have to clear out all mocks
  });

  it("should connect to database properly", () => {
    expect(MongoClient.connect).toHaveBeenCalledWith(expect.any(String));
  });

  it("should get one blog with slug", async () => {
    const mockResult = { slug: "test-blog", views: 100, likes: 10 };

    (client.db().collection("blogs").findOne as Mock).mockResolvedValue(
      mockResult,
    );

    const result = await getOneBlog(client, "blogs", "test-blog");

    expect(result).toEqual(mockResult);
    expect(client.db().collection).toHaveBeenCalledWith("blogs");
    expect(client.db().collection("blogs").findOne).toHaveBeenCalledWith({
      slug: "test-blog",
    }); // the same way findOne is called in our code
  });

  it("should update one blogs view count with slug and value given to it", async () => {
    const mockUpdateResult = { modifiedCount: 1 };

    (client.db().collection("blogs").updateOne as Mock).mockResolvedValue(
      mockUpdateResult,
    );

    const updatedBlogResult = await updateOneBlogViews(
      client,
      "blogs",
      "test-blog",
      200, // views number
    );

    expect(mockUpdateResult).toEqual(updatedBlogResult);

    expect(client.db().collection).toHaveBeenCalledWith("blogs");
    expect(client.db().collection("blogs").updateOne).toHaveBeenCalledWith(
      {
        slug: "test-blog",
      },
      {
        $set: { views: 200 },
      },
    );
  });

  it("should update one blog likes count with slug and value given to it properly", async () => {
    const mockUpdateResult = { modifiedCount: 1 };

    (client.db().collection("blogs").updateOne as Mock).mockResolvedValue(
      mockUpdateResult,
    );

    const updatedBlogResult = await updateOneBlogLikes(
      client,
      "blogs",
      "test-blog",
      200, // views number
    );

    expect(mockUpdateResult).toEqual(updatedBlogResult);

    expect(client.db().collection).toHaveBeenCalledWith("blogs");
    expect(client.db().collection("blogs").updateOne).toHaveBeenCalledWith(
      {
        slug: "test-blog",
      },
      {
        $set: { likes: 200 },
      },
    );
  });

  it("should create a new document properly if it does not exist in db", async () => {
    const mockedResult = { slug: "new-blog", views: 1, likes: 0 };

    (client.db().collection("blogs").insertOne as Mock).mockResolvedValue(
      mockedResult,
    );

    const newDocument = await insertNewDoc(client, "blogs", {
      slug: "new-blog",
      views: 1,
      likes: 0,
    });

    expect(mockedResult).toEqual(newDocument);

    expect(client.db().collection).toHaveBeenCalledWith("blogs");
    expect(client.db().collection("blogs").insertOne).toHaveBeenCalledWith({
      slug: "new-blog",
      views: 1,
      likes: 0,
    });
  });
});
