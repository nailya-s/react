import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import { usersAPI } from './../../Api/api';
import {connect} from 'react-redux';
import {login} from './../../redux/authReducer';


const schema = yup.object().shape({
  email: yup.string().email().required("Login required"),
  password: yup.string().required("Password is required").min(6),
  rememberMe: false
});


const Login = (props) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm( {resolver: yupResolver(schema)});
  
  const onSubmit = (data, e) => {
    props.login(data.email, data.password);
   // reset after form submit
  };


  console.log(watch("email")); 

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <h1>LOGIN</h1>
      <div>
      <input {...register("email")} placeholder="login"/>
      </div>
      <p>{errors.login?.message}</p>
      {/* include validation with required or other standard HTML validation rules */}
      <div>
        <input type="password" {...register("password")} placeholder="password" />
        </div>
        <div>
        <input type="checkbox" {...register("rememberMe")} /><label>remember me</label>
        </div>
        <p>{errors.password?.message}</p>
      <input type="submit" />
    </form>
  );
}

export default connect (null, {login})(Login)