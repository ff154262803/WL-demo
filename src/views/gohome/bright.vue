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
        <el-table-column prop="themeImgUrl" label="链接"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small" @click="delectClick(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <el-dialog title="新增/修改" :visible.sync="dialogFormVisible">
      <el-form :model="form" ref="form" :rules="rules">
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
        <el-form-item label="活动链接" label-width="100px">
          <el-input v-model="form.themeImgUrl" style="width: 300px"></el-input>
        </el-form-item>
        <!-- <el-form-item label="缩略图" prop="themeImgUrl">
          <el-upload
            class="avatar-uploader"
            action="http://192.192.0.241:5005/api/resources/uploadResource"
            :headers="headers"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="form.imgUrl"
              :src="form.imgUrl"
              class="avatar"
            />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item> -->
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
      uploaddata: {
        type: "",
        uKey: JSON.parse(sessionStorage.getItem("user")).uKey,
      },
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        type: "4",
      },
      formLabelWidth: "120px",
      rules: {},
      headers: { Authorization: JSON.parse(sessionStorage.user).uKey },
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
    //新增
    beginshow(data) {
      this.dialogFormVisible = true;
    },
    //
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
          type: 4,
          parkId: sessionStorage.getItem("parkid"),
        };
        this.getTheme();
        this.dialogFormVisible = false;
      });
    },
    //修改
    handleClick(row) {
      this.form = row;
      this.dialogFormVisible = true;
        this.getTheme();

    },
    //图片上传
    beforeAvatarUpload(file) {
      const isJPG =
        !!~file.type.indexOf("jpeg") ||
        !!~file.type.indexOf("jpg") ||
        !!~file.type.indexOf("png");
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) this.$message.error("上传图片只能是 JPG/PNG/JPEG 格式!");
      if (!isLt2M) this.$message.error("上传图片大小不能超过 2MB!");
      console.log(file);
      return isJPG && isLt2M;
    },
    handleAvatarSuccess(val) {
      console.log(val);
      this.$set(this.form, "imgUrl", val.url);
      this.$refs.form.validate();
    },
    onsuccsess(response, file, fileList) {
      this.fullscreenLoading = false;
      if (response.resb == 200) {
        this.$set(this.form, "picurl", response.shortUrl);
      }
    },
    onerror() {
      this.fullscreenLoading = false;
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