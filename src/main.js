import Vue from 'vue'
import App from './App.vue'

import JVueRouter from './plugin';


import ViewHome from "./view/ViewHome";
import ViewAbout from "./view/ViewAbout";
import ViewAbout2 from "./view/ViewAbout2";
import ViewAbout3 from "./view/ViewAbout3";
import ViewMenu from "./view/hash/ViewMenu";
import ViewPlayer from "./view/hash/ViewPlayer";



const routes = [
  {
    path:'/',
    components: {
      'main': ViewHome
    }
  },
  {
    path: '/about',
    components: {
      'main': ViewAbout
    },
    redirect: '/about/2lvl',
    children: [
      {
        path: '/2lvl',
        components: {
          '2lvl': ViewAbout2
        },
        children: [
          {
            path: '/3lvl',
            components: {
              '3lvl': ViewAbout3
            },

          },
        ]
      },
      {
        path: '/a1',
        components: {
          'main': ViewAbout
        },
      },
      {
        path: '/a2',
        components: {
          'main': ViewAbout
        },
      },
      {
        path: '/a3',
        components: {
          'main': ViewAbout
        },
      },
    ]
  },
  {
    path: '#menu',
    components: {
      'menu': ViewMenu
    },
  },
  {
    path: '#player',
    components: {
      'player': ViewPlayer
    },
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
  render: h => h(App),
}).$mount('#app')
