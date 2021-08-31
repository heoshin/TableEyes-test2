import { createWebHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
// import Search from './components/Search.vue'
import WishList from './components/WishList.vue'
import StoreList from './components/StoreList.vue'
import History from './components/History.vue'
import MyPage from './components/MyPage.vue'
import StorePage from './components/StorePage.vue'

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/search",
    component: StorePage,
  },
  {
    path: "/wishList",
    component: WishList,
  },
  {
    path: "/StoreList",
    component: StoreList,
  },
  {
    path: "/history",
    component: History,
  },
  {
    path: "/myPage",
    component: MyPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 