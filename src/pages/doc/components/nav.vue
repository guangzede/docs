<template>
  <div class="docnav clearfix">
    <div class="logo">
      <router-link to="./">
        <img src="@/assets/img/logo.png">
      </router-link>
    </div>
    <div class="search">
      <input
        type="text"
        name=""
        id="search"
        placeholder="在军网文档中搜索"
      >
      <i></i>
    </div>
    <div class="list">
      <div class="item"><router-link to="./">首页</router-link></div>
      <template v-for="(nav) of titleLevel2"  >
        <div class="item" :key="nav.index" >{{nav.title}} </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocNav',
  props: {
    titleLevel2: Array
  }
}
</script>

<style lang="scss" scoped>
.list {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 200px;
  .item {
    float: left;
    padding: 0 3em;
    box-sizing: border-box;
    line-height: 70px;
    position: relative;
    font-size: 14px;
    a{
      color: #2c3e50;
    }
    &:hover {
      a{
        color: #06d292;
      }
      &:before {
        content: "";
        position: absolute;
        width: 96px;
        height: 3px;
        left: 50%;
        transform: translateX(-50%);
        background: #06d292;
      }
    }
  }
}
.docnav {
  height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
  background: #fff;
  box-shadow: 14px 2px 11px 2px #f7f7f7;
  .logo {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    img {
      display: block;
      margin-left: 40px;
      margin-top: 15px;
    }
  }
}
.search {
  margin-left: 300px;
  position: relative;
  margin-top: 15px;
  height: 40px;
  float: left;
  &:before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 0;
    width: 1px;
    background: #ecedef;
    z-index: 2;
  }
  input {
    padding: 0;
    margin: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 220px;
    border: none;
    line-height: 40px;
    height: 40px;
    text-indent: 40px;
    letter-spacing: 1px;
    font-size: 14px;
    color:#333;
    &::-webkit-input-placeholder {
      color: #b3b3b3;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  i {
    width: 20px;
    height: 20px;
    position: absolute;
    left: 12px;
    top: 13px;
    background: url(../../../assets/img/search.png) no-repeat;
  }
}
</style>
