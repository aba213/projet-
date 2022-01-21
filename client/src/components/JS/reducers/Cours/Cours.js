import {
    GET_COURS_FAIL,
    GET_COURS_SUCCESS,
    GET_COURS_LOAD,
    GET_COURS,
    EDIT_COURS,
} from "../../const/Cours/Cours";

const initialState = {
   Coursliste: [],
    loadCours: false,
    errors: null,
   
    editCours: "",
};

export const CoursReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COURS_LOAD:
            return { ...state, loadCours: true };
        case GET_COURS_SUCCESS:
            return { ...state, Coursliste: payload, loadCours: false };
        case GET_COURS_FAIL:
            return { ...state, loadCours: false, errors: payload };

        case GET_COURS:
            return { ...state, Cours: payload };
        case EDIT_COURS:
            return { ...state, editCours: payload };

        default: return state;

    }
}