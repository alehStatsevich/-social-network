import React, {ComponentType} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reduser";
import {RouteComponentProps, withRouter} from "react-router";
import {Redirect} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


type ParamsType = {
    userId: number
}
 export type MapStatePropsType = {
    profile: any
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (profile: any) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
// @ts-ignore
type PropsType = RouteComponentProps<ParamsType> & OwnPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
        // userAPI.getProfile(userId)
        //  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        //     .then(response => {
        //         this.props.setUsersProfile(response.data);
        //     });
    }
    render() {

        return <Profile{...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
   // WithAuthRedirect
)(ProfileContainer);


// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default WithAuthRedirect( connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));

//hoc
// let AuthRedirectComponent = WithAuthRedirect(ProfileContainer)
//     (props:any) =>{
//     //перенапровление Redirect
//     if (props.isAuth === false) return <Redirect to="/Login"/>
//     return <ProfileContainer {...props}/>
// }
//   типизация
// posts: PostType[]
// likesCount: PostType[]
// message: PostType[]
// addPost: () => void
//     changeText: (newPostText: string) => void
//my post
// posts={props.posts}
// likesCount={props.likesCount}
// message={props.message}
// <MyPostsContainer store={props.store}
//                   dispatch={props.dispatch}/>
// type ProfilePropsType = {
//    store:  StoreType
//     dispatch: (action: ActionsType)=> void
// }


