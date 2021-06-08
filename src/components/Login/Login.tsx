import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormsControls";

type FormDataType={
    login: string
    password: string
    rememberMe: boolean
}
 export const  LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'}
                       validate={[required]}
                       component={Input}/>
            </div>
            <div>
                <Field type={'checkbox'} name={'remember me'}
                       validate={[required]}
                       component={Input}/> remember me
            </div>
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

function Login () {
    const  onSubmit = (formData: FormDataType)=>{
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Login