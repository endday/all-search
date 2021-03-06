import { getQueryString } from '../util/index.js'

const height = 30
const width = 100

export const list = [
  {
    url: /\/\/www\.google\.com(.hk)?\/search/,
    style: {
      1: `.srp #searchform:not(.minidiv){top: ${height + 20}px !important;}#searchform.minidiv{top: ${height}px !important;}`
    }
  },
  {
    url: /\/\/www\.baidu\.com\/$/,
    invisible: true
  },
  {
    url: /\/\/www\.baidu\.com\/s/,
    style: {
      1: `.fix-head { top: ${height}px !important; }`,
      2: `.fix-head #u { right: ${width}px; }`
    }
  },
  {
    url: /\/\/www\.baidu\.com\/baidu\?wd/,
    style: {
      1: `.fix-head { top: ${height}px !important; }`,
      2: `.fix-head #u { right: ${width}px; }`
    }
  },
  {
    url: /\/\/[^.]*\.bing\.com\/search/
  },
  {
    url: /\/\/duckduckgo\.com\/*/
  },
  {
    url: /\/\/search\.yahoo\.com\/search/
  },
  {
    url: /\/\/tw\.search\.yahoo\.com\/search/
  },
  {
    url: /\/\/searx\.me\/\?q/
  },
  {
    url: /\/\/www\.sogou\.com\/(?:web|s)/,
    style: {
      1: `.header { top: ${height}px }`,
      2: `.header { right: ${width}px }`
    }
  },
  {
    url: /\/\/yandex\.com\/search/,
    style: {
      1: `body { margin: ${height}px!important; }`
    }
  },
  {
    url: /\/\/www\.startpage\.com\/do\/asearch/
  },
  {
    url: /\/\/mijisou.com\/\?q/,
    style: {
      1: `.search-page{top: ${height}px;} .searx-navbar{top: ${height + 12}px!important;}`,
      2: `.search-page{right: ${width}px!important;}`
    }
  },
  {
    url: /\/\/google\.infinitynewtab\.com\/\?q/
  },
  {
    url: /\/\/www\.dogedoge\.com\/results\?q/,
    style: {
      1: `#header_wrapper{top: ${height}px!important;}`,
      2: `#header_wrapper{right: ${width}px!important;}`
    }
  },
  {
    url: /\/\/baike\.baidu\.com\/item/
  },
  {
    url: /\/\/baike\.baidu\.com\/search/
  },
  {
    url: /\/\/wenku\.baidu\.com\/search/
  },
  {
    url: /\/\/zhidao\.baidu\.com\/search/
  },
  {
    url: /\/\/\D{2,5}\.wikipedia\.org\/wiki/
  },
  {
    url: /\/\/www\.zhihu\.com\/search\?/,
    style: {
      1: `.AppHeader.is-fixed {top: ${height}px!important;}`
    }
  },
  {
    url: /\/\/www\.so\.com\/s/
  },
  {
    url: /\/\/so\.baike\.com\/doc/
  },
  {
    url: /\/\/www\.baike\.com\/wiki/
  },
  {
    url: /\/\/www\.docin\.com\/search\.do/
  },
  {
    url: /\/\/zhihu\.sogou\.com\/zhihu/,
    style: {
      1: `.header { top:${height}px }`
    }
  },
  {
    url: /\/\/weixin\.sogou\.com\/weixin\?/
  },
  {
    url: /\/\/www\.quora\.com\/search\?/
  },
  {
    url: /\/\/stackoverflow\.com\/search\?/,
    style: {
      1: `.top-bar._fixed { top: ${height}px }`,
      2: `.top-bar._fixed { right: ${width}px }`
    }
  },
  {
    url: /\/\/search\.bilibili\.com\/all/,
    keyword () {
      return document.getElementById('search-keyword').value
    },
    style: {
      1: `body { margin-top: ${height}px!important; } .fixed-top {top: ${height}px;}`
    }
  },
  {
    url: /\/\/www\.acfun\.cn\/search/,
    keyword () {
      return document.getElementById('search-text--standalone').value
    },
    style: {
      1: `#header {top: ${height}px;}`
    }
  },
  {
    url: /\/\/www\.youtube\.com\/results/,
    style: {
      1: `#masthead-container.ytd-app {top:${height}px !important;} 
          html:not(.style-scope) {--ytd-toolbar-height:${height + 56}px !important;}
          ytd-mini-guide-renderer.ytd-app {padding-top: ${height}px;}`,
      2: `ytd-app {margin-left:${width}px !important;}ytd-mini-guide-renderer.ytd-app, app-drawer{left:${width}px !important;}#masthead-container.ytd-app {width: calc(100% - 100px);}`
    }
  },
  {
    url: /\/\/www\.youtube\.com\/watch/,
    invisible: true
  },
  {
    url: /\/\/www\.nicovideo\.jp\/search\//
  },
  {
    url: /\/\/so\.iqiyi\.com\/so\/q/
  },
  {
    url: /\/\/v\.qq\.com\/x\/search/,
    style: {
      1: `.site_head {top: ${height}px;}`
    }
  },
  {
    url: /\/\/music\.baidu\.com\/search/
  },
  {
    url: /\/\/so\.1ting\.com\/all\.do/
  },
  {
    url: /\/\/www\.xiami\.com\/search/
  },
  {
    url: /\/\/s\.music\.qq\.com/
  },
  {
    url: /\/\/music\.163\.com\/.*?#\/search/
  },
  {
    url: /\/\/image\.baidu\.com\/search/,
    style: {
      1: `#search .s_search { top: ${height}px; }`
    }
  },
  {
    url: /\/\/\w{2,10}\.google(?:\.\D{1,3}){1,2}\/[^?]+\?.*&tbm=isch/
  },
  {
    url: /\/\/.*\.bing\.com\/images\/search/,
    style: {
      1: `#miniheader {padding-top: ${height}px;}`
    }
  },
  {
    url: /\/\/www\.flickr\.com\/search\//
  },
  {
    url: /^http:\/\/www\.pixiv\.net\/search\.php/
  },
  {
    url: /\/\/huaban\.com\/search\/\?/
  },
  {
    url: /\/\/www\.pinterest\.com\/search\//
  },
  {
    url: /\/\/thepiratebay\.org\/search/
  },
  {
    url: /\/\/share\.dmhy\.org\/topics\/list\?keyword=/
  },
  {
    url: /\/\/www\.ed2000\.com\/filelist\.asp/
  },
  {
    url: /\/\/www\.zimuzu\.tv\/search\//
  },
  {
    url: /\/\/so\.cqp\.cc\/search/
  },
  {
    url: /\/\/subhd\.com\/search/
  },
  {
    url: /\/\/translate\.google(?:\.\D{1,4}){1,2}/,
    keyword () {
      return getQueryString('text') || getQueryString('q')
    }
  },
  {
    url: /\/\/fanyi\.baidu\.com/,
    keyword () {
      return document.getElementById('baidu_translate_input').value
    }
  },
  {
    url: /\/\/.*\.bing\.com\/dict\/search\?q=/
  },
  {
    url: /\/\/dict\.youdao\.com\/search/
  },
  {
    url: /\/\/dict\.youdao\.com\/w/
  },
  {
    url: /\/\/dict\.cn\/./
  },
  {
    url: /\/\/s\.taobao\.com\/search/,
    style: {
      1: `.m-header-fixed .header-inner { top: ${height}px !important;}`
    }
  },
  {
    url: /\/\/list\.tmall\.com\/search_product\.htm.*from=chaoshi/
  },
  {
    url: /\/\/list\.tmall\.com\/search_product\.htm/
  },
  {
    url: /\/\/search\.jd\.com\/search/
  },
  {
    url: /\/\/search\.suning\.com/
  },
  {
    url: /\/\/search\.yhd\.com\/c0-0\/k/
  },
  {
    url: /\/\/search\.smzdm\.com\/\?/
  },
  {
    url: /\/\/s\.weibo\.com\/weibo\?q=/,
    style: {
      1: `.WB_global_nav { top: ${height}px !important;}`
    }
  },
  {
    url: /\/\/tieba\.baidu\.com\/f\/search/
  },
  {
    url: /\/\/(movie|music|book)\.douban\.com\/subject_search?/
  },
  {
    url: /\/\/www\.douban\.com\/search/
  },
  {
    url: /\/\/xueshu\.baidu\.com\/(?:s|baidu)/,
    style: {
      1: `#head_wr.gj #head.gj, #left_menu_content { top: ${height}px !important;}`,
      2: `#left_menu_content { left: ${width}px !important;}`
    }
  },
  {
    url: /\/\/scholar\.google(?:\.\D{1,3}){1,2}\/scholar\?/
  },
  {
    url: /^http:\/\/search\.cnki\.net\/search\.aspx/
  },
  {
    url: /^http:\/\/epub\.cnki\.net\/kns\/brief\/default_result\.aspx/
  },
  {
    url: /\/\/s\.g\.wanfangdata\.com\.cn\/Paper\.aspx/
  },
  {
    url: /^http:\/\/.*?ebscohost\.com\/.*?results/
  },
  {
    url: /^http:\/\/link\.springer\.com\/search\?query=/
  },
  {
    url: /.*?jstor.org\/action\/doAdvancedSearch/
  },
  {
    url: /.*?runoob\.com\//
  },
  {
    url: /\/\/github\.com\/search/
  },
  {
    url: /\/\/developer\.mozilla\.org\/.{2,5}\/search/
  },
  {
    url: /\/\/google\.infinitynewtab\.com\/\?q/
  },
  {
    url: /\/\/www\.startpage\.com\/do\/search/
  },
  {
    url: /\/\/endday\.github\.io/,
    invisible: true
  },
  {
    url: /\/\/endday\.gitee\.io/,
    invisible: true
  }
]

export const siteInfo = function () {
  const target = list
    .find(item => item.url.test(window.location.href.toLowerCase()))
  if (target) {
    return {
      url: target.url,
      invisible: target.invisible,
      disabled: target.disabled,
      style: target.style,
      keyword: target.keyword,
      create: target.create,
      mounted: target.mounted
    }
  }
  return {
    url: '',
    invisible: true,
    disabled: true,
    style: {},
    keyword: null,
    create: null,
    mounted: null
  }
}
