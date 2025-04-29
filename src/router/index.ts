import { createRouter, createWebHistory } from 'vue-router';

import Default from '@/app/components/layout/Default.vue';
import Dashboard from '@/app/components/pages/Dashboard.vue';
import Login from '@/app/components/pages/Login.vue';
import NotFound from '@/app/components/pages/NotFound.vue';
import PostEdit from '@/app/components/pages/post/PostEdit.vue';
import PostList from '@/app/components/pages/post/PostList.vue';
import PostRegister from '@/app/components/pages/post/PostRegister.vue';

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        component: Dashboard,
      },
    ],
  },
  { path: '/login', component: Login },
  {
    path: '/post',
    component: Default,
    children: [
      {
        path: '',
        component: PostList,
      },
      {
        path: ':id',
        component: PostEdit,
      },
      {
        path: 'register',
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
