import store from './store'
export default{
    addList(msg){
        store.dispatch({
            type:'ADD_LIST',
            payload:msg
        })
    },
    delList(msg){
        store.dispatch({
            type:'DEL_LIST',
            payload:msg
        })
    }
}