<template>
  <section ref="gutter" :style="`width: ${width}px; height: ${height}px;`">
      <div
        :style="`height: calc(${rowArray[0]}% - ${gutterSize || gutterSizes[0]}px);`">
        <div
          class="pane pane-h" :style="`height: calc(${100}% - ${gutterSize || gutterSizes[0]}px);`">
          <section class="content">
            {{ this.rowArray }}
            <slot :name="`row-0`"></slot>
          </section>
        </div>
      </div>
      <div
        v-for="n in (row - 1)" :key="n"
        :style="`height: calc(${rowArray[n]}% - ${gutterSize || gutterSizes[n - 1]}px);`">
        <div
          class="gutter gutter-h" draggable="true"
          :style="`height: ${gutterSize || gutterSizes[n - 1]}px; width: ${width}px; background-color: ${color || colors[n - 1]};`"
          @drag="e => { drag(e, n - 1) }">
        </div>
        <div
          class="pane pane-h" :style="`height: calc(${100}% - ${gutterSize || gutterSizes[n - 1]}px);`">
          <section class="content">
            <slot :name="`row-${n}`"></slot>
          </section>
        </div>
      </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  name: 'rowGutter',
  mixins: [ gutter ],
  props: ['width', 'height', 'gutterSize', 'gutterSizes', 'color', 'row', 'colors'],
  data () {
    return {
      rowArray: []
    }
  },
  created () {
    for (let i = 0; i < this.row; i++) {
      this.rowArray.push(100 / this.row)
    }
  },
  methods: {
    drag (e, index) {
      const { mouseY } = this.getCurrentMousePosition(e)
      if (this.isDraggingGutter(e)) {
        const topSize = ((mouseY) / this.gutterComponent.height) * 100
        if (this.isGutterInRange(topSize)) {
          let before = 0
          for (let i = 0; i < index; i++) {
            before += this.rowArray[i]
          }
          const sum = this.rowArray[index] + this.rowArray[index + 1]
          this.rowArray.splice(index, 1, topSize - before)
          this.rowArray.splice(index + 1, 1, before + sum - topSize)
          this.$emit('resize', { row: this.rowArray })
        }
      }
    }
  }
}
</script>
