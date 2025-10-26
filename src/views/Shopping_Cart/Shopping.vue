<template>
  <div class="box">
    <div class="center">
        <!-- 购物车主体 -->
        <div class="main" v-if="defaultArr.length > 0">
            <!-- thead -->
            <div class="thead">
                <ul>
                    <li>选中</li>
                    <li>图片</li>
                    <li>名称</li>
                    <li>单价</li>
                    <li>个数</li>
                    <li>小计</li>
                    <li>操作</li>
                </ul>
            </div>
            <!-- thead -->
            <!-- tbody -->
            <div class="tbody">
                <ul v-for="item in defaultArr" :key="item.id" :class="{ active: item.isChecked }">
                    <li><input type="checkbox" v-model="item.isChecked"></li>
                    <li><img :src="item.imge" alt=""></li>
                    <li>{{ item.name }}</li>
                    <li>{{ item.price }}元</li>
                    <li class="quantity">
                        <button @click="del(item)">-</button>
                            <span>{{ item.quantity }}</span>
                        <button @click="add(item)">+</button>
                    </li>
                    <li>{{ calculateTotal(item) }}元</li>
                    <li><button @click="removeItem(item.id)" class="button">X</button></li>
                </ul>
            </div>
            <!-- tbody -->
            <!-- bottom -->
            <div class="bottom">
                <div class="input">
                    <input type="checkbox" v-model="isAll">全选
                    &emsp;
                    已选：{{ totalCountZero }}
                </div>
                <div class="total">
                    <span>总价：</span>
                    <span> {{totalPrice}}元</span>
                    <button @click="Settlement">结算（ {{ totalCount}} ）</button>
                </div>
            </div>
            <!-- bottom -->
        </div>
        <!-- 购物车主体 -->
         <!-- 空车 -->
        <div class="empty" v-else>
            <!-- 购物车图标 -->
            <svg t="1732454009511" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9656">
                <path d="M730.36024 336.657506 744.357022 205.742874 554.834574 205.742874 568.83238 336.657506Z" p-id="9657"></path>
                <path d="M397.710001 480.766648 559.299259 480.766648 546.274618 358.944092 370.114502 358.944092Z" p-id="9658"></path>
                <path d="M699.31927 626.981754 712.569038 503.054257 586.622558 503.054257 599.872327 626.981754Z" p-id="9659"></path>
                <path d="M727.97696 358.944092 571.214636 358.944092 584.239278 480.766648 714.952318 480.766648Z" p-id="9660"></path>
                <path d="M543.891338 336.657506l-13.996782-130.914632L372.906082 205.742874c-17.207917 0-31.157627 12.523221-31.157627 27.971052l23.318078 102.94358L543.891338 336.657506z" p-id="9661"></path>
                <path d="M402.75797 503.054257l21.736047 95.957469c0 15.44783 13.94971 27.971052 31.157627 27.971052l119.27964 0-13.249769-123.92852L402.75797 503.054257z" p-id="9662"></path>
                <path d="M874.697579 599.010703l21.736047-95.957469L737.51008 503.053234l-13.249769 123.92852 119.27964 0C860.747869 626.981754 874.697579 614.458533 874.697579 599.010703z" p-id="9663"></path>
                <path d="M901.481595 480.766648 929.077094 358.944092 752.918002 358.944092 739.89336 480.766648Z" p-id="9664"></path>
                <path d="M957.444165 233.713926c0-15.44783-13.94971-27.971052-31.157627-27.971052L769.298064 205.742874l-13.996782 130.914632 178.824805 0L957.444165 233.713926z" p-id="9665"></path>
                <path d="M502.583536 761.674433m-56.582693 0a55.294 55.294 0 1 0 113.165386 0 55.294 55.294 0 1 0-113.165386 0Z" p-id="9666"></path>
                <path d="M761.854535 761.674433m-56.582693 0a55.294 55.294 0 1 0 113.165386 0 55.294 55.294 0 1 0-113.165386 0Z" p-id="9667"></path>
                <path d="M922.69064 663.534252 429.953356 663.534252c-0.451278 0-0.903579 0.01842-1.353834 0.055259-0.533143 0.041956-53.743018 3.898797-65.911152-39.426965-21.506826-76.581166-113.817232-394.494773-114.747417-397.696698-2.052752-7.070023-8.53028-11.933797-15.891945-11.933797L83.104743 214.532051c-9.140171 0-16.548908 7.408737-16.548908 16.548908s7.408737 16.548908 16.548908 16.548908l136.515187 0c17.07898 58.848293 92.117001 317.526797 111.201661 385.481492 8.141424 28.989241 28.438703 49.197492 58.697867 58.437947 14.630209 4.467755 28.252461 5.218862 35.764552 5.218862 2.431376 0 4.224208-0.078795 5.201465-0.1361l492.204142 0c9.140171 0 16.548908-7.408737 16.548908-16.548908S931.830811 663.534252 922.69064 663.534252z" p-id="9668"></path>
            </svg>
            空空如也
        </div>
        <!-- 空车 -->
    </div>
    <!-- 支付弹窗 -->
    <div class="Paymentshow" v-show="Paymentshow">
      <div class="center">
        <div class="hard">
          <span>结算信息</span>
          <button @click="this.Paymentshow = false" class="Closewindows">X</button>
        </div>
        <!-- <span>共计{{totalPrice}}元</span> -->
        <div class="body">
          <div class="title">
            <ul>
              <li>商品名称</li>
              <li>单价</li>
              <li>数量</li>
              <li>小计</li>
            </ul>
          </div>
          <!--  -->
          <div class="value" v-for="item in defaultArr" :key="item.id">
            <ul>
              <li>{{ item.name }}</li>
              <li>{{ item.price }}</li>
              <li>{{ item.quantity }}</li>
              <li>{{ calculateTotal(item) }}元</li>
            </ul>
          </div>
        </div>
        <div class="foot">
          <button v-on:click="toggle('weixin')">微信</button>
          <button v-on:click="toggle('alipay')">支付宝</button>

          <!-- 微信支付图片 -->
          <div v-if="isShow === 'weixin'">
              <img src="../../assets/Shopping_Cat/wx_Pay.jpg" alt="微信支付">
          </div>
          <!-- 支付宝支付图片 -->
          <div v-if="isShow === 'alipay'">
              <img src="../../assets/Shopping_Cat/zfb_Pay.jpg" alt="支付宝支付">
          </div>
        </div>
      </div>
    </div>
    <!-- 支付弹窗 -->
</div>
</template>

<script>
export default {
  data() {
    // 1. 从本地获取数据，如果不存在，则默认为一个空数组 []
    const cartItemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("从本地存储获取到的数据：", cartItemsFromStorage);
    return {
      // 支付弹窗显示/隐藏
      Paymentshow: false,
      isShow: 'weixin',

      // 将获取到的数据传递到 defaultArr 数组中
      defaultArr: [
        {
          id: cartItemsFromStorage.id,
          imge: cartItemsFromStorage.imge,
          name: cartItemsFromStorage.name,
          price: cartItemsFromStorage.price,
          quantity: cartItemsFromStorage.quantity,
          isChecked: false
        },
      ]
    };
  },
  computed: {
    // 全选
    isAll: {
      get() {
        return this.defaultArr.length > 0 && this.defaultArr.every(item => item.isChecked);
      },
      set(value) {
        this.defaultArr.forEach(item => (item.isChecked = value));
      }
    },
    // 已选数量
    totalCountZero() {
      return this.defaultArr.filter(item => item.isChecked).length;
    },
    // 总价
    totalPrice() {
      return this.defaultArr
        .filter(item => item.isChecked)
        .reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // 结算数量（与 totalCountZero 可以合并，但为了分离清晰保留）
    totalCount() {
      return this.defaultArr
        .filter(item => item.isChecked)
        .reduce((sum, item) => sum + item.quantity, 0);
    }
  },
  methods: {
    // 增加数量
    add(item) {
      item.quantity++;
    },
    // 减少数量
    del(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    // 小计
    calculateTotal(item) {
      return item.price * item.quantity;
    },
    // 删除商品
    removeItem(id) {
      this.defaultArr = this.defaultArr.filter(item => item.id !== id);
    },
    // 结算
    Settlement() {
      // 判断是否勾选需要结算的商品
      if(this.totalCountZero > 0){
        // 如果勾选了需要结算的商品，就弹出扫码窗口
        this.Paymentshow = true
      }
      else {
        // 如果没有勾选需要结算的商品，就弹窗提示请勾选需要结算的商品
        alert("请勾选需要结算的商品")
      }
    },
    toggle: function(paymentMethod) {
      // 判断当前显示的是哪个支付方式，点击时切换显示
      if (this.isShow === paymentMethod) {
          this.isShow = '';  // 如果点击的支付方式已经显示，隐藏图片
      } else {
          this.isShow = paymentMethod;  // 显示选中的支付方式
      }
    }
  }
};
</script>


<style scoped>
/* 大盒子 */
.box{
    width: 100%;
    background-color: #f7f7f7;
    /* flex设置中盒子居中 */
    display: flex;
    justify-content: center;
}
/* 居中盒子 */
.box .center{
    width: 80%;
    margin-top: 100px;
    margin-bottom: 200px;/* 购物车与底部的距离 */
    background-color: #fff;
    /* flex设置中盒子内的盒子横向排列 */
    display: flex;
    flex-direction:column;
}
/* app-container */
.app-container{
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    border: 1px solid #e3e0e0;
}
/* app-container */

/* 顶部banner-box */
img{
    width: 100%;
    height: 300px;
}
/* 顶部banner-box */

/* 面包屑 */
.breadcrumb{
    width: 100%;
    height: 60px;
    /* height: 60px;
    text-align: center;
    line-height: 55px;*/
    font-size: 20px;
    background-color: #dbd9d9; 
    display: flex;
    justify-content: center;
    
}
.breadcrumb span{
    display: flex;
    align-items: center;
    justify-content: center;
}
.breadcrumb .gwc{
    width: 25px;
    height: 25px;
    background-color: red;
    text-align: center;
    border-radius: 50%;
}
/* 面包屑 */
/* 购物车主体 */
.main ul{
    /* 去掉li标签的所有格式 */
    margin: 0;
    padding: 0;
    list-style: none;/* 去掉li标签的圆点 */
    display: flex;
    flex-direction: row;
}
.main ul li{
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
/* thead */
.thead{
    border-bottom: 1px solid #ebe8e8;/* 每个ul标签下面都有一条分隔线 */
}
/* thead */
/* tbody */
.main .tbody li{
    list-style: none;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ebe8e8;/* 每个ul标签下面都有一条分隔线 */
}
.active{
    background-color: #f2eae6;
}
.main .tbody li img{
    width: 100%;
    height: 100%;
}

.main .tbody .quantity button{
    width: 30px;
    height: 30px;
}
.main .tbody .quantity span{
    width: 40px;
    text-align: center;
}

.main .tbody .button{
    border: none;
    background-color: #fff;
    border-radius: 50%;
}
.main .tbody .button:hover{
    background-color: pink;
    cursor: pointer;/* 变成小手 */
}
/* tbody */
/* bottom */
.main .bottom{
    height: 70px;
    /* background-color: #f8f4f4; */
    display: flex;
    justify-content: space-between;/* 第一个项目与容器的起点对齐，最后一个项目与容器的终点对齐，并将 剩余空间平均分配到相邻项目之间的间距中 */
    align-items: center;/* 垂直居中 */
}
.main .bottom .input{
    font-size: 20px;
    margin: 0px 90px;
}
.main .bottom .total span{
    font-size: 20px;
}
.main .bottom .total button{
    width: 100px;
    height: 30px;
    margin: 20px 20px 20px 20px;
}
/* bottom */
/* 购物车主体 */
/* 空车 */
.empty{
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: #e3e0e0;
}
.empty .icon{
    width: 30px;
    height: 30px;
}
/* 空车 */
/* 支付弹窗 */
.Paymentshow{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color:rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  /* display: none; */
}
.Paymentshow .center{
  width: 50%;
  /* height: 70%; */
  background-color: #fff;
}
.Paymentshow .center button:hover{
  cursor: pointer;
}
.Paymentshow .center .hard{
  height: 50px;
  /* background-color: #e2a8a8; */
  text-align: center;
}
.Paymentshow .center .hard span{
  font-size: 30px;
}
.Paymentshow .center .hard .Closewindows{
  float: right;
  width: 50px;
  height: 100%;
  border: none;
  background-color: #fff;
}
.Paymentshow .center .body{
  margin-top: 30px;
}
.Paymentshow .center .body ul{
    /* 去掉li标签的所有格式 */
    margin: 0;
    padding: 0;
    list-style: none;/* 去掉li标签的圆点 */
    display: flex;
    flex-direction: row;
}
.Paymentshow .center .body ul li{
    height: 30px;
    width: 300px;
    text-align: center;
    /* background-color: #f5a7a7; */
    font-size: 15px;
    max-height: 300px;/* 最大高度 */
    /* overflow-x: auto;水平滚动条 */
    white-space: nowrap;
}
.Paymentshow .center .foot button{
  width: 45%;
  height: 30px;
  margin: 10px 0px 10px 30px;
}
.Paymentshow .center .foot div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.Paymentshow .center .foot div img{
  width: 50%;
  height: 100%;
}
/* 支付弹窗 */
</style>