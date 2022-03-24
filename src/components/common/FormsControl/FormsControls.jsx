import { TextField } from "@mui/material";
import React from "react";
import { Field } from "redux-form";
import styles from './FormsControls.module.css'


 const FormControl = ({input, meta: {touched, error}, element,  children, }) => {
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

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><TextField fullWidth label="Введите что-то"  id="fullWidth" {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const CreateField = (placeholder, name, validators, component, props = {}, text ="") => 
  <div>
  <Field component={component} validate={[validators]}name={name} placeholder={placeholder} {...props}/> {text}
  </div> 
