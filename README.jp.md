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
### 全体import
```javascript
import Vue from 'vue/dist/vue.esm.js'
import VueGutterResize from 'vue-gutter-resize'
Vue.use(VueGutterResize)
```
### 必要な分だけimport
```javascript
import { columnGutter } from 'vue-gutter-resize'
```
### import esm module
```javascript
import { columnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.esm.js'
```
### import umd module
```javascript
import { columnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.umd.js'
```
### import common module
```javascript
import { columnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.js'
```

### Column Gutter
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

### Row Gutter
```html
<template>
  <div>
    <row-gutter
      style="border: 1px solid #ccc;"
      :row="row"
      :width="'800px'"
      :height="'600px'"
      :gutterSize="'4px'"
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
### column-gutter
#### props
- width: String
  - column-gutterの横幅
- height : String
  - column-gutterの縦幅
- gutterSize : String
  - 全gutterの幅
- gutterSizes : Array<String>
  - それぞれのgutterの幅
  - gutterSizeが指定されている場合、gutterSizeが優先される
- color : String
  - 全gutterの色
- colors : Array<String>
  - それぞれのgutterの色
  - colorが指定されている場合、colorが優先される
- column : Number
  - column数

#### emit
- resize({ col })
  - col : Array
  - それぞれのcolumnの幅(合計で100)

#### slot
col-nで指定
```html
<div slot="col-0">1つ目のcolumn</div>
<div slot="col-1">2つ目のcolumn</div>
<div slot="col-2">3つ目のcolumn</div>
```

### row-gutter
#### props
- width: String
  - row-gutterの横幅
- height : String
  - row-gutterの縦幅
- gutterSize : String
  - 全gutterの幅
- gutterSizes : Array<String>
  - それぞれのgutterの幅
  - gutterSizeが指定されている場合、gutterSizeが優先される
- color : String
  - 全gutterの色
- colors : Array<String>
  - それぞれのgutterの色
  - colorが指定されている場合、colorが優先される
- row : Number
  - row数

#### emit
- resize({ row })
  - row : Array
  - それぞれのcolumnの幅(合計で100)

#### slot
row-nで指定
```html
<div slot="row-0">1つ目のrow</div>
<div slot="row-1">2つ目のrow</div>
<div slot="row-2">3つ目のrow</div>
```

## ライセンス
[MIT](./LICENSE.md)
