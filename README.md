# vue-gutter-resize
language : [jp](./README.jp.md)

> For vue-gutter-resize, you can change the size of both neighbor dom by dragging gutter.

[demo](https://tomatoaiu.github.io/vue-gutter-resize/)

## Usage
### install
```sh
yarn add vue-gutter-resize
# or
npm i vue-gutter-resize
```

### vue file
```html
<template>
  <div>
    <vertical-gutter
      :left="left" 
      :right="right"
      :width="800"
      :height="600">
      <div slot="left-content">left</div>
      <div slot="right-content">right</div>
    </vertical-gutter>
  </div>
</template>

<script>
import { verticalGutter } from 'vertical-gutter-resize'

export default {
  data(){
    return {
      left: 50,
      right: 50,
    }
  },
  components: {
    'vertical-gutter': verticalGutter
  }
}
</script>
```

## Combination of vertical-gutter and horizontal-gutter sample
```html
<template>
  <div>
    <vertical-gutter
      :left="left" 
      :right="right"
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
import { verticalGutter, horizontalGutter } from "vue-gutter-resize"

export default {
  name: "app",
  data () {
    return {
      left: 50,
      right: 50,
      top: 50,
      bottom: 50
    }
  },
  components: {
    "vertical-gutter": verticalGutter,
    "horizontal-gutter": horizontalGutter
  }
};
</script>
```

## Complate Sample
```html
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
import { verticalGutter, horizontalGutter } from "vue-gutter-resize"

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
```

## Column Gutter
```html
<template>
  <div>
    <column-gutter
      :column="column"
      :width="1200"
      :height="600"
      :gutterSize="4"
      :colors="colors"
      @resize="resize">
      <div slot="col-0">0</div>
      <div slot="col-1">1</div>
      <div slot="col-2">2</div>
      <div slot="col-3">3</div>
    </column-gutter>
  </div>
</template>

<script>
import { columnGutter } from 'vue-gutter-resize'

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
```

## License
[MIT](./LICENSE.md)
