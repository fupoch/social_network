import { ThunkAction } from "redux-thunk";
import { getUserLogin } from "./authReducer";
import { AppStateType, InfernActionsType } from "./reduxStore";


export type initialStateType = {
  initialized: boolean,
};

let initialState: initialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SET_INITIALIZED':
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type ActionsType = InfernActionsType<typeof actions>
const actions = {
  setInitialized: () => ({
    type: 'SET_INITIALIZED',
  })
}


type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const initializeApp = (): ThunkType => {
  return (dispatch) => {
    let promise = dispatch(getUserLogin());
    Promise.all([promise]).then(() => {
      dispatch(actions.setInitialized());
    });
  };
};
export default appReducer;
