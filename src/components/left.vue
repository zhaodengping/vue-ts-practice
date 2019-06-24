<template>
  <div class="navigate">
    <el-menu router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>代理商列表</span>
        </template>
        <el-menu-item index="/temAccount">临时客户管理</el-menu-item>
        <el-menu-item index="/uncheckAgent">待审核代理商</el-menu-item>
        <el-menu-item index="/agentList">代理商列表</el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/record">产品档案</el-menu-item>
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
      &:hover {
        background-color: #273142;
      }
    };
    .el-submenu {
      .el-menu-item{
        color: var(--theme-color); 
      }
    }
  }
}
</style>
