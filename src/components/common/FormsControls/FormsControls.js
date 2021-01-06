import React from "react";
import s from "./FormsConttrols.module.css"

const FormControl = ({input, meta, child, ...props}) => {

  const hasError = meta.touched && meta.error;

  return (
    <div className={s.formControl + " " + (hasError && s.error)}>
      {props.children}
    </div>

  )
};

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  const hasError = meta.touched && meta.error;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}/>
      {hasError && <span>{meta.error}</span>}
    </FormControl>
  )
};

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  const hasError = meta.touched && meta.error;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}/>
    </FormControl>
  )
};
