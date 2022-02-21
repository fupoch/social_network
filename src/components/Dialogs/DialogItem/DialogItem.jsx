import React from "react";
import { NavLink } from "react-router-dom";
import s from '../Dialogs.module.css'

const ItemDialog = (props) => {
  let path = '/dialogs/'+ props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}><img className={s.img} src="https://img2.akspic.ru/previews/4/9/4/6/6/166494/166494-igra_v_kalmara_squid_game-500x.jpg" />{props.name}</NavLink>
        </div>
  )
}


export default ItemDialog