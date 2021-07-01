import React, {ComponentType} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


type ParamsType = {
    userId: number
}
export type MapStatePropsType = {
    profile: any
    isAuth: any
    status: string
    authorizedUserId: any
}
type MapDispatchPropsType = {
    getUserProfile: (profile: any) => void
    getStatus: (status: any) => void
    updateStatus: (status: any) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
// @ts-ignore
type PropsType = RouteComponentProps<ParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return <Profile{...this.props}
                       profile={this.props.profile}
                       status={this.props.status}
                       updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // WithAuthRedirect
)(ProfileContainer);



