<template>
  <div
    class="sidemenu"
    v-if="subtitle.children"
  >
    <template v-for="(item, index) in subtitle.children">
      <div
        class="item"
        :key="index+999"
        ref="item"
      >
        <a
          :href="'/#'+item.index"
          @click="moveScreen(item.index)"
        >{{item.title}}</a>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sideMenu',
  props: {
    subtitle: Object
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
    onScroll () {
    },
    moveScreen (index) {
      let jump = document.getElementById(index)
      let total = jump.offsetTop - 110
      let distance =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      let step = total / 50
      if (total > distance) {
        smoothDown()
      } else {
        let newTotal = distance - total
        step = newTotal / 50
        smoothUp()
      }
      function smoothDown () {
        if (distance < total) {
          distance += step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothDown, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
        location.hash = '/doc'
      }
      function smoothUp () {
        if (distance > total) {
          distance -= step
          document.body.scrollTop = distance
          document.documentElement.scrollTop = distance
          setTimeout(smoothUp, 10)
        } else {
          document.body.scrollTop = total
          document.documentElement.scrollTop = total
        }
        location.hash = '/doc'
      }
      
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
  .item a{
    position: relative;
    padding: 0 1em;
    line-height: 1.8em;
    font-size: 14px;
    color: #666;
    text-decoration: none;
    &:hover{
      color: #d43;
    }
  }
}
</style>
