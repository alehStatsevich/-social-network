import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props:any)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newMessageBody'  placeholder='Enter your message' component={Textarea}
                validate= {[required,maxLength50]}/>
            </div>
            <div><button>send</button></div>
        </form>
    )
}
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)