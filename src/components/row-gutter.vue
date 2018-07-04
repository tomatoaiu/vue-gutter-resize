<template>
  <section ref="gutter" :style="`width: ${width}; height: ${height};`">
      <div
        :style="`height: calc(${rowArray[0]}%);`">
        <slot :name="`row-0`"></slot>
      </div>
      <div
        v-for="n in (row - 1)" :key="n"
        :style="`height: calc(${rowArray[n]}% - ${gutterSize || gutterSizes[n - 1]});`">
        <div
          class="gutter gutter-h" draggable="true"
          :style="`height: ${gutterSize || gutterSizes[n - 1]}; width: ${width}; background-color: ${color || colors[n - 1]};`"
          @drag="e => { drag(e, n - 1) }">
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
  props: ['width', 'height', 'gutterSize', 'gutterSizes', 'color', 'row', 'colors', 'rowSizes'],
  data () {
    return {
      rowArray: []
    }
  },
  created () {
    if (this.rowSizes && this.rowSizes.length && this.rowSizes.length > 0) {
      const sum = this.rowSizes.reduce((prev, current) => {
        return prev + current
      })
      this.rowSizes.forEach(size => {
        const raio = 100 / sum
        this.rowArray.push(size * raio)
      })
    } else {
      for (let i = 0; i < this.row; i++) {
        this.rowArray.push(100 / this.row)
      }
    }
  },
  methods: {
    drag (e, index) {
      const { mouseY } = this.getCurrentMousePosition(e)
      const gutterSum = this.getGutterSum(index, this.gutterSize, this.gutterSizes)
      if (this.isDraggingGutter(e)) {
        const topSize = ((mouseY + gutterSum) / this.gutterComponent.height) * 100
        if (this.isGutterInRange(topSize)) {
          let before = 0
          for (let i = 0; i < index; i++) {
            before += this.rowArray[i]
          }
          const sum = this.rowArray[index] + this.rowArray[index + 1]
          if ((topSize - before) >= 0 && (before + sum - topSize) >= 0) {
            this.rowArray.splice(index, 1, topSize - before)
            this.rowArray.splice(index + 1, 1, before + sum - topSize)
            this.$emit('resize', { row: this.rowArray })
          }
        }
      }
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
}

.gutter-h {
  width: 100%;
  height: 2px;
  cursor: ns-resize;
}
</style>
