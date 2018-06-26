<template>
  <div>
    <row-gutter
      :row="row"
      :width="'100%'"
      :height="'100vh'"
      :gutterSizes="['7px', '1rem']"
      :colors="colors"
      :rowSizes="[1, 2, 9]">
      <div slot="row-0" class="row">
        <column-gutter
          :column="columnVue"
          :width="'100%'"
          :height="'100%'"
          :gutterSize="'6px'"
          :color="'green'"
          :columnSizes="[5, 1, 1]">
          <div class="column" slot="col-0">V</div>
          <div class="column" slot="col-1">u</div>
          <div class="column" slot="col-2">e</div>
        </column-gutter>
      </div>
      <div slot="row-1" class="row">
        <column-gutter
          :column="columnGutter"
          :width="'100%'"
          :height="'100%'"
          :gutterSize="'10px'"
          :color="'orange'">
          <div class="column" slot="col-0">G</div>
          <div class="column" slot="col-1">u</div>
          <div class="column" slot="col-2">t</div>
          <div class="column" slot="col-3">t</div>
          <div class="column" slot="col-4">e</div>
          <div class="column" slot="col-5">r</div>
        </column-gutter>
      </div>
      <div slot="row-2" class="row">
        <column-gutter
          :column="columnResize"
          :width="'100%'"
          :height="'100%'"
          :gutterSize="'4px'"
          :color="'cyan'">
          <div class="column" slot="col-0">R</div>
          <div class="column" slot="col-1">e</div>
          <div class="column" slot="col-2">s</div>
          <div class="column" slot="col-3">i</div>
          <div class="column" slot="col-4">z</div>
          <div class="column" slot="col-5">e</div>
        </column-gutter>
      </div>
    </row-gutter>
  </div>
</template>

<script>
import { rowGutter, columnGutter } from '../dist/vue-gutter-resize.umd.js'
// import { rowGutter, columnGutter } from '../dist/vue-gutter-resize.js'
// import { rowGutter, columnGutter } from '../dist/vue-gutter-resize.js'
// import rowGutter from './components/row-gutter.vue'
// import columnGutter from './components/column-gutter.vue'

export default {
  name: 'app',
  data () {
    return {
      row: 3,
      colors: ['red', 'blue'],
      columnVue: 3,
      columnGutter: 6,
      columnResize: 6,
    }
  },
  components: {
    'row-gutter': rowGutter,
    'column-gutter': columnGutter
  }
}
</script>

<style scoped>
.row .column {
  font-size: 12rem;
}

.column {
  overflow: hidden;
}

.row {
  height: 100%;
  overflow: hidden;
}
</style>
