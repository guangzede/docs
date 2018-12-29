<template>
  <div class="navigation clearfix">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt>
    </div>
    <div class="search">
      <input type="text" name="" id="search" placeholder="在军网文档中搜索">
      <i></i>
    </div>
  <div class="list clearfix">
      <div class="item">
        <router-link to="home">首页</router-link>
      </div>
      <div class="item">设计规范</div>
      <div class="item">开发规范</div>
      <div class="item">组件库</div>
      <div class="item">模板库</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
a:hover{text-decoration: none;}
.navigation{
  margin-top: 20px;
  margin-bottom:20px;
  height: 70px;
}
.logo{
  float: left;
  width: 120px;
  margin-top: 15px;
}
.search{
  float:left;
  width:240px;
  position: relative;
  height: 40px;
  margin-left: 100px;
  margin-top: 15px;
  &:before{
    content:"";
    position: absolute;
    top: 10px;
    bottom:10px;
    left: 0;
    width: 1px;
    background:#ecedef;
    z-index: 2;
  }
  input{
    padding: 0;
    margin:0;
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 220px;
    border: none;
    line-height: 40px;
    height: 40px;
    text-indent: 40px;
   &::-webkit-input-placeholder{
     color: #b3b3b3;
   }
   &:focus{
    border: none;
    outline: none;
   }
  }
  i{
    width:20px;
    height: 20px;
    position: absolute;
    left: 12px;
    top: 13px;
    background: url(../../../assets/img/search.png) no-repeat ;
  }
}
.list {
  float: right;
  .item {
    float: left;
    padding: 0 3em;
    box-sizing: border-box;
    line-height: 70px;
    position: relative;
    &:hover {
      &:before {
        content: "";
        position: absolute;
        width: 96px;
        height: 1px;
        left: 50%;
        transform: translateX(-50%);
        background: #06d292;
      }
    }
  }
}
</style>
