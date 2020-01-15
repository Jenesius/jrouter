import Vue from 'vue'
import App from './App.vue'

import AppRouter from './plugin';
import ViewHome from "./view/ViewHome";
import ViewAbout from "./view/ViewAbout";
import ViewMenu from "./view/ViewMenu";

// eslint-disable-next-line no-unused-vars
const routes1 = {

  "/": {
    component: ViewHome,
    nameRouter: 'a1',
  },
  "/about": {
    component: ViewAbout,
    nameRouter: 'a1',
  },
  "/menu": {
    component: ViewMenu,
    nameRouter: 'a2',
    isSubView:true,
  }
};
const routes = [
  {
    path:'/',
    components: {
      'a1': ViewHome
    },
  },
  {
    path: '/about',
    components: {
      'a1': ViewAbout
    }
  },
  {
    path: '/menu',
    components: {
      'a2': ViewMenu
    },
    isSubView: true
  }
];


Vue.config.productionTip = false;

Vue.use(AppRouter, {
  routes,
  // eslint-disable-next-line no-console
 // hook: (to, from) => console.log(to, from)
});

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
