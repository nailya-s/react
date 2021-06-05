import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
  return (

<div className= 'app-wrapper'>
        <Header/>        
        <Navbar state={props.state.sideBar} />
        <div className= 'app-wrapper-content'>
        <Route path = '/music' component = {Music}/ >
        <Route path = '/news' component = {News}/ >
        <Route path = '/settings' component = {Settings}/ >
        <Route path = '/dialogs' render = {() => <Dialogs store={props.store}/> } / >
        <Route path = '/profile' render = {() => <Profile state={props.state.profilePage} dispatch ={props.dispatch}/> }/>
        </div>
        
      </div>);
}


export default App;
