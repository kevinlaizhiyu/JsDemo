import State from './State'

//preState 是修改前的数据  State 表示的是初始值（默认值）所以不能够直接写 State

export default (preStates = State,actions)=>{
    let newData = preStates
    
    let {type, payload} = actions
    switch (type) {
        case 'CHANGE_NAME':
            newData.name = payload
            
            break;
        case 'CHANGE_AGE':
            newData.age = payload
            
            break;
    
        default:
            break;
    } 

    return newData
}
