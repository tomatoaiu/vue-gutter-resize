<template>
  <div>
    <vertical-gutter
      :left="left" 
      :right="right"
      @resize="resize"
      :width="800"
      :height="600">
      <horizontal-gutter slot="left-content"
        :top="top" 
        :bottom="bottom"
        :width="800"
        :height="600">
        <div slot="top-content">top</div>
        <div slot="bottom-content">bottom</div>  
      </horizontal-gutter>
      <div slot="right-content">right</div>
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
      bottom: 50
    }
  },
  methods: {
    resize ({left, right}) {
      // this.left = left
      // this.right = right
    }
  },
  components: {
    'vertical-gutter': verticalGutter,
    'horizontal-gutter': horizontalGutter
  }
}
</script>
