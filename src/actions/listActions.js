import listActionTypes from "../actionTypes/listActionTypes"

const addToList = DisplayCardElement => {
    return {
        type: listActionTypes.ADD_TO_LIST,
        payload:{
            displayCard: DisplayCardElement
        }
    }
}

const removeFromList = () => {
    return {
        type: listActionTypes.REMOVE_FROM_LIST
    }
}

export {addToList, removeFromList}