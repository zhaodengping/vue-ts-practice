<template>
  <div id="app">
    <nav-title></nav-title>
    <div class="content">
      <left class="left"></left>
      <mainContent></mainContent>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navTitle from "@/components/nav.vue";
import left from "@/components/left.vue";
import mainContent from "@/components/main.vue";

@Component({
  components: {
    navTitle,
    left,
    mainContent
  }
})
export default class App extends Vue {}
</script> 

<style lang="scss" scoped>
.content {
  display: flex;
  .left {
    width: 260px;
  }
}
</style>

<style lang="scss">
@import url("./assets/css/var.css");
body {
  margin: 0;
  font-family: "苹方-简 常规体";
  .el-breadcrumb {
    color: #354052;
    font:{
      weight:600;
      size: 18px;
      family:"苹方-简 中粗体"
    }
  }
}
</style>