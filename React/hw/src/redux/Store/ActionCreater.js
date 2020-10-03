import Store from './Store'
export default {
    changeName(){   
       let action = {
        type:'CHANGE_NAME',
        payload:'David'
       }
       Store.dispatch(action)
    },

    changeAge(){
        let action = {
            type:'CHANGE_AGE',
            payload:23
        }
        Store.dispatch(action)
    }
    
}