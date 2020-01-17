import Vue from 'vue'
import App from './App.vue'

import JVueRouter from './plugin';


import ViewHome from "./view/ViewHome";
import ViewAbout from "./view/ViewAbout";
import ViewMenu from "./view/ViewMenu";
import ViewPlayer from "./view/ViewPlayer";

// eslint-disable-next-line no-unused-vars
const routes = [
  {
    path: '',
    components:{},
  },
  {
    path:'/',
    components: {
      'main': ViewHome
    },
  },
  {
    path: '/about',
    components: {
      'main': ViewAbout
    }
  },
  {
    path: '#menu',
    components: {
      'menu': ViewMenu
    },
    isSubView: true
  },
  {
    path: '#player',
    components: {
      'player': ViewPlayer
    },
    isSubView: true
  }
];



Vue.config.productionTip = false;

Vue.use(JVueRouter, {
  basic:{
    removeHash: true,
  },
  routes,
  // eslint-disable-next-line no-console
 // hook: (to, from) => console.log(to, from)
});

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
