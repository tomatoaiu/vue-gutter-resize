<template>
  <div>
    <column-gutter
      :column="column"
      :width="800"
      :height="600"
      :gutterSize="2"
      :color="`red`">
      <div slot="content-0">0</div>
      <div slot="content-1">1</div>
    </column-gutter>
  </div>
</template>

<script>
import columnGutter from './components/column-gutter.vue'

export default {
  data(){
    return {
      column: 2
    }
  },
  components: {
    'column-gutter': columnGutter
  }
}
</script>
