import React , {Component, Fragment} from 'react' 

export default (TempComponent)=>{
    class NewComponent extends Component{
        constructor(){
            super()
            this.state={
                name:'数据加载中'
            }
        }
        componentDidMount(){
            let name = localStorage.getItem('name')
            setTimeout(() => {
                this.setState({name})
            }, 2000);
        }
        render(){
            return(
                <Fragment> 
                    <TempComponent name={this.state.name}></TempComponent>
                </Fragment>
            )
        }
    }

    return NewComponent
}