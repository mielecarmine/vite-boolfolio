import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./pages/Homepage.vue";
import ProjectDetail from "./pages/ProjectDetail.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: "Homepage",
        component: Homepage,
      },
      {
        path: '/project-detail/:slug',
        name: "project-detail",
        component: ProjectDetail,
      },
    ],
  });
  export { router };