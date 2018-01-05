import ApiContact from "./../saga_api/contactSagaAPI";
import {call,input} from 'redux-saga/effects';

export function* getContact(action){
    try{
        const newContact = yield call(ApiContact.getContact);
        yield put({
            type:"contact.getcontactSuccess",
            data:newContact
        });
    }catch(e){
        yield put({
            type:"contact.getcontactError",
            messageError:e.message
        });
    }
}