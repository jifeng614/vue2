<template>
  <div class="bigbox">
    <div class="zhuce">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input class="input name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input class="input phone" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮 箱">
          <el-input class="input email" v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input class="input" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button class="btn" @click="zhu">注册</el-button>
      <p @click="go">已有账号，去登录</p>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        bannerlist:[]
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "手机号不能为空", trgger: "blur" },
          { pattern: /^1[34578]\d{9}$/, message: "格式错误", trigger: "blur" },
        ],
        email: [
          { required: true, message: "邮箱不能为空", trgger: "blur" },
          {
            pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
            message: "格式错误",
            trigger: "blur",
          },
        ],
      },
    };
  },
  // mounted(){
        
  // },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    go() {
      this.$router.push("/denglu");
    },
    zhu(){
      this.$http.post("/local/users/register").then((res) => {
        console.log(res);
        if (res.data.code === -1){
          
        }
        this.bannerList = res.data.data;
    });
    }
    // async zhuce(){
    //     let form = this.from;
    //     if(this.from.username !==""&&this.from.password !==""&&this.from.email !==""&&this.from.phone !=="") {
    //         let zhuce = await axios.request({
    //             url:'/local/users/zhuce',
    //             method:'POST',
    //             data:from,
    //         });
    //         console.log(zhuce);
    //     }
    // }
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