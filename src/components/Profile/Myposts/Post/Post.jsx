import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.content}>
      <div>
      <img src="https://sun9-36.userapi.com/c856020/v856020331/153a6/bgvWHo18Kog.jpg" />
        {props.message}
      </div>
      <div>
        <span> like {props.like} </span>
      </div>
    </div>
  )
}

export default Post;