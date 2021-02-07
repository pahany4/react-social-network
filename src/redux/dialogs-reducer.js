const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messages: [
        { id: 1, message: 'Yes' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Lorem ipsum dolor sit amet.' },
        { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cumque?' },
    ],
    

    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            const newMessage = {
                id: 5,
                message: action.newMessageText
            };

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer;