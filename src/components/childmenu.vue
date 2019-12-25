<template>
  <div class="menu-tree">
    <label v-for="list in dataList" :key="list.id">
      <el-submenu :index="list.id" v-if="list.child"  :class="{'menuLevel':list.level==='1'}">
        <template slot="title" >
          <i :class="list.icon"></i>
          <span >{{list.name}}</span>
        </template>
        <label>
          <child-menu :dataList="list.child"></child-menu>
        </label>
      </el-submenu>
      <el-menu-item v-else :index="list.url">
        <span slot="title">{{list.name}}</span>
      </el-menu-item>
    </label>
  </div>
</template>

<script>
export default {
  name: "childMenu",
  props: ["dataList"]
};
</script>
<style scoped>

</style>