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

## Column Gutter
```html
<template>
  <div>
    <column-gutter
      :column="column"
      :width="'100vw'"
      :height="'600px'"
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

## 全てのgutter
- column-gutter
- row-gutter

## インライン要素
### 全てのprops
- width
- height
- gutterSize
- gutterSizes
- color
- colors
- row
- column

### 全てのemit
- resize

## ライセンス
[MIT](./LICENSE.md)
