<template>
  <div class="homeTop">
    <div class="navHead">
      <head-top></head-top>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HeadTop from "./head";

export default {
  components: {
    HeadTop
  },
  data() {
    return {};
  }
};
</script>
<style scoped lang = 'less'>

.homeTop {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .navHead {
  height: 58px;
  color: #a5a6aa;
  background: #2f3138;
}
}
</style>
