
------> vue 部分 <--------
# musicdemo

### 移动端适配（样式方面）

一套代码 在不同的设备上的显示基本一样

##### pc端适配  -->  百分比 媒体查询 flex布局 rem
主要是 媒体查询(栅格  栅栏)+百分比 

#### 移动端适配 --> rem+flex
核心思路：尺寸和 rem 的关系 
1. 将根元素的字体大小设置为屏幕宽度的 10%
  (1) public 下  index.html 的 script标签内
  document.documentElement.style.fontSize=document.documentElement.clientWidth/10 +'px'
  (2) 添加媒体标记 不允许用户的缩放
  <meta name="viewport" content="width=device-width,initial-scale=1.0"> 
  (3) 完整的媒体标记
  <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no,minimum-scale=1,maximum-scale=1">
2. 结合 rem 来实现响应式

设计分辨率 iPhone6s 375*667  750*1334

### 兼容问题
swiper 3 4 5(低版本的 iOS 只能够使用swiper3)
css中新增的 H5特性不支持低版本浏览器
websocket 低版本浏览器不支持

### 预处理语言  sass less stylus

### 命名规范
1. 文件夹的命名 小写字母连接符的命名方式  my-demo
2. 文件的命名   小驼峰  或者连接符      myDemo.js  或者  my-demo.js   
3. 组件和类文件以及相关的文件夹  大驼峰   MyBanner.vue  或者 MyBanner.js
4. index.js  index.vue 这种特殊情况使用小写的就行

    在模板中 -d = D
     <LessDemo></LessDemo>
     <less-Demo></less-Demo>
     <lessDemo></lessDemo>


### 使用方法

<style lang="less" scoped>
//变量使用
@color:green;
//简单计算
@width:100px;
@height:@width+100px;
.test{
    background: @color;
    width: @width;
    height: @height;
    .hehe(1px,black);
    p{
        background:yellow;
        height:40px;
        span{
            display: inline-block;
            background: purple;
            width: 100%;
            height: 20px;
        }
        
    }
}

//mixin混合 css 中的函数  可以实现对样式的封装 可以传参数
.hehe(@w,@borderColor){
    border:@w solid @borderColor;
    border-radius: 5px;
}

//嵌套
//转义字符 ~'anything' 按照原样式输出引号后边的文字
//作用域 只在当前的作用域生效
//导入 @import 'libarary'  后缀名是 less 的时候可以省略不写

//在 style 里边加上 scoped 属性表示在当前组件和子组件中生效，避免不同的组件之间的 style 样式混乱
</style>


### public 图片
public 路径下的所有的文件都只是使用'/wenjian'

### 网络请求
ajax
jq    不推荐
fetch
axios 推荐

------> react 部分 <--------
### 路由插件的基本使用

#### 下载安装
npm install react-router-dom

HashRouter BrowserRouter 哈西路由  历史路由  作为组建的父容器
 
#### 控制地址栏的改变 to
Link to exact
NavLink to exact activeClassName 

#### 控制组件的渲染
Route path exact component render children

##### Switch 百里挑一 只返回第一个第一个匹配到的组件
##### Redirect 重定向 form to exact
##### 404 页面  Route component={404页面组件}

#### 声明式导航 和 编程式导航 
1、声明式导航
通过Link  NavLink 的方式叫做声明式导航

2、编程式导航 的重点就是 寻找路由对象
通过 js 的方式进行跳转的方式叫做编程式导航  push replace go 

withRouter 是一个函数，能够接受一个组件作为参数，
返回一个新的组件，新的组件当中的的 props当中会被注入路由对象。
withRouter 的作用是 处理一个组件，给处理的组件当中添加路由对象

#### 路由传参
动态路由
query
state

#### 嵌套路由
路由里边使用路由 所有的路由组件都可以使用
主义在外层不要使用 exact 精准匹配

### react--day04
[做一个音乐tab选项卡实现路由拦截] 
[歌手 推荐 排行]

1. 歌手页面能够进  推荐和排行页面必须是登录状态才能够够进来 否则就只能够显示模态框

详细的代码参考 HOC 文件夹的内容

### 全局状态管理
Vuex   state  mutation  action  getter  module辅助函数
1. 多组件共享状态 多个组件使用同一个数据
2. 任何一个组件发生改变，其他使用数据的组件都会发生改变
3. 如果要修改数据，必须通过 mutation 来实现，通过 commit 方法来触发 mutation 当中的方法
4. 

#### 最简单的使用
{{this.$store.state.name}}

methods:{
    change(){//参数 1 是方法名，参数 2 是要传递的数据
        this.$store.commit('changeName',{name:'kevin',ps:123})
    }
}

mutations:{//修改全局状态值
    changeName(state,params){
    state.name = params.name
    }
}

#### 完整版的使用
1. 组件里边通过$store.state 获取全局状态数据进行渲染
2. 通过 $store.dispatch 触发 action 里边的方法
methods:{
    change(){
        this.$store.dispatch('changeAgeAction',{age:20})

    }
}

actions:{
    changeAgeAction({commit},pramas){
        commit('changeAge',pramas)
    }
}
3. action 触发 mutation 中的方法修改全局状态值

#### getters (相当于计算属性)
getters:{
    double(state){
        return state.age*2
    }
}

{{this.$store.getters.double}}

#### 5大核心
state 全局状态数据
mutation 规定只有 mutation 才能修改 state ，通过commit 方法触发
action 可以放置一步操作，触发 mutation 的相关方法 ， 通过 dispatch 触发
        
getter vuex 里边的计算属性，和 state 值进行关联，state 发生改变能够重新计算

#### action 存放异步的原因
1. 统一管理异步请求，减少代码量
2. 时间旅行，监听每一次数据的变化 （需要安装 Vue.jsdevtools 的开发者工具）

#### 辅助函数 --- 帮助我们减少代码量
> 1. mapState  映射到计算属性
import {mapState} from 'vuex'
computed:{
    ...mapState(['name','age','sex','unknow'])
}

{{name}}{{age}}{{sex}}{{unknow}}
 
> 2. mapMutation  映射到 methods
import {mapMutations} from 'vuex'
methods:{
    ...mapMutations(['changeName'])
    change(){
        changeName({name:'david'})
    }
}

> 3. mapGetters  映射到计算属性
import {mapGetters} from 'vuex'
computed:{
    ...mapGetters(['double'])
}
{{double}}

> 4. mapActions  映射到 methods
import {mapActions} from 'vuex'
methods:{
    ...mapActions(['changeNameAction'])
    change(){
        changeNameAction({name:'kevin'})
    }
}

#### 值类型向计算属性映射
mapState
mapGetters
#### 函数类型向 methods 里边映射
mapMutations
mapActions

#### 模块的使用
1. 模块化之后 state 数据的取值需要添加一级模块名，而其他三个核心没有变化
2. 可以再模块里添加命名空间 作用就是在 mutation getters actions 的前面添加模块名 用处就是防止冲突

先拆分，再合并
在 index.js 中写
modules:{
    modeOne:{
        namespace:true //开启命名空间 ---> 主要给其他三个核心使用的
        state:{name:'kevin'},
        mutations:{
            changeName(){
                state.name='david'
            }
        },
        getters:{},
        actions:{}
    },
    modeTwo:{
        state:{age:99},
        mutations:{
            changeAge(){
                state.age=99
            }
        },
        getters:{},
        actions:{}
    }
}
----
import {mapState} from 'vuex'
computed:{
    ...mapState({
        name:state=>state.moduleOne.name,
        age:state=>state.moduleTwo.age
    })
}
{{name}}{{age}}












-----------> react 部分<----------
Redux  ActionCreator ---dispatch---> Store  Reducer  ReactComponent 
#### 安装redux
npm install redux

store 发布状态
reducer 接受状态
component 修改数据
actionCreator 提交数据

环节 1 ---> 多组件共享状态 
store 创建一个 Store 对象  关联 reducer  
state 创建一个数据状态
reducer 接收数据 处理数据 抛出数据

环节 2 ---> action 


#### 样式作用域的问题
在 react 当中没有作用域，当不同组件的雷鸣重复的时候，导致我们的样式覆盖

#### redux 中的异步处理
同 vuex 中一样，我们可以将网络请求放到 actionCreater 中
1. 可以减少重复的代码，可以统一管理 API 接口
2. 时间旅行，更加精准得检测到全局状态值的变化

#### 模块化
combineReducers 帮助我们合并 reducer 实现模块化

//在 reducer 中使用
import todolist from './reducer'
export default createStore(combineReducrs(todolist:todolist))

//在 component 中使用
let {list} = store.getState().todolist 

### react-redux
优化模块 优化 redux 的使用过程

```
npm install redux react-redux
```
1. 优化全局状态的获取过程
>优化 Store 的引入
import {Provider} from 'react-redux'
import store from './reduc/Store/store

<Provider store=store /> //这样在App 之外就有一个根组件，把 store 就放到了根组件上边

import connect from 'react-redux'

connect本质是一个方法 返回一个高阶组件
connect()(处理的组件)
connect 方法有两个参数
参数 1 叫做 mapStateToProps
    本质是一个函数
        特点 1 该函数接受全局状态值作为参数
        特点 2 该函数返回的数据会被映射到当前组件的 props 当中
        let mapStateToProps = (state)=>{
            return state //返回的参数会被映射到当前组件的 Props 当中
        }

        let {name,age} = this.props //就能够拿到这些数据

这个参数在在 connect 中的简便的写法
connect(state=>state,)(Son2)

参数 2 叫做 mapDIspatchToprops

> 上下文 注册到 根组件当中之后 根组件下边所有的组件都能够访问根组件里边的上下文 
> how? 使用 Provider 来进行注册 ， 使用 connect 来进行访问

如果使用的是 redux 这个时候 actionCreater 的功能就是生成一个 action 对象，我们在使用的时候手动去发送 dispatch ,这个 dispatch 的 this.props 当中

[CHANGE_AGE](){
    let action={
        type:CHANGE_AGE,
        payload:'kevin
    }
    return acrion
}

<button onClick={()=>{
    let action = actionCreator.CHANGE_AGE
    this.props.dispatch(action)
}}>

在 reducer.js 文件中 
let newData = JSON.parse(JSON.stringfy(preState)) 
//1. 修改引用类型的数据的时候，会导致修改到原数据
//2. 新数据和老数据对比，发现没有变化 页面不更新

从此不用再写监听， 因为监听在 connect 这个组件中已经写了监听的功能了

》》》 mapDIspatchToprops
//1. 将 dispatch 映射到 props 当中去 
本质是一个函数，可以接收 dispatch 作为参数 
return 的对象也会映射到 props 当中去
如果为空 就会将 dispatch 映射到 props 中，如果不为空 就会将return 的内容映射到 props 中去

let mapDispatchToProps = (dispatch)=>{
    return {
        fun1(){
            let action = actionCreater.CHANGE_NAME
            dispatch(action)
        }
    }
}

connect(state=>state,dispatch=>dispatch)

---------------
<button onClick={this.props.fun1}></button>
---------------
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import ActionCreator from './Store/actionCreator'
....
export default connect(state=>state,dispatch=bindActionCreator(ActionCreator,dispatch))
//最终state 和 dispatch都写入了上下文中，通过 this.props 来进行调用属性和方法，也不用写监听了

2. 
import {connect} from 'react-redux'
import ActionCreator from './Store/actionCreator'
import ActionCreator from 'redux'
...
let {name,age,CHANGE_NAME,CHANGE_AGE} = this.props
<button onClick={()=>{CHANGE_NAME}}>改名</button>
<button onClick={()=>{CHANGE_AGE}}>改名</button>
...
export default connect(state=>state,dispatch=>bindActionCreator(ActionCreator,dispatch))(Son2)


3. react-redux 中 异步网络请求的问题 --- 异步中间件 
redux-thunk redux-saga redux-promise

异步的网络请求放到 ActionCreator 当中 会出现问题
```
[CHANGE_NAME](){
    
}
```
npm install redux-thunk //安装

import {createStore,applyMiddleware} from 'redux'//引入 applyMiddleware
import thunk from from 'redux-thunk'  //解决异步的插件 
import reducer from './Reducer' 

export default createStore(reducer,applyMiddleware(thunk)) //在 store.js 文件中修改

```引入异步中间件的时候，不使用异步没有任何的影响，一旦要使用异步，就要用下面的写法
[CHANGE_NAME](){
     return (dispatch)=>{ //在函数的内部进行相应的网络请求
         setTimout(()=>{ 
             let action ={ 
                 type:CHANGE_NAME,
                 payload:'kevin
             }
             dispatch(action)
         },1000)
     }
}
```
【区别】： connect中的 dispatch 是发送的是CHANGE_NAME的返回结果 ，但是>ApplyMiddleware<中间件中是异步请求，将 >connect< 中的 dispatch 传到 CHANGE_NAME的函数中，

setState是个异步操作，放在异步当中就会变成同步








【待查询】: redux-saga redux-promise的使用方法