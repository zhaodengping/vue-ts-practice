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
  .el-breadcrumb {
    color: #354052;
    font: {
      weight: 600;
      size: 18px;
      family: "苹方-简 中粗体";
    }
  }
  .el-table th.gutter {
    display: table-cell !important;
  }
}
</style>