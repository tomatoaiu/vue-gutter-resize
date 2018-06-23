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
### All import
```javascript
import Vue from 'vue/dist/vue.esm.js'
import VueGutterResize from 'vue-gutter-resize'
Vue.use(VueGutterResize)
```
### Import as much as you need
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

## all gutter
### column-gutter
#### props
- width: String
  - column-gutter width
- height : String
  - column-gutter height
- gutterSize : String
  - all gutter width
- gutterSizes : Array<String>
  - each gutter width
  - If gutterSize is specified, gutterSize takes precedence
- color : String
  - all gutter color
- colors : Array<String>
  - each gutter clolr
  - If color is specified, color takes precedence
- column : Number
  - column number

#### emit
- resize({ col })
  - col : Array
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
- width: String
  - row-gutter width
- height : String
  - row-gutter height
- gutterSize : String
  - all gutter height
- gutterSizes : Array<String>
  - each gutter height
  - If gutterSize is specified, gutterSize takes precedence
- color : String
  - all gutterの color
- colors : Array<String>
  - each gutter color
  - If color is specified, color takes precedence
- row : Number
  - row number

#### emit
- resize({ row })
  - row : Array
  - each column height(total 100)

#### slot
Specified by row-n
```html
<div slot="row-0">the first row</div>
<div slot="row-1">the second row</div>
<div slot="row-2">the third row</div>
```

## License
[MIT](./LICENSE.md)
