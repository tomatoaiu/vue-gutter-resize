<template>
  <div>
    <column-gutter
      style="border: 1px solid #ccc;"
      :column="column"
      :width="800"
      :height="600"
      :gutterSizes="[4, 10, 3]"
      :colors="colors"
      @resize="resize">
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
  methods: {
    resize ({ column }) {
      console.log(column) // current column size (etc... [25, 25, 25, 25]
    }
  },
  components: {
    'column-gutter': columnGutter
  }
}
</script>
