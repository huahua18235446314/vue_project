<template>
  <div class="sectionContent">
    <aside class="asideMenu">
      <el-menu
      class="el-menu-vertical-demo"
        router
        :default-active="$route.path"
        background-color="#fff"
        text-color="#2c3e50"
        active-text-color="#1abdbd"
     
      >
        <child-menu :dataList="asideMenu"></child-menu>
      </el-menu>
    </aside>
    <section class="rightContent" ref="rightContent">
      <div class="contentTop">
        <!-- <span  @click="collaMenu"><svg-icon iconClass="shousuo" class="iconLogo"></svg-icon></span> -->
        <bread-crumb></bread-crumb>
      </div>

      <router-view class="padContent"></router-view>
    </section>
  </div>
</template>

<script>
import ChildMenu from "./childmenu";
import menu from "@/menu/menu-sangfor.js";
import BreadCrumb from "@/components/common/BreadCrumb";
export default {
  components: {
    ChildMenu,
    BreadCrumb
  },
  data() {
    return {
      asideMenu: [],
      isCollapse: true
    };
  },
  methods: {
    collaMenu: function() {
      this.isCollapse = !this.isCollapse;
    }
  },
  mounted() {
    this.asideMenu = menu;
  }
};
</script>

<style scoped  lang="less">
.sectionContent {
  display: flex;
  flex: 1;
  .asideMenu {
    height: 100%;
    overflow: auto;
    flex-shrink: 0;
  }
  .rightContent {
    background-color: #f1f2f3;
    flex: 1;
    width: calc(100vw - 220px);
    .contentTop {
      height: 50px;
      background-color: #fff;
      display: flex;
      align-items: center;
    }
    .padContent {
      padding: 10px 20px 0 20px;
    }
  }
}
</style>