<template>
  <div>
    <column-gutter
      :column="column"
      :width="'100%'"
      :height="'600px'"
      :gutterSizes="['4px', '1rem', '1em']"
      :colors="colors"
      @resize="resize">
      <div slot="col-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique euismod turpis sit amet aliquet. Nulla tempus lectus quis dui rhoncus finibus. Nunc vestibulum viverra condimentum. Integer finibus justo et velit scelerisque iaculis. Fusce porta laoreet lacus sed placerat. Mauris egestas nec ligula ut pulvinar. Maecenas nec ullamcorper ante. Phasellus rutrum ac sem quis imperdiet. Sed ullamcorper, velit non aliquet convallis, mi dui elementum sapien, ut imperdiet nibh eros eu ex. Donec sed aliquam nunc. Duis sit amet porttitor lorem. Etiam pretium maximus gravida. Nam congue, mi ac gravida tincidunt, eros nibh ornare nibh, ut ultricies lorem erat nec tortor. Donec non semper quam.
      </div>
      <div slot="col-1">1</div>
      <div slot="col-2">2</div>
      <div slot="col-3">3</div>
    </column-gutter>
  </div>
</template>

<script>
// import columnGutter from './components/column-gutter.vue'
import { columnGutter } from '../app/vue-gutter-resize.umd.js'

export default {
  data(){
    return {
      column: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  methods: {
    resize ({ col }) {
      console.log(col) // current col size (etc... [25, 25, 25, 25]
    }
  },
  components: {
    'column-gutter': columnGutter
  }
}
</script>