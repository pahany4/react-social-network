import { profileAPI, usersAPI } from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCEESS = 'SAVE_PHOTO_SUCCEESS';

let initialState = {

    posts: [
        { id: 1, post: 'bla bla' },
        { id: 2, post: 'dada' },
        { id: 3, post: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis id quis eligendi blanditiis asperiores numquam qui. Eaque pariatur impedit ex, tenetur et in consectetur at laudantium fugit dicta velit?' },
        { id: 4, post: 'Yo' }
    ],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                post: action.newPostText
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        }

        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }


        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }

        case SAVE_PHOTO_SUCCEESS: {
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCEESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


// export const savePhoto = (file) => async (dispatch) => {
//     let response = await profileAPI.savePhoto(file)

//     if (response.data.resultCode === 0) {
//         dispatch(savePhotoSuccess(response.data.data.photos));
//     }
// }


export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;
