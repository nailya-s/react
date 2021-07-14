import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} key= {p.id} like={p.like} />);
  let newPostElement = React.createRef();
  
  let addPost = () => {
    props.addpost();

  };

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    props.onPostChange(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;