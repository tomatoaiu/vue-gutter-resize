<template>
  <div>
    <row-gutter
      style="border: 1px solid #ccc;"
      :row="row"
      :width="'80%'"
      :height="'600px'"
      :gutterSizes="['4px', '1rem', '1em']"
      :colors="colors"
      @resize="resize">
      <div slot="row-0">0</div>
      <div slot="row-1">1</div>
      <div slot="row-2">2</div>
      <div slot="row-3">3</div>
    </row-gutter>
  </div>
</template>

<script>
import rowGutter from './components/row-gutter.vue'

export default {
  data(){
    return {
      row: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  methods: {
    resize ({ row }) {
      console.log(row) // current row size (etc... [25, 25, 25, 25]
    }
  },
  components: {
    'row-gutter': rowGutter
  }
}
</script>
