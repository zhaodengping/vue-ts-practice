<template>
    <div>
        <el-select v-model="selectValue" @change="select">
          <el-option v-for="(item,index) in brandList" :key="index" :value="item.value" :label="item.label"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
// 产品品牌
import Vue from 'vue'
import { Emit, Component } from 'vue-property-decorator';
@Component
export default class Brand extends Vue{
    selectValue:string=""
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
    ];
    @Emit("changeBrand")
    select(e:string):void{
      this.selectValue=e
    }
}
</script>
