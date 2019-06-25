<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>产品档案</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form :model="searchForm">
        <el-row>
          <el-col :span="4">
            <el-form-item>
              <template>
                <div class="font-color">产品品牌</div>
              </template>
              <brand @changeBrand="selectBrand"></brand>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <template>
                <div class="font-color">产品系列</div>
              </template>
              <series @changeSeries="selectSeries"></series>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <template>
                <div class="font-color">所属分类</div>
              </template>
              <classify @changeClass="selectClass"></classify>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item>
              <template>
                <div>&nbsp;</div>
              </template>
              <el-input v-model="searchForm.otherInfo" placeholder="请输入代理商名称、联系人或手机号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-form-item>
              <template>
                <div>&nbsp;</div>
              </template>
              <el-button type="primary" plain @click="searchState">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="table-title">
      产品合计：共
      <span>4</span>个品牌
      <span>16</span>个系列
      <span>32</span>个
    </div>
    <el-table :data="tableData" border>
      <el-table-column fixed type="index"></el-table-column>
      <el-table-column label="代理商编码" prop="code"></el-table-column>
      <el-table-column label="代理商名称">
        <template slot-scope="scope">
          <div class="agent-name">{{scope.row.agentName}}</div>
        </template>
      </el-table-column>
      <el-table-column label="联系人" prop="name"></el-table-column>
      <el-table-column label="联系电话" prop="phone"></el-table-column>
      <el-table-column label="代理商级别" prop="grade"></el-table-column>
      <el-table-column label="代理商折扣" prop="discount"></el-table-column>
      <el-table-column label="代理商返点" prop="back"></el-table-column>
      <el-table-column label="所属省/市" prop="city"></el-table-column>
      <el-table-column label="代理品牌" prop="brand"></el-table-column>
      <el-table-column label="最后一次下单日期" prop="lastDates"></el-table-column>
      <el-table-column label="代理状态" prop="status"></el-table-column>
      <el-table-column label="所属业务员" prop="belong"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="stopUse">停用</el-button>
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
import brand from "@/components/search/brand.vue";
import series from "@/components/search/series.vue";
import classify from "@/components/search/class.vue";
@Component({
  components: {
    brand,
    series,
    classify
  }
})
export default class AgentList extends Vue {
  searchForm: object = {
    otherInfo: ""
  };
  tableData: object[] = [
    {
      code: "DLS0025",
      agentName: "EESD",
      name: "zzz",
      phone: 123456789,
      grade: "一级客户",
      discount: "1%",
      back: "1%",
      city: "上海市",
      brand: "ali",
      lastDates: "2019",
      status: "正常",
      belong: "一号"
    },
    {
      code: "DLS0025",
      agentName: "EESD",
      name: "zzz",
      phone: 123456789,
      grade: "一级客户",
      discount: "100%",
      back: "1%",
      city: "上海市",
      brand: "ali",
      lastDates: "2019",
      status: "正常",
      belong: "一号"
    },
    {
      code: "DLS0025",
      agentName: "EESD",
      name: "zzz",
      phone: 123456789,
      grade: "一级客户",
      discount: "100%",
      back: "1%",
      city: "上海市",
      brand: "ali",
      lastDates: "2019",
      status: "正常",
      belong: "一号"
    }
  ];
  selectBrand(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      brand: e
    });
  }
  selectSeries(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      series: e
    });
  }
  selectClass(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      classify: e
    });
  }
  searchState(e: string): void {
    console.log(this.searchForm);
  }
  stopUse(): void {
    this.$confirm("确定要停用吗？", "温馨提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        console.log("停用了");
        this.$message.success("取消成功！");
      })
      .catch(() => {
        console.log("取消");
      });
  }
}
</script>
<style lang="scss" scoped> 
.table-title {
  margin-bottom: 30px;
  span {
    color: var(--blue-color);
    font-size: 25px;
    font-weight: 600;
  }
}
.agent-name{
    color: var(--blue-color);
    cursor: pointer;
}
.page {
  margin: 30px 0 10px;
  text-align: right;
}
</style>
