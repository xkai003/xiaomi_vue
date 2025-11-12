<template>
  <div>
    <TwoNavigation></TwoNavigation>
    <Footprints></Footprints>
    <div class="body">
        <div class="center">
          <div class="left">
            <!-- 引入导航 -->
            <Navigation></Navigation>
          </div>
          <div class="right">
            <div>
                <!-- 已保存的地址列表 -->
                <div class="address-list" v-if="addressList.length">
                <div 
                    v-for="(address, index) in addressList" 
                    :key="index" 
                    class="address-item"
                    :class="{ 'default-address': address.isDefault }"
                >
                    <div class="address-info">
                    <p><strong>{{ address.name }}</strong> {{ address.phone }}</p>
                    <p>{{ address.fullAddress }}</p>
                    </div>
                    <div class="address-actions">
                    <button @click="setDefault(index)" v-if="!address.isDefault">设为默认</button>
                    <button @click="editAddress(index)">编辑</button>
                    <button @click="deleteAddress(index)" class="delete-btn">删除</button>
                    </div>
                    <div class="default-tag" v-if="address.isDefault">默认地址</div>
                </div>
                </div>

                <!-- 空状态 -->
                <div class="empty-state" v-else>
                <p>暂无收货地址，请添加地址</p>
                </div>

                <!-- 地址编辑弹窗 -->
                <div class="window" v-show="isShow">
                    <div class="center">
                        <div class="hard">
                            <span>{{ editingIndex === null ? '添加收货地址' : '修改收货地址' }}</span>
                            <button @click="closeWindow()">X</button>
                        </div>
                        <div class="body">
                        <div class="form-group">
                            <span>收件人姓名:</span>
                            <input 
                            type="text" 
                            placeholder="请输入收件人姓名"
                            v-model="form.name"
                            >
                        </div>
                        <div class="form-group">
                            <span>收件人电话:</span>
                            <input 
                            type="text" 
                            placeholder="请输入手机号码"
                            v-model="form.phone"
                            >
                        </div>
                        <div class="form-group">
                            <span>所在地区:</span>
                            <el-cascader
                            v-model="form.region"
                            :options="regionOptions"
                            :props="cascaderProps"
                            placeholder="请选择省市区"
                            style="width: 70%; margin-left: 30px;"
                            />
                        </div>
                        <div class="form-group">
                            <span>详细地址:</span>
                            <textarea 
                            placeholder="请输入详细地址" 
                            rows="3"
                            v-model="form.detail"
                            style="width: 70%; margin-left: 30px; padding: 8px;"
                            ></textarea>
                        </div>
                        <div class="form-group checkbox-group">
                            <input 
                            type="checkbox" 
                            id="defaultAddress" 
                            v-model="form.isDefault"
                            >
                            <label for="defaultAddress">设为默认地址</label>
                        </div>
                        <div class="form-actions">
                            <button @click="saveAddress()" class="save-btn">保存地址</button>
                            <button @click="closeWindow()" class="cancel-btn">取消</button>
                        </div>
                        </div>
                    </div>
                </div>

                <!-- 添加收货地址 -->
                <button @click="openWindow()" class="openWindow">添加收货地址</button>
            </div>
          </div>
        </div>
    </div>
    <Boottom_Navigation></Boottom_Navigation>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { regionData } from 'element-china-area-data';
import TwoNavigation from '/src/components/TwoNavigation.vue';
import Footprints from './Footprints.vue';
import Navigation from './Navigation.vue';
import Boottom_Navigation from './Boottom_Navigation.vue';
// 弹窗显示控制
const isShow = ref(false);
const editingIndex = ref(null); // 当前编辑的地址索引，null表示新增
// 表单数据
const form = reactive({
  name: '',
  phone: '',
  region: [],
  detail: '',
  isDefault: false,
});
// 地址列表
const addressList = ref([]);
// 地区选择器配置
const regionOptions = regionData;
const cascaderProps = {
  value: 'value',
  label: 'label',
  children: 'children',
};
// 打开弹窗
const openWindow = (index = null) => {
  editingIndex.value = index;
  if (index !== null) {
    // 编辑模式：填充现有数据
    const address = addressList.value[index];
    form.name = address.name;
    form.phone = address.phone;
    form.region = address.region;
    form.detail = address.detail;
    form.isDefault = address.isDefault;
  } else {
    // 新增模式：重置表单
    resetForm();
  }
  isShow.value = true;
};
// 关闭弹窗
const closeWindow = () => {
  isShow.value = false;
  resetForm();
  editingIndex.value = null;
};
// 重置表单
const resetForm = () => {
  form.name = '';
  form.phone = '';
  form.region = [];
  form.detail = '';
  form.isDefault = false;
};
// 获取地区名称
const getRegionName = (regionCodes) => {
  if (!regionCodes.length) return '';
  const findName = (data, code) => {
    for (const item of data) {
      if (item.value === code) return item.label;
      if (item.children) {
        const result = findName(item.children, code);
        if (result) return result;
      }
    }
    return '';
  };
  const [province, city, area] = regionCodes;
  const provinceName = findName(regionOptions, province);
  const cityName = findName(regionOptions, city);
  const areaName = findName(regionOptions, area);
  return `${provinceName} ${cityName} ${areaName}`;
};
// 保存地址
const saveAddress = () => {
  // 表单验证
  if (!form.name.trim()) {
    ElMessage.error('请输入收件人姓名');
    return;
  }
  if (!form.phone.trim()) {
    ElMessage.error('请输入手机号码');
    return;
  }
  if (!form.region.length) {
    ElMessage.error('请选择所在地区');
    return;
  }
  if (!form.detail.trim()) {
    ElMessage.error('请输入详细地址');
    return;
  }
  // 构建地址对象
  const addressData = {
    name: form.name.trim(),
    phone: form.phone.trim(),
    region: [...form.region],
    detail: form.detail.trim(),
    fullAddress: `${getRegionName(form.region)} ${form.detail.trim()}`,
    isDefault: form.isDefault,
  };
  if (editingIndex.value !== null) {
    // 编辑模式
    addressList.value[editingIndex.value] = addressData;
    ElMessage.success('地址修改成功');
  } else {
    // 新增模式
    addressList.value.push(addressData);
    ElMessage.success('地址添加成功');
  }
  // 如果设为默认地址，取消其他地址的默认状态
  if (form.isDefault) {
    addressList.value.forEach((address, index) => {
      if (
        index !==
        (editingIndex.value !== null
          ? editingIndex.value
          : addressList.value.length - 1)
      ) {
        address.isDefault = false;
      }
    });
  }
  closeWindow();
  // 保存到本地存储（可选）
  localStorage.setItem('userAddresses', JSON.stringify(addressList.value));
};
// 设为默认地址
const setDefault = (index) => {
  addressList.value.forEach((address, i) => {
    address.isDefault = i === index;
  });
  ElMessage.success('默认地址设置成功');
  localStorage.setItem('userAddresses', JSON.stringify(addressList.value));
};
// 编辑地址
const editAddress = (index) => {
  openWindow(index);
};
// 删除地址
const deleteAddress = (index) => {
  if (confirm('确定要删除这个地址吗？')) {
    addressList.value.splice(index, 1);
    ElMessage.success('地址删除成功');
    localStorage.setItem('userAddresses', JSON.stringify(addressList.value));
  }
};
// 初始化：从本地存储加载数据
onMounted(() => {
  const savedAddresses = localStorage.getItem('userAddresses');
  if (savedAddresses) {
    addressList.value = JSON.parse(savedAddresses);
  }
});
</script>

<style scoped>
/* Body */
.body {
  width: 100%;
  height: 85vh;
  flex: 1; /* Take up the remaining vertical space */
  display: flex;
  justify-content: center;
  background-color: #f9f9f9; 
}

.body .center {
  width: 80%;
  max-width: 1200px; 
  display: flex;
  /* background-color: #f9f9f9; */
  padding: 20px; 
}

.body .center .left {
  width: 200px;
  background-color: #fff;
  margin-right: 20px;
}
.body .center .right {
  flex: 1;
  background-color: #fff;
  padding: 20px;
  max-height: 100%;/* 最大高度 */
  overflow-y: auto;/* 垂直滚动条 */
}


.address-list {
  margin-top: 20px;
}

.address-item {
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 10px;
  position: relative;
}

.default-address {
  border-color: #1890ff;
  background: #f0f8ff;
}

.address-info p {
  margin: 5px 0;
}

.address-actions {
  margin-top: 10px;
}
.address-actions button{
  margin-right: 10px;
  padding: 8px 16px;
}

.default-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1890ff;
  color: white;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 12px;
}
.empty-state {
  text-align: center;
  color: #999;
  padding: 40px 0;
  font-style: italic;
}
.openWindow{
    width: 100%;
    padding: 10px;
    font-size: 20px;
    background-color: red;
    color: #fff;
}
button {
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}
.window {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.window .center{
  width: 50%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
/* .window .center .hard */
.window .center .hard{
  width: 100%;
  height: 50px;
  text-align: center;
  /* background-color: #f3dcdc; */
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 0 20px;
}
.window .center .hard span {
  display: block;
  width: 100%;
  /* background-color: #dbb6b6; */
  line-height: 50px;
  font-weight: bold;
}
.window .center .hard button {
  width: 50px;
  /* height: 50px; */
  border: none;
  font-size: 16px;
  margin-right: 20px;
  border: 1px solid #ddd;
  /* background-color: #f0d2d2; */
}
.window .center .body{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    background-color: #fff;
}
.window .center .body .form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
}

.window .center .body .form-group span {
  width: 100px;
  line-height: 32px;
}

.window .center .body .form-group input[type="text"],
.window .center .body .form-group textarea {
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.window .center .body .form-group .checkbox-group {
  align-items: center;
}

.window .center .body .form-group .checkbox-group input {
  margin-right: 8px;
}

.window .center .body .form-group .center .hard button {
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
}
.window .center .body .form-group .center .body{
    display: flex;
}
.body .center .right div .window .form-actions button{
  width: 20%;
  height: 40px;
  margin-left: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  /* background-color: #a58b8b; */
}
</style>