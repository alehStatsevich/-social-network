import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/auth-reduser";


export type PropsType = {
    isAuth: boolean
    login: string
    getAuthUserData: () => void
    logout?: () => void
}


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {logoutTC})(HeaderContainer);








