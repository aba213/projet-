import { TOGGE_FALSE, TOGGE_TRUE } from "../../const/Cours/edit";

const initialState = {
  edit: false,
};
export const editCoursReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGE_TRUE:
      return { ...state, edit: true };

    case TOGGE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};