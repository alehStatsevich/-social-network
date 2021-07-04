import React from 'react';
import s from './Preloader.module.css'
// import preloader from "../assets/images/preloader.gif"
//
// let Preloader =() =>{
//     return <div style={{ backgroundColor: "cornflowerblue"}}>
//         <img src={preloader}/>
//
//     </div>
// }
// export default Preloader

//-------------- Preloader 2 ------------------ =>
export const Preloader = () => {
    return (
        <>
            <div className={s.loading}>
                <div className={s.loading_text}>
                    <span className={s.loading_text_words}>L</span>
                    <span className={s.loading_text_words}>O</span>
                    <span className={s.loading_text_words}>A</span>
                    <span className={s.loading_text_words}>D</span>
                    <span className={s.loading_text_words}>I</span>
                    <span className={s.loading_text_words}>N</span>
                    <span className={s.loading_text_words}>G</span>
                    <span className={s.loading_text_words}>.</span>
                    <span className={s.loading_text_words}>.</span>
                    <span className={s.loading_text_words}>.</span>
                </div>
            </div>
        </>
    );
};
export default Preloader