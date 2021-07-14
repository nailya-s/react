import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className>
      <div>
        <img src="https://i.pinimg.com/originals/be/1a/4f/be1a4f469a3461d1ee319b6743007329.jpg" />
      </div>
      <div>
        <img src={props.profile.photos.large}/>
        </div>
      </div>
      )
}

export default ProfileInfo;