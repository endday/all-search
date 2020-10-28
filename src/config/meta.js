import pkg from '../../package.json'
import { list } from './loadList'

const endOfLine = require('os').EOL

const now = new Date()

const includeList = list
  .map(item => `// @include      ${item.url}`)
  .join(endOfLine)

const meta = `// ==UserScript==
// @name         ${pkg.name} 全搜，一个搜索引擎快捷跳转菜单, 支持图形界面自定义
// @version      ${pkg.version}
// @description  ${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日更新 ${pkg.description}
// @author       ${pkg.author}
// @license      ${pkg.license}
// @update       ${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}
// @homepageURL  ${pkg.homepage}

// @noframes
// @require      https://lib.baomitu.com/vue/2.6.11/vue.js
// @resource     iconFont  https://cdn.jsdelivr.net/npm/all-search/src/assets/iconfont.css?v=${pkg.version}
// @resource     as-style  https://cdn.jsdelivr.net/npm/all-search/build/as-style.css?v=${pkg.version}
// @run-at       document-start

// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_getResourceText

${includeList}

// ==/UserScript==
/* eslint-disable */
`

export default meta
