import pkg from '../../package.json'
import store from './store'

export const version = pkg.version

export function getQueryString (name, url) {
  url = url || window.location.href
  const r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)')
  const m = url.match(r)
  return decodeURIComponent(!m ? '' : m[2])
}

export function getKeyword () {
  const el = document.querySelector('input[type=\'search\'],input[type=\'text\'][autocomplete=\'off\'],input[autocomplete=\'off\']:not([type])') ||
    document.querySelector('input[type=\'text\'][name][value],input[name][value]:not([type])')
  if (el) {
    if (el.nodeName === 'INPUT' || el.localName === 'textarea') {
      return el.value
    } else {
      return el.textContent
    }
  }
  return ''
}

export function checkBody () {
  let time = 0
  return new Promise((resolve, reject) => {
    if (document && document.body) {
      resolve()
    } else {
      const id = setInterval(function () {
        time += 1
        if (document && document.body) {
          clearInterval(id)
          resolve()
        }
        if (time === 50) {
          clearInterval(id)
          reject(new Error('timeOut'))
        }
      }, 200)
    }
  })
}

function getName (name) {
  if (name) {
    return `__allSearch__${name}`
  }
  return null
}

export let getSession = function (name) {
  const formatName = getName(name)
  let item
  // eslint-disable-next-line
  if (window.GM_getValue) {
    // eslint-disable-next-line
    item = window.GM_getValue(formatName)
  } else {
    item = window.localStorage.getItem(formatName)
  }
  if (item) {
    try {
      return JSON.parse(item)
    } catch (e) {
      return item
    }
  }
  return null
}

export let setSession = function (name, value) {
  const formatName = getName(name)
  // eslint-disable-next-line
  if (window.GM_setValue) {
    // eslint-disable-next-line
    window.GM_setValue(formatName, value)
  } else {
    const item = JSON.stringify(value)
    if (item) {
      window.localStorage.setItem(formatName, item)
    }
  }
}

export function addStyle (styleContent) {
  if (!styleContent) {
    return
  }
  const style = document.createElement('style')
  style.innerHTML = styleContent
  style.class = 'all-search-style'
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(style)
}

function addLink (url, name) {
  if (!url) {
    return
  }
  if (name) {
    const list = document.styleSheets
    for (let i = 0; i < list.length; i++) {
      if (list[i].ownerNode.className === name) {
        return
      }
    }
  }
  const link = document.createElement('link')
  link.href = url
  link.rel = 'stylesheet'
  link.type = 'text/css'
  link.crossorigin = 'anonymous'
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(link)
}

export function addStyleResource (name, link) {
  let styleContent
  if (window.GM_getResourceText) {
    styleContent = window.GM_getResourceText(name)
  }
  if (styleContent) {
    addStyleContent(styleContent, name)
  } else {
    addLink(link, name)
  }
}

export function RAFInterval (callback, period, runNow) {
  // 一秒60次，对应1秒1000ms
  const needCount = period / 1000 * 60
  let times = 0 // 已经计数的数量

  if (runNow === true) { // 对于立即执行函数的立即判定，否则进行
    const shouldFinish = callback()
    if (shouldFinish) {
      return
    }
  }

  function step () {
    if (times < needCount) {
      // 计数未结束-继续计数
      times++
      requestAnimationFrame(step)
    } else {
      // 计数结束-停止计数，判定结果
      const shouldFinish = callback() || false
      if (!shouldFinish) {
        // 返回值为false，重启计数器
        times = 0
        requestAnimationFrame(step)
      }
    }
  }

  requestAnimationFrame(step)
}

export function removeNode (cssSelectorOrFunction) {
  try {
    if (typeof (cssSelectorOrFunction) === 'string') {
      let removeNodes = document.querySelectorAll(cssSelectorOrFunction)
      for (let i = 0; i < removeNodes.length; i++) {
        removeNodes[i].remove()
      }
    } else if (typeof (cssSelectorOrFunction) === 'function') {
      cssSelectorOrFunction()
    } else {
      console.log('未知命令：' + cssSelectorOrFunction)
    }
  } catch (e) {
    console.log(e)
  }
}

export function addStyleContent (css, className, addToTarget, isReload = false) {
  // 添加CSS代码，不考虑文本载入时间，只执行一次-无论成功与否，带有className
  RAFInterval(function () {
    /**
     * addToTarget这里不要使用head标签,head标签的css会在html载入时加载，
     * html加载后似乎不会再次加载，body会自动加载
     * **/
    let addTo = document.querySelector(addToTarget)
    if (typeof (addToTarget) === 'undefined') {
      addTo = (document.body || document.head || document.documentElement || document)
    }
    // 如果没有目标节点(则直接加) || 有目标节点且找到了节点(进行新增)
    if (typeof (addToTarget) === 'undefined' ||
      (typeof (addToTarget) !== 'undefined' &&
        document.querySelector(addToTarget) !== null)
    ) {
      // 如果true 强行覆盖，不管有没有--先删除
      // 如果false，不覆盖，但是如果有的话，要退出，不存在则新增--无需删除
      if (isReload) {
        removeNode('.' + className)
      } else if (!isReload && document.querySelector('.' + className) !== null) {
        // 节点存在 && 不准备覆盖
        return true
      }
      let cssNode = document.createElement('style')
      if (className) {
        cssNode.className = className
      }
      cssNode.setAttribute('type', 'text/css')
      cssNode.innerHTML = css
      try {
        addTo.appendChild(cssNode)
      } catch (e) {
        console.log(e.message)
      }
      return true
    }
  }, 20, true)
}

export function getAsRoot () {
  return document.getElementById('all-search')
}

export function createAsRoot () {
  let el = document.createElement('div')
  el.id = 'all-search'
  return el
}

const scriptLoaded = getName('script-loaded')
const pageLoaded = getName('page-loaded')

export function passTmMethods () {
  const emit = function () {
    document.dispatchEvent(new CustomEvent(scriptLoaded, {
      detail: {
        version,
        getSession,
        setSession
      }
    }))
  }
  document.addEventListener(pageLoaded, emit)
  emit()
}

export function getTmMethods () {
  document.addEventListener(scriptLoaded, (event) => {
    store.tmVersion = event.detail.version
    getSession = event.detail.getSession
    setSession = event.detail.setSession
  })
  document.dispatchEvent(new Event(pageLoaded))
}

export const isMobile = function () {
  return (/Android|webOS|iPhone|iPod|BlackBerry|iphone os|ipad/.test(navigator.userAgent.toLowerCase()))
}
