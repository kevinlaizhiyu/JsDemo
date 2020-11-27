<template>
    <div>
        <h3>这里是less 案例</h3>
        <hr>
        <div class="demo">

        </div>
        <div class='test'>
            <p>
                <span></span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
// 1rem = 375/10=37.5
@import '../../../style/index.less';

.demo{
    .w(187.5);
    // width: 5rem;
    height: 100px;
    background: pink;
}



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