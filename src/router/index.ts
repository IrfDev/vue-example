import { createRouter, createWebHistory } from "vue-router";
import StructureView from "../views/StructureView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: StructureView,
    },
    {
      path: "/tailwind-prefixes",
      name: "tailwind",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/TailwindPrefixes.vue"),
    },
    {
      path: "/composition-api",
      name: "composition",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/CompositionApi.vue"),
    },
    {
      path: "/options-api",
      name: "options",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/OptionsApi.vue"),
    },
  ],
});

export default router;
