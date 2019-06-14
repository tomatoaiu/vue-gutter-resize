import ColumnGutter from './components/column-gutter.vue';
import RowGutter from './components/row-gutter.vue';

const Components = {
  ColumnGutter,
  RowGutter,
};

function install(Vue) {
  Object.keys(Components).forEach((name) => {
    Vue.component(name, Components[name]);
  });
}

const plugin = {
  install,
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

// Make it split and import
export { ColumnGutter, RowGutter };

// Make it available as vue plugin
export default plugin;
