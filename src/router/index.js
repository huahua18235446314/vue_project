import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/Home',
    },
    {
      path: '/',
      name: 'home',
      component: resolve =>  require(['@/components/home'], resolve),
      children:[
        {
          path: '/Home',
          name: 'left',
          meta: { title: '运维安全' },
          component:resolve => require(['@/components/left'], resolve),
          children:[
            {
              path: '/OperateManage',
              name: 'OperateManage',
              meta: { title: '运维操作' },
              component:resolve => require(['@/components/operate/OperateManage'], resolve),
            },
            
            {
              path: '/Home',
              name: 'Home',
              meta: { title: '首页' },
              component:resolve => require(['@/components/home/Home'], resolve),
            }
          ]
        },

      
        
      ]
    }
  ]
})
