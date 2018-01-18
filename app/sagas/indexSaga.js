import {fork,takeLatest} from 'redux-saga/effects';
import {getContent,getLogin,startSignup} from './contentSaga';
export default function* sagas(){
    yield[
        fork(takeLatest,'getContent',getContent),
        fork(takeLatest,'getLogin',getLogin),
        fork(takeLatest,"startSignup",startSignup)
    ]
}