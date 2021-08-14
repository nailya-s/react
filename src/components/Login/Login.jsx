import React from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {connect} from 'react-redux';
import {login} from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';


const schema = yup.object().shape({
  email: yup.string().email().required("Login required"),
  password: yup.string().required("Password is required").min(6),
  rememberMe: false
});




const Login = (props) => {


  const { register, handleSubmit, formState: { errors } } = useForm( {resolver: yupResolver(schema)});
  
  const onSubmit =  (data, e) => {
      props.login(data.email, data.password, data.rememberMe);
    e.target.reset();// reset after form submit
  };

if (props.isAuth){
  return <Redirect to= {"/profile"}/>;
} 




  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>LOGIN</h1>
      <div>
      <input {...register("email")} placeholder="login"/>
      </div>
      <p>{errors?.email && `Error:${errors?.email?.message}`}</p>
      {/* include validation with required or other standard HTML validation rules */}
      <div>
        <input type="password" {...register("password")} placeholder="password" />
        </div>
        <div>
        <input type="checkbox" {...register("rememberMe")} /><label>remember me</label>
        </div>
        <p>{errors.password?.message}</p>
        <div>{props.errorMessage}</div>
      <input type="submit" />
      
    </form>
  );
}
let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  isError: state.auth.isError,
  errorMessage: state.auth.errorMessage
});

export default connect (mapStateToProps, {login})(Login)