import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsView from '../views/news_view.vue'
import AskView from '../views/ask_view.vue'
import JobsView from '../views/jobs_view.vue'
import UserView from '../views/user_view.vue'
import ItemView from '../views/item_view.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // url 에서 해쉬(#) 제거
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: '/news',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
    {
      path: '/user',
      component: UserView,
    },
    {
      path: '/user',
      component: ItemView,
    },
  ],
})
