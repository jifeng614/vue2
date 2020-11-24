import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hi from '@/components/hi'
import hello from '@/components/hello'
import home from '@/views/home'
import denglu from '@/views/denglu'
import jiekou from '@/views/jiekou'
import zhuce from '@/views/zhuce'
import count from '@/views/count'

Vue.use(Router)

let router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:"/hi",
      name:"hi",
      component:hi
    },
    {
      path:"/hello",
      name:"hello",
      component:hello
    },
    {
      path:"/home",
      name:"home",
      component:home
    },
    {
      path:"/denglu",
      name:"denglu",
      component:denglu
    },
    {
      path:"/jiekou",
      name:"jiekou",
      component:jiekou
    },
    {
      path:"/zhuce",
      name:"zhuce",
      component:zhuce
    },
    // {
    //   path:"/fenye",
    //   name:"fenye",
    //   component:fenye
    // },
    {
      path:"/count",
      name:"count",
      component:count
    }
  ]
})
export default router