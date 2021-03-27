import { createWebHistory, createRouter } from "vue-router";
import Table from "@/components/Table.vue";
import Chart from "@/components/Chart.vue";

let baseUrl = process.env.BASE_URL;

const routes = [
  {
    path: baseUrl,
    name: "table",
    component: Table,
  },
  {
    path: baseUrl  + "chart",
    name: "chart",
    component: Chart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
});

export default router;