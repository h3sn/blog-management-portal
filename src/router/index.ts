import { createRouter, createWebHistory } from 'vue-router';
// pages
import DefaultLayout from '@/app/components/layout/DefaultLayout.vue';
import Dashboard from '@/app/components/pages/Dashboard.vue';
import Login from '@/app/components/pages/Login.vue';
import NotFound from '@/app/components/pages/NotFound.vue';
import PostEdit from '@/app/components/pages/post/PostEdit.vue';
import PostList from '@/app/components/pages/post/PostList.vue';
import PostRegister from '@/app/components/pages/post/PostRegister.vue';
// domain
import { ROUTER } from '@/app/core/domain/router';

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        component: Dashboard,
      },
    ],
  },
  { path: ROUTER.LOGIN.PATH, name: ROUTER.LOGIN.NAME, component: Login },
  {
    path: ROUTER.POST.LIST.PATH,
    component: DefaultLayout,
    children: [
      {
        path: ROUTER.POST.LIST.PATH,
        name: ROUTER.POST.LIST.NAME,
        component: PostList,
      },
      {
        path: ROUTER.POST.EDIT.PATH,
        name: ROUTER.POST.EDIT.NAME,
        component: PostEdit,
      },
      {
        path: ROUTER.POST.REGISTER.PATH,
        name: ROUTER.POST.REGISTER.NAME,
        component: PostRegister,
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
