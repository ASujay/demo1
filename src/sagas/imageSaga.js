import {put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from 'axios'
import listActionTypes from '../actionTypes/listActionTypes'
import DisplayCard from "../components/displayCard"
import { addToList } from '../actions/listActions'

export function* getImage(){
    let result = yield axios.get('https://meme-api.herokuapp.com/gimme/1') 
    yield put(addToList({
        name: result.data.memes[0].title,
        key: result.data.memes[0].title,
        image_url: result.data.memes[0].url
    }))
}

export function* imageSaga(){
    yield takeLatest(listActionTypes.FETCH_DATA, getImage)
}
