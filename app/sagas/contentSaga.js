import UserContentApi from "./../saga_api/userContentSagaAPI";
import {call,put} from 'redux-saga/effects';

export function* getContent(action){
    //data là object được qui định bên api
    /*let data = {
        userContent:null,
        error:null
    };*/
    try{
        var newUserContent = yield call(UserContentApi.getContent,action);        
        yield put({
            type:"contact.getcontactSuccess",
            data:newUserContent 
        });
    }catch(e){
        yield put({
            type:"contact.getcontactError",
            error:e.message
        });
    }
}
export function* getLogin(action){    
    try{              
        var newUserContent = yield call(UserContentApi.getLogin,action);
       
        yield put({
            type:"contact.getcontactSuccess",
            data:newUserContent
        });
    }catch(e){        
        yield put({
            type:"contact.getcontactError",
            error:e.message
        })
    }
}
export function* startSignup(action){
    try{              
        var newUserContent = yield call(UserContentApi.startSignup,action);
       
        yield put({
            type:"contact.getcontactSuccess",
            data:newUserContent
        });
    }catch(e){        
        yield put({
            type:"contact.getcontactError",
            error:e.message
        })
    }
}