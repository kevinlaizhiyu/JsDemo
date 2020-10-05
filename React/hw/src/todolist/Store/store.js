import {createStore,applyMiddleware} from 'redux'
// applyMiddleware要和 react-readux 一起使用
import reducer from './reducer'

let store = createStore(reducer)

export default store