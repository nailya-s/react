import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useForm } from "react-hook-form";



const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} key= {p.id} like={p.like} />);
 
  
  let addPost = (values) => {
    props.addpost(values.newPostText);

  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddPostForm addPost={addPost}/>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddPostForm = (props) => {

  const { register, handleSubmit} = useForm();
  const onSubmit = (data, e) => {
      props.addPost(data);
      e.target.reset();  // reset after form submit
    }; 
 
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea {...register("newPostText")} placeholder="write your post here"></textarea>
      <div>
      <input type="submit" />
        </div>
    </form>
  );
}

export default MyPosts;