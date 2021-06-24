import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export const SET_USER_DATA= 'SET_USER_DATA';



//  export type UserType = {
//     id: number
//      photos: any
//      // photoUrl: any
//     followed: boolean
//     fullName:string
//     status:string
//     location: any
//
// }
export type DataType = {
    id: number | null
    email: string | null
    login:string | null
    auth?:any
   isAuth: boolean
    userId?: number

}
// export type initialStateType = {
//    data: DataType
// }
export type AuthActionType = SetUserDataACType
type SetUserDataACType = {
    type: typeof SET_USER_DATA,
    userId: number
    email: string
    login: string
};



let initialState : DataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

 export const authReducer = (state:DataType = initialState , action: AuthActionType):DataType => {
    switch (action.type) {
      case SET_USER_DATA:
         return {
           ...state,
             id: action.userId,
             email: action.email,
             login: action.login,
            // isAuth: false
        }
        default:
          return state;
    }
 }
export const setAuthUserData = (userId: number,login:string,email:string,isAuth:boolean) => {
    return{type: 'SET_USER_DATA',data: {userId, email, login,isAuth}} as const
}
//санкрейтор
export const getAuthUserData=()=>(dispatch: Dispatch)=>{
   return authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data.login
                dispatch(setAuthUserData(id, login, email,true));
            }
        }) ;

}
//санкрейтор
export const login=(email:string, password:string, rememberMe:boolean)=>(dispatch:any)=>{
    authAPI.login(email,password,rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
              dispatch(getAuthUserData())
            }else {
                let message = response.data.message.length>0 ? response.data.message[0] :"Common error";
                dispatch( stopSubmit("login",{email: message}));

            }
        });

}
//санкрейтор
export const logout=()=>(dispatch: any)=>{
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        });

}

 export default authReducer;
// {id: 1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
//     followed:false, fullName: "Dima", status: "Hello",location:{city:"Minsk", country: "Belarus"}},
// {id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
//     followed:false, fullName: "Eska", status: "Hello",location:{city:"Brest", country: "Belarus"}},
// {id: 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
//     followed:true,fullName: "Leonid", status: "Hello",location:{city:"Lida", country: "Belarus"}}