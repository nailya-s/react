import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key= {d.id} id={d.id} img={d.img} />);
    let messagesElements = state.messages.map(m => <Message info={m.message} key= {m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onMessageChange = (e)=>{
        let body = e.target.value;
    props.updateNewMessageBody(body);
    };

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div className={s.messages}><textarea  onChange={onMessageChange} value={newMessageBody} placeholder="write your message"></textarea></div>
                        <div className={s.messages}><button onClick = {onSendMessageClick}>SEND</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;