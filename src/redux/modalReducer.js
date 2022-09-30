import {CLOSE_MODAL, OPEN_MODAL} from './types'

const initialState = { isChecked: false }

export const modalReducer = (state = initialState, action) => {
    switch (action.type){
        case OPEN_MODAL:
            return {...state, isChecked: true,
            }
        case CLOSE_MODAL:
            return {...state, isChecked: false}
        default:
            return initialState
    }
}