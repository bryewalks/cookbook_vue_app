import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import Vue2Filters from 'vue2-filters'
import StarRating from 'vue-star-rating'

axios.defaults.baseURL = 
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://lit-shore-66444.herokuapp.com";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false

new Vue({
  router,
  StarRating,
  render: h => h(App)
}).$mount('#app')
