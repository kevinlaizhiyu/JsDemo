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