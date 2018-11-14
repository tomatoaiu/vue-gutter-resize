<template>
  <section ref="gutter" :style="`width: ${width}; height: ${height};`">
    <div
      class="pane pane-v left"
      :style="`width: calc(${areaSize[0]}% - ${gutterSize || gutterSizes[0]});`"
    >
      <slot :name="`col-${0}`"></slot>
    </div>
    <div
      v-for="n in column - 1"
      :key="n"
      class="afterCol"
      :style="
        `width: calc(${areaSize[n]}% - ${gutterSize || gutterSizes[n - 1]});`
      "
    >
      <div
        class="gutter gutter-v"
        draggable="true"
        :style="
          `width: ${gutterSize || gutterSizes[n - 1]}; height: ${height}; background-color: ${color || colors[n - 1]};`
        "
        @drag="drag($event, n - 1);"
        @dragstart="dragstart($event, n - 1);"
      ></div>
      <div
        v-if="n !== column - 1"
        class="pane pane-v"
        :style="`width: calc(${100}% - ${gutterSize || gutterSizes[n - 1]}`"
      >
        <slot :name="`col-${n}`"></slot>
      </div>
      <div v-else class="pane pane-v" :style="`width: calc(${100}%}`">
        <slot :name="`col-${n}`"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import gutter from "../mixins/gutter.vue";

export default {
  name: "ColumnGutter",
  mixins: [gutter],
  props: {
    column: {
      type: Number,
      required: true,
      default: 2
    },
    columnSizes: {
      type: Array
    }
  },
  created() {
    if (this.isArrayContains(this.columnSizes)) {
      if (this.column !== this.columnSizes.length)
        throw console.error(
          `Please column equal columnSizes.length\ncolumn: ${this.column}, columnSizes.length: ${this.columnSizes.length}`
        );
    }
    if (this.isArrayContains(this.colors)) {
      if (this.column - 1 !== this.colors.length)
        throw console.error(
          `Please (column - 1) equal colors.length\n(column - 1): ${this.column - 1}, colors.length: ${this.colors.length}`
        );
    }
  },
  methods: {
    divideArea() {
      if (this.isArrayContains(this.columnSizes)) {
        this.specifyDivideArea(this.columnSizes);
      } else {
        this.generalDivideArea();
      }
    },
    drag(e, index) {
      const { mouseX } = this.getCurrentMousePosition(e);
      this.draggingGutter(e, mouseX, index, this.gutterComponent.width);
      this.$emit("resize", { col: this.areaSize });
    }
  }
};
</script>

<style scoped>
.pane-v {
  float: left;
  height: 100%;
}

.afterCol {
  height: 100%;
  display: inline-block;
}

.gutter {
  background: #ccc;
  overflow: hidden;
  position: relative;
}

.active {
  z-index: 1;
}

.gutter-v {
  float: left;
  width: 2px;
  height: 100%;
  cursor: ew-resize;
}
</style>
