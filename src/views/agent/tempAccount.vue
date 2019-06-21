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
                          <clientSource @changeSourceData="changeSource"></clientSource>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item label="处理状态">
                          <handleStatus @changeStatusData="changeStatus"></handleStatus>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">4</el-col>
                  <el-col :span="6">5</el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator';
import clientSource from '@/components/search/clientSource.vue';
import handleStatus from '@/components/search/handleStatus.vue';

@Component({
    components:{
        clientSource,handleStatus
    }
})
export default class tempAccount extends Vue{
    private searchForm:object={
        date:'',
    };
    changeSource(val:string){
        this.searchForm=Object.assign({},this.searchForm,{
            source:val
        })
    };
    changeStatus(val:string){
        this.searchForm=Object.assign({},this.searchForm,{
            status:val
        })
        console.log(this.searchForm)
    }
}
</script>

<style lang="scss" scoped>
.content-main{
    margin: 12px; 
    border: 1px solid var(--theme-border)
}
</style>
