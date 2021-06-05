import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
  let myFriends = props.friends.map(d => <Friend name={d.name} img={d.img} />)
  return (
    <div className={s.friends}>
      {myFriends}
    </div>
  )
}

export default Friends;