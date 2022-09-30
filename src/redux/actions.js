import {
        CHECK_WORD,
        CLOSE_MODAL,
        CREATE_RANDOM_PAIR,
        CREATE_RANDOM_TRANSLATE,
        CREATE_RANDOM_WORD,
        CREATE_WORD,
        ERROR_CREATE_WORD,
        ADD_TRUE_TRANSLATE,
        OPEN_MODAL,
        NEXT_ROUND,
        CLEAR_TRANSLATE,
        CORRECT_ANSWER,
        CLEAN_ALL, CLEAN_RESULT, SHUFFLE_ARRAY_TRANSLATE, TOGGLE_GAME

} from "./types";

export const createWord = (word) => ({
        type: CREATE_WORD,
        payload: word
})
export const errorCreateWord = (word) => ({
        type: ERROR_CREATE_WORD,
        payload: word
})
export const createModal = () => ({
        type: OPEN_MODAL
})
export const closeModal = () => ({
        type: CLOSE_MODAL
})
export const checkWord = (word) => ({
        type: CHECK_WORD,
        payload: word
})
export const CreateRandom = () =>({
        type: CREATE_RANDOM_WORD
})
export const CreateRandomTranslate = () =>({
        type: CREATE_RANDOM_TRANSLATE
})
export const CreateRandomPair = (word) => ({
       type: CREATE_RANDOM_PAIR,
        payload: word
})
export const AddTrueTranslate = () => ({
        type: ADD_TRUE_TRANSLATE
})
export const NextRound = () => ({
        type: NEXT_ROUND,
})
export const ClearTranslate = () => ({
        type: CLEAR_TRANSLATE
})
export const CorrectAnswer = () => ({
        type: CORRECT_ANSWER
})
export const IsStartGame = (boolean) => ({
        type: TOGGLE_GAME,
        payload: boolean
})
export const CleanState = () => ({
        type: CLEAN_ALL
})
export const CleanResult = () => ({
        type: CLEAN_RESULT
})
export const ShuffleArrTranslate = () => ({
        type: SHUFFLE_ARRAY_TRANSLATE
})