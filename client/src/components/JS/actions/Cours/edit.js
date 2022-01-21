import { TOGGE_FALSE, TOGGE_TRUE } from "../../const/Cours/edit";

export const toggleTrue = () => {
    return {
        type: TOGGE_TRUE,
    };
};
export const toggleFalse = () => {
    return {
        type: TOGGE_FALSE,
    };
};