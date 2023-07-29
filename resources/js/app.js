require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import App from "./components/App.vue";
import Home from "./components/Home.vue";
import Desks from "./components/desks/Desks.vue";


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/desks',
            name: 'desks',
            component: Desks
        },

    ]
})

const app = new Vue({
    el: '#app',
    components: {App},
    router ,
});
