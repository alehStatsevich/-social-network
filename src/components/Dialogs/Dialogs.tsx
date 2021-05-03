import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType, StoreType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";




type DialogsPropsType ={
      dialogsPage : DialogsPageType
    sendMessage:()=>void
    updateNewMessageBody: (body: string) => void
}


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements =  state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.target.value
        props.updateNewMessageBody(body)
        // props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={s.messages}>

           <div> {messagesElements}</div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'></textarea></div>
                <div><button onClick={onSendMessageClick}>send</button></div>
            </div>
        </div>


    </div>
}
export default Dialogs;









