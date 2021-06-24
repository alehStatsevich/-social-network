import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reduser";


export const SET_INITIALIZED= 'SET_INITIALIZED';




 type DataType = {
   //  id: number | null
   //  email: string | null
   //  login:string | null
   //  auth?:any
   // isAuth: boolean
   //  userId?: number
    initialized: boolean

}
type AuthActionType = SetUserDataACType
type SetUserDataACType = {
    type: typeof SET_INITIALIZED,
    userId: number
    email: string
    login: string
};



let initialState : DataType = {
    initialized: false
}

 export const appReducer = (state:DataType = initialState , action: AuthActionType):DataType => {
    switch (action.type) {
      case SET_INITIALIZED:
         return {
           ...state,
             initialized: true
         }
        default:
          return state;
    }
 }
export const  initialized = () => {
    return{type: 'SET_INITIALIZED'} as const
}
//санкрейтор
export const initializeApp=()=>(dispatch: any)=>{
 let  promise=(getAuthUserData());
 Promise.all([promise])
     .then(()=>{dispatch( initialized())})


}


 export default appReducer;
// {id: 1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
//     followed:false, fullName: "Dima", status: "Hello",location:{city:"Minsk", country: "Belarus"}},
// {id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
//     followed:false, fullName: "Eska", status: "Hello",location:{city:"Brest", country: "Belarus"}},
// {id: 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
//     followed:true,fullName: "Leonid", status: "Hello",location:{city:"Lida", country: "Belarus"}}