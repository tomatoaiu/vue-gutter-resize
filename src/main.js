import Vue from 'vue';
import Main from './index.vue';

const vm = new Vue({
  render: h => h(Main),
});

vm.$mount('#app');
