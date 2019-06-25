<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item>代理商列表详情</el-breadcrumb-item>
    </el-breadcrumb>
    <header>
      <a href="#basicInfo" @click="select(1)" :class="currentActive==1?'active':''">基本信息</a>
      <a href="#contactInfo" @click="select(2)" :class="currentActive==2?'active':''">联系人信息</a>
      <a href="#brandInfo" @click="select(3)" :class="currentActive==3?'active':''">代理品牌信息</a>
      <a href="#aptitudeInfo" @click="select(4)" :class="currentActive==4?'active':''">代理商资质信息</a>
    </header>
    <a name="basicInfo"></a>
    <div class="main">
      <section id="basicInfo">
        <h1>基本信息</h1>
        <el-row>
          <el-col :span="12">
            <div>代理商名称：{{basicInfo.name}}</div>
            <div>代理商地址：{{basicInfo.address}}</div>
            <div>代理商状态：{{basicInfo.status}}</div>
            <div>代理商结算方式：{{basicInfo.way}}</div>
            <div>代理商合同时间：{{basicInfo.time}}</div>
            <div>代理商任务额：{{basicInfo.task}}</div>
          </el-col>
          <el-col :span="12">
            <div>代理商编码：{{basicInfo.code}}</div>
            <div>代理商级别：{{basicInfo.grade}}</div>
            <div>代理商折扣：{{basicInfo.discount}}</div>
            <div>代理商合同：{{basicInfo.communicate}}</div>
          </el-col>
        </el-row>
      </section>
      <section id="contactInfo">
        <h1>联系人信息</h1>
        <el-table :data="contactInfo" border>
          <el-table-column label="联系人姓名" prop="name"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="备注" prop="notes"></el-table-column>
        </el-table>
      </section>
      <section>
        <h1>收货信息</h1>
        <h5>代理商新增地址</h5>
        <el-table :data="addressInfo" border>
          <el-table-column label="收货人姓名" prop="name"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <el-table-column label="备注" prop="notes"></el-table-column>
        </el-table>
        <h5>工厂新增地址</h5>
        <el-table :data="addressInfo2" border>
          <el-table-column label="收货人姓名" prop="name"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
        </el-table>
      </section>
      <section id='brandInfo'>
        <h1>代理品牌信息</h1>
        <el-table :data="agentBrandInfo" border>
          <el-table-column label="品牌名称" prop="name"></el-table-column>
          <el-table-column label="系列名称" prop="seriesName"></el-table-column>
        </el-table>
      </section>
      <section id="aptitudeInfo">
      </section>
    </div>
    <footer class="common-footer">
      <el-button type="primary">编辑</el-button>
    </footer>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import brand from '@/components/search/brand.vue';
export default class agentDetail extends Vue {
  contactInfo: object[] = [
    { name: "zdp", phone: "12345667", notes: "新的联系人" },
    { name: "zdp", phone: "12345667", notes: "新的联系人" }
  ];
  basicInfo:object={
    name:"hhh",
    address:"上海市",
    status:"良好",
    way:"现金",
    time:"2018-01-12",
    task:"1200",
    code:"sz1111",
    grade:12,
    discount:"10%",
    communicate:"12"
  }
  addressInfo: object[] = [
    { name: "zdp", phone: "123456789", address: "上海市", notes: "hhh" },
    { name: "zdp", phone: "123456789", address: "上海市", notes: "hhh" },
    { name: "zdp", phone: "123456789", address: "上海市", notes: "hhh" }
  ];
  addressInfo2:object[]=[
    { name: "zdp", phone: "123456789", address: "上海市" },
    { name: "zdp", phone: "123456789", address: "上海市" },
    { name: "zdp", phone: "123456789", address: "上海市" }
  ];
  agentBrandInfo:object[]=[
    {name:"阿里",seriesName:"阿里名称"},
    {name:"阿里",seriesName:"阿里名称"},
    {name:"阿里",seriesName:"阿里名称"}
  ];
  currentActive:number=1;
  select(flag:number):void{
     this.currentActive=flag;
  }
}
</script>

<style lang="scss" scoped>
header {
  margin: 40px 0 40px;
  a {
    padding: 10px 20px;
    --border-color: rgba(206, 208, 218, 1);
    text-decoration: none;
    color: rgba(53, 64, 82, 1);
    cursor: pointer;
    &:first-child,
    &:nth-child(2),
    &:nth-child(3) {
      border: {
        top: 1px solid var(--border-color);
        left: 1px solid var(--border-color);
        bottom: 1px solid var(--border-color);
      }
    }
    &:last-child {
      border: 1px solid var(--border-color);
    }
  };
  .active{
    background-color: var(--blue-color);
    color: #ffffff
  }
}
.main {
  margin-bottom: 100px; 
  #basicInfo {
    div {
      line-height: 50px;
    }
  }
}
</style>
