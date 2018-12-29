<template>
      <div class="footer ">
       <div class="clearfix">
          <div class="item">
        <router-link to="version">关于Version</router-link>
        <span>版本信息</span>
      </div>
      <div class="item">
        <router-link to="version">相关站点</router-link>
        <span>中国军网 - 移动端</span>
      </div>
      <div class="item">
        <router-link to="version">更多产品</router-link>
        <span>国防在线</span>
      </div>

       </div>
      </div>
</template>

<script>
export default {
  name: 'Foot'
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/common.scss";
.footer {
  background: #f2f4f6;
  padding: 50px 0;
  margin-top: 50px;
  .clearfix{
  margin: 0 auto;
    width:1000px;
  }
}
.item {
  float: left;
  width: 33.3333%;
  text-align: center;
  line-height: 2em;
  span {
    color: $descColor;
    display: block;
    font-size: $descFontSize;
  }
  a {
    display: block;
    color: $linkColor;
    font-size: $linkFontSize;
    text-decoration-line: none;
    &:hover{
      color: #d43;
    }
  }
}
</style>
