import React from "react";
import preloader from "../../assets/img/preloader.svg";
import s from "./Preloader.module.css";
import CircularProgress from "@mui/material/CircularProgress";

let Preloader = (props_) => {
  return (
    <div className={s.preloader}>
      <CircularProgress />
    </div>
  );
};

export default Preloader;
