<template>
    <!-- 处理状态 -->
    <div>
        <el-select v-model="status" @change="changeStatus">
          <el-option v-for="(item,index) in statusList" :key="index" :value="item.value" :label="item.label"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import {Component,Emit} from 'vue-property-decorator';
@Component
export default class HandleStatus extends Vue{
    statusList:object[]=[{
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
        },{
          value: '选项5',
          label: '北京烤鸭'
        }];
    status:string="";

    @Emit("changeStatusData")
    changeStatus(val:string):void{
        this.status=val
    }
}
</script>
