import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateType = {
    isAuth: boolean
}
let mapStateToPropsForRedirect = (state: AppStateType): mapStateType=> {
    return {
        isAuth: state.auth.isAuth
    }
}




//перенапровление Redirect
export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateType) => {
        let {isAuth,...restProps} = props
        if (isAuth) return <Redirect to={'/Login'}/>
        return <Component {...restProps as T}/>

    }

   let ConnectedAuthRedirectComponent= connect(mapStateToPropsForRedirect)(RedirectComponent)


    return  ConnectedAuthRedirectComponent;
}