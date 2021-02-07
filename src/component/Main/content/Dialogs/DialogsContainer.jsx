import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../../hoc/withAuthRedirect';
import { sendMessageCreator } from '../../../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

/*const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <Dialogs dialogsPage={state.dialogsPage}
            updateNewMessageText={onMessageChange}
            sendMessage={onSendMessageClick}
             />
    )
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText)=> {
            dispatch(sendMessageCreator(newMessageText));
        }
    }
}




export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
