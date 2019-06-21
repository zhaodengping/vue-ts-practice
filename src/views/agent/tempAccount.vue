<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>临时客户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="head">
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
          <el-col :span="4">
            <el-form-item>
              <template>&nbsp;</template>
              <el-input v-model="searchForm.searchText" placeholder="请输入代理商名称、联系人或手机号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-form-item>
              <div>&nbsp;</div>
              <el-button type="primary" plain>搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-table :data="tableData" border highlight-current-row>
      <el-table-column type="index"></el-table-column>
      <el-table-column label="注册电话" prop="phone"></el-table-column>
      <el-table-column label="申请人" prop="name"></el-table-column>
      <el-table-column label="客户公司名称" prop="governmentName"></el-table-column>
      <el-table-column label="手机号归属地" prop="phoneAddress"></el-table-column>
      <el-table-column label="客户来源" prop="resource"></el-table-column>
      <el-table-column label="关注日期" prop="dates"></el-table-column>
      <el-table-column label="所属业务员" prop="salesman"></el-table-column>
      <el-table-column label="申请状态" prop="status"></el-table-column>
      <el-table-column label="操作">
          <template slot-scope="scope">
              <el-button type="text" size="mini">分配</el-button>
          </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import clientSource from "@/components/search/clientSource.vue";
import handleStatus from "@/components/search/handleStatus.vue";

@Component({
  components: {
    clientSource,
    handleStatus
  }
})
export default class tempAccount extends Vue {
  private searchForm: object = {
    dates: "",
    searchText: ""
  };
  tableData: Object[] = [{
      phone:'123456789',
      name:"zdp",
      governmentName:"华趣",
      phoneAddress:"上海普陀区",
      resource:"小程序",
      dates:"2018/12/22",
      salesman:"哈哈哈",
      status:"待审核",
  }];
  created() {
    this.getNowTime();
  }
  getNowTime() {
    let time = new Date();
    // this.searchForm.dates = time;
  }
  changeSource(val: string) {
    this.searchForm = Object.assign({}, this.searchForm, {
      source: val
    });
  }
  changeStatus(val: string) {
    this.searchForm = Object.assign({}, this.searchForm, {
      status: val
    });
  }
}
</script>

<style lang="scss" scoped>
.head {
  margin: 30px 0;
}
</style>
