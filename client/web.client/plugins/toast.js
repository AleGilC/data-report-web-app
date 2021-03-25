import Vue from 'vue'
import Toasted from 'vue-toasted'

const options = {
  iconPack: 'mdi',
  position: 'bottom-right',
  duration: 6000,
}
Vue.use(Toasted, options)

const message = (text) => {
  const style = 'style="font-weight: 400;"'
  const replace = (txt, i) =>
    `<p ${i ? style : ''}>{txt}</p>\n`.replace('{txt}', txt)

  const content = text
    .split('\n')
    .filter((txt) => !!txt.trim())
    .map((txt, i) => replace(txt, i))
    .join('')

  return `<div style="padding-top: 4px;">${content}</div>`
}

const ToastMixin = (text, options = {}) => {
  text = message(text)

  Vue.toasted.show(text, options)
}

const toastsBasic = [
  { type: 'message', icon: 'mdi-tag-outline' },
  { type: 'success', icon: 'mdi-tag-outline' },
  { type: 'info', icon: 'mdi-information-variant' },
  { type: 'warn', icon: 'mdi-alert-outline' },
  { type: 'error', icon: 'mdi-alert-circle-outline' },
]

const toasts = toastsBasic.reduce((obj, item) => {
  obj[item.type] = (text, options = {}) => {
    ToastMixin(text, {
      action: {
        text: 'x',
        onClick: (e, toastObject) => {
          toastObject.goAway(0)
        },
      },
      ...item,
      ...options,
    })
  }
  return obj
}, {})

export default (ctx, inject) => {
  inject('toast', toasts)
}
