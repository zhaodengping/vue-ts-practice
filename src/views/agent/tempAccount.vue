<template>
    <div class="content-main">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>临时客户管理</el-breadcrumb-item>
        </el-breadcrumb>
        <div>
            <el-form :model="searchForm">
                <el-row>
                  <el-col :span="4">
                      <el-form-item label="注册日期">
                          <el-date-picker v-model="searchForm.dates"></el-date-picker>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item label="客户来源">
                          <!-- <clientSource></clientSource> -->
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">3</el-col>
                  <el-col :span="4">4</el-col>
                  <el-col :span="6">5</el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-class-component';
import clientSource from '@components/search/clientSource.vue';


@Component({
    components:{
        clientSource
    }
})
export default Vue.extend({
    data(){
        return{
            searchForm:{}
        }
    }
})
</script>

<style lang="scss" scoped>
.content-main{
    margin: 12px; 
    border: 1px solid var(--theme-border)
}
</style>
