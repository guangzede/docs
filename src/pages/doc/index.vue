<template>
  <div>
    <doc-nav :titleLevel2="headings"></doc-nav>
    <side-menu :subtitle="subtitle"></side-menu>
    <div class="side">
      <GeminiScrollbar class="my-scroll-bar">
        <div id="menu">
          <div v-for="(nav, index) of headings" :key="index" :class="nav.isOpen ? 'open':'' "  class="item">
            <h2 :key="nav.index"  @click="closeOpen(nav)" >{{nav.title}} </h2>
            <template v-if="nav.children.length > 0">
              <h3 :key="item.index" v-for="item of nav.children" class="jump"  @click="showRealContent(item)" >{{item.title}}</h3>
            </template>
          </div>
        </div>
      </GeminiScrollbar>
    </div>
    <div v-html="compiledMarkdown" class="content" ref="content" id="cont"></div>
  </div>
</template>

<script>
import axios from 'axios'
import marked from 'marked'
import DocNav from './components/nav'
import sideMenu from './components/sidemenu'
// import Contents from './components/content'
let renderMD = new marked.Renderer()
marked.setOptions({
  renderer: renderMD,
  gfm: true, // 允许 Git Hub标准的markdown.
  tables: true, // 允许支持表格语法。该选项要求 gfm 为true。
  breaks: false, // 允许回车换行。该选项要求 gfm 为true。
  pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
  sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
  smartLists: true, // 使用比原生markdown更时髦的列表。 旧的列表将可能被作为pedantic的处理内容过滤掉.
  smartypants: true // 使用更为时髦的标点，比如在引用语法中加入破折号
})
export default {
  name: 'Doc',
  components: {
    DocNav,
    sideMenu
  },
  data () {
    return {
      input: '',
      headings: [],
      subtitle: Object(),
      isOpen: [],
      paragraph: false
    }
  },
  mounted () {
    this.getMarkdown()
    renderMD.image = function (SHref, Stitle, Stext) {
      return '<img src="../static/doc/' + SHref + '">'
    }
    renderMD.heading = (Stext, Slevel, Srawtext) => {
      return `<h${Slevel} class="h${Slevel}">${Stext.trim()}</h${Slevel}>`
    }
    renderMD.paragraph = (text) => {
      return `<p>${text}</p>`
    }
  },
  created () {
  },
  methods: {
    getMarkdown (url = './static/doc/doc.md') {
      axios.get(url).then(this.setValue)
    },
    setValue (res) {
      this.input = res.data
      global.data = res.data
      this.getTitle(res.data)
    },
    getConetnt (string, current) {
      // (### 介绍).*((\r|\n).*)*(#{1,9}\s[\u4e00-\u9fa5])
      var reg = new RegExp('(' + current + ').*((\\n|\\r).*)*', 'gm')
      var content = string.match(reg)[0]
      content = content.split(current)[1]
      content = content.split(/#{1,9}\s.*/)[0]
      // content = content.split(next)[0]
      return content
    },
    getTitle (content) {
      let nav = []
      let navLevel = [2, 3, 4]
      let tempArr = []
      var _this = this
      var _match = ''
      var paragraph = ''
      content.replace(/```/g, function (match) {
        return '\f'
      })
        .replace(/\f[^\f]*?\f/g, function (match) {
          return ''
        })
        .replace(/\r|\n+/g, function (match) {
          return '\n'
        })
        .replace(/(##+)[^#\n.]*?(?:\n|\s|\t|\r).*(###)?$/gm, function (match, m1) {
        // let paragraph = content.match(reg)
          let title = match.replace('\n', '')
          if (_match !== '') {
            // paragraph =
            paragraph = _this.getConetnt(content, match)
          }
          _match = match
          let level = m1.length
          tempArr.push({
            title: title = title.replace(/^#+\s/, ''),
            level,
            paragraph,
            'isOpen': false,
            children: []
          })
        })
      nav = tempArr.filter(_ => _.level <= 4)
      let index = 0
      nav = nav.map(_ => {
        _.index = index++
        return _
      })
      let retNavs = []
      let toAppendNavList
      navLevel.forEach(level => {
        toAppendNavList = this.find(nav, {
          level: level
        })
        if (retNavs.length === 0) {
          retNavs = retNavs.concat(toAppendNavList)
        } else {
          toAppendNavList.forEach(_ => {
            _ = Object.assign(_)
            let parentNavIndex = this.getParentIndex(nav, _.index)
            return this.appendToParentNav(retNavs, parentNavIndex, _)
          })
        }
      })
      global.headings = this.headings = retNavs
      return retNavs
    },
    find (arr, condition) {
      return arr.filter(_ => {
        for (let key in condition) {
          if (condition.hasOwnProperty(key) && condition[key] !== _[key]) {
            return false
          }
        }
        return true
      })
    },
    getParentIndex (nav, endIndex) {
      for (var i = endIndex - 1; i >= 0; i--) {
        if (nav[endIndex].level > nav[i].level) {
          return nav[i].index
        }
      }
    },
    appendToParentNav (nav, parentIndex, newNav) {
      let index = this.findIndex(nav, {
        index: parentIndex
      })
      if (index === -1) {
        let subNav
        for (var i = 0; i < nav.length; i++) {
          subNav = nav[i]
          subNav.children.length && this.appendToParentNav(subNav.children, parentIndex, newNav)
        }
      } else {
        nav[index].children = nav[index].children.concat(newNav)
      }
    },
    findIndex (arr, condition) {
      let ret = -1
      arr.forEach((item, index) => {
        for (var key in condition) {
          if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
            return false
          }
        }
        ret = index
      })
      return ret
    },
    showRealContent (current, nav) {
      this.subtitle = current
      console.log(current)
    },
    logthis (sth) {
    },
    closeOpen (status) {
      console.table(status)
      let a = ''
      if (status.children.length > 0) {
        for (var i of status.children) {
          a += '<h' + i.level + ' id=' + i.index + '>' + i.title + '</h' + i.level + '>'
          a += i.paragraph
          if (i.hasOwnProperty('children') && i.children.length > 0) {
            a += this.copy(i)
          }
        }
      } else {
        a += '<h' + status.level + ' id=' + i.index + '>' + status.title + '</h' + status.level + '>'
        a += status.paragraph
      }
      this.input = a
      status.isOpen = !status.isOpen
    },
    copy (obj) {
      let string = ''
      for (var i of obj.children) {
        string += '<h' + i.level + ' id=' + i.index + '>' + i.title + '</h' + i.level + '>'
        string += i.paragraph
        if (i.hasOwnProperty('children') && i.children.length > 0) {
          string += this.copy(i)
        }
      }
      return string
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input)
    }
  }
}
</script>

<style lang="scss" >
h1,h2,h3,h4,h5,h6,p{
  text-align: left;
  line-height: 1.8em;
  letter-spacing: 1px;
}
.side {
  position: fixed;
  left: 0;
  top: 110px;
  bottom: 0;
  width: 300px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 16px;
    color: #575d6d;
    clear: both;
    display: block;
    position: relative;
    margin: 0;
    line-height: 42px;
    margin-bottom: 10px;
    &:hover {
      background: #dcf9f0;
      &:after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 4px;
        background: #06d292;
      }
    }
  }
  h2 {
    text-indent: 2em;
    font-size: 16px;
    color: #000a11;
    margin-bottom: 15px;
  }
  h3 {
    text-indent: 4em;
    cursor: pointer;
    color: #4c4c4c;
    font-size: 14px;
  }
}
#menu{
  .item{
    h3{
      display: none;
    }
    h2{
       &:before {
        content: "";
        position: absolute;
        right: 15px;
        top: 0;
        bottom: 0;
        width: 42px;
        background: url("../../assets/img/icon-close.png");
      }
      &:hover:before {
        background: url("../../assets/img/icon-hover.png");
      }
    }
    &.open{
      h2{
        &::before {
          background: url("../../assets/img/icon-open.png");
        }
      }
      h3{
        display: block;
      }
    }
  }
}
p {
  margin: 20px 0;
  &:after,
  &:before {
    content: "";
    display: block;
    clear: both;
  }
}
.topic3 {
  margin-left: 3em;
}
.content {
  margin-left: 360px;
  padding-right: 220px;
  box-sizing: border-box;
  margin-top: 110px;
  p > img {
    float: right;
    margin-bottom: 10px;
    zoom: 0.8;
  }
  em {
    float: right;
    margin-right: 30px;
    font-size: 14px;
    color: #808080;
  }
  .h2 {
    display: none;
  }
  .h3 {
    margin-top: 2em;
    font-size: 28px;
    color: #0d1a26;
    line-height: 2em;
  }
  .h4 {
    font-size: 24px;
    color: #0d1a26;
    line-height: 2em;
  }
  .h5 {
    font-size: 24px;
    color: #575d6d;
  }
  blockquote {
    margin: 30px 0;
    position: relative;
    p {
      font-size: 14px;
      color: #808080;
      font-style: italic;
      text-align: right;
      padding-right: 3em;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  hr {
    margin: 80px 0;
    clear: both;
  }
}
</style>
