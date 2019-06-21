
<template>
    <div>
        <el-select v-model="select" @change="changeSource">
          <el-option v-for="(item,index) in clientList" :key="index" :value="item.value" :label="item.label"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
// 客户来源
import Vue from 'vue'
import {Component,Prop,Model,Emit} from 'vue-property-decorator';
@Component 
export default class ClientSource extends Vue{
    private clientList:object[]=[
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
    private select:string=""
    @Emit("changeSourceData")
    changeSource(e:string):void{
        this.select=e
    }
}
</script>
