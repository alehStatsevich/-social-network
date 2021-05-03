import {DialogType, MessageType, StateType} from "./state";
export const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
 export const SEND_MESSAGE = "SEND-MESSAGE";

 type dialogsPageType  = {
    messages: MessageType[]
    dialogs: DialogType[]
    newMessageBody: string
 }
 let initialState :dialogsPageType = {
    messages: [
       {id: 1, message: 'Hi'},
       {id: 2, message: 'How is your'},
       {id: 3, message: 'Yo'},
       {id: 4, message: 'Yo'},
       {id: 5, message: 'Yo'}
    ],
    dialogs: [
       {id: 1, name: 'Dima'},
       {id: 2, name: 'Andrey'},
       {id: 3, name: 'Sveta'},
       {id: 4, name: 'Sasha'},
       {id: 5, name: 'Viktor'},
       {id: 6, name: 'Valera'}
    ],
    newMessageBody: ""
 }

export  const dialogsReducer = (state= initialState, action: any): dialogsPageType => {



   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         let stateCopy = {...state}
         //поверхносная копия
         stateCopy.newMessageBody = action.body;
         //ретурним копи стэйт.если вернем стейт это будет тот что приходит в функцию и не будет перерисовки
         return stateCopy;
      case SEND_MESSAGE: {
         let body = state.newMessageBody;
         let stateCopy2 = {
            ...state,
            newMessageBody: '',
            messages: [...state.messages,{id: 6, message: body}]}
        //копируем месаджи и  пушим messages.push({id: 6, message: body}


         return stateCopy2;
     ///???????
      }
      default:
         return state;//????????????
   }
}
export const sendMessageCreator = () => {
   return{type: 'SEND-MESSAGE'} as const
}
export const updateNewMessageBodyCreator = (body: string) => {
   return {type: 'UPDATE-NEW-MESSAGE-BODY', body: body} as const
}



//  if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
//       state.dialogsPage.newMessageBody = action.body;
//
//    }else if(action.type === 'SEND-MESSAGE'){
//       let body = state.dialogsPage.newMessageBody;
//       state.dialogsPage.newMessageBody = '';
//       state.dialogsPage.messages.push({id: 6, message: body})
//    }
//
//    return state;
// }переделали в switch
// stateCopy2.messages.push({id: 6, message: body});
// export default dialogsReducer;