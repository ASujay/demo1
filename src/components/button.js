import React from "react"
import store from "../store"
import { addToList, removeFromList } from "../actions/listActions"
import DisplayCard from "./displayCard"


const Button = props => {
    return (
        <div>
            <button onClick = {()=>addElementToList()}>Add</button>
            <button onClick = {()=>removeElementToList()}>Remove</button>
        </div>
    )
}

export default Button