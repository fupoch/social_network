const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  dialogs: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Liza" },
    { id: 4, name: "Max" },
    { id: 5, name: "Artem" },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export const sendMessage = (newMessageBody) => {
  return (dispatch) => {
    dispatch(sendMessageActionCreator(newMessageBody));
  };
};

export default messageReducer;
