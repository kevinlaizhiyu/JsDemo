import {createStore} from 'redux'
import reducer from './Reducer'

let Store = createStore(reducer)

export default Store