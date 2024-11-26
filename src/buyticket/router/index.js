import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'
import Films from '../views/Films.vue'
// import Cinemas from '../views/Cinemas.vue'
// import Center from '../views/Center.vue'
import NotFound from '../views/NotFound.vue'
import Detail from '../views/Detail.vue'
import Login from '../views/Login.vue'
import City from '../views/City.vue'

import Nowplaying from '../views/films/Nowplaying.vue'
import Comingsoon from '../views/films/Comingsoon.vue'
const routes = [
    {
        path: "/films",
        name: "myfilms", // 命名路由
        component: Films,
        children:[
            {
                path:"/films/nowplaying",
                component:Nowplaying
            },
            {
                path:"comingsoon",
                component:Comingsoon
            },
            {
                path:"/films",
                redirect:'/films/nowplaying'
            }
        ]
    },
    //配置deteail
    {
        name:"Detail",
        path:'/detail/:myid', //   /detail/456
        component:Detail
    },
    
    {
        path: "/cinemas",
        component: ()=>import('../views/Cinemas.vue')
    },
    {
        path: "/center",
        alias:"/wode",// 别名
        component: ()=>import('../views/Center.vue'),
        meta:{
            requiredAuth:true
        }
    },
    //login
    {
        name:"Login",
        path:"/login",
        component:Login
    },

    {
        path:'/city',
        component:City
    },
    {
        path: "/",
        redirect:"/films"
    },

    
    {   path: '/:pathMatch(.*)*',  // /aaa /bbb /ccc  /aaa/a1/a2
        component: NotFound 
    }
]
const router = createRouter({
    history: createWebHistory(), // 
    routes, // `routes: routes` 的缩写

})


// 全局拦截 - 后台 系统， 除了登录页面，其他页面都必须授权才能访问。
// router.beforeEach(async (to, from, next) => {
//     let isAuthenticated =await localStorage.getItem("token")

//     console.log(to.fullPath)

//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//     else next()

//   })
  // 全局拦截 - 某几个页面都必须授权才能访问。
router.beforeEach(async (to, from, next) => {
    let isAuthenticated =await localStorage.getItem('username')
    // console.log(to.fullPath)
    // var arr = ['/center','/card']
    if (to.name !== 'Login' && !isAuthenticated && to.meta.requiredAuth) next({ name: 'Login' })
    else next()

  })


router.afterEach((to,from)=>{
    
    console.log("提交后端用户行为信息")
})

export default router