import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reduser";


type MapStatePropsType = {
    profile: any
}
type MapDispatchPropsType = {
    setUsersProfile: (profile: any) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType


class ProfileContainer extends React.Component <PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        // @ts-ignore
        return <Profile{...this.props} profile={this.props.profile}/>
    }
}



let mapStateToProps = (state: any): MapStatePropsType => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);
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


