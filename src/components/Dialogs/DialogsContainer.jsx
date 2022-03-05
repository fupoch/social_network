import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))},
    sendMessage: () => {
      dispatch(sendMessageActionCreator())},
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer