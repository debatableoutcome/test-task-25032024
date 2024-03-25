import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateTask from "@/views/CreateTask.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/create",
    name: "CreateTask",
    component: CreateTask,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
