


export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS= 'SET_USERS';
export const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';

 export type UserType = {
    id: number
     photos: any
     // photoUrl: any
    followed: boolean
    fullName:string
    status:string
    location: any

}

export type initialStateType = {
    users: UserType[]
    pageSize: any
    totalUsersCount:number
    currentPage: number
    isFetching:boolean
}


let initialState: initialStateType  = {
   users: [],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false
}

 export const usersReducer = (state= initialState , action: any): initialStateType => {
    switch (action.type) {
      case FOLLOW:
         return {
           ...state,
           //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
           // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
           //иначе возращаем не измененный обьект
           users: state.users.map(u=>{
              if(u.id=== action.userId){
                 return {...u,followed: true}
              }
              return u;
           })
        }

      case UNFOLLOW:
         return {
            ...state,
            //делаем копию обьекта юзерс мапим если юзер ид ===action.userId(берем его из const followAC = (userId))
            // возращаем копию обьекта ...u ( {id: 1,followed:false, fullName: "Dima",) и меняем значение followed на противоположное
            //иначе возращаем не измененный обьект
            users: state.users.map(u=>{
               if(u.id=== action.userId){
                  return {...u,followed: false}
               }
               return u;
            })
         }
      case SET_USERS: {
          //делаем копию стейта,берем копию старых юзеров и добавляем к ним юзеров которые пришли из action.users
          return {...state, users: action.users}
      }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING:{
            return {...state,isFetching:action.isFetching}
        }
       default:
          return state;
    }
 }
export const follow = (userId: number) => {
   return{type: 'FOLLOW',userId} as const
}
export const unfollow = (userId: number) => {
   return {type: 'UNFOLLOW',userId} as const
}
export const setUsers = (users: UserType[]) => {
   return {type: 'SET_USERS',users} as const
}
export const setCurrentPage = ( currentPage: number) =>{
     return {type:  SET_CURRENT_PAGE,  currentPage: currentPage} as const
}
export const setTotalUsersCount = (totalUsersCount: number) =>{
    return {type:  SET_TOTAL_USERS_COUNT, count:totalUsersCount} as const
}
export const toggleIsFetching = (isFetching: boolean) =>{
    return {type: TOGGLE_IS_FETCHING, isFetching} as const
}
 export default usersReducer;
// {id: 1,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujODEKwrdvmj6jufsQRsId0hv3Wr6vfppsA&usqp=CAU',
//     followed:false, fullName: "Dima", status: "Hello",location:{city:"Minsk", country: "Belarus"}},
// {id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBR5SL43JjDN9N0r_q0FLWhi1WSTq1nDi_Q&usqp=CAU',
//     followed:false, fullName: "Eska", status: "Hello",location:{city:"Brest", country: "Belarus"}},
// {id: 3,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI3DxknKrLBlFGLEtUQmCbc0adqoOYc0VLYQ&usqp=CAU',
//     followed:true,fullName: "Leonid", status: "Hello",location:{city:"Lida", country: "Belarus"}}