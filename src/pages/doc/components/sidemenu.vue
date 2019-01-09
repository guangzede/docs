<template>
  <div class="sidemenu" v-if="subtitle.children">
    <template v-for="(item, index) in subtitle.children" >
      <div class="item" @click="handleHighlight(item)" :key="index+999">{{item.title}}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  props: {
    subtitle: Object
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('scroll', this.onScroll);
    })
  },
  methods: {
    handleHighlight(item) {
      console.log(item.index)
      debugger
    },
    onScroll() {
      
    }
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
