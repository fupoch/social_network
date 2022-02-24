import React from "react";
import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messageReducer";
import Dialogs from "./Dialogs";




// const DialogsContainer = (props) => {

//   let messagePage = props.store.getState().messagePage
 
  
//   let sendMessage = () => {
//    props.store.dispatch(sendMessageActionCreator())
//   }
//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text))
//   }

//   return (
//    <Dialogs onMessageChange={onMessageChange}
//    sendMessage={sendMessage}
//    messagePage={messagePage}
   
//    />
//   )
// }

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