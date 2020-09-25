
<template>
    <div class="tab">
       <router-link to='/recommend' tag='div' active-class='sel'><span>推荐</span></router-link>
       <router-link to='/singer' tag='div' active-class='sel'><span>歌手</span></router-link>
       <router-link to='/rank' tag='div' active-class='sel'><span>排行</span></router-link>
       <router-link to='/my' tag='div' active-class='sel'><span>我的</span></router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@import '../../style/index.less';
.tab{
    .w(375);
    height: 44px;
    display: flex;
    div{
        // background: pink;
        width: 25%;
        font-size: @fs-s;
        color: rgba(255,255,255,0.5);
        text-align: center;
        line-height: 44px;
        
    }
    .sel{
        color: @yellow;
        span{
            border-bottom: 1px solid @yellow;
            padding-bottom: px;
        }
    }
}


</style>