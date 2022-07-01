import { othersConstants } from '../constants'

export const othersActions = {
    handleTitle
}

const handleTitle = title => {
    return dispatch => {
        dispatch({
            type: othersConstants.SET_TITLE,
            payload: title
        })
    }
}