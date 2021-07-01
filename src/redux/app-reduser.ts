import {getAuthUserDataTC} from "./auth-reduser";

export const SET_INITIALIZED = 'SET_INITIALIZED';

type DataType = {
    initialized: boolean
}

type AuthActionType = SetUserDataACType
type SetUserDataACType = {
    type: typeof SET_INITIALIZED,
    userId: number
    email: string
    login: string
};

let initialState: DataType = {
    initialized: false
}
export const appReducer = (state: DataType = initialState, action: AuthActionType): DataType => {
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
export const initialized = () => {
    return {type: 'SET_INITIALIZED'} as const
}
//санкрейтор
export const initializeApp = () => (dispatch: any) => {
    let promise = (getAuthUserDataTC());
    Promise.all([promise])
        .then(() => {
            dispatch(initialized())
        })


}
export default appReducer;