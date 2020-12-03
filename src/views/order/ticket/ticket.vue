<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      style="width: 260px"
    ></el-input>
    <el-button icon="el-icon-search" class="btn"></el-button>
    <el-button class="addBtn" type="primary">添加购票须知</el-button>
    <el-button class="addBtn" type="primary" @click="addPl">添加票类</el-button>
    <!-- 添加/修改组件 -->
    <v-info :info="info"></v-info>
    <template>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="票面信息" width="200" align="center">
          <template slot-scope="scope">{{ scope.row.information }}</template>
        </el-table-column>
        <el-table-column
          prop="scope"
          label="开放时间"
          width="120"
          align="center"
        >
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="price" label="单价" align="center">
        </el-table-column>
        <el-table-column prop="discountsPrice" label="优惠单价" align="center">
        </el-table-column>
        <el-table-column prop="status" label="状态" align="center">
        </el-table-column>
        <el-table-column prop="issue" label="单日投放" align="center">
        </el-table-column>
        <el-table-column prop="openDay" label="开放购票天数" align="center">
        </el-table-column>
        <el-table-column prop="discountCoupon" label="优惠券" align="center">
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="detail(scope.row)"
              >详情</el-button
            >
            <el-button type="text" size="small" @click="Edit(scope.row)"
              >修改</el-button
            >
            <el-button type="text" size="small" @click="Del(scope.row.id)"
              >上架</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <!-- <el-col :span="24" class="toolbar">
        <div class="allControl">
          <el-button size="small">删除</el-button>
        </div>
        <el-pagination
          background
          layout="total,sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
          :page-sizes="[10, 15, 20, 30, 50]"
          :page-size="10"
          total="10"
        ></el-pagination>
        <el-button size="small">确定</el-button>
      </el-col> -->
    </template>
  </div>
</template>

<script>
import VInfo from "./vinfo";
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
        {
          date: "2016-05-03",
          information: "奇幻光影森林太阳幻境",
          price: "100元",
          discountsPrice: "80元",
          status: "上架",
          issue: "100/2000",
          openDay: "7",
          discountCoupon: "有",
        },
      ],
      multipleSelection: [],
      info: {
        isAdd: false,
        isShow: false,
      },
    };
  },
  components: {
    VInfo,
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange(val) {
      this.query.count = val;
      this.query.page = 1;
      this.queryElementList();
    },
    handleCurrentChange(val) {
      // 切换元页
      this.query.page = val;
      this.resLoading = true;
      this.queryElementList();
    },
    addPl() {
      this.info.isAdd = this.info.isShow = true;
    },
  },
};
</script>

<style scoped>
.addBtn {
  float: right;
}
.toolbar {
  display: flex;
  justify-content: flex-end;
  position: relative;
}
.allControl {
  position: absolute;
  left: 15px;
}
</style>
