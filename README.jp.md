# vue-gutter-resize
言語 : [en](./README.md)

> vue-gutter-resizeは、gutterをドラッグすると両隣のdomのサイズを変更できます。

[デモ](https://tomatoaiu.github.io/vue-gutter-resize/)
  
[![current npm version](https://img.shields.io/npm/v/vue-gutter-resize.svg)](https://www.npmjs.com/package/vue-gutter-resize)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ad4d8157285645c5893c521e5130c51d)](https://www.codacy.com/app/tomatoaiu/vue-gutter-resize?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tomatoaiu/vue-gutter-resize&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/56f0f345d51e956c5bca/maintainability)](https://codeclimate.com/github/tomatoaiu/vue-gutter-resize/maintainability)
[![dependencies Status](https://david-dm.org/tomatoaiu/vue-gutter-resize/status.svg)](https://david-dm.org/tomatoaiu/vue-gutter-resize)
[![install size](https://packagephobia.now.sh/badge?p=vue-gutter-resize)](https://packagephobia.now.sh/result?p=vue-gutter-resize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Browsers support
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- |
| last version| last version

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
### module別import
```javascript
// esm module
import { columnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.esm.js'
// umd module
import { columnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.umd.js'
// commonjs module
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
- width: `String`
  - column-gutterの横幅
  - `:width="'800px'"`
- height : `String`
  - column-gutterの縦幅
  - `:height="'600px'"`
- gutterSize : `String`
  - 全gutterの幅
  - `:gutterSize="'4px'"`
- gutterSizes : `Array<String>`
  - それぞれのgutterの幅
  - gutterSizeが指定されている場合、gutterSizeが優先される
  - `:gutterSizes="['7px', '1rem']"`
- color : `String`
  - 全gutterの色
  - `:color="'green'"`
- colors : `Array<String>`
  - それぞれのgutterの色
  - colorが指定されている場合、colorが優先される
  - `:colors="['red', 'blue']"`
- column : `Number`
  - column数
  - `:column="3"`
- columnSizes: `Array<Number>`
  - columnのサイズ
  - `:columnSizes="[1, 2, 3]"`

#### emit
- resize({ col }): `Object`
  - col : `Array<Number>`
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
- width: `String`
  - row-gutterの横幅
  - `:width="'800px'"`
- height : `String`
  - row-gutterの縦幅
  - `:height="'600px'"`
- gutterSize : `String`
  - 全gutterの幅
  - `:gutterSize="'4px'"`
- gutterSizes : `Array<String>`
  - それぞれのgutterの幅
  - gutterSizeが指定されている場合、gutterSizeが優先される
  - `:gutterSizes="['7px', '1rem']"`
- color : `String`
  - 全gutterの色
  - `:color="'green'"`
- colors : `Array<String>`
  - それぞれのgutterの色
  - colorが指定されている場合、colorが優先される
  - `:colors="['red', 'blue']"`
- row : `Number`
  - row数
  - `:row="3"`
- rowSizes: `Array<Number>`
  - rowのサイズ
  - `:rowSizes="[1, 2, 3]"`

#### emit
- resize({ row }): `Object`
  - row : `Array<Number>`
  - それぞれのcolumnの幅(合計で100)

#### slot
row-nで指定
```html
<div slot="row-0">1つ目のrow</div>
<div slot="row-1">2つ目のrow</div>
<div slot="row-2">3つ目のrow</div>
```

## サンプル
https://github.com/tomatoaiu/vue-gutter-resize-example

## ライセンス
[MIT](./LICENSE.md)
