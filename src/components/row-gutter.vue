<template>
  <section ref="gutter" :style="`width: ${width}; height: ${height};`">
    <div
      :style="`height: calc(${areaSize[0]}%);`">
      <slot :name="`row-0`"></slot>
    </div>
    <div
      v-for="n in (row - 1)" :key="n"
      :style="`height: calc(${areaSize[n]}% - ${gutterSize || gutterSizes[n - 1]});`">
      <div
        class="gutter gutter-h" draggable="true"
        :style="`height: ${gutterSize || gutterSizes[n - 1]}; width: ${width}; background-color: ${color || colors[n - 1]};`"
        @drag="e => { drag(e, n - 1) }"
        @dragstart="dragstart($event, n - 1)">
      </div>
      <div
        v-if="n !== row - 1"
        class="pane pane-h" :style="`height: calc(${100}% - ${gutterSize || gutterSizes[n - 1]});`">
        <slot :name="`row-${n}`"></slot>
      </div>
      <div
        v-else
        class="pane pane-h" :style="`height: calc(${100}%});`">
        <slot :name="`row-${n}`"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  name: 'rowGutter',
  mixins: [ gutter ],
  props: {
    row: {
      type: Number,
      required: true,
      default: 2
    },
    rowSizes: {
      type: Array,
    }
  },
  created () {
    if (this.isArrayContains(this.rowSizes)) {
      if (this.row !== this.rowSizes.length) throw console.error(`Please row equal rowSizes.length\nrow: ${this.row}, rowSizes.length: ${this.rowSizes.length}`)
    }
    if (this.isArrayContains(this.colors)) {
      if ((this.row - 1) !== this.colors.length) throw console.error(`Please (row - 1) equal colors.length\n(row - 1): ${this.row - 1}, colors.length: ${this.colors.length}`)
    }
  },
  methods: {
    divideArea () {
      if (this.isArrayContains(this.rowSizes)) {
        this.specifyDivideArea(this.rowSizes)
      } else {
        this.generalDivideArea()
      }
    },
    drag (e, index) {
      const { mouseY } = this.getCurrentMousePosition(e)
      this.draggingGutter(e, mouseY, index, this.gutterComponent.height)
      this.$emit('resize', { row: this.areaSize })
    }
  }
}
</script>

<style scoped>
.pane {
  height: 100%;
}

.pane-v {
  float: left;
}

.gutter {
  background: #ccc;
  overflow: hidden;
  position: relative;
}

.active {
  z-index: 1;
}

.gutter-h {
  width: 100%;
  height: 2px;
  cursor: ns-resize;
}
</style>
