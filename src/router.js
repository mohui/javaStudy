import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 引入组件
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('./view/layout/layout.vue'),
            children: [
                {
                    path: "",
                    component: () => import('./view/restaurant/index')
                },
                {
                    path: "restaurant",
                    name: "restaurant",
                    component: () => import('./view/restaurant/index')
                },
                {
                    path: "school",
                    name: "school",
                    component: ()=> import('./view/home/children/school.vue')
                },
                {
                    path: "hospital",
                    name: "hospital",
                    component: () => import('./view/home/children/hospital.vue')
                },
                {
                    path: "watertightness",
                    name: "watertightness",
                    component: () => import('./view/home/children/watertightness.vue')
                }
            ]
        }
    ]
});

export default router;
