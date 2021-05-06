
import { Action } from '@ngrx/store';

import {  initUser } from './state';
import {
    RECEIVE_USER,
    SHOW_ERROR_MSG,
    RESET_USER,
    UPDATE_USER
} from './action-types'
import {reqLogin} from '../api/index';
import storageUtils from '../utils/storageUtils'
/**
 * 用来管理当前登录用户的reducer
 */


export  async function user(state:object=initUser,action: Action){
    console.log(action)
    switch (action.type) {
        case RECEIVE_USER:
            const result = await login((action as any).user.username,(action as any).user.password);
            return result
        case SHOW_ERROR_MSG:
            return {}
        case UPDATE_USER:
            return {}
        case RESET_USER:
            return {}
        default:
            return state;
    }
}

async function login(username,password){
    let user;
    const result = await reqLogin(username,password);
  //  console.log(result);
    if((result as any).success_code === 200){
        user = (result as any).data[0];
        storageUtils.saveUser(user)
    }else{
        user = result
    }
    return user
}