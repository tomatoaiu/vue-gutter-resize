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
      :width="100vw"
      :height="600px"
      :gutterSizes="['4px', '1rem', '1em']"
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

## Row Gutter
```html
<template>
  <div>
    <row-gutter
      style="border: 1px solid #ccc;"
      :row="row"
      :width="800px"
      :height="600px"
      :gutterSize="4px"
      :colors="colors"
      @resize="resize">
      <div slot="row-0">0</div>
      <div slot="row-1">1</div>
      <div slot="row-2">2</div>
      <div slot="row-3">3</div>
    </row-gutter>
  </div>
</template>

<script>
import { rowGutter } from 'vue-gutter-resize'

export default {
  data(){
    return {
      row: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  methods: {
    resize ({ row }) {
      console.log(row) // current row size (etc... [25, 25, 25, 25]
    }
  },
  components: {
    'row-gutter': rowGutter
  }
}
</script>
```

## all gutter
- vertical-gutter
- horizontal-gutter
- column-gutter
- row-gutter

## inline elements
### all props
- width
- height
- top
- right
- bottom
- left
- gutterSize
- gutterSizes
- color
- colors
- row
- column

### all emit
- resize

## License
[MIT](./LICENSE.md)
