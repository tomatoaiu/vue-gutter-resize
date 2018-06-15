<template>
  <section ref="gutter" :style="`width: ${width}px; height: ${height}px;`">
      <div class="pane pane-h top" :style="`height: calc(${resize.top}% - ${gutterSize / 2}px);`">
        <section class="content">
          <slot name="top-content"></slot>
        </section>
      </div>
      <div class="gutter gutter-h" draggable="true"
        :style="`height: ${gutterSize}px; background-color: ${color};`"
        @drag="drag">
      </div>
      <div class="pane pane-h bottom" :style="`height: calc(${resize.bottom}% - ${gutterSize / 2}px);`">
        <section class="content">
          <slot name="bottom-content"></slot>
        </section>
      </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  name: 'horizontalGutter',
  mixins: [ gutter ],
  props: ['top', 'bottom', 'width', 'height', 'gutterSize', 'color'],
  data () {
    return {
      resize: {
        top: this.top,
        bottom: this.bottom
      }
    }
  },
  methods: {
    drag (e) {
      const { mouseY } = this.getCurrentMousePosition(e)
      if (this.isDraggingGutter(e)) {
        const topSize = ((mouseY) / this.gutterComponent.height) * 100
        if (this.isGutterInRange(topSize)) {
          this.$emit('resize', { top: topSize, bottom: 100 - topSize})
          this.resize.top = topSize
          this.resize.bottom = 100 - topSize
        }
      }
    }
  }
}
</script>
