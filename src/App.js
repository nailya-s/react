import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Redirect } from 'react-router-dom';



const App = (props) => {
  return (

<div className= 'app-wrapper'>
        <HeaderContainer/>        
        <Navbar />
        <div className= 'app-wrapper-content'>
        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
        <Route path = '/music' component = {Music}/ >
        <Route path = '/news' component = {News}/ >
        <Route path = '/settings' component = {Settings}/ >
        <Route path = '/dialogs' render = {() => <DialogsContainer store={props.store}/> } / >
        <Route path = '/profile/:userId?' render = {() => <ProfileContainer /> }/>
        <Route path = '/users' render = {() => <UsersContainer/> } />
        <Route path = '/login' render = {() => <Login/> } />
        </div>
        
      </div>);
}


export default App;
