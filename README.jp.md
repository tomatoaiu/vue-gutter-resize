# vue-gutter-resize
言語 : [en](./README.md)

## 使い方(以下になる予定)
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

## ライセンス
[MIT](./LICENSE.md)
