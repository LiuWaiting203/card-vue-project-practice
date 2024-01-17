<template>
  <Card
  :title="`卡片標題`"
  :descripitionImage="`圖片樣式描述`"
  :price="`100`"
  :textColor="`#000`"
  :descBoxColor="`#eee`"
  :warningBoxColor="`#ffedf5`"
  :infoBoxColor="`#fff3d9`"
  :descripitionBox="`商品詳細介紹`"
  >
  </Card>
</template>

<script>
import Card from './components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>