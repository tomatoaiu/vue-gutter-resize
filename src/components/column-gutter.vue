<template>
  <section ref="gutter" :style="`width: ${width}px; height: ${height}px;`">
      <div v-for="n in (column - 1)" :key="n">
        <div class="pane pane-v left" :style="`width: calc(${col[n - 1]}% - ${gutterSize}px);`">
          <section class="content">
            <slot :name="`content-${n - 1}`"></slot>
          </section>
        </div>
        <div v-if="n < column"
          class="gutter gutter-v" draggable="true"
          :style="`width: ${gutterSize}px; height: ${height}px; background-color: ${color};`"
          @drag="drag">
        </div>
        <div v-if="n < column"
          class="pane pane-v right" :style="`width: calc(${col[n]}% - ${gutterSize}px);`">
          <section class="content">
            <slot :name="`content-${n}`"></slot>
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
  props: ['width', 'height', 'gutterSize', 'color', 'column'],
  data () {
    return {
      col: new Array(this.column)
    }
  },
  created () {
    for (let i = 0; i < this.col.length; i++) {
      this.col[i] = 100 / this.column
    }
  },
  methods: {
    drag (e) {
      const { mouseX } = this.getCurrentMousePosition(e)
      if (this.isDraggingGutter(e)) {
        const leftSize = ((mouseX) / this.gutterComponent.width) * 100
        if (this.isGutterInRange(leftSize)) {
          this.col[0] = leftSize
          this.col[1] = 100 - leftSize
        }
      }
    }
  }
}
</script>
