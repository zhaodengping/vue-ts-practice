<template>
  <div class="content">
    <div class="content-main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #f5f5f5;
  .content-main {
    margin: 12px;
    padding: 24px 30px;
    background-color: #fff;
    border: 1px solid #dfe2e5 {
      radius: 10px;
    }
    width: 100%;
    height: calc(100vh - 144px);
  }
}
</style>
