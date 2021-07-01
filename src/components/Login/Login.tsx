import React from "react";
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {LoginTC} from "../../redux/auth-reduser";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type LoginPropsType = {
    LoginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}
                /> remember me
            </div>
            {props.error && <div>{props.error}</div>}
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);


const Login = (props: LoginPropsType) => {
    const onSubmitT = (data: FormDataType) => {
        props.LoginTC(data.email, data.password, data.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmitT}/>
        </div>
    )
}
const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {LoginTC})(Login)
