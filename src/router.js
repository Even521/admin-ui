import {createRouter,createWebHistory} from 'vue-router';
import Index from '../src/views/Index.vue';
const routes=[
    {
        path:'/',
        name:'Index',
        component: Index,
        meta:{title:'登陆页面'}
    },
    {
        path:'/register',
        name:'Register',
        component:()=>import('../src/views/register/Register.vue'),
        meta:{title:'登陆页面'}
    }

    ];
const router=createRouter({
    history:createWebHistory(),
    routes
});


export default router