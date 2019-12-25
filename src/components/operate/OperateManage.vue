<template>
  <div>
    <div class="FLEX_CONTENT mb10">
      <div>
        <el-link icon="el-icon-s-tools" class="mr10">编辑</el-link>
        <el-link>
          添加
          <i class="el-icon-circle-plus el-icon--right"></i>
        </el-link>
      </div>
      <div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline formSXF_search">
          <el-form-item label="申请人">
            <el-input v-model="formInline.user" placeholder="审批人" size="mini"></el-input>
          </el-form-item>
          <el-form-item label="所属部门">
            <el-select v-model="formInline.region" placeholder="活动区域" size="mini">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="mini">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <el-table class="eTable" :data="tableData" max-height="440">
      <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="date" label="流程号" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="申请时间" width="120" align="center"></el-table-column>
      <el-table-column prop="address" label="申请类型" align="center"></el-table-column>
      <el-table-column prop="name" label="申请时间" align="center"></el-table-column>

      <el-table-column prop="address" label="申请类型" align="center"></el-table-column>
      <el-table-column prop="name" label="申请时间" align="center"></el-table-column>
    </el-table>
    <div class="block text-right mt15">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="3"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next"
        :total="42"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<style>
</style>