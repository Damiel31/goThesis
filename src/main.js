// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import  Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import firebase from 'firebase'


Vue.use(Vuetify, {
  inconfont: 'mdi' || 'md' || 'mdi' || 'fa' || 'fa4'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  // created() {
  //   //do something after creating vue instance
  //   firebase.initializedApp({
  //     apiKey: "AIzaSyAJSWG8Su6dS5ljyHlqoexGQq2edTXMfk0",
  //       authDomain: "fukthesis.firebaseapp.com",
  //       databaseURL: "https://fukthesis.firebaseio.com",
  //       projectId: "fukthesis",
  //       storageBucket: "gs://fukthesis.appspot.com",
  //       messagingSenderId: "818439251877"
  //   });
//  }
});
