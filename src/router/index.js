import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import agentBoard from '@/components/routes/agentBoard'
import mainBoard from '@/components/routes/mainBoard'
import nativeboard from '@/components/routes/nativeboard'
import maindashboard from '@/components/routes/mainbcomponents/maincontent'
import clientboard from '@/components/routes/mainbcomponents/client'
import agentsboard from '@/components/routes/mainbcomponents/agent'
import productboard from '@/components/routes/mainbcomponents/products'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/agentBoard',
      component: agentBoard
    },
    {
      path: '/mainboard',
      component: mainBoard,
      name: 'mainboard',
      children: [
        {
          path:'/mainboard/dashboard',
          component: maindashboard
        },
        {
          path:'/mainboard/agents',
          component:  agentsboard
        },
        {
          path:'/mainboard/clients',
          component: clientboard
        },
        {
          path: '/mainboard/products',
          component: productboard
        }
      ]
    },
    {
      path: '/nativeboard',
      component: nativeboard
    }
  ],
  mode: 'history'
})
