import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/mainLay.vue";
import DigitalTwin from "@/components/MainClick/DigitalTwin.vue";
import SimulationTools from "@/components/MainClick/SimulationTools.vue";
import VisualComponents from "@/components/MainClick/VisualComponents.vue";
import WebViewer from "@/components/MainClick/WebViewer.vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // 초기 경로로 Home 컴포넌트를 설정
  },
  {
    path: "/DigitalTwin/:title?", // 동적 라우트 파라미터 사용 (옵션으로 설정)
    name: "DigitalTwin", // name 추가
    component: DigitalTwin,
    props: true, // 라우트 파라미터를 props로 전달
  },
  {
    path: "/SimulationTools/:title?", // 동적 라우트 파라미터 사용 (옵션으로 설정)
    name: "SimulationTools", // name 추가
    component: SimulationTools,
    props: true, // 라우트 파라미터를 props로 전달
  },
  {
    path: "/VisualComponents/:title?", // 동적 라우트 파라미터 사용 (옵션으로 설정)
    name: "VisualComponents", // name 추가
    component: VisualComponents,
    props: true, // 라우트 파라미터를 props로 전달
  },
  {
    path: "/WebViewer/:title?", // 동적 라우트 파라미터 사용 (옵션으로 설정)
    name: "WebViewer", // name 추가
    component: WebViewer,
    props: true, // 라우트 파라미터를 props로 전달
  },
];

// 새로 고침 시 홈으로 리디렉션
const router = new Router({
  mode: "history",
  routes,
});

// 새로 고침 시 홈으로 리디렉션
router.beforeEach((to, from, next) => {
  next();
});

export default router;
