import storageUtils from '../utils/storageUtils'

//初始状态
export const initUser =storageUtils.getUser();;   //state 



export interface AppState {
    initUser: object;
 
}
