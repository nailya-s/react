import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { Redirect } from 'react-router-dom';

const Header = (props) => {

  return (
    <header className={s.header}>
      <img src='https://p.kindpng.com/picc/s/794-7946810_agencias-de-redes-sociales-logos-png-download-portable.png' />
    <div className={s.login}>
      {props.isAuth 
      ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
      :<NavLink to={`/login`}>Login</NavLink>}
    </div>
    </header>
  )
}

export default Header;