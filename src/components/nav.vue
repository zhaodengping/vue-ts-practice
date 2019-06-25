<template>
  <div class="nav">
    <div class="nav-left">
      <i class="iconfont icondaohang"></i>
      <span>供货商商家平台</span>
    </div>
    <div class="nav-right">
      <div class="user-detail">
        <i class="iconfont iconmorentouxiang"></i>
        <div>
          <div>
            <span>13778277879</span>
            <span>管理员</span>
          </div>
          <div>上海木成工具有限公司</div>
        </div>
      </div>
      <div class="notice">
        <el-badge :value="12" class="item" type="warning">
          <i class="iconfont iconxiaoxi"></i>
        </el-badge>
      </div>
      <div class="system">
        <el-popover placement="bottom" width="180" trigger="click">
          <section>
            <i class="iconfont iconhuiyuan"></i>
            <span>修改密码</span>
          </section>
          <section @click="logout">
            <i class="iconfont iconweibiaoti--"></i>
            <span>退出登录</span>
          </section>
          <el-button icon="iconfont iconicon--" type="text" slot="reference"></el-button>
        </el-popover>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
@Component
export default class Nav extends Vue{
  logout():void{
    this.$router.push("/login")
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 19px 0 27px;
  height: 70px;
  background-color: #273142;
  .nav-left {
    i {
      color: var(--theme-color);
      font-size: 20px;
    }
    span {
      margin-left: 16px;
      padding-left: 12px;
      border-left: 1px solid var(--theme-color);
      font-size: 16px;
      color: var(--theme-color);
    }
  }
  .nav-right {
    display: flex;
    align-items: center;
    .user-detail {
      display: flex;
      align-items: center;
      color: var(--theme-color);
      i {
        margin-right: 10px;
        font-size: 25px;
        color: var(--theme-color);
      }
      div {
        div {
          span {
            font-size: 14px;
            line-height: 20px;
            &:last-child {
              border: 1px solid var(--theme-color);
            }
          }
        }
        div {
          &:last-child {
            font-size: 12px;
            line-height: 17px;
          }
        }
      }
    }
    .notice {
      margin: 0 25px;
      padding: 0 25px;
      cursor: pointer;
      border: {
        left: 1px solid var(--theme-color);
        right: 1px solid var(--theme-color);
      }
      i {
        color: var(--theme-color);
        font-size: 20px;
      }
    }
    .system {
      cursor: pointer;
      .el-button--text {
        color: var(--theme-color);
        font-size: 20px;
      }
    }
  }
}
.el-popover {
  line-height: 30px;
  section {
    display: flex;
    align-items: center;
    &:hover{
      background-color: var(--theme-border);
      cursor: pointer;
    }
    span {
      margin-left: 20px;
      font-size: 20px;
    }
    .iconfont {
      font-size: 25px;
    }
  }
}
</style>
