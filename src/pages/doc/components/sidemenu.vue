<template>
  <div class="sidemenu">
    <div
      class="item"
      v-for="(item ,index) in subtitle"
      :key="index+999"
    >{{item.title}}</div>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  props: {
    subtitle: Array
  }
}
</script>

<style lang="scss" scoped>
.sidemenu {
  position: fixed;
  top: 90px;
  right: 70px;
  z-index: 3;
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    top: 5px;
    bottom: 5px;
    left: 0;
    background: #eceef1;
  }
  .item {
    position: relative;
    padding: 0 1em;
    line-height: 1.8em;
    font-size: 14px;
    color: #666;
  }
}
</style>
