<template>
  <div class="breadcrumb">
      <el-breadcrumb class="app-breadcrumb" separator=">">
        <transition-group>
          <el-breadcrumb-item  v-for="(item,index) in levelList" :key="index">
            <a  @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
  </div>
</template>

<script>
const pathToRegexp = require('path-to-regexp');
export default{
    data(){
        return {
            levelList:null
        }
    },
    created() {
       this.getBreadList()
    },
    watch:{
        $route(){
            this.getBreadList()
        }
    },
   methods:{
      getBreadList(){
         let matched=this.$route.matched.filter(item=>item.name)//$route.matched 将会是一个包含从上到下的所有对象 (副本)。
            //  const first=matched[0]
            //  if(first && first.name !=='home'){//$route.name当前路由名称；$route.redirectedFrom重定向来源的路由的名字
            //    matched=[{ path: '/home', meta: { title: '首页' }}].concat(matched)
            //  }
             this.levelList=matched
             this.levelList.shift()
             console.log(this.levelList)
      },
      handleLink(item) {
        const { redirect, path } = item
        if (redirect) {
          this.$router.push(redirect)
          return
        }
        this.$router.push(this.pathCompile(path))
      },
      pathCompile(path) {
        const { params } = this.$route
        var toPath = pathToRegexp.compile(path)//url 的正则表达式,快速填充 url 字符串的参数值。
        return toPath(params)
      },
      
   },
}
</script>
