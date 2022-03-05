import React from "react";

import ItemDialog from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";



const Dialogs = (props) => {
  let  newMessageText = props.messagePage.newMessageText
  let dialogsElements = props.messagePage.dialogs.map( d => 
    <ItemDialog name={d.name} id={d.id} key={d.id} />
  )
  let messageElements = props.messagePage.messages.map(m => <Message message={m.message} key={m.id}/>)
  
  let sendMessage = () => {
   props.sendMessage()
  }
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.onMessageChange(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
       {dialogsElements}
      </div>
      <div className={s.dialogWindow}>
        <div className={s.messages}>
        {messageElements}
        </div>
        <div className={s.textArea}>
            <textarea 
              onChange={onMessageChange} 
            
              value={newMessageText} 
              autoFocus 
              placeholder="Введите сообщение">
            </textarea>
          <div className={s.buttonSend}>
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs