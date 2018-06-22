import Vue from 'vue'
import columnGutter from './components/column-gutter.vue'
import rowGutter from './components/row-gutter.vue'

const Components = {
  columnGutter, 
  rowGutter 
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
