<template>
  <div class="pageMonitor">
    <div>
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="titleCard">授权状态</span>
              </div>

              <div class="content-GRID">
                <p>
                  序列号：
                  <b>da2e111728af9fe73b307f3b0509c5e3</b>
                </p>
                <p>
                  授权性质：
                  <b>正式</b>
                </p>
                <p>
                  设备管理数限制：
                  <b>200</b>
                </p>
                <p>
                  已用资源数：
                  <b>4</b>
                </p>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="15">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="titleCard">系统状态</span>
              </div>
              <div class="content-GRID">
                <p>
                  当前时间：
                  <b>2019-12-20 08:17:18</b>
                </p>
                <p>
                  系统在线时间：：
                  <b>27天5时44分55秒</b>
                </p>
                <p>
                  审计服务状态：
                  <b>服务正常</b>
                </p>
                <p>
                  内存：
                  <el-progress :percentage="67" status="success"></el-progress>
                </p>
                <p>
                  CPU：
                  <el-progress :percentage="40" status="warning"></el-progress>
                </p>
                <p>
                  系统磁盘：
                  <el-progress :percentage="20" status="exception"></el-progress>
                </p>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="mt10">
      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="11">
          <div class="grid-content bg-purple">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="titleCard">用户统计构成</span>
              </div>

              <div class="content-GRID">
                <div id="myChart" :style="{height: '240px'}"></div>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="titleCard">活跃用户TOP5</span>
              </div>
              <div class="content-GRID">
                <div id="myChartTop" :style="{height: '240px'}"></div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.getTopUser();
    this.getTop5();
  },
  methods: {
    getTopUser: function(index) {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          x: "left",
          data: ["管理员", "运维操作员", "其他"]
        },
        series: [
          {
            name: "用户构成",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: function(data) {
                  // 设置圆饼图中间文字排版
                  return data.value + "\n" + "用户数";
                }
              },
              emphasis: {
                show: true, //文字至于中间时，这里需为true
                textStyle: {
                  //设置文字样式
                  fontSize: "12",
                  color: "#333"
                }
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              },
              normal: {
                color: function(params) {
                  //自定义颜色
                  var colorList = ["#00c2c1", "#E67E22", "#E74C3C"];
                  return colorList[params.dataIndex];
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 10, name: "管理员" },
              { value: 5, name: "运维操作员" },
              { value: 2, name: "其他" }
            ]
          }
        ]
      };
      myChart.setOption(option);
    },
    getTop5: function(index) {
      let myChart = this.$echarts.init(document.getElementById("myChartTop"));
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        areaStyle: {
          normal: {
            color: "#E67E22" //改变区域颜色
          }
        },
        grid:{
              x:40,
              y:45,
              x2:10,
              y2:40,
              borderWidth:1
              },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            itemStyle: {
              normal: {
                color: "#8cd5c2", //改变折线点的颜色
                lineStyle: {
                  color: "#E67E22" //改变折线颜色
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped  lang="less">
.box-card {
  height: 300px;
  overflow: hidden;
  .titleCard{
    border-left:3px #1abdbd solid;
    padding-left:5px
  }
}
.content-GRID {
  p {
    font-size: 12px;
    color: #80848f;
    margin-bottom: 10px;
  }
}
</style>