<template>
  <div>
    <nav-title></nav-title>
    <main class="content">
      <left class="left"></left>
      <div class="content-main">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import navTitle from "@/components/nav.vue";
import left from "@/components/left.vue"
@Component({
  components: {
    navTitle,
    left
  }
})
export default class Main extends Vue {}
</script>

<style lang="scss" scoped>
main {
  background-color: #f5f5f5;
  display: flex;
  .left {
    position: absolute;
    width: 200px !important;
  }
  .content-main {
    margin: 12px 12px 12px 215px;
    padding: 24px 30px;
    background-color: #fff;
    border: 1px solid #dfe2e5 {
      radius: 10px;
    }
    width: 100%;
    height: calc(100vh - 144px);
    overflow: auto;
  }
}
</style>
