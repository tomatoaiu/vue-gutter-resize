# vue-gutter-resize
言語 : [en](./README.md)

> vue-gutter-resizeは、gutterをドラッグすると両隣のdomのサイズを変更できます。

[デモ](https://tomatoaiu.github.io/vue-gutter-resize/)

## 使い方
### インストール
```sh
yarn add vue-gutter-resize
# or
npm i vue-gutter-resize
```

### vueファイル
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

## vertical-gutterとhorizontal-gutterの組み合わせsample
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

## 完全版サンプル
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
```

## ライセンス
[MIT](./LICENSE.md)
