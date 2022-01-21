import {
    GET_POSTS_FAIL,
    GET_POSTS_SUCCESS,
    GET_POSTS_LOAD,
    GET_POSTS,
    EDIT_POSTS,
} from "../../const/Posts/Posts";

const initialState = {
   post: [],
    loadPosts: false,
    errors: null,
    Post: {},
    editPosts: "",
};

export const PostsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POSTS_LOAD:
            return { ...state, loadPosts: true };
        case GET_POSTS_SUCCESS:
            return { ...state, Post: payload, loadCours: false };
        case GET_POSTS_FAIL:
            return { ...state, loadPosts: false, errors: payload };

        case GET_POSTS:
            return { ...state, Post: payload };
        case EDIT_POSTS:
            return { ...state, editPosts: payload };

        default: return state;

    }
}