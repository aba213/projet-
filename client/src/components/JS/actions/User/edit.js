import { TOGGLE_FALSE, TOGGLE_TRUE } from "../../const/User/edit";

export const toggleTrue = () => {
    return {
        type: TOGGLE_TRUE,
    };
};
export const toggleFalse = () => {
    return {
        type: TOGGLE_FALSE,
    };
};