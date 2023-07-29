require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import App from "./components/App.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})

const app = new Vue({
    el: '#app',
    components: {App},
    router ,
});
