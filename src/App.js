import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route} from "react-router-dom";
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {compose} from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './common/Preloader/Preloader';
import {initializedApp} from '../src/redux/appReducer';
import loadable from '@loadable/component';

const UsersContainer = loadable(() => import('./components/Users/UsersContainer'));
const DialogsContainer = loadable(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  
  componentDidMount() {
    this.props.initializedApp();
}

render() {
if(!this.props.initialized){
  return <Preloader/>
}

  return (

    <div className= 'app-wrapper'>
            <HeaderContainer/>        
            <Navbar />
            <div className= 'app-wrapper-content'>
            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
            <Route path = '/music' component = {Music}/ >
            <Route path = '/news' component = {News}/ >
            <Route path = '/settings' component = {Settings}/ >
            <Route path = '/dialogs' render = {() => <DialogsContainer fallback={<Preloader/>}/> } / >
            <Route path = '/profile/:userId?' render = {() => <ProfileContainer /> }/>
            <Route path = '/users' render = {() => <UsersContainer/> } />
            <Route path = '/login' render = {() => <Login/> } />
            </div>
            
          </div>
          )
    }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized
});


export default compose( withRouter,
connect(mapStateToProps, {initializedApp}))(App);
