import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import SullyoonView from "@/views/board/SullyoonView.vue";
import LilyView from "@/views/board/LilyView.vue";
import KyujinView from "@/views/board/KyujinView.vue";
import JiwooView from "@/views/board/JiwooView.vue";
import HaewonView from "@/views/board/HaewonView.vue";
import GeneralView from "@/views/board/GeneralView.vue";
import BaeView from "@/views/board/BaeView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/board/sullyoon',
        name: 'sullyoon',
        component: SullyoonView
    },
    {
        path: '/board/lily',
        name: 'lily',
        component: LilyView
    },
    {
        path: '/board/kyujin',
        name: 'kyujin',
        component: KyujinView
    },
    {
        path: '/board/jiwoo',
        name: 'jiwoo',
        component: JiwooView
    },
    {
        path: '/board/haewon',
        name: 'haewon',
        component: HaewonView
    },
    {
        path: '/board/general',
        name: 'general',
        component: GeneralView
    },
    {
        path: '/board/bae',
        name: 'bae',
        component: BaeView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
