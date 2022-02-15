import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css'

const ItemDialog = (props) => {
  let path = '/dialogs/'+ props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
        </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}


const Dialogs = (props) => {

  let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Liza'},
    {id: 4, name: 'Max'},
    {id: 5, name: 'Artem'},
  ]
  let messages= [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are u'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogs.map( d => 
    <ItemDialog name={d.name} id={d.id} />
  )
  let messageElements = messages.map(m => <Message message={m.message}/>)
  
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
       {dialogsElements}
      </div>
      <div className={s.messages}>
       {messageElements}
      </div>
    </div>
  )
}

export default Dialogs