<template>
  <div>
    <header>
      <img src="http://192.168.3.215:8803/static/myapp/pcres/css/login/factory.svg">
    </header>
    <content>
      <div class="wrap">
        <div class="content">
          <div>
            <img src="http://192.168.3.215:8803/static/myapp/pcres/css/login/login.png">
            <div>
              <h1>欢迎登陆！</h1>
              <h1>工厂管理系统后台</h1>
            </div>
          </div>
          <div class="login">
            <el-form :model="loginForm">
              <el-form-item label="手机号">
                <el-input v-model="loginForm.mobile"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <el-form-item>
                  <el-checkbox v-model="loginForm.remember">记住账号</el-checkbox>
              </el-form-item>
              <el-form-item>
                <div class="login-btn">
                  <el-button @click="login">登录</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </content>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
@Component
export default class Login extends Vue {
  loginForm:object = {
    mobile: "",
    password: "",
    remember:false
  };
  login():void{
      this.$router.push("/temAccount")
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 60px;
  img {
    margin: 13px 20px;
  }
}
.wrap {
  height: calc(100vh - 60px);
  background-color: #273142;
  .content {
    position: relative;
    display: flex;
    margin: 0 auto;
    top: 50%;
    transform: translateY(-50%);
    width: 1000px;
    background-color: #ffffff;
    border-radius: 20px;
    img {
      border-radius: 20px;
      width: auto;
      height: 100%;
      & + div {
        position: absolute;
        top: 38px;
        left: 28px;
        color: #ffffff;
      }
    }
    .login {
      margin: 10px 40px;
      width: 100%;
      .login-btn {
        .el-button {
          width:100%;
          background-color: #133572;
          color: #ffffff;
          height: 50px;
        }
      }
    }
  }
}
</style> 


