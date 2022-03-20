import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

let initialState = {
  posts: [
    { id: 1, message: "Hello all", likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 23 },
  ],
};
test("length of posts should be imcremented", () => {
  // 1. test data
  let action = addPostActionCreator("fupoch.com");
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expextation
  expect(newState.posts.length).toBe(3);
});

test("new posts message should be correct", () => {
  // 1. test data
  let action = addPostActionCreator("fupoch.com");
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expextation
  expect(newState.posts[2].message).toBe("fupoch.com");
});

test("after deleting length of messages should be decrement", () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expextation
  expect(newState.posts.length).toBe(1);
});

test("after deleting length of messages shouldn`t be decrement if id incorrect", () => {
  // 1. test data
  let action = deletePost(3);
  // 2. action
  let newState = profileReducer(initialState, action);
  // 3. expextation
  expect(newState.posts.length).toBe(2);
});
