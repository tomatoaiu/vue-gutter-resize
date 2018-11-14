<template>
  <row-gutter
    :row="row"
    :width="'100%'"
    :height="'100vh'"
    :gutter-sizes="['7px', '1rem']"
    :colors="colors"
    :rowSizes="[1, 1, 1]"
  >
    <column-gutter
      slot="row-0"
      class="row"
      :column="columnVue"
      :width="'100%'"
      :height="'100%'"
      :gutter-size="'6px'"
      :color="'green'"
      :column-sizes="[1, 1, 5]"
    >
      <div class="column" slot="col-0">V</div>
      <div class="column" slot="col-1">u</div>
      <div class="column" slot="col-2">e</div>
    </column-gutter>
    <column-gutter
      slot="row-1"
      class="row"
      :column="columnGutter"
      :width="'100%'"
      :height="'100%'"
      :gutter-size="'10px'"
      :color="'orange'"
      :column-sizes="[1, 1, 1, 1, 1, 3]"
    >
      <div class="column" slot="col-0">G</div>
      <div class="column" slot="col-1">u</div>
      <div class="column" slot="col-2">t</div>
      <div class="column" slot="col-3">t</div>
      <div class="column" slot="col-4">e</div>
      <div class="column" slot="col-5">r</div>
    </column-gutter>
    <column-gutter
      slot="row-2"
      class="row"
      :column="columnResize"
      :width="'100%'"
      :height="'100%'"
      :gutter-size="'4px'"
      :color="'cyan'"
      :column-sizes="[1, 1, 1, 1, 1, 3]"
    >
      <div class="column" slot="col-0">R</div>
      <div class="column" slot="col-1">e</div>
      <div class="column" slot="col-2">s</div>
      <div class="column" slot="col-3">i</div>
      <div class="column" slot="col-4">z</div>
      <div class="column" slot="col-5">e</div>
    </column-gutter>
  </row-gutter>
</template>

<script>
// import { RowGutter, ColumnGutter } from '../dist/vue-gutter-resize.common.js'
// import { RowGutter, ColumnGutter } from '../dist/vue-gutter-resize.umd.min.js'
// import { RowGutter, ColumnGutter } from '../dist/vue-gutter-resize.umd.js'
// import '../dist/vue-gutter-resize.css'
import RowGutter from "./components/row-gutter.vue";
import ColumnGutter from "./components/column-gutter.vue";

export default {
  name: "App",
  components: {
    RowGutter,
    ColumnGutter
  },
  data() {
    return {
      row: 3,
      colors: ["red", "blue"],
      columnVue: 3,
      columnGutter: 6,
      columnResize: 6
    };
  }
};
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
