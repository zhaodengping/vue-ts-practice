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
        <i class="iconfont iconxiaoxi"></i>
      </div>
      <div class="system">
          <i class="iconfont iconicon--"></i>
      </div>
    </div>
  </div>
</template>
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
        border:{
            left:1px solid var(--theme-color);
            right:1px solid var(--theme-color);
        }
      i {
        color: var(--theme-color);
        font-size: 30px;
      }
    };
    .system{
        i{
            color: #fff;
            font-size: 20px;
        }
    }
  }
}
</style>
