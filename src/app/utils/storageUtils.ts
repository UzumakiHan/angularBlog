import store from 'store'
const USER_INFO = 'user_key';

/*包含 n 个操作 local storage 的工具函数的模块 */

export default{
    saveUser(user){
        store.set(USER_INFO,user);
    },
    getUser(){
        return store.get(USER_INFO) || {}
    },
    removeUser(){
        store.remove(USER_INFO);
    }
}