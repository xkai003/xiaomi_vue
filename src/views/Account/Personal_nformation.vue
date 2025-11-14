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
          <div class="right-title">个人信息</div>
          <div class="right-body">
            <div class="right-body-column">
              <div class="nickname">头像</div>
              <!-- <div><img src="/src/assets/Account/头像.jpg" alt=""></div> -->
              <div><img :src="imageUrl || '/src/assets/Account/头像.jpg'" alt="头像"></div> <!-- show default if image url is null -->
            </div>
            <div class="right-body-column">
              <div class="nickname">昵称：</div>
              <div>{{ nickname }}</div>
            </div>
            <div class="right-body-column">
              <div class="nickname">性别：</div>
              <div>{{ gender }}</div>
            </div>
            <div class="right-body-column">
              <div class="nickname">小米ID：</div>
              <div>{{ xiaomiID }}</div>
            </div>
            <div class="right-body-column">
              <div class="nickname">国家/地区：</div>
              <div>{{ country }}</div>
            </div>
            <!-- <div class="right-body-column" v-for="item in grxx" :key="item.id">
              <div class="nickname">{{ item.span1 }}</div>
              <div>{{ item.span2 }}</div>
            </div> -->
            <button @click="openModal">编辑</button>
          </div>
        </div>
        <!-- 弹窗 -->
        <div class="window" v-show="isshow">
          <div class="window-center">
            <h3>编辑个人信息</h3>
            <div>
              <div class="nickname"><span>头像：</span></div>
              <input type="file" @change="handleFileUpload">
              <div class="imgUrl"><img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" style="max-width: 100px; max-height: 100px;"></div>
            </div>
            <div>
              <div class="nickname"><span>昵称：</span></div>
              <input class="textinp" type="text" v-model="nickname">
            </div>
            <div>
              <div class="nickname"><span>性别：</span></div>
              <input type="radio" name="gender" value="男" v-model="gender">男
              <input type="radio" name="gender" value="女" v-model="gender">女
            </div>
            <div>
              <div class="nickname"><span>小米ID：</span></div>
              <input class="textinp" type="text" v-model="xiaomiID">
            </div>
            <div>
              <div class="nickname"><span>国家/地区：</span></div>
              <input class="textinp" type="text" v-model="country">
            </div>
            <div>
              <button @click="saveChanges">确认</button>
              <button @click="closeModal">取消</button>
            </div>
          </div>
        </div>
        <!-- 弹窗 end-->
      </div>
    </div>
    <Boottom_Navigation></Boottom_Navigation>
  </div>
</template>

<script>
import TwoNavigation from '/src/components/TwoNavigation.vue';
import Footprints from './Footprints.vue';
import Navigation from './Navigation.vue';
import Boottom_Navigation from './Boottom_Navigation.vue';
export default {
  data() {
    return {
      isshow: false, // Initially hide the modal
      imageUrl: null, // preview image
      defaultAvatar: '/src/assets/Account/头像.jpg', //default avatar to display incase imageURL is null
      selectedFile: null, // stores the file metadata such as last modified date and other metadata
      nickname: "1",
      gender: "男",
      xiaomiID: "1",
      country: "1",
       initialData: {  // Store the original data values that can be reverted to on cancel
           nickname: "1",
           gender: "",
           xiaomiID: "1",
           country: "1",
       }
    };
  },
  mounted() {
      // On component mount initialize initialData here so that the initial content is equal to the content of state
      this.initialData = {
          nickname: this.nickname,
          gender: this.gender,
          xiaomiID: this.xiaomiID,
          country: this.country,
      }
  },
  methods: {
    openModal() {
      this.imageUrl = null; //reset previous imageURL when the popup is opened.
      this.isshow = true;
    },
    closeModal() {
        // Restore original values from initialData
        this.nickname = this.initialData.nickname;
        this.gender = this.initialData.gender;
        this.xiaomiID = this.initialData.xiaomiID;
        this.country = this.initialData.country;

        this.imageUrl = null; // Clear the image URL
        this.selectedFile = null;
        this.isshow = false;

    },
    saveChanges() {
        // You'd typically send the data to an API endpoint here  and you can handle this by making a POST or PUT request for the data.
        // You would then update the data from the HTTP request

        // Upon a HTTP 200, display the updated data. Since no back end is supported for this use case, for now we can update the initial data such that on component loads, we can load from a previous state

        // Update `initialData` with current values after saving if save is successful.
      this.initialData = {
          nickname: this.nickname,
          gender: this.gender,
          xiaomiID: this.xiaomiID,
          country: this.country,
      };
       this.isshow = false //close modal after save
    },
    handleFileUpload(event) {
      const file = event.target.files[0]; // Get the selected file
      if (file) {
        this.selectedFile = file; //optional for later uses such as submitting the file
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // Set imageUrl to the data URL
        };
        reader.readAsDataURL(file); // Read the file as a data URL
      } else {
        this.imageUrl = null; // No file selected, clear the preview
        this.selectedFile = null;
      }
    }
  },
  components: {
    TwoNavigation,
    Footprints,
    Navigation,
    Boottom_Navigation
  },
};
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
.body .center .right{
  flex: 1;
  background-color: #fff;
  padding: 0px 40px 40px 0px;
  max-height: 100%;/* 最大高度 */
  overflow-y: auto;/* 垂直滚动条 */
}
.body .center .right .right-title{
  margin-top: 30px;
  margin-left: 10px;
  padding-left: 5px;
  border-left: 5px solid blue;
  color: black;
  font-size: 19px;
  font-weight: bold;
}
.body .center .right .right-body{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  /* background-color: #e2c5c5; */
  margin: 40px;
}
.body .center .right .right-body .right-body-column{
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
}
.body .center .right .right-body .right-body-column img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.body .center .right .right-body .right-body-column .nickname{
  width: 30%;
}
.body .center .right .right-body button{
  font-size: 18px;
  font-weight: 400;
  width: 40%;
  height: 60px;
  line-height: 60px;
  margin: 30px auto;
  border: none;
  text-align: center;
  color: #fff;
  background-color: #ff6900;
}
.body .center .right .right-body button:hover{
  cursor: pointer;
  background-color: #f79854;
}
/* 弹窗 */
.body .center .window{
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}
.body .center .window .window-center{
  margin: 300px auto;
  padding: 30px;
  width: 500px;
  height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.body .center .window .window-center h3{
  text-align: center;
}
.body .center .window .window-center div{
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}
.body .center .window .window-center div .nickname{
  width: 100px;
}
.body .center .window .window-center div .imgUrl{
  margin-top: 30px;
  margin-left: -300px;
}
.body .center .window .window-center div .textinp{
  width: 300px;
}
.body .center .window .window-center div button{
  width: 150px;
  height: 35px;
  margin-top: 20px;
  margin-left: 30px;
  border: none;
  background-color: #ff6900;
}
.body .center .window .window-center div button:hover{
  cursor: pointer;
  background-color: #f79854;
}
/* 弹窗 end */
</style>