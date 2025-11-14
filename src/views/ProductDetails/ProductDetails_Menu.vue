<template>
  <div class="Menu">
    <!-- 菜单 -->
    <div class="title">
        <!-- 通过{{ $route.query.参数名 }} 拿到首页路由中的数据并渲染到对于的位置 -->
        <h2>{{ $route.query.word }}</h2>
        <span>{{ $route.query.introduce }}</span>
        <span class="red" style="font-size: 15px;">小米自营</span>
        <span class="red" style="font-size: 25px;">{{ $route.query.price }}</span>
    </div>

    <!-- ✨ [核心修改] 地址部分现在会动态渲染 -->
    <div class="address">
        <div>
            <svg style="width: 25px; height: 25px;" t="1741440905738" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21305"><path d="M511.916 34.987c-194.753 0-353.196 158.046-353.196 352.309 0 25.338 2.716 50.645 8.071 75.219 2.431 11.16 13.267 45.648 14.424 48.714 18.978 49.515 46.993 91.731 82.336 126.526l-50.121-62.033c4.143 6.517 252.836 371.253 252.836 371.253 10.070 14.644 26.733 24.123 45.61 24.123 0.015 0 0.029-0 0.044-0 0.010 0 0.025 0 0.039 0 18.878 0 35.542-9.48 45.491-23.939s263.926-389.896 265.122-392.098c19.718-35.585 33.739-77.143 39.569-121.284-23.867 88.45-9.101 47.089-5.095 28.733 5.127-22.593 8.065-48.538 8.065-75.17 0-0.016-0-0.031-0-0.047 0-194.261-158.444-352.307-353.196-352.307zM817.025 453.788c-3.533 16.189-16.574 52.718-17.601 55.128-3.903 9.161-14.973 30.454-16.075 32.379-2.21 3.865-259.631 382.622-259.631 382.622-3.824 5.614-9.525 6.222-11.801 6.222s-7.975-0.608-11.796-6.218c0 0-248.871-365.001-252.799-371.237l-0.344-0.549c-22.738-35.745-38.608-78.067-44.655-123.494 16.213 65.466 6.634 34.988 4.49 25.153-4.533-19.96-7.131-42.882-7.131-66.41 0-0.030 0-0.061 0-0.091-0.002-171.675 140.067-311.347 312.234-311.347s312.236 139.672 312.236 311.349c0 22.403-2.398 44.777-7.127 66.492z" fill="#2E333A" p-id="21306"></path><path d="M511.916 237.968c-39.969 0-77.55 15.526-105.814 43.717-28.283 28.205-43.858 65.712-43.858 105.611 0 10.881 1.153 21.688 3.428 32.123 3.631 16.667 10.131 32.514 19.327 47.116 11.081 17.378 25.052 31.876 41.385 43.209l-35.374-34.397c13.699 18.663 31.756 34.126 52.224 44.714 21.254 10.996 44.364 16.572 68.686 16.572 24.312 0 47.417-5.577 68.676-16.574 29.47-15.53 52.678-39.575 66.758-68.842l-14.435 24.003c11.108-14.94 19.502-32.615 24.048-51.779-8.938 28.503-2.432 12.637 1.204-4.054 2.176-9.61 3.422-20.646 3.422-31.974 0-0.042-0-0.083-0-0.125 0-39.887-15.573-77.392-43.856-105.601-28.275-28.193-65.853-43.721-105.82-43.721zM618.146 410.668c-3.955 17.708-11.857 33.164-22.756 45.994 1.231-0.061-8.305 9.854-19.463 17.595l23.882-23.158c-9.986 13.605-23.142 24.873-38.040 32.584-15.383 7.956-32.154 11.991-49.852 11.991-17.707 0-34.484-4.035-49.865-11.991-14.891-7.703-28.039-18.964-38.021-32.567l-16.511 12.118 16.388-12.284c-1.479-2.015-5.671-8.542-6.343-9.699-7.723-13.065-12.775-28.564-14.007-45.126 0.553 7.579-0.354-0.456-0.354-8.701 0-0.044 0-0.088 0-0.131-0-28.929 11.301-56.137 31.822-76.603 20.535-20.48 47.841-31.758 76.89-31.758 29.047 0 56.355 11.28 76.89 31.762 20.523 20.468 31.822 47.673 31.822 76.605 0 7.948-0.836 15.811-2.482 23.37z" fill="#2E333A" p-id="21307"></path></svg>
            
            <!-- 如果找到了默认地址，就显示它 -->
            <template v-if="defaultAddress">
                <span>{{ defaultAddress.name }}</span>
                <span>{{ defaultAddress.phone }}</span><br>
                <span>{{ defaultAddress.fullAddress }}</span>
                <span>{{ defaultAddress.detail }}</span>
            </template>
            <!-- 否则，显示提示信息 -->
            <template v-else>
                <span id="Prompt_message"></span>
            </template>

            <router-link to="/ShippingAddress?word=收货地址">添加/修改</router-link>
        </div>
    </div>
    <!-- product -->
    <div class="product" v-for="item in list" :key="item.id">
        <span>{{ item.span }}</span>
        <div>
            <a href="#" @click="setActive(item, 'a1')" :class="{ 'active': item.activeKey === 'a1' }">{{ item.a1 }}</a>
            <a href="#" @click="setActive(item, 'a2')" :class="{ 'active': item.activeKey === 'a2' }">{{ item.a2 }}</a>
            <a href="#" @click="setActive(item, 'a3')" :class="{ 'active': item.activeKey === 'a3' }">{{ item.a3 }}</a>
            <a href="#" @click="setActive(item, 'a4')" :class="{ 'active': item.activeKey === 'a4' }">{{ item.a4 }}</a>
        </div>
    </div>

    <div class="button">
        <div>
            <a href="#" class="car" @click="addToCart()">加入购物车</a>
            <a href="" class="live" style="">♡喜欢</a>
        </div>
    </div>
    <!-- qybz -->
    <div class="qybz">
        <span>✔小米自营</span>
        <span>✔发货说明</span>
        <span>✔七天无理由退货</span>
        <span>✔运费说明</span>
        <span>✔企业信息</span>
        <span>✔七天价格保护</span>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            original_price: "6299",
            list: [
                { id: 1, span: "选择产品", a1:"Xiaomi 15 Ultra", a2:"Xiaomi 15 Pro", a3:"Xiaomi 15", a4:"Xiaomi 15 定制版",activeKey: 'a1'},
                { id: 2, span: "选择版本", a1:"12GB+256GB", a2:"16GB+512GB", a3:"16GB+1TB", a4:"双卫星版本",activeKey: 'a1'},
                { id: 3, span: "选择颜色", a1:"黑色", a2:"白色", a3:"经典黑银", a4:"松柏绿",activeKey: 'a1'},
            ],
            // ✨ [新增] 用于存储找到的默认地址
            defaultAddress: null,
        }
    },
    //  mounted 钩子，在组件加载完成后执行
    mounted() {
        //获取用户信息 storedUser 和地址信息 addressesString。
        const storedUser = localStorage.getItem("userinfo");
        const addressesString = localStorage.getItem("userAddresses");
        // 获取 id="Prompt_message" 的 span
        const PromptMessage = document.getElementById("Prompt_message");
        
        //如果用户没有登录，就显示 v-else 部分
        if (!storedUser) {
            // 通过 PromptMessage.innerHTML 往指定地方添加指定内容
            return PromptMessage.innerHTML = "用户不存在，请先登录！"
        }

        //如果在 localStorage 中没有地址信息，就显示 v-else 部分
        if (!addressesString) {
            // 通过 PromptMessage.innerHTML 往指定地方添加指定内容
            return PromptMessage.innerHTML = "localStorage 中没有地址信息，请先添加地址信息！"
        }

        //如果用户已登录并在 localStorage 添加了地址信息，就渲染地址
        if(storedUser != null) {
            this.loadDefaultAddress();
        }
    },
    methods: {
        //  从 localStorage 加载默认地址的方法
        loadDefaultAddress() {
            // 获取 id="Prompt_message" 的 span
            const PromptMessage = document.getElementById("Prompt_message");
            const addressesString = localStorage.getItem("userAddresses");
            if (addressesString) {
                try {
                    const addresses = JSON.parse(addressesString);
                    if (Array.isArray(addresses)) {
                        // 查找 isDefault 为 true 的地址
                        const foundAddress = addresses.find(addr => addr.isDefault === true);
                        if (foundAddress) {
                            this.defaultAddress = foundAddress;
                        } else {
                            // 通过 PromptMessage.innerHTML 往指定地方添加指定内容
                            PromptMessage.innerHTML = "localStorage中找到了地址，但没有设置默认地址。"
                        }
                    }
                } catch (e) {
                    console.error("解析 localStorage 中的地址数据失败:", e);
                }
            } else {
                console.warn("localStorage 中没有找到 'userAddresses'。");
            }
        },

        setActive(item, key) {
            item.activeKey = key;
            console.log(`当前选择了 ${item.span} 的 ${item[key]}`);
        },

        // 加入购物车方法
        addToCart() {
            const storedUser = localStorage.getItem("userinfo");
            if (!storedUser) {
                alert('用户不存在，请先登录！');
                this.$router.push('/login');
                return;
            }
            if(storedUser != null) {
                const selectedOptionsForAlert = [];
                const selectedValuesForName = [];

                for (const item of this.list) {
                    const activeKey = item.activeKey;
                    const selectedValue = item[activeKey];
                    selectedOptionsForAlert.push(`${item.span}: ${selectedValue}`);
                    selectedValuesForName.push(selectedValue);
                }

                const message = "您已选择的商品：\n\n" + selectedOptionsForAlert.join("\n");
                alert(message);

                const productName = selectedValuesForName.join(' ');

                const info = {
                    id: Date.now(),
                    imge: new URL('/src/assets/index/TwoXiaomi/Xiaomi Buds 5.jpg', import.meta.url).href,
                    name: productName,
                    price: this.original_price,
                    quantity: 1,
                    isChecked: false
                };
                // 1. 从 localStorage 中读取现有的 'cartItems' 数据
                const existingCartItemsString = localStorage.getItem('cartItems');
                // 2. 将 JSON 字符串转换为 JavaScript 数组
                let cartItems = [];
                if (existingCartItemsString) {
                    try {
                        cartItems = JSON.parse(existingCartItemsString);
                        // 确保读取到的是一个数组，避免类型错误
                        if (!Array.isArray(cartItems)) {
                            console.error("localStorage 中的 cartItems 不是数组，已重置为 []");
                            cartItems = []; // 如果不是数组，则初始化为空数组，也可以清空 localStorage
                        }
                    } catch (error) {
                        console.error('从 localStorage 解析 cartItems 失败:', error);
                        cartItems = [];
                    }
                }
                // 3. 将新的商品信息添加到数组中
                cartItems.push(info);
                // 4. 将更新后的数组转换为 JSON 字符串
                const updateCartItemsString = JSON.stringify(cartItems);
                // 5. 将更新后的 JSON 字符串保存到 localStorage
                localStorage.setItem('cartItems', updateCartItemsString);
                console.log("商品信息已保存:", info);
                console.log("购物车的商品信息已更新:", cartItems); // 可以确认购物车信息
            }
        }
    },
}
</script>

<style scoped>
.Menu{
    display: flex;
    flex-direction: column;
    width: 100%;
}
.title{
    display: flex;
    flex-direction: column;
}
.title span{
    color: #b0b0b0; 
    line-height: 30px;
}
.title .red{
    color: red;
}
.address{
    width: 100%;
    height: 100px;
    margin-top: 30px;
    background-color: #f1f1f1;
}
.address div{
    padding: 30px;
}
.address div span{
    margin-left: 10px;
}
.address div a{
    margin-left: 10px;
    color: red;
    text-decoration: none;
}
/* product */
.Menu .product{
    width: 100%;
    margin-top: 30px;
    font: 14px/1.5 Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;
}
.product span{
    font-size: 18px;
}
.product div{
    width: 100%;

}
.product div a{
    float: left;
    width: 45%;
    height: 50px;
    color: #b0b0b0;
    line-height: 50px;
    text-decoration: none;
    border: 1px solid #b0b0b0;
    margin-right: 20px;
    margin-top: 20px;
    text-align: center;
    transition: all 0.2s;
}

.product div a:hover{
    border-color: red;
    color: red;
}

.product div a.active {
  border-color: red;
  color: red;
}

.button div .car{
    width: 45%;
    height: 50px; 
    background-color: rgb(243, 135, 85); 
    color: #fff;
    line-height: 50px;
    text-decoration: none;
    border: 1px solid #b0b0b0;
    margin-top: 30px;
    float: left;
    text-align: center;
}
.button div .live{
    width: 150px;
    height: 50px; 
    background-color: #b0b0b0; 
    color: #fff;
    line-height: 50px;
    text-decoration: none;
    border: 1px solid #b0b0b0;
    margin-left: 10px;
    margin-top: 30px;
    float: left;
    text-align: center;
}
.button div .car:hover{
    background-color: #ca3f3f;
}
.button div .live:hover{
    background-color: #747171;
}
/* qybz */
.qybz{
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 15px;
    color: #b0b0b0;
}
</style>
