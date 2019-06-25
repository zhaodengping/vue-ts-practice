<template>
    <div class="input-more">
        <el-input v-model="valueMin" @change="changeValueMin"></el-input>--
        <el-input v-model="valueMax" @change="changeValueMax"></el-input>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Emit, Component } from 'vue-property-decorator';
@Component
export default class InputMore extends Vue{ 
    valueMin:number=0;
    valueMax:number=0;
    @Emit("changeValueMin")
    changeValueMin(flag:number):void{
    }
    @Emit("changeValueMax")
    changeValueMax(flag:number):void{
    }
}
</script>
<style lang="scss">
.input-more{
    margin-left: 1px;
    width: 90%;
    border: 1px solid #DCDFE6 {
        radius:4px;
    };
    .el-input{
        width: 45%;
        .el-input__inner{
            border: 0px solid #fff;
            line-height: 39px;
        }
    }
}
</style>
