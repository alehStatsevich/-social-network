import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reduser";
import { RouteComponentProps,withRouter} from "react-router";

type ParamsType ={
    userId: string
}
type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUsersProfile: (profile: any) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<ParamsType>& OwnPropsType

class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return <Profile{...this.props} profile={this.props.profile}/>
    }
}


let mapStateToProps = (state: any): MapStatePropsType => ({
    profile: state.profilePage.profile
})


let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataContainerComponent);
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


