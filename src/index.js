import columnGutter from './components/column-gutter.vue'
import rowGutter from './components/row-gutter.vue'

const Components = {
  columnGutter, 
  rowGutter 
}

function install (Vue) {
  Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
  })
}

const plugin = {
  install
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

// Make it split and import
export {
  columnGutter, 
  rowGutter
}

// Make it available as vue plugin
export default plugin
