import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import sitebarReducer from "./sitebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello all", likeCount: 12 },
        { id: 2, message: "It's my first post", likeCount: 23 },
      ],
      newPostText: "itFupoch",
    },
    messagePage: {
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are u" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
      newMessageText: "",
      dialogs: [
        { id: 1, name: "Sasha" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Liza" },
        { id: 4, name: "Max" },
        { id: 5, name: "Artem" },
      ],
    },
    siteBar: {
      friends: [
        { id: 1, name: "Liza" },
        { id: 2, name: "Andrew" },
        { id: 3, name: "Max" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.siteBar = sitebarReducer(this._state.siteBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
