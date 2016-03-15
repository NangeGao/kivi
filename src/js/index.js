import Vue from 'vue';
import Router from 'vue-router';

import MainView from '../pageview/main.vue';
import HomeView from '../pageview/home.vue';
import BlogView from '../pageview/blog.vue';
import AboutView from '../pageview/about.vue';

Vue.use(Router);

var router = new Router({
    history: true,
    linkActiveClass: 'active'
});
router.map({
    '/home':{
        component: HomeView
    },
    '/blog':{
        component: BlogView
    },
    '/about':{
        component: AboutView
    }
});
router.redirect({ });
router.start(MainView, "#wrapper");
