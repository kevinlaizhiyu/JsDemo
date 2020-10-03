//actionCreater 的本质是一个对象，在这个对象中有很多的方法，这些方法就是用来传递
import Store from './Store'
export default {
    changeName() {
        //创建方法
        let action = {
            type: 'CHANGE_NAME',//type 是必须项，告诉 reducer 要修改哪一条数据
            payload: 'david',

        }
        //发送方法
        Store.dispatch(action)
    },

    changeAge() {
        let action = {
            type: "CHANGE_AGE",
            payload: 28
        }
        Store.dispatch(action)
    }
}