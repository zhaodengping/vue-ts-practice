<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>代理商审核</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form :model="searchForm">
        <el-row>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">业务员姓名</div>
              </template>
              <salesmanName @changeSalesman="selectSalesman"></salesmanName>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">申请日期</div>
                <el-date-picker v-model="searchForm.dates"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div>&nbsp;</div>
                <el-input v-model="searchForm.otherInfo" placeholder="请输入代理商名称、联系人或手机号"></el-input>
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="5" :offset="1">
            <el-form-item>
              <template>
                <div>&nbsp;</div>
                <el-button type="primary" plain @click="searchState">搜索</el-button>
              </template>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-table :data="tableData" border>
      <el-table-column fixed type='index'></el-table-column>
      <el-table-column label="代理商名称" prop="agentName"></el-table-column>
      <el-table-column label="联系人" prop="name"></el-table-column>
      <el-table-column label="联系电话" prop="phone"></el-table-column>
      <el-table-column label="申请人" prop="applicant"></el-table-column>
      <el-table-column label="所属省/市" prop="city"></el-table-column>
      <el-table-column label="代理品牌" prop="brand"></el-table-column>
      <el-table-column label="申请单日期" prop="dates"></el-table-column>
      <el-table-column label="所属业务员" prop="belongs"></el-table-column>
      <el-table-column label="申请状态" prop="status"></el-table-column>
      <el-table-column label="操作" fixed="right" width="100">
          <template>
              <el-button type="text">审核</el-button>
          </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import salesmanName from "@/components/search/salesmanName.vue";

@Component({
  components: {
    salesmanName
  }
})
export default class UncheckAgent extends Vue {
  searchForm: object = {
    dates: "",
    otherInfo: ""
  };
  tableData:object[]=[
      {agentName:"苏州宝华工具经销",name:"利是封",phone:"123456789",applicant:"陈小初",city:'上海是金山区',brand:"品牌1",dates:"2018/12/22",belongs:"陈小初",status:"待审核"},
      {agentName:"苏州宝华工具经销",name:"利是封",phone:"123456789",applicant:"陈小初",city:'上海是金山区',brand:"品牌1",dates:"2018/12/22",belongs:"陈小初",status:"待审核"},
      {agentName:"苏州宝华工具经销",name:"利是封",phone:"123456789",applicant:"陈小初",city:'上海是金山区',brand:"品牌1",dates:"2018/12/22",belongs:"陈小初",status:"待审核"},
      {agentName:"苏州宝华工具经销",name:"利是封",phone:"123456789",applicant:"陈小初",city:'上海是金山区',brand:"品牌1",dates:"2018/12/22",belongs:"陈小初",status:"待审核"}
  ]
  searchState():void{
      console.log(this.searchForm)
  }
  selectSalesman(e:string):void{
      this.searchForm=Object.assign({},this.searchForm,{
          salesName:e
      })
  }
}
</script>
<style lang="scss" scoped> 
.page{
    margin: 30px 0;
    text-align: right;
}
</style>
