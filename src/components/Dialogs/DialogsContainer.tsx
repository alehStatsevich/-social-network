import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {StateType} from "../../redux/state";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage,
        // isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
//hoc
let AuthRedirectComponent = WithAuthRedirect(Dialogs)
// let AuthRedirectComponent = (props:any) =>{
//     //перенапровление Redirect
//     if (props.isAuth === false) return <Redirect to="/Login"/>
//     return <Dialogs {...props}/>
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


export default DialogsContainer;

// type DialogsPropsType ={
//    store:  StoreType
// }

// const DialogsContainer = (props:DialogsPropsType ) => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage;
//
//             // let dialogsElements =  state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);
//             // let messagesElements = state.messages.map((m) => <Message message={m.message}/>);
//             // let newMessageBody = state.newMessageBody;
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//             let onNewMessageChange = (body: string) => {
//                 // let body = event.target.value
//                 store.dispatch(updateNewMessageBodyCreator(body))
//             }
//
//             // @ts-ignore
//             return <Dialogs updateNewMessageBody={onNewMessageChange}
//                             sendMessage={onSendMessageClick}
//                             dialogsPage={state}/>
//         }}
//     </StoreContext.Consumer>
// }






