import state from './state'
export default (preState=state,actions)=>{
    let newData = preState
    
    let {type,payload}=actions

    switch (type) {
        case 'ADD_LIST':
            newData.list.push({msg:payload,finish:false})   
            break;
    
        case 'DEL_LIST':
            newData.list.splice(payload,1)   
            break;
    
        default:
            break;
    }

    return newData
}