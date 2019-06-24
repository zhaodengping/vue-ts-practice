<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/agentList' }">代理商列表</el-breadcrumb-item>
      <el-breadcrumb-item>代理商列表详情</el-breadcrumb-item>
    </el-breadcrumb>
    <header>
      <a name="basicInfo">基本信息</a>
      <a name="contactInfo">联系人信息</a>
      <a name="brandInfo">代理品牌信息</a>
      <a>代理商资质信息</a>
    </header>
    <section id="basicInfo">
      <h1>基本信息</h1>
      <el-row>
        <el-col :span="12">
          <div>代理商名称：</div>
          <div>代理商地址：</div>
          <div>代理商状态：</div>
          <div>代理商结算方式：</div>
          <div>代理商合同时间：</div>
          <div>代理商任务额：</div>
        </el-col>
        <el-col :span="12">
          <div>代理商编码：</div>
          <div>代理商级别：</div>
          <div>代理商折扣：</div>
          <div>代理商合同：</div>
        </el-col>
      </el-row>
    </section>
    <section id='contactInfo'>
        <h1>联系人信息</h1>
        <el-table :data="contactInfo" border>
          <el-table-column label="联系人姓名" prop="name"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="备注" prop="notes"></el-table-column>
        </el-table>
    </section>
    <section id='brandInfo'>
        <h1>收货信息</h1>
        <h5>代理商新增地址</h5>
        <el-table :data="addressInfo" border>
          <el-table-column label="收货人姓名" prop="name"></el-table-column>
          <el-table-column label="电话" prop="phone"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
          <el-table-column label="备注" prop="notes"></el-table-column>
        </el-table>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default class agentDetail extends Vue{
    contactInfo:object[]=[
        {name:"zdp",phone:"12345667",notes:"新的联系人"},
        {name:"zdp",phone:"12345667",notes:"新的联系人"}
    ]
    addressInfo:object[]=[
        {name:'zdp',phone:'123456789',address:"上海市",notes:"hhh"},
        {name:'zdp',phone:'123456789',address:"上海市",notes:"hhh"},
        {name:'zdp',phone:'123456789',address:"上海市",notes:"hhh"}
    ]
}
</script>

<style lang="scss" scoped>
header {
  margin: 40px 0 40px;
  a {
    padding: 10px 20px;
    --border-color: rgba(206, 208, 218, 1);
    &:first-child {
      border: {
        top: 1px solid var(--border-color);
        left: 1px solid var(--border-color);
        bottom: 1px solid var(--border-color);
      }
    }
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
  }
}

section {
  div {
    line-height: 50px;
  }
}
</style>
