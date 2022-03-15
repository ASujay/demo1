import listActionTypes from "../actionTypes/listActionTypes"

// define the initial state

const INTIAL_STATE = {
    list: []
}

const removeLastElement = (list) => {
    const newList = [...list]
    return newList.pop()
}

const listReducer = (state = INTIAL_STATE, action) =>{
    switch(action.type){
        case listActionTypes.ADD_TO_LIST:{
            return {
                ...state,
                list: [
                    ...state.list,
                        action.payload.displayCard
                ]
            }
        }

        case listActionTypes.REMOVE_FROM_LIST:{
            return {
                ...state,
                list: state.list.slice(0, state.list.length - 1)
            }
        }

        default:{
            return {...state}
        }
    }
}

export default listReducer