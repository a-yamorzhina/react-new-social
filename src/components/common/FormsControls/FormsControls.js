import React from "react";
import s from "./FormsConttrols.module.css"
import st from "../../Login/Login.module.css";
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error} , children}) => {

  const hasError = touched && error;

  return (
    <div className={s.formControl + " " + (hasError && s.error)}>
      {children}
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

export const CreateField = (placeholder, name, validators, component, type, className) => <Field
                                                                            component={component}
                                                                            validate={[validators]}
                                                                            name={name}
                                                                            className={st[className]}
                                                                            placeholder={placeholder}
                                                                            type={type}/>;
