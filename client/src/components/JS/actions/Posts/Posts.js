import {
    GET_Posts_FAIL,
    GET_Posts_SUCCESS,
    GET_Posts_LOAD,
    DELETE_Posts,
    GET_Posts,
    EDIT_Posts,
} from "../../const/Posts/Posts";
import axios from "axios";

export const getPosts = () => async (dispatch) => {
    dispatch({ type: GET_Posts_LOAD });
    try {
        let result = await axios.get("/Posts");
        console.log(result)
        dispatch({ type: GET_Posts_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_Posts_FAIL, payload: error });
        console.log(error);
    }
};

export const deletePosts = (id) => (dispatch) => {
    axios
        .delete(`/Posts/${id}`)
        .then((res) => dispatch(getPosts()))
        .catch((err) => console.log(err));
};

export const getPosts = (id) => (dispatch) => {
    axios
        .get(`/Posts/${id}`)
        .then((res) => dispatch({ type: GET_Posts, payload: res.data.response }))
        .catch((err) => console.log(err));
};

export const postPosts = (user) => async (dispatch) => {
    try {
        const result = await axios.post("/Posts", user);
        dispatch(getPosts());
    } catch (error) {
        console.log(error.response);
    }
};

export const editPosts = (id, user) => (dispatch) => {
    axios
        .put(`/Posts/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_Posts, payload: res.data.message });
        })
        .then(dispatch(getPosts()))
        .catch((err) => console.log(err));
};