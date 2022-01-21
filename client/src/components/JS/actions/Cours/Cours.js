import {
    GET_COURS_FAIL,
    GET_COURS_SUCCESS,
    GET_COURS_LOAD,
    DELETE_COURS,
    GET_COURS,
    EDIT_COURS,
} from "../../const/Cours/Cours";
import axios from "axios";

export const getCours = () => async (dispatch) => {
    dispatch({ type: GET_COURS_LOAD });
    try {
        let result = await axios.get("/Cours");
        
        dispatch({ type: GET_COURS_SUCCESS, payload: result.data });
    } catch (error) {
        dispatch({ type: GET_COURS_FAIL, payload: error });
        console.log(error);
    }
};

export const deleteCours = (id) => (dispatch) => {
    axios
        .delete(`/Cours/${id}`)
        .then((res )=> dispatch(getCours()))
        .catch((err) => console.log(err));
};

// export const getCours = (id) => (dispatch) => {
//     axios
//         .get(`/Cours/${id}`)
//         .then((res) => dispatch({ type: GET_COURS, payload: res.data.response }))
//         .catch((err) => console.log(err));
// };

export const postCours = (user) => async (dispatch) => {
    try {
        const result = await axios.post("/Cours", user);
        dispatch(getCours());
    } catch (error) {
        console.log(error.response);
    }
};

export const editCours = (id, user) => (dispatch) => {
    axios
        .put(`/Cours/${id}`, user)
        .then((res) => {
            dispatch({ type: EDIT_COURS, payload: res.data.message });
        })
        .then(dispatch(getCours()))
        .catch((err) => console.log(err));
};