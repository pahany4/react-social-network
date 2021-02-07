import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: 'bla bla' },
        { id: 2, post: 'dada' },
        { id: 3, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis id quis eligendi blanditiis asperiores numquam qui. Eaque pariatur impedit ex, tenetur et in consectetur at laudantium fugit dicta velit?' },
        { id: 4, post: 'Yo' }
      ],
      newPostText: ''
    },

    dialogsPage: {
      messages: [
        { id: 1, message: 'Yes' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Lorem ipsum dolor sit amet.' },
        { id: 4, message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, cumque?' },
      ],
      newMessageText: '',

      dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' }
      ]
    }
  },

  _callSubscriber() { },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _addPost() {
    const newPost = {
      id: 5,
      post: this._state.profilePage.newPostText
    };

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber();
  }

}

//window.store = store;
export default store;