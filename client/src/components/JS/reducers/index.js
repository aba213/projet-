import { combineReducers } from "redux";
import { userReducer }from"./User/User" ;
import {CoursReducer} from './Cours/Cours';
import {PostsReducer} from './Posts/Posts';
import{editPostsReducer} from './Posts/edit';
import {editCoursReducer} from './Cours/edit';
import {editUserReducer} from './User/edit';


export const rootReducer=combineReducers({userReducer,CoursReducer,PostsReducer,editUserReducer,editPostsReducer,editCoursReducer});