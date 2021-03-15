import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
import Home from "./view/home/home.vue";
import User from "./view/user/user.vue";

const router = new VueRouter({
    routes: [
        // 动态路径参数 以冒号开头
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/user',
            component: User
        }
    ]
})

export default router;
