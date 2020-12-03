<template>
  <div class="">
    <el-dialog
      :title="info.isAdd ? '添加票类' : '修改'"
      :visible.sync="info.isShow"
      width="40%"
    >
      <!-- 表单 -->
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="票面名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="优惠单价">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="单日投放量">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="优惠赠券">
          <el-select v-model="form.region" placeholder="请选择优惠赠券">
            <el-option label="优惠赠券一" value="shanghai"></el-option>
            <el-option label="优惠赠券二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <template>
            <el-radio v-model="radio" label="1">上架</el-radio>
            <el-radio v-model="radio" label="2">下架</el-radio>
          </template>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {
          isAdd: true,
          isShow: false,
        };
      },
    },
  },
  data() {
    return {
      forminfo: {},
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      radio: "1",
    };
  },
  components: {},
  methods: {
    submit() {
      this.info.isShow = false;
    },
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped></style>
