import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCvai9XOxbuxhcmLOsglY48azFn04yduc0",
  authDomain: "vue-calendar-80e6f.firebaseapp.com",
  databaseURL: "https://vue-calendar-80e6f.firebaseio.com",
  projectId: "vue-calendar-80e6f",
  storageBucket: "vue-calendar-80e6f.appspot.com",
  messagingSenderId: "969164038491",
  appId: "1:969164038491:web:16e227070196bff869ba7e"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
