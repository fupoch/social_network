import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { initialStateType, sendMessage } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";
import {AppStateType} from "../../redux/reduxStore"

type PropsMSTPType = {
  messagePage: initialStateType
  isAuth: boolean
}
type PropsMDTPType = {
  sendMessage: (newMessageBody: string) => void
}
type PropsOwnType = {

}
let mapStateToProps = (state: AppStateType): PropsMSTPType => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect<PropsMSTPType, PropsMDTPType, PropsOwnType, AppStateType>(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)