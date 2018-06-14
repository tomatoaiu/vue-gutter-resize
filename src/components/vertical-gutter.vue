<template>
  <section ref="gutter" :style="`width: ${width}px; height: ${height}px;`">
      <div class="pane pane-v left" :style="`width: calc(${resize.left}% - 2px);`">
        <section class="content">
          <slot name="left-content"></slot>
        </section>
      </div>
      <div class="gutter gutter-v" draggable="true"
          @drag="drag">
      </div>
      <div class="pane pane-v right" :style="`width: calc(${resize.right}% - 2px);`">
        <section class="content">
          <slot name="right-content"></slot>
        </section>
      </div>
  </section>
</template>

<script>
import gutter from '../mixins/gutter.vue'

export default {
  mixins: [ gutter ],
  props: ['left', 'right', 'width', 'height'],
  data () {
    return {
      resize: {
        left: this.left,
        right: this.right
      }
    }
  },
  methods: {
    drag (e) {
      const { mouseX } = this.getCurrentMousePosition(e)
      if (this.isDraggingGutter(e)) {
        const leftSize = ((mouseX) / this.gutterComponent.width) * 100
        if (this.isGutterInRange(leftSize)) {
          this.$emit('resize', { left: leftSize, right: 100 - leftSize})
          this.resize.left = leftSize
          this.resize.right = 100 - leftSize
        }
      }
    }
  }
}
</script>
