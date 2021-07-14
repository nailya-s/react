import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (

<div className= 'app-wrapper'>
        <Header/>        
        <Navbar />
        <div className= 'app-wrapper-content'>
        <Route path = '/music' component = {Music}/ >
        <Route path = '/news' component = {News}/ >
        <Route path = '/settings' component = {Settings}/ >
        <Route path = '/dialogs' render = {() => <DialogsContainer store={props.store}/> } / >
        <Route path = '/profile' render = {() => <ProfileContainer /> }/>
        <Route path = '/users' render = {() => <UsersContainer/> } />
        </div>
        
      </div>);
}


export default App;
