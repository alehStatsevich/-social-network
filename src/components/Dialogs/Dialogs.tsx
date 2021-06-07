import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, DialogType, MessageType, StoreType} from "../../redux/state";
import { Redirect } from "react-router-dom";
import {Field, reduxForm} from "redux-form";




type DialogsPropsType ={
      dialogsPage : DialogsPageType
    sendMessage: (newMessageBody:any)=>void
    updateNewMessageBody: (body: string) => void
    isAuth: any
}


const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;

    let dialogsElements =  state.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;
    // let onSendMessageClick = ( values:any) => {
    //     props.sendMessage(values.newMessageBody);
    //     // props.store.dispatch(sendMessageCreator())
    // }
    let addNewMessage = (values:any) => {
       props.sendMessage(values.newMessageBody)
    }
    //перенапровление Redirect
    if (props.isAuth === false) return <Redirect to={"/login"}/>

    return <div className={s.dialogs}>
        <div className={s.dialogsItem}>
            {dialogsElements}
        </div>
        <div className={s.messages}>

           <div> {messagesElements}</div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>


    </div>
}

const AddMessageForm = (props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
         <div>
             <Field name='newMessageBody'  placeholder='Enter your message' component='textarea'/>
         </div>
            <div><button>send</button></div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs;









