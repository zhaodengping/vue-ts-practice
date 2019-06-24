<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item>代理商管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="search">
            <el-form :model="searchForm">
                <el-row>
                  <el-col :span="4">
                      <el-form-item label="产品品牌">
                          <brand></brand>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item label="产品系列">
                          <brand></brand>
                      </el-form-item>
                  </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from "vue-property-decorator";
import brand from '@/components/search/brand.vue'
@Component({
  components: {
    brand
  }
})
export default class AgentList extends Vue{
    searchForm:object={}
}
</script>
