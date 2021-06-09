import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reduser";
import {Redirect} from "react-router-dom";
import styles  from "../common/FormsControls/FormsControls.module.css"

type FormDataType={
    login: any
    email: string
    password: string
    rememberMe: boolean
}
 export const  LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       type={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'}
                       validate={[required]}
                       component={Input}/> remember me
            </div>
            {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})( LoginForm)

function Login (props:any) {
    const  onSubmit = (formData: FormDataType)=>{
       props.login (formData.email, formData.password,formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps=(state: any)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{login}) (Login)