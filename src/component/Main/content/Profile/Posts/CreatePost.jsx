import ava from './../../../../../img/ava.jpg';
import classes from './CreatePost.module.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator } from '../../../../../utils/validators/validators';
import { Textarea } from '../../../../common/FormsControls/FormsControls';



const CreatePost = (props) => {
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <AddNewPostForm onSubmit={onAddPost} />
    )
}

let maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.createPost}>
                <img src={ava} alt="ava" />
                <Field name="newPostText"
                //  cols="20" rows="5" 
                 component={Textarea} 
                 validate={[maxLength10]}
                 placeholder="Enter message"
                 />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({
    form: "ProfileAddNewPostForm"
})
    (AddNewPostForm)

export default CreatePost;