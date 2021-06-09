import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {SET_USER_DATA, getAuthUserData} from "../../redux/auth-reduser";



export type PropsType =  {
    isAuth: boolean
    login: string
    getAuthUserData: () => void
    logout?:()=>void
}


class HeaderContainer extends React.Component <PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
// authAPI.me()
//         // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
//         //     withCredentials: true
//         // })
//             .then(response => {
//                 if(response.data.resultCode === 0) {
//                     let {id, login, email} = response.data.data.login
//                     this.props.setAuthUserData(id, login, email)
//                 }
//         });
    }
    render() {

        return <Header {...this.props}/> //????????
    }
}
const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);









