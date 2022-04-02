import { TextField } from "@mui/material";
import React from "react";
import { Field } from "redux-form";
import { FieldValidatorType } from "../../../utils/validators/validators";
import styles from './FormsControls.module.css'

type FormControlPropsType = {
  meta: {
    touched: boolean
    error: string
  }
}

 const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children, }) => {
  const hasError = touched && error 
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
      {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  );
};



// export const Input = (props) => {
//   const {input, meta, child, ...restProps} = props;
//   return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
// }

export const CreateField = (placeholder: string, name: string, validators: Array<FieldValidatorType>, component: string | React.Component | React.FC,
   props = {}, text ="") => 
  <div>
  <Field component={component} validate={[validators]}name={name} placeholder={placeholder} {...props}/> {text}
  </div> 
