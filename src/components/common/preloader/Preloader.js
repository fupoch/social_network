import React from "react";
import preloader from "../../assets/img/preloader.svg";
import s from "./Preloader.module.css";

let Preloader = (props_) => {
  return (
    <div className={s.preloader}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
