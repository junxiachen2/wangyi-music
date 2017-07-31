import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from './router'
import store from './vuex'
import VueLazyload from 'vue-lazyload';  // 引入图片懒加载模块

Vue.use(VueRouter);

Vue.use(VueLazyload, {
  error: require('./assets/404.png'),
  loading: require('./assets/loading.jpg'),
  attempt: 1
});

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    let position = {};
    if (to.hash) {
      position.selector = to.hash;
    }
    if (to.matched.some(m => me.meta.scrollToTop)) {
      position.x = 0;
      position.y = 0;
    }
    return position;
  }
};

const router = new VueRouter({
  // 'linkActiveClass': 'active',
  routes,
  scrollBehavior
});

const routerApp = new Vue({
  router,
  store
}).$mount('#app');

export default routerApp;
