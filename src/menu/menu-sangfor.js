module.exports = [
  {
    name: '运维安全',
    url:'',
    id: "0",
    icon:'el-icon-menu',
    child:[
      {
        name: '首页',
        url:'/Home',
        id: "1",  
      },
      {
        name: '运维管理',
        id: "2",
        roles:['1000000000000001','1000000000000002'],
        child: [
          {
            name: '组织定义',
            url:'/OperateManage',
            id: "2-0",
          },
          {
            name: '用户',
            url:'/command',
            id: "2-1",
          }        
        ]
      },
      {
        name: '审计管理',
        id: "3",
        child: [
          {
            name: '运维审计',
            url:'/OperateManage',
            id: "3-0",
          },
          {
            name: '配置审计',
            url:'/command',
            id: "3-1",
          },
          {
            name: '告警归纳',
            url:'/command',
            id: "3-2",
          }        
        ]
      },
      {
        name: '流程控制',
        id: "4",
        child: [
          {
            name: '流程任务',
            url:'/OperateManage',
            id: "4-0",
          },
          {
            name: '申请历史',
            url:'/command',
            id: "4-1",
          },
          {
            name: '个人历史',
            url:'/command',
            id: "4-2",
          },
          {
            name: '全部历史',
            url:'/command',
            id: "4-3",
          }        
        ]
      },
      {
        name: '报表管理',
        id: "5",
        child: [
          {
            name: '审计报表',
            url:'/OperateManage',
            id: "5-0",
            child:[
              {
                name: '申请历史',
                url:'/command',
                id: "5-0-1",
              },
              {
                name: '个人历史',
                url:'/command',
                id: "5-0-2",
              },
              {
                name: '全部历史',
                url:'/command',
                id: "5-0-3",
              }     
            ]
          },
             
        ]
      },
      {
        name: '工具下载',
        id: "9",
        url:'/ToolDownLoad',
        roles:['1000000000000001',,'1000000000000002',,'1000000000000003',,'1000000000000004'],
        module:'tool/ToolDownLoad'
      }
    
    ]
  },

 
  
]
