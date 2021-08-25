import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key= {d.id} id={d.id} img={d.img} />);
    let messagesElements = state.messages.map(m => <Message info={m.message} key= {m.id}/>);


    let onSendMessageClick = (values) => {
        props.sendMessage(values.newMessageBody);
    };


    if(!props.isAuth) return <Redirect to='/login'/>;

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <AddMessageForm onSendMessageClick={onSendMessageClick}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
const AddMessageForm = (props) => {

    const { register, handleSubmit} = useForm();
    const onSubmit = (data, e) => {
        props.onSendMessageClick(data);
        e.target.reset();  // reset after form submit
      }; 
   
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("newMessageBody")} placeholder="write your message"></textarea>
        <div ><input className={s.button} type="submit" /></div>
      </form>
    );
  }

export default Dialogs;