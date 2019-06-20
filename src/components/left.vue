<template>
  <div>
    <el-menu router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>代理商列表</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/temAccount" >临时客户管理</el-menu-item>
          <el-menu-item index="/uncheckAgent">待审核代理商</el-menu-item>
          <el-menu-item index="/agentList">代理商列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template> 
