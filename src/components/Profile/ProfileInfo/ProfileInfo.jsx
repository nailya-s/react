import React from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusHook from './ProfileStatusHook';

const ProfileInfo = (props) => {
  
  let userPhoto = 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
  let profile = props.profile;
  if (!profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div className={s.userPhoto}>
        <img src={profile.photos.large!= null ? profile.photos.large : userPhoto} />
      </div>
      <div>
        <ProfileStatusHook status= {props.status} updateStatus={props.updateStatus}/>
      </div>
      <div>
        {profile.fullName}
      </div>
      <div>
        Looking for a job: {profile.lookingForAJob === true ? (
          <span>YES</span>
        ) : <span>NO</span>}
      </div>
      <div>
        Type of job: {profile.lookingForAJobDescription}
      </div>
      <div>Facebook: {profile.contacts.facebook}</div>
      <div> Github:{profile.contacts.github}</div>
      <div> VK: {profile.contacts.vk}</div>
      <div> main: {profile.contacts.mainLink}</div>

    </div>
  )
}


export default ProfileInfo;