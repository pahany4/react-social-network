import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../../../redux/profile-reducer';
import CreatePost from './CreatePost';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText)=> {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}



const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer;