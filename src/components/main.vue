<template>
  <div>
    <nav-title></nav-title>
    <div class="content">
      <left class="left"></left>
      <div class="content-main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navTitle from "@/components/nav.vue";
import left from "@/components/left";
@Component({
  components: {
    navTitle,
    left
  }
})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
  display: flex;
  .left {
    width: 265px;
  }
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
