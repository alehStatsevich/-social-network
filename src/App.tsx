import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


// type StatePropsType = {
//     state: StateType
//     addPost: () => void;
//     changeText: (newPostText: string) => void;
// }
// type PropsType = {
//     store:  StoreType
//     dispatch:  (action: ActionsType )=> void
// }

function App() {

    return (

        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
            </div>
        </div>

    );
}

export default App;
// posts={props.store.getState().profilePage.posts}
// likesCount={props.store.getState().profilePage.posts}
// message={props.store.getState().profilePage.posts}
// <DialogsContainer store={props.store}/
// <Profile store={props.store}
//          dispatch={props.store.dispatch.bind(props.store)}

