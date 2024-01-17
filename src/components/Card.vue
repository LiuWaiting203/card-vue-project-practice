<template>
  <div class="topBar" :style="{ color: textColor }">
    <span>{{ title }}</span>
    <button><font-awesome-icon :icon="['fas', 'xmark']" class="closeSize"/></button>
  </div>

  <div class="container">
    <div class="card">
      <div class="cardImg">
        <img src="https://picsum.photos/300/200/?random=1">
      </div>
        <div class="descBox">
          <div class="content-box" :style="{ color: textColor, backgroundColor: descBoxColor }">
            {{ descripitionImage }}
          </div>
        </div>
    </div>

    <div class="hr">
      <hr>
    </div>

    <div id="section2" class="descBox">
      <div class="warningBox" :style="{ color: textColor, backgroundColor: warningBoxColor }">
        <font-awesome-icon :icon="['fas', 'circle-info']" style="color: #fd6082;" />
        <p>警告標語</p>
      </div>
      <div class="warningBox" :style="{ color: textColor, backgroundColor: infoBoxColor }">
        <font-awesome-icon :icon="['fas', 'circle-info']" style="color: #ff7b00;" />
        <p>注意標語</p>
      </div>

      <div class="activity">
        <span class="bonus">活動</span>
        <span>最新活動之類的標語</span>
        <font-awesome-icon :icon="['fas', 'chevron-right']" style="color: #b5b5b5; margin-left: auto;"/>
      </div>

      <div>
        <p>
          {{ descripitionBox }}
        </p>
      </div>
    </div>  

    <div id="section3">
      <h4 style="margin-bottom: 8px;"><font-awesome-icon :icon="['fas', 'star-of-life']" style="color: #ff708d;" />溫度</h4>

      <div class="select">
        <button class="selectBtn">正常冰</button>
        <button class="selectBtn">少冰</button>
        <button class="selectBtn">微冰</button>
        <button class="selectBtn">去冰</button>
        <button class="selectBtn">溫</button>
        <button class="blockedBtn">熱</button>
      </div>

      <h4><font-awesome-icon :icon="['fas', 'star-of-life']" style="color: #ff708d;" />甜度</h4>

      <div class="select">
        <button class="blockedBtn">正常糖</button>
        <button class="selectBtn">多糖</button>
        <button class="selectBtn">半糖</button>
        <button class="selectBtn">少糖</button>
        <button class="selectBtn">微糖</button>
        <button class="selectBtn">二分糖</button>
        <button class="selectBtn">一分糖</button>
        <button class="selectBtn">無糖</button>
      </div>
    </div>

    <div id="section4">
      <h4>訂購人姓名 (選填) </h4>
      <div class="icon-wrapper">
        <input type="text" placeholder="避免使用特殊符號，最多n字">
        <font-awesome-icon class="faIcon" :icon="['fas', 'circle-user']" style="color: #b0b0b0;" />
      </div>
      <p style="font-size: 14px; color: #ccc; text-align: right; margin-top: 4px;">此門市支援姓名貼紙</p>

      <h4>備註 (選填)</h4>
      <textarea cols="30" rows="10" placeholder="單品特殊需求(如: 不要香菜)"></textarea>
      <p style="font-size: 14px; color: #ccc;  margin-top: 4px;">(0/100)</p>
    </div>

  </div>

  <div class="addCartBar">
    <span class="priceText">總金額：{{ totalAmount }}元</span>
    <div class="counter">
      <button @click="() => updateQuantity(-1)">–</button>
      <input type="number" v-model="quantity">
      <button @click="() => updateQuantity(1)">＋</button>
    </div>
    <div class="cartBtn">加入購物車</div>
  </div>

</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '標題'
    },
    descripitionImage: {
      type: String,
      default: '描述'
    },
    price: {
      type: Number,
      default: 0
    },
    textColor: {
      type: String,
      default: '#000'
    },
    descBoxColor: {
      type: String,
      default: '#ccc'
    },
    warningBoxColor: {
      type: String,
      default: '#f99'
    },
    infoBoxColor: {
      type: String,
      default: "#ffc"
    },
    descripitionBox: {
      type: String,
      default: "商品詳細介紹",
    }
  }
}
</script>

<script setup>
  import { ref, onMounted, defineProps } from 'vue'

  const props = defineProps(['price', 'title', 'descripitionImage', 'textColor', 'descBoxColor', 'warningBoxColor', 'descripitionBox', 'infoBoxColor'])

  const quantity = ref(1)
  const unitPrice = ref(props.price || 0)
  const totalAmount = ref(calcTotalAmount())

  onMounted(() => {
    totalAmount.value = calcTotalAmount()
  })

  function calcTotalAmount() {
    return quantity.value * unitPrice.value 
  }

  function updateQuantity(delta) {
    quantity.value += delta
    totalAmount.value = calcTotalAmount()
  }
</script>

<style scoped>
/* 數字輸入框 */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  }
/* 標題處 */
.topBar {
  width: 100%;
  height: 100px;
  box-shadow: 0px 0px 5px #ccc;
  font-size: 30px;
  font-weight: bold;
  background-color: #fff;
  position: fixed;
  top: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topBar>button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.closeSize {
  color: #999;
  font-size: 45px;
}

.closeSize:hover {
  color: #ccc;
}

/* 卡片內容及圖片 */

.container {
  margin-top: 58px;
  padding-bottom: 110px;
}

.card {
  font-size: 16px;
}

.cardImg>img {
  width: 100%;
  object-fit: cover;
}

.descBox {
  padding: 12px 18px;
}

.content-box {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}

/* 分隔線 */

.hr {
  padding: 10px 16px;
}

.hr hr {
  border: 1px solid #ccc;
}

/* 警告標語 */
.warningBox {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}

#section2 {
  font-size: 14px;
  line-height: 1.5em;
}

#section2>div {
  margin-bottom: 8px;
}
#section2 .warningBox {
      display: flex;
      align-items: center;
      gap: 8px;
}

/* 活動標語 */
.activity {
  display: flex;
  flex-wrap: wrap;
}

#section2 .bonus {
  margin-right: 4px;
  height: 20px;
  padding: 6px 8px;
  line-height: 10px;
  font-size: 10px;
  border-radius: 4px;
  color: #fff;
  background-color: #f8929a;
}

/* 選購 */

#section3,
#section4 {
  padding: 0 16px;
}

#section3 .select {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  padding: 4px 0;
}

#section3 .select .selectBtn {
  cursor: pointer;
  width: 32%;
  height: 40px;
  border: 1px solid #74c0ff;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: transparent;
}

#section3 .selectBtn:hover {
  background-color: #74c0ff;
  color: #fff;
}

#section3 .blockedBtn {
  pointer-events: none;
  width: 32%;
  height: 40px;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #ccc;
  background-color: #eee;
  border: none;
}

/* 表單 */

#section4 h4 {
  margin-bottom: 8px;
}

#section4 input {
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 0 32px;
}

#section4 .icon-wrapper {
  position: relative;
}

#section4 .icon-wrapper .faIcon {
  position: absolute;
  top: 12px;
  left: 10px;
} 

#section4 textarea {
  width: 100%;
  height: 70px;
  border-radius: 4px;
  padding: 10px 16px;
  border: 1px solid #ccc;
}

/* 加入購物車 */
.addCartBar {
  width: 100%;
  height: 94px;
  padding: 16px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  box-shadow: 0px 0px 5px #ccc;
  z-index: 999;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
}

.cartBtn {
  width: 180px;
  height: 64px;
  line-height: 64px;
  cursor: pointer;
  background-color: #ff6482;
  color: #fff;
  text-align: center;
  border-radius: 4px;
}

.cartBtn:hover {
  background-color: #f8929a;
}
.counter {
  margin-top: 10px;
}

.counter>input {
  text-align: center;
  font-weight: bold;
  width: 78px;
  height: 34px;
  border: none;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.counter>button {
  color: blue;
  cursor: pointer;
  font-weight: bold;
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 1px solid #ccc;
}

.counter>button:first-child {
  border-radius: 4px 0 0 4px;
}

.counter>button:last-child{
  border-radius: 0 4px 4px 0;
}
</style>