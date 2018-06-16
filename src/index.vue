<template>
  <div>
    <column-gutter
      :column="column"
      :width="1200"
      :height="600"
      :gutterSize="4"
      :colors="colors">
      <div slot="col-0">0</div>
      <div slot="col-1">1</div>
      <div slot="col-2">2</div>
      <div slot="col-3">3</div>
    </column-gutter>
  </div>
</template>

<script>
import columnGutter from './components/column-gutter.vue'

export default {
  data(){
    return {
      column: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  components: {
    'column-gutter': columnGutter
  }
}
</script>
