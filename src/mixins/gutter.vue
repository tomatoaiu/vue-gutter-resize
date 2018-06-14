<script>
const MAX_DRAG_RANGE = 100
const MIN_DRAG_RANGE = 0

export default {
  data () {
    return {
      gutterComponent: {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0
      }
    }
  },
  mounted () {
    this.setPlaygroundRect()
  },
  methods: {
    setPlaygroundRect: function () { 
      const clientRect = this.$refs.gutter.getBoundingClientRect()
      this.gutterComponent.width = clientRect.width
      this.gutterComponent.height = clientRect.height
      this.gutterComponent.offsetX = window.pageXOffset + clientRect.left
      this.gutterComponent.offsetY = window.pageYOffset + clientRect.top
    },
    isDraggingGutter: function (e) {
      return (e && e.clientX > 0 && e.clientY > 0)
    },
    isGutterInRange: function (size) {
      return (size < MAX_DRAG_RANGE && size > MIN_DRAG_RANGE)
    },
    getCurrentMousePosition: function (e) {
      return { mouseX: e.clientX - this.gutterComponent.offsetX, mouseY: e.clientY - this.gutterComponent.offsetY }
    },
  }
}
</script>

<style scoped>
div section {
  margin: 0;
  padding: 0;
}

section {
  width: 100%;
  height: 100vh;
}

.content {
  height: 100%;
}

.pane {
  overflow: hidden;
  height: 100%;
}

.pane .content .preview {
  overflow: scroll;
  height: 100%;
}

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

.gutter-h {
  width: 100%;
  height: 2px;
  cursor: ns-resize;
}
</style>
