import {
    CHECK_WORD,
    CREATE_RANDOM_TRANSLATE,
    CREATE_WORD,
    CREATE_RANDOM_WORD,
    ERROR_CREATE_WORD,
    CREATE_RANDOM_PAIR,
    ADD_TRUE_TRANSLATE,
    NEXT_ROUND,
    CLEAR_TRANSLATE,
    CORRECT_ANSWER,
    START_GAME, END_GAME, CLEAN_ALL, CLEAN_RESULT, SHUFFLE_ARRAY_TRANSLATE, TOGGLE_GAME
} from "./types";

const initialState = {
    words: [],
    randomWords: [],
    randomTranslate: [],
    randomPair: [],
    rounds: 0,
    responseRate: 0,
    isStartGame: false
}
const round = 1;

export const wordsReducer = (state = initialState, action) => {
    switch (action.type){
        case CREATE_WORD:
            return {...state, words: state.words.concat(action.payload) }
        case ERROR_CREATE_WORD:
            return state
        case CHECK_WORD:
            return {...state,
            words: state.words.map(word =>
                word.id === action.payload ?
                    {
                        ...word,
                        isCheck: !word.isCheck
                    } : word
            ),
            }
        case CREATE_RANDOM_WORD:
            return {...state,  randomWords: [...state.randomWords, state.words[Math.floor(Math.random() * state.words.length)]]}
        case CREATE_RANDOM_TRANSLATE:
            return {...state, randomTranslate: [...state.randomTranslate, state.randomWords[Math.floor(Math.random() * state.randomWords.length)]]}
        case ADD_TRUE_TRANSLATE:
            return {...state,
            randomTranslate: state.randomTranslate.concat(state.randomWords[state.rounds])
            }
        case SHUFFLE_ARRAY_TRANSLATE:
            return {...state,
            randomTranslate: state.randomTranslate.sort(() => Math.random() - 0.5)
            }
        case CREATE_RANDOM_PAIR:
            return {
                ...state, randomPair: state.randomPair.concat(action.payload)
            }
        case CLEAR_TRANSLATE:
            return {
                ...state, randomTranslate: ''
            }
        case NEXT_ROUND:
            return {...state,
                rounds: state.rounds + round
            }
        case CORRECT_ANSWER:
            return {...state,
                responseRate: state.responseRate + round
            }
        case TOGGLE_GAME:
            return {...state,
                isStartGame: action.payload
            }
        case CLEAN_ALL:
            return {...state,
                randomWords: "", randomTranslate: "", rounds: 0
            }
        case CLEAN_RESULT:
            return {...state,
                responseRate: 0}
        default:
            return state
    }
}