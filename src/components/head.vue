<template>
  <nav class="navHead">
    <div class="navLeft">
      <div class="mr10">
        <svg-icon iconClass="logo" class="iconLogo"></svg-icon>
      </div>
      <div>
        <span class="fontTitle">运维安全管理系统</span>
        <p class="title_sub">SANGFOR 1.1.0</p>
      </div>
    </div>
    <div class="navRight">
      <i class="el-icon-bell curPoint mr20"></i>
      <span class="curPoint">
        <label>admin</label>
      <svg-icon iconClass="admin" class="avatar_img"></svg-icon>
      </span>
      
    </div>
  </nav>
</template>
<style scoped  lang="less">
.navHead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .fontTitle {
    font-size: 18px;
    color: #1abfbf;
  }
  .title_sub {
    font-size: 12px;
    color: #999;
    text-align: center;
  }
  .avatar_img {
    width: 25px;
    height: 25px;
  }
  .navLeft {
    display: flex;
    align-items: center;
    .iconLogo {
      width: 35px;
      height: 35px;
    }
  }
}
</style>