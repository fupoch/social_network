import { ThunkAction } from "redux-thunk";
import { AppStateType, InfernActionsType } from "./reduxStore";


type DialogType = {
  id: number
  name: string
}
type MessagesType = {
  id: number
  message: string
}


let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are u" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ] as Array<MessagesType>,

  dialogs: [
    { id: 1, name: "Sasha" },
    { id: 2, name: "Nikita" },
    { id: 3, name: "Liza" },
    { id: 4, name: "Max" },
    { id: 5, name: "Artem" },
  ] as Array<DialogType>,
};

export type initialStateType = typeof initialState

const messageReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
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

type ActionsType = InfernActionsType<typeof actions>

const actions = {
  sendMessageActionCreator: (newMessageBody: string) => ({
    type: 'SEND_MESSAGE',
    newMessageBody,
  })
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const sendMessage = (newMessageBody: string): ThunkType => {
  return (dispatch) => {
    dispatch(actions.sendMessageActionCreator(newMessageBody));
  };
};

export default messageReducer;
