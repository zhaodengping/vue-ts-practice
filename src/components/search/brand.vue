<template>
    <div>
        <el-select v-model="selectValue">
          <el-option v-for="(item,index) in brandList" :key="index" :value="item.value" :label="item.label"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
// 产品品牌
import Vue from 'vue'
export default class Brand extends Vue{
    selectValue:string="";
    brandList:object[]=[
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
    ]
}
</script>
