
import React from "react"
import {useParams } from "react-router-dom";

export const withRouter = (WrappedComponent) => {


  return (props) => {

      const params = useParams(); //useParams возвращает объект пары key/value (ключ/значение) параметров URL.

      return (
          <WrappedComponent {...props} params={params}/>
      );
  }
}