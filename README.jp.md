# vue-gutter-resize
言語 : [en](./README.md)

> vue-gutter-resizeは、gutterをドラッグすると両隣のdomのサイズを変更できます。

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

## ライセンス
[MIT](./LICENSE.md)
