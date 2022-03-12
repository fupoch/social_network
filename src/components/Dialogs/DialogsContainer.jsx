import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";

let AuthNavigateComponent = withAuthRedirect(Dialogs)


let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
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



export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)