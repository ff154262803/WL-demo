<template>
  <div>
    <div class="filter">
      <el-button class="addBtn" type="primary" @click="beginshow()"
        >添加</el-button
      >
    </div>
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="themeName" label="名称"> </el-table-column>
        <el-table-column prop="summary" label="展园简介"> </el-table-column>
        <el-table-column prop="schedule" label="开放时间"> </el-table-column>
        <el-table-column prop="themeImgUrl" label="链接"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button
              type="text"
              size="small"
              @click="delectClick(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-dialog title="新增" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" label-width="100px">
          <el-input v-model="form.themeName" style="width: 300px"></el-input>
        </el-form-item>

        <el-form-item label="活动简介" label-width="100px">
          <el-input
            v-model="form.summary"
            style="width: 300px"
            maxlength="10"
            show-word-limit
          ></el-input>
        </el-form-item>
        <el-form-item label="开放时间" label-width="100px">
          <el-input v-model="form.schedule" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="链接" label-width="100px">
          <el-input v-model="form.themeImgUrl" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrModifyTheme">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "bright",
  data() {
    return {
      tableData: [{}, {}],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        type: "3",
      },
      formLabelWidth: "120px",
    };
  },
  mounted() {
    this.form.parkId = sessionStorage.getItem("parkid");
    this.getTheme();
  },
  methods: {
    //删除
    delectClick(id) {
      this.$ajax.deleteTheme({ id: id }, (res) => {
        this.getTheme();
      });
    },
    //查询
    getTheme() {
      this.$ajax.getTheme(this.form, (res) => {
        console.log(res);
        this.tableData = res.data;
      });
    },
    //新增确定
    addOrModifyTheme() {
      this.$ajax.addOrModifyTheme(this.form, (res) => {
        this.$message({
          type: "success",
          message: "提交成功!",
        });
        this.form = {
          type: "3",
          parkId: sessionStorage.getItem("parkid"),
        };
        this.getTheme();
        this.dialogFormVisible = false;
      });
    },
    //新增
    beginshow(data) {
      this.dialogFormVisible = true;
    },
    //修改
    handleClick(row) {
      this.form = row;
      this.getTheme();

      this.dialogFormVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  position: relative;
  height: 50px;
}
.addBtn {
  float: right;
  margin-right: 100px;
}
</style>