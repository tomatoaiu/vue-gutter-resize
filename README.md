# vue-gutter-resize
language : [jp](./README.jp.md)

> For vue-gutter-resize, you can change the size of both neighbor dom by dragging gutter.

[demo](https://tomatoaiu.github.io/vue-gutter-resize/)
  
[![current npm version](https://img.shields.io/npm/v/vue-gutter-resize.svg)](https://www.npmjs.com/package/vue-gutter-resize)
[![support vue version](https://img.shields.io/badge/support%20vue%20version-2.x-blueviolet.svg)](https://img.shields.io/badge/support%20vue%20version-2.x-blueviolet.svg)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ad4d8157285645c5893c521e5130c51d)](https://www.codacy.com/app/tomatoaiu/vue-gutter-resize?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tomatoaiu/vue-gutter-resize&amp;utm_campaign=Badge_Grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/56f0f345d51e956c5bca/maintainability)](https://codeclimate.com/github/tomatoaiu/vue-gutter-resize/maintainability)
[![dependencies Status](https://david-dm.org/tomatoaiu/vue-gutter-resize/status.svg)](https://david-dm.org/tomatoaiu/vue-gutter-resize)
[![devDependencies Status](https://david-dm.org/tomatoaiu/vue-gutter-resize/dev-status.svg)](https://david-dm.org/tomatoaiu/vue-gutter-resize?type=dev)
[![install size](https://packagephobia.now.sh/badge?p=vue-gutter-resize)](https://packagephobia.now.sh/result?p=vue-gutter-resize)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/vue-gutter-resize.svg)](https://github.com/tomatoaiu/vue-gutter-resize)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Browsers support
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- |
| last version| last version

## Usage
### install
```sh
yarn add vue-gutter-resize
# or
npm i vue-gutter-resize
```
### Import all
```javascript
import Vue from 'vue/dist/vue.esm.js'
import VueGutterResize from 'vue-gutter-resize'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'
Vue.use(VueGutterResize)
```
### Import as much as you need
```javascript
import { ColumnGutter } from 'vue-gutter-resize'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'
```
### Import by module
```javascript
// umd module
import { ColumnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.umd.js'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'
// commonjs module
import { ColumnGutter } from 'vue-gutter-resize/dist/vue-gutter-resize.common.js'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'
```

### Column Gutter
```html
<template>
  <column-gutter
    :column="column"
    :width="'100vw'"
    :height="'600px'"
    :gutter-sizes="['4px', '1rem', '1em']"
    :colors="colors"
    :column-sizes="[4, 1, 4, 1]"
    @resize="resize">
    <div slot="col-0">0</div>
    <div slot="col-1">1</div>
    <div slot="col-2">2</div>
    <div slot="col-3">3</div>
  </column-gutter>
</template>

<script>
import { ColumnGutter } from 'vue-gutter-resize'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'

export default {
  components: {
    ColumnGutter
  },
  data () {
    return {
      column: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  methods: {
    resize ({ col }) {
      console.log(col) // current col size (etc... [25, 25, 25, 25]
    }
  }
}
</script>
```

### Row Gutter
```html
<template>
  <row-gutter
    style="border: 1px solid #ccc;"
    :row="row"
    :width="'800px'"
    :height="'600px'"
    :gutter-size="'4px'"
    :colors="colors"
    :row-sizes="[1, 2, 3, 4]"
    @resize="resize">
    <div slot="row-0">0</div>
    <div slot="row-1">1</div>
    <div slot="row-2">2</div>
    <div slot="row-3">3</div>
  </row-gutter>
</template>

<script>
import { RowGutter } from 'vue-gutter-resize'
import 'vue-gutter-resize/dist/vue-gutter-resize.css'

export default {
  components: {
    RowGutter
  },
  data () {
    return {
      row: 4,
      colors: ['red', 'blue', 'yellow']
    }
  },
  methods: {
    resize ({ row }) {
      console.log(row) // current row size (etc... [25, 25, 25, 25]
    }
  }
}
</script>
```

## all gutter
### column-gutter
#### props
- width: `String`
  - column-gutter width
  - Required
  - example: `:width="'800px'"`
- height : `String`
  - column-gutter height
  - Required
  - example: `:height="'600px'"`
- gutter-size : `String`
  - all gutter width
  - example: `:gutter-size="'4px'"`
- gutter-sizes : `Array<String>`
  - each gutter width
  - If gutter-size is specified, gutter-size takes precedence
  - example: `:gutter-sizes="['7px', '1rem']"`
- color : `String`
  - all gutter color
  - example: `:color="'green'"`
- colors : `Array<String>`
  - each gutter clolr
  - If color is specified, color takes precedence
  - example: `:colors="['red', 'blue']"`
- column : `Number`
  - column number
  - Required
  - example: `:column="3"`
- column-sizes: `Array<Number>`
  - column size(total 100)
  - example: `:column-sizes="[1, 2, 3]"`

#### emit
- resize({ col }): `Object`
  - col : `Array<Number>`
  - each column width(total 100)

#### slot
Specified by col-n
```html
<div slot="col-0">the first column</div>
<div slot="col-1">the second column</div>
<div slot="col-2">the third column</div>
```

### row-gutter
#### props
- width: `String`
  - row-gutter width
  - Required
  - example: `:width="'800px'"`
- height : `String`
  - row-gutter height
  - Required
  - example: `:height="'600px'"`
- gutter-size : `String`
  - all gutter height
  - example: `:gutter-size="'4px'"`
- gutter-sizes : `Array<String>`
  - each gutter height
  - If gutter-size is specified, gutter-size takes precedence
  - example: `:gutter-sizes="['7px', '1rem']"`
- color : `String`
  - all gutter color
  - example: `:color="'green'"`
- colors : `Array<String>`
  - each gutter color
  - If color is specified, color takes precedence
  - example: `:colors="['red', 'blue']"`
- row : `Number`
  - row number
  - Required
  - example: `:row="3"`
- row-sizes: `Array<Number>`
  - row size(total 100)
  - example: `:row-sizes="[1, 2, 3]"`

#### emit
- resize({ row }): `Object`
  - row : `Array<Number>`
  - each column height(total 100)

#### slot
Specified by row-n
```html
<div slot="row-0">the first row</div>
<div slot="row-1">the second row</div>
<div slot="row-2">the third row</div>
```

## sample
https://github.com/tomatoaiu/vue-gutter-resize-example

## License
[MIT](./LICENSE.md)
