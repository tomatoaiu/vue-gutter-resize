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

// Make it split and import
export {
  columnGutter, 
  rowGutter
}

// Make it available as vue plugin
export default { 
  install
}
