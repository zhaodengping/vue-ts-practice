<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>  
<style lang="scss">
@import url("./assets/css/var.css");
body {
  margin: 0;
  font-family: "苹方-简 常规体";
  overflow-x: hidden;
  .el-breadcrumb {
    color: #354052;
    font: {
      weight: 600;
      size: 18px;
      family: "苹方-简 中粗体";
    }
  }
  //所有的搜索栏的样式
  .search {
    margin: 30px 0;
    .font-color {
      color: var(--search-color);
    }
  }
  //所有页面固定在底部的
  .common-footer {
    position: fixed;
    text-align: center;
    background-color: #ffffff;
    z-index: 999;
    bottom: 0;
    left: 215px;
    border-top: 1px solid #f2f2f2;
    line-height: 100px;
    width: calc(100vw - 245px);
    box-shadow: #f2f2f2 0 0 5px;
  }
  .el-table th.gutter {
    display: table-cell !important;
  }
  .el-select {
    width: 90%;
  }
  //分页位置
  .page {
    margin: 30px 0;
    text-align: right;
  }
}
</style>