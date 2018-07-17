<script>
import { throws } from 'assert';
const MAX_DRAG_RANGE = 100
const MIN_DRAG_RANGE = 0

export default {
  props: {
    width: {
      type: String,
      required: true,
      default: '500px'
    },
    height: {
      type: String,
      required: true,
      default: '500px'
    },
    gutterSize: {
      type: String
    },
    gutterSizes: {
      type: Array,
    },
    color: {
      type: String
    },
    colors: {
      type: Array,
    }
  },
  data () {
    return {
      target: undefined,
      areaSize: [],
      gutterComponent: {
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0
      }
    }
  },
  created () {
    this.divideArea()
  },
  mounted () {
    this.setPlaygroundRect()
  },
  methods: {
    isArrayContains (array) {
      return (array && array.length && array.length > 0)
    },
    draggingGutter (e, mousePosition, index, gutterSize) {
      const gutterSum = this.getGutterSum(index, this.gutterSize, this.gutterSizes)
      if (this.isDraggingGutter(e)) {
        const oneTopSize = ((mousePosition + gutterSum) / gutterSize) * 100
        if (this.isGutterInRange(oneTopSize)) {
          let before = 0
          for (let i = 0; i < index; i++) {
            before += this.areaSize[i]
          }
          const sum = this.areaSize[index] + this.areaSize[index + 1]
          if ((oneTopSize - before) >= 0 && (before + sum - oneTopSize) >= 0) {
            this.areaSize.splice(index, 1, oneTopSize - before)
            this.areaSize.splice(index + 1, 1, before + sum - oneTopSize)
          }
        }
      }
    },
    specifyDivideArea (sizes) {
      const sum = sizes.reduce((prev, current) => {
        return prev + current
      })
      if (sum > 100) throw console.error('Please total area size is 100 or less.')
      sizes.forEach(size => {
        const raio = 100 / sum
        this.areaSize.push(size * raio)
      })
    },
    generalDivideArea () {
      for (let i = 0; i < this.row; i++) {
        this.areaSize.push(100 / this.row)
      }
    },
    dragstart (e, index) {
      if (this.target && this.target.classList) {
        this.target.classList.remove('active');
      }
      e.target.classList.add('active');
      this.target = e.target
    },
    setPlaygroundRect () { 
      const clientRect = this.$refs.gutter.getBoundingClientRect()
      this.gutterComponent.width = clientRect.width
      this.gutterComponent.height = clientRect.height
      this.gutterComponent.offsetX = window.pageXOffset + clientRect.left
      this.gutterComponent.offsetY = window.pageYOffset + clientRect.top
    },
    isDraggingGutter (e) {
      return (e && e.clientX > 0 && e.clientY > 0)
    },
    isGutterInRange (size) {
      return (size < MAX_DRAG_RANGE && size > MIN_DRAG_RANGE)
    },
    getCurrentMousePosition (e) {
      return { mouseX: e.clientX - this.gutterComponent.offsetX, mouseY: e.clientY - this.gutterComponent.offsetY }
    },
    getGutterSum (index, gutterSize, gutterSizes) {
      let gutterSum = 0
      if (this.isArrayContains(this.gutterSizes)) {
        for (let i = 0; i < index; i++) {
          gutterSum += this.gutterSizes[i].match(/-?[0-9]+\.?[0-9]*/g).pop() | 0
        }
        gutterSum += (this.gutterSizes[index].match(/-?[0-9]+\.?[0-9]*/g).pop() | 0) / 2
      } else {
        for (let i = 0; i < index; i++) {
          gutterSum += this.gutterSize.match(/-?[0-9]+\.?[0-9]*/g).pop() | 0
        }
        gutterSum += (this.gutterSize.match(/-?[0-9]+\.?[0-9]*/g).pop() | 0) / 2
      }
      return gutterSum
    }
  }
}
</script>
