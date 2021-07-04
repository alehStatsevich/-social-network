import React from "react";
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import {Preloader} from "../../Preloader";

type ProfileInfoType = {
    profile: null | any
    status: string
    updateStatus:  ()=> void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.descriptionBlock}>

            <img src={props.profile.photos.large} alt={''}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            {/*<ProfileStatus status={props.status} updateStatus={props.updateStatus}/>*/}
        </div>
    </div>
}
export default ProfileInfo;









