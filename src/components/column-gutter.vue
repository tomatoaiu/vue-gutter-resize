<template>
  <section ref="gutter" :style="`width: ${width}px; height: ${height}px;`">
      <div v-for="n in (column - 1)" :key="n">
        <div v-if="n == 1"
          class="pane pane-v left" :style="`width: calc(${col[n - 1]}% - ${gutterSize}px);`">
          <section class="content">
            <slot :name="`col-${n - 1}`"></slot>
          </section>
        </div>
        <div
          class="gutter gutter-v" draggable="true"
          :style="`width: ${gutterSize}px; height: ${height}px; background-color: ${color || colors[n - 1]};`"
          @drag="e => { drag(e, n - 1) }">
        </div>
        <div
          class="pane pane-v" :style="`width: calc(${col[n]}% - ${gutterSize}px);`">
          <section class="content">
            <slot :name="`col-${n}`"></slot>
          </section>
        </div>
      </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  name: 'columnGutter',
  mixins: [ gutter ],
  props: ['width', 'height', 'gutterSize', 'color', 'column', 'colors'],
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
          this.sum = sum
          this.col.splice(index, 1, leftSize - before)
          this.col.splice(index + 1, 1, before + sum - leftSize)
        }
      }
    }
  }
}
</script>
