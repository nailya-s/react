import React from 'react';
import s from './Header.module.css';
import {authUserThunkCreator} from '../../redux/authReducer'
import Header from './Header'
import { connect } from 'react-redux';
import * as axios from 'axios';
import {compose} from 'redux'

class HeaderContainer extends React.Component {

  componentDidMount() {
    
    this.props.authUserThunkCreator();
};

  render() {
    return (
      <Header {...this.props} />
    )
  }
};


let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

export default compose(
  connect(mapStateToProps, { authUserThunkCreator })
)(HeaderContainer);

