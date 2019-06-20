
<template>
    <div>
        <el-select v-model="select">
          <el-option v-for="(item,index) in clientList" :key="index"></el-option>
        </el-select>
    </div>
</template>
<script lang="ts">
// 客户来源
import Vue from 'vue'
let clientList:number[]=["a","b","c"]
export default Vue.extend({
    data(){
        return{
            select:[]
        }
    }
})
</script>
