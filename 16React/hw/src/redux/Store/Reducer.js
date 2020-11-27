import State from './State'

export default (preState = State, actions) => {
    let newData = preState
    let { type, payload } = actions

    switch (type) {
        case 'CHANGE_NAME':
            newData.name === 'kevin' ? newData.name = payload : newData.name = 'kevin'
            break;
        case 'CHANGE_AGE':
            newData.age = payload; 
             
            break;
        default:
            break;
    }
    return newData
}