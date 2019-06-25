<template>
  <div class="navigate">
    <el-menu router unique-opened>
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont iconhome"></i>
          <span>代理商列表</span>
        </template>
        <el-menu-item index="/temAccount">临时客户管理</el-menu-item>
        <el-menu-item index="/uncheckAgent">待审核代理商</el-menu-item>
        <el-menu-item index="/agentList">代理商列表</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont iconchanpin"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/record">产品档案</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont iconkucun"></i>
          <span>库存管理</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont iconchanpin"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont icondianpu"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <i class="iconfont icondingdan"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>

      <el-submenu index="7">
        <template slot="title">
          <i class="iconfont iconpingzhengzhongxin"></i>
          <span>账款管理</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>

      <el-submenu index="8">
        <template slot="title">
          <i class="iconfont iconicon--"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item index="/storageDetail">库存详情</el-menu-item>
        <el-menu-item index="/priceManage">价格管理</el-menu-item>
        <el-menu-item index="/outManage">出库管理</el-menu-item>
        <el-menu-item index="/inManage">入库管理</el-menu-item>
        <el-menu-item index="/checkNumber">库存盘点</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style lang="scss" scoped>
.el-menu {
  height: calc(100vh - 70px);
}
</style>
<style lang='scss'>
.navigate {
  .el-menu {
    background-color: #273142;
    .el-submenu__title {
      color: var(--theme-color);
      i {
        margin-right: 10px;
      }
      &:hover {
        background-color: #273142;
      }
    }
    .el-submenu {
      .el-menu-item {
        color: var(--theme-color);
      }
    }
  }
}
</style>
