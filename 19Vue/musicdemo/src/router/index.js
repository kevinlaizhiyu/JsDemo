import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/Recommend/recommend.vue'
import Singer from '../components/Singer/singer.vue'
import Rank from '../components/Rank/rank.vue'
import My from '../components/My/my.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/recommend',
    component:Recommend
  },
  {
    path:'/singer',
    component:Singer
  },
  {
    path:'/rank',
    component:Rank
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'/',
    redirect:'/recommend'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
