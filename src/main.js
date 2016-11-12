import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import About from './components/About';
import Projects from './components/Projects';
import JournalEntries from './components/JournalEntries';

Vue.use(VueRouter);

const routes = [
  { path: '/',
    component: App,
    children: [
      { path: '', component: About },
      { path: '/about', component: About },
      { path: '/projects', component: Projects },
      { path: '/journal', component: JournalEntries },
    ],
  },
  // Any unmatched route redirects to About
  { path: '*',
    component: App,
    children: [
      { path: '', component: About },
    ],
  },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');

