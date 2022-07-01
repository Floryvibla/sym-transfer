import { othersConstants } from "../constants"


const initialState = {
    title: "Flory"
}

export const othersReducers = (state =  initialState, action) => {
    switch (action.type) {
        case othersConstants.SET_TITLE:
            return {
                ...state,
                title: action.payload
            }
    
        default:
            return state;
    }
}

