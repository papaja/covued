import { createWebHistory, createRouter } from "vue-router";
import Table from "@/components/Table.vue";
import Chart from "@/components/Chart.vue";

const routes = [
  {
    path: "/",
    name: "Table",
    component: Table,
  },
  {
    path: "/chart",
    name: "Chart",
    component: Chart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;