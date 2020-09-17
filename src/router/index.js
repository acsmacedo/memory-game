import Vue from 'vue'
import VueRouter from 'vue-router'
import InstructionsGame from '../components/instructions/InstructionsGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'InstructionsGame',
    component: InstructionsGame
  },
  {
    path: '/panel',
    name: 'PanelGame',
    component: () => import('../components/panel/PanelGame.vue')
  },
  {
    path: '/ranking',
    name: 'RankingGame',
    component: () => import('../components/ranking/RankingGame.vue')
  },
  {
    path: '/finish',
    name: 'FinishGame',
    component: () => import('../components/finish/FinishGame.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router