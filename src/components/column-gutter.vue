<template>
  <section ref="gutter" :style="`width: ${width}; height: ${height};`">
      <div
        class="pane pane-v left" :style="`height: 100%; width: calc(${col[0]}% - ${gutterSize || gutterSizes[0]});`">
        <slot :name="`col-${0}`"></slot>
      </div>
      <div
        v-for="n in (column - 1)" :key="n"
        :style="`display: inline-block; height: 100%; width: calc(${col[n]}% - ${gutterSize || gutterSizes[n - 1]});`">
        <div
          class="gutter gutter-v" draggable="true"
          :style="`width: ${gutterSize || gutterSizes[n - 1]}; height: ${height}; background-color: ${color || colors[n - 1]};`"
          @drag="e => { drag(e, n - 1) }">
        </div>
        <div
          v-if="n !== column - 1"
          class="pane pane-v" :style="`height: 100%; width: calc(${100}% - ${gutterSize || gutterSizes[n - 1]}`">
          <slot :name="`col-${n}`"></slot>
        </div>
        <div
          v-else
          class="pane pane-v" :style="`height: 100%; width: calc(${100}%}`">
          <slot :name="`col-${n}`"></slot>
        </div>
      </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  name: 'columnGutter',
  mixins: [ gutter ],
  props: ['width', 'height', 'gutterSize', 'gutterSizes', 'color', 'column', 'colors'],
  data () {
    return {
      col: [],
    }
  },
  created () {
    for (let i = 0; i < this.column; i++) {
      this.col.push(100 / this.column)
    }
  },
  methods: {
    drag (e, index) {
      const { mouseX } = this.getCurrentMousePosition(e)
      if (this.isDraggingGutter(e)) {
        const leftSize = ((mouseX) / this.gutterComponent.width) * 100
        if (this.isGutterInRange(leftSize)) {
          let before = 0
          for (let i = 0; i < index; i++) {
            before += this.col[i]
          }
          const sum = this.col[index] + this.col[index + 1]
          this.col.splice(index, 1, leftSize - before)
          this.col.splice(index + 1, 1, before + sum - leftSize)
          this.$emit('resize', { col: this.col })
        }
      }
    }
  }
}
</script>

<style scoped>
.pane-v {
  float: left;
}

.gutter {
  background: #ccc;
  overflow: hidden;
}

.gutter-v {
  float: left;
  width: 2px;
  height: 100%;
  cursor: ew-resize;
}
</style>
