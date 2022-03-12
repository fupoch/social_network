import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthNavigate";
import { sendMessage } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
  }
}

export default compose(
  connect(mapStateToProps, {sendMessage}),
  withAuthRedirect
)(Dialogs)