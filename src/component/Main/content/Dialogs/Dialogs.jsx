import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import classes from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../../common/FormsControls/FormsControls';
import { maxLengthCreator } from '../../../../utils/validators/validators';

const Dialogs = (props) => {

let addNewMessage = (values) => {
    
    props.sendMessage(values.newMessageText);
}

    let dialogs =
        props.dialogsPage.dialogs.map((dialog) =>
            <DialogItem id={dialog.id} name={dialog.name} />)

    let messages =
        props.dialogsPage.messages.map((messages) =>
            <MessageItem id={messages.id} message={messages.message} />)

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <SimpleBar style={{ maxHeight: 180 }}>
                    {dialogs}
                </SimpleBar>
            </div>

            <div className={classes.messages}>
                <SimpleBar style={{ maxHeight: 180 }}>
                    {messages}
                </SimpleBar>
            </div>

            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

let maxLength50 = maxLengthCreator(5)


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field cols="20" rows="5" 
                component={Textarea} 
                name="newMessageText"
                validate= {[maxLength50]}
                />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;
