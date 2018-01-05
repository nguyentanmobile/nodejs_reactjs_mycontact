import {fork,takeLatest} from 'redux-saga/effects';
import {getContact} from './contactsaga';
export default function* sagas(){
    yield[
        fork(takeLatest,'getContact',getContact),
    ]
}