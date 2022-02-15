import React from "react";

import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div >
      <div>
        <img className={s.img} src="https://thumbs.dreamstime.com/b/%D0%B1%D0%B5%D0%BB%D0%B0%D1%8F-%D1%88%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F-%D1%84%D1%83%D1%82%D1%83%D1%80%D0%B8%D1%81%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B-d-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-%D1%84%D0%BE%D0%BD%D0%B0-159442639.jpg"></img> 
      </div>
      <div className={s.descriptionBlock}>
        ava + descript
      </div>
   </div>
  )
}

export default ProfileInfo;