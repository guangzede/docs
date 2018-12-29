<template>
  <div>
    <div class="cont">
      <navigation></navigation>
    </div>
    <div class="bg2">
      <div class="cont">
        <div class="left">
          <h1>
            <img src="../../assets/img/name.png" alt>
          </h1>
          <p>遵循经典设计定则，汲取最新的科技，秉承创新的设计理念，模块化解决方案,让设计者和开发者专注于好的用户体验。</p>
          <div class="btn">
            <div class="item">
              <router-link to="doc">开始使用</router-link>
            </div>
            <div class="item">
              <router-link to="desin">设计语言</router-link>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="img">
            <img src="../../assets/img/flag.png" alt>
          </div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="cont">
        <div class="topic">
          <h2>一站式协作开发</h2>
          <p>可以款素的实现不同组合排版样式，配合不同交互模式,可以直接运用到项目中。</p>
        </div>
        <div class="icons clearfix">
          <div class="item">
            <div class="img">
              <img src="../../assets/img/icon1.png" alt>
            </div>
            <span>设计规范</span>
          </div>
          <div class="item">
            <div class="img">
              <img src="../../assets/img/icon2.png" alt>
            </div>
            <span>开发规范</span>
          </div>
          <div class="item">
            <div class="img">
              <img src="../../assets/img/icon4.png" alt>
            </div>
            <span>组件库</span>
          </div>
          <div class="item">
            <div class="img">
              <img src="../../assets/img/icon5.png" alt>
            </div>
            <span>模版库</span>
          </div>
          <div class="item">
            <div class="img">
              <img src="../../assets/img/icon3.png" alt>
            </div>
            <span>资源下载</span>
          </div>
        </div>
      </div>
      <div class="bg-item">
        <img src="../../assets/img/triangle.png" alt>
      </div>
    </div>
    <div class="bg1">
      <div class="cont">
        <div class="topic white">
          <h2>工具和资源</h2>
          <p>我们提供了开箱即用的高质量Vue组件实现，用于开发和服务于中国军网中后台产品。</p>
        </div>
        <div class="tools clearfix">
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
          <div class="item">
            <img src="../../assets/img/tools/logo.svg" alt>
            <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
          </div>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Navigation from './components/nav'
import Foot from './components/footer'
export default {
  name: 'Index',
  components: {
    Navigation,
    Foot
  }
}
</script>

<style lang='scss'>
@import 'bootstrap/dist/css/bootstrap.css';
.cont {
    width: 1400px!important;
    margin: 0 auto;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
.bg2 {
  background: url(../../assets/img/bg2.png) no-repeat 80px 100px;
}
.bg1 {
  background: url(../../assets/img/bg1.png) no-repeat 200px bottom;
  padding-bottom: 40px;
}
.left {
  float: left;
  width: 60%;
  box-sizing: border-box;
  h1 {
    margin-top: 5em;
    text-align: left;
  }
  p {
    margin: 1em 0;
    line-height: 1.8em;
    font-size: 20px;
    color: #666;
    text-align: left;
  }
}
.right {
  float: right;
  width: 40%;
}
.bg {
  background: #06d292;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
  & > * {
    position: relative;
    z-index: 4;
  }
  & > .bg-item {
    position: absolute;
    z-index: 2;
    opacity: 0.15;
    top: 0;
  }
}
.topic {
  &.white {
    margin-top: 100px;
    margin-bottom: 80px;
    h2 {
      color: #000;
    }
    p {
      color: #666;
    }
  }
  h2 {
    font-size: 50px;
    font-weight: normal;
    color: #fff;
    text-align: center;
    margin: 0.5em 0;
  }
  p {
    color: #fff;
    text-align: center;
    font-size: 20px;
    margin: 0.5em 0;
  }
}
.tools {
  margin-bottom: 70px;
  padding: 1px;
  .item {
    border-collapse: collapse;
    width: calc(16.6666% - 1px);
    float: left;
    margin: 0.5px;
    box-sizing: border-box;
    padding: 40px;
    height: 150px;
    position: relative;
    background: #fbfbfb;
    &:hover:before {
      background: #06d292;
    }
    &:hover {
      z-index: 3;
    }

    &:hover:after{
      background: #fff;
    }

    &:after {
      content: "";
      background: #fbfbfb;
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
    }
    &:before {
      content: "";
      background: #06d292;
      position: absolute;
      left: -1px;
      right: -1px;
      top: -1px;
      bottom: -1px;
    }
    & > * {
      position: relative;
      z-index: 2;
    }
    img {
      display: block;
      width: 100%;
    }
    a {
      display: block;
      text-align: center;
      text-decoration-line: none;
      margin-top: 1em;
      color: #666;
    }
  }
}
.icons {
  margin-top: 60px;
  .item {
    float: left;
    width: 20%;
    img {
      display: block;
      margin: 0 auto;
      background: #fff;
      border-radius: 50%;
      position: relative;
      z-index: 3;
    }
    .img {
      width: 150px;
      height: 150px;
      margin: 0 auto;
      position: relative;
      &::after {
        content: "";
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
      }
      &:hover:after {
        content: "";
        transition: ease 0.15s all;
        left: -10px;
        right: -10px;
        top: -10px;
        bottom: -10px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
      }
    }
    span {
      margin-top: 2em;
      display: block;
      text-align: center;
      color: #fff;
    }
  }
}
.btn {
  margin-top: 40px;
  text-align: left;
  .item {
    font-size: 20px;
    border-radius: 2em;
    padding: 0.5em 1em;
    background: #06d292;
    display: inline-block;
    border: 1px solid #06d292;
    margin-right: 1em;
    a {
      color: #fff;
      text-decoration-line: none;
    }
    &:hover {
      background: #fff;
      a {
        color: #06d292;
      }
    }
  }
}
</style>
