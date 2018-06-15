<template>
  <div>
    <vertical-gutter
      :left="left" 
      :right="right"
      @resize="resizeVertical"
      :width="800"
      :height="600"
      :gutterSize="2"
      :color="`red`">
      <horizontal-gutter slot="left-content"
        :top="top" 
        :bottom="bottom"
        @resize="resizeHorizontal"
        :width="800"
        :height="600"
        :gutterSize="10"
        :color="`#fedcba`">
        <div slot="top-content">
          top : {{ result.top }}<br />
          left : {{ result.left }}
        </div>
        <div slot="bottom-content">
          bottom : {{ result.bottom }}
        </div>
      </horizontal-gutter>
      <div slot="right-content">
        right : {{ result.right }}
      </div>
    </vertical-gutter>
  </div>
</template>

<script>
import verticalGutter from './components/vertical-gutter.vue'
import horizontalGutter from './components/horizontal-gutter.vue'

export default {
  data(){
    return {
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
      result: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    }
  },
  methods: {
    resizeVertical ({left, right}) {
      this.result.left = left
      this.result.right = right
    },
    resizeHorizontal ({top, bottom}) {
      this.result.top = top
      this.result.bottom = bottom
    }
  },
  components: {
    'vertical-gutter': verticalGutter,
    'horizontal-gutter': horizontalGutter
  }
}
</script>
