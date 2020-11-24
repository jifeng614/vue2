<template>
  <!-- <p>我叫王继峰</p>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-button icon="el-icon-search" circle></el-button>
    <el-button type="primary" icon="el-icon-edit" circle></el-button>
    <el-button type="success" icon="el-icon-check" circle></el-button>
    <el-button type="info" icon="el-icon-message" circle></el-button>
    <el-button type="warning" icon="el-icon-star-off" circle></el-button>
    <el-button type="danger" icon="el-icon-delete" circle></el-button> -->
  <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow: auto">
      <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
    </ul> -->
  <!-- <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div> -->

  <div class="bigbox">
    <top :datalist="navlist" />
    <!-- <div class="zhuce">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input class="input name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input class="input phone" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="邮 箱">
          <el-input class="input email" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input class="input" v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn">注册</el-button>
      <p @click="go">已有账号，去登录</p> -->
    <!-- </div> -->
    <div class="box">
      <h1>{{wang}}</h1>
    </div>
    <foot @feng="get($event)"/>
    <router-view />
  </div>
</template>

<script>
import foot from "../components/foot.vue";
import top from "../components/top.vue";
export default {
  components: {
    top,
    foot,
  },

  // components: { top, foot },
  // data() {
  //   return {
  //     value1: 0,
  // count: 0,
  //   };
  // },
  // methods: {
  //   formatTooltip(val) {
  //     return val / 100;
  //   },
  // load() {
  //   this.count += 2;
  // },
  // },
  data() {
    return {
      // name: "",
      // phone: "",
      // email: "",
      navlist: [
        { name: "daohangyi" },
        { name: "daohangyi" },
        { name: "daohangyi" },
      ],
      wang:""
      // rules: {
      //   name: [
      //     { required: true, message: "请输入活动名称", trigger: "blur" },
      //     { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
      //   ],
      //   phone: [
      //     { required: true, message: "手机号不能为空", trgger: "blur" },
      //     { pattern: /^1[34578]\d{9}$/, message: "格式错误", trigger: "blur" },
      //   ],
      //   email: [
      //     { required: true, message: "邮箱不能为空", trgger: "blur" },
      //     {
      //       pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      //       message: "格式错误",
      //       trigger: "blur",
      //     },
      //   ],
      // },
    };
  },
  methods: {
    // onSubmit() {
    //   console.log("submit!");
    // },
    // go() {
    //   this.$router.push("/denglu");
    // },
    get(event){
      this.wang=event
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
.bigbox {
  width: 100%;
  height: 600px;
  background-image: url("../assets/bei.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  .zhuce {
    margin-left: 1100px;
    width: 320px;
    height: 315px;
    padding: 40px;
    border-radius: 20px;
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    .btn {
      width: 245px;
      margin-left: 35px;
    }
    .input {
      width: 200px;
    }
  }
  p {
    margin-top: 20px;
    text-align: center;
    text-decoration: underline;
  }
  p:hover {
    color: royalblue;
  }
}
</style>