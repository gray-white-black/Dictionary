import {combineReducers} from 'redux'
import {wordsReducer} from "./wordsReducer";
import {modalReducer} from "./modalReducer";

export const rootReducer = combineReducers({
    words: wordsReducer,
    modal: modalReducer
})