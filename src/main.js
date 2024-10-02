import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js"; // 라우터 임포트
import "./assets/css/tailwind.css"; // Tailwind CSS 임포트

Vue.config.productionTip = false;

new Vue({
  router, // 라우터 추가
  render: (h) => h(App),
}).$mount("#app");
