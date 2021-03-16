import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入组件
import Home from "./view/home/home.vue";
import User from "./view/user/user.vue";
import school from "./view/home/children/school.vue";
import hospital from "./view/home/children/hospital.vue";
import watertightness from "./view/home/children/watertightness.vue";

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: "school",
                    name: "school",
                    component: school
                },
                {
                    path: "hospital",
                    name: "hospital",
                    component: hospital
                },
                {
                    path: "watertightness",
                    name: "watertightness",
                    component: watertightness
                },
                {
                    path: "",
                    component: school
                }
            ]
        },
        {
            path: '/user',
            component: User
        },

        // 动态路径参数 以冒号开头
        {
            path: '/user/:id',
            component: User
        },
        {
            path: '/',
            component: Home
        }
    ]
})

export default router;
