<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>库存详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search">
      <el-form :model="searchForm">
        <el-row>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">品牌</div>
              </template>
              <brand @changeBrand="selectBrand"></brand>
            </el-form-item>
            <el-form-item>
              <template>
                <div class="font-color">库存数量</div>
              </template>
              <inputMore
                @changeValueMin="changeStorageNumMin"
                @changeValueMax="changeStorageNumMax"
              ></inputMore>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">系列</div>
              </template>
              <series @changeSeries="selectSeries"></series>
            </el-form-item>
            <el-form-item>
              <template>
                <div class="font-color">入库日期</div>
              </template>
              <el-date-picker
                v-model="searchForm.inStorageDates"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">库房</div>
              </template>
              <storage @changeStorage="selectStorage"></storage>
            </el-form-item>
            <el-form-item>
              <template>
                <div>&nbsp;</div>
              </template>
              <el-input v-model="searchForm.otherInfo" placeholder="请输入商品名称和编码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <template>
                <div class="font-color">库龄(天)</div>
              </template>
              <inputMore @changeValueMin="changeStorageMin" @changeValueMax="changeStorageMax"></inputMore>
            </el-form-item>
            <el-form-item>
              <template>
                <div>&nbsp;</div>
              </template>
              <el-button type="primary" plain @click="search">搜索</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <section>
      <header>库存统计</header>
      <div class="table-title">
        商品总数：
        <span>0</span> 成本总价(元)：
        <span>0.00元</span>
      </div>
      <el-table :data="storageTable" border>
        <el-table-column type="index" fixed></el-table-column>
        <el-table-column label="商品编码" prop="code"></el-table-column>
        <el-table-column label="商品名称" prop="name"></el-table-column>
        <el-table-column label="所属品牌" prop="brand"></el-table-column>
        <el-table-column label="所属系列" prop="series"></el-table-column>
        <el-table-column label="所属型号" prop="version"></el-table-column>
        <el-table-column label="参数名称" prop="param"></el-table-column>
        <el-table-column label="参数值" prop="paramValue"></el-table-column>
        <el-table-column label="所在库房" prop="storageName"></el-table-column>
        <el-table-column label="所在库区" prop="storageName"></el-table-column>
        <el-table-column label="库存数量" prop="storageNum"></el-table-column>
        <el-table-column label="库存单位" prop="storageUnit"></el-table-column>
        <el-table-column label="商品成本价（元）" prop="storageUnit"></el-table-column>
        <el-table-column label="入库日期" prop="inCost"></el-table-column>
        <el-table-column label="库龄（天）" prop="dates"></el-table-column>
      </el-table>
      <div class="page">
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import brand from "@/components/search/brand.vue";
import series from "@/components/search/series.vue";
import storage from "@/components/search/storage.vue";
import inputMore from "@/components/input/inputMore.vue";
import { Component } from "vue-property-decorator";
@Component({
  components: {
    brand,
    series,
    storage,
    inputMore
  }
})
export default class StorageDetail extends Vue {
  searchForm: object = {
    inStorageDates: "",
    otherInfo: ""
  };
  storageTable: object[] = [
    {
      code: "xs111",
      name: "阿里",
      brand: "阿里",
      series: "哈哈哈",
      version: "一级",
      param: "啦啦啦",
      paramValue: "好多",
      storageName: "一级",
      storageNum: 100,
      storageUnit: "件",
      inCost: 100,
      dates: "2019-01-02",
      dates: 12
    },
    {
      code: "xs111",
      name: "阿里",
      brand: "阿里",
      series: "哈哈哈",
      version: "一级",
      param: "啦啦啦",
      paramValue: "好多",
      storageName: "一级",
      storageNum: 100,
      storageUnit: "件",
      inCost: 100,
      dates: "2019-01-02",
      dates: 12
    }
  ];
  selectBrand(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      brand: e
    });
  }
  selectSeries(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      series: e
    });
  }
  selectStorage(e: string): void {
    this.searchForm = Object.assign({}, this.searchForm, {
      storage: e
    });
  }
  changeStorageMin(e: string): void {
    if (!this.searchForm.storageDates) {
      this.searchForm = Object.assign({}, this.searchForm, {
        storageDates: {
          min: e
        }
      });
    } else {
      this.searchForm.storageDates.max = e;
    }
  }
  changeStorageMax(e: string): void {
    if (!this.searchForm.storageDates) {
      this.searchForm = Object.assign({}, this.searchForm, {
        storageDates: {
          max: e
        }
      });
    } else {
      this.searchForm.storageDates.max = e;
    }
  }
  changeStorageNumMin(e: string): void {
    if (!this.searchForm.storageNum) {
      this.searchForm = Object.assign({}, this.searchForm, {
        storageNum: {
          min: e
        }
      });
    } else {
      this.searchForm.storageNum.min = e;
    }
  }
  changeStorageNumMax(e: string): void {
    if (!this.searchForm.storageNum) {
      this.searchForm = Object.assign({}, this.searchForm, {
        storageNumDates: {
          max: e
        }
      });
    } else {
      this.searchForm.storageNum.max = e;
    }
  }
  search(): void {
    console.log(this.searchForm);
  }
}
</script>
<style lang="scss" scoped>
.search {
  .el-input {
    width: 90%;
  }
}
section {
  header {
    font-size: 18px;
    color: #606266;
  }
  .table-title {
    margin: 30px 0;
    line-height: 30px;
    font-size: 14px;
    color: rgba(127, 143, 164, 1);
    span {
      font-size: 30px;
      color: var(--blue-color);
      font-weight: 600;
    }
  }
}
</style>
