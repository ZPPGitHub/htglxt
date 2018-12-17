<template>
	<div class = "Home">
		<div class = "earnings">
			<ul class = "ear-ts">
				<li class = "el-col">
					<div class = "el-card">
						<i class = "icon-god el-icon-goods"></i>
						<div class = "accumulated">
							<p>本月销售数量</p>
							<p>533<span>套</span></p>
						</div>
					</div>
				</li>
				<li class = "el-col">
					<div class = "el-card">
						<i class = "icon-god el-icon-sold-out"></i>
						<div class = "accumulated">
							<p>本月销售金额</p>
							<p>&yen;100,000<span>元</span></p>
						</div>
					</div>
				</li>
				<li class = "el-col">
					<div class = "el-card">
						<i class = "icon-god el-icon-document"></i>
						<div class = "accumulated">
							<p>本月浏览数量</p>
							<p>&yen;35,835,923<span>次</span></p>
						</div>
					</div>
				</li>
				<li class = "el-col">
					<div class = "grand">
						<ul>
							<li>
								<i></i>
								<span>累计销售数量</span>
								<span>35,923</span>
								<span>套</span>
							</li>
							<li>
								<i></i>
								<span>累计销售金额</span>
								<span>&yen;135,923</span>
								<span>元</span>
							</li>
							<li>
								<i></i>
								<span>累计浏览数量</span>
								<span>835,923</span>
								<span>次</span>
							</li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
		<div class = "statistics">
			<div class = "tistics">
				<div class = "chars-bar">
					<p class = "received">订单统计</p>
					<ul class = "reced">
						<li @click = "tableclick(index)" :class = "{'time' : tables === index}" v-for = "(ite,index) in tles">{{ ite }}</li>
					</ul>
					<ul>
						<li v-show = "tables === 0">
							<div ref = "week" style = "width:550px;height:220px;margin:15px 15px"></div>
						</li>
						<li v-show = "tables === 1">
							<div ref = "month" style = "width:550px;height:220px;margin:15px 15px"></div>
						</li>
						<li v-show = "tables === 2">
							<div ref = "year" style = "width:550px;height:220px;margin:15px 15px"></div>
						</li>
					</ul>
				</div>
				<div class = "await">
					<div class = "await-head">
						<span>待办事项</span>
						<span @click="sible">添加</span>
					</div>
					<div class = "await-body">
						<ul>
							<li v-for = "(boxs,index) in checkboxs">
								<div>
									<el-checkbox><p>{{ boxs }}</p></el-checkbox>
								</div>
								<div>
									<i @click="icedit(boxs,index)" class = "el-icon-edit"></i>
									<i @click="iedits(boxs,index)" class = "el-icon-delete"></i>
								</div>
							</li>
						</ul>
					</div>
					<el-dialog title="编辑" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
  						<div style = "display:flex">
  							<label style = "width:80px;text-align:right;padding:11px 12px 11px 0" for = "awaites">新增事项</label>
  							<div style = "line-height:36px;width:100%" id = "awaites">
  								<input style = "width:85%;border-radius:4px;border:1px solid #bfcbd9;display:block;height:36px;outline:0;padding:3px 10px" type = "text" placeholder = "请输入待办事项" v-model = "Visible">
  							</div>
  						</div>
  						<span slot="footer" class="dialog-footer">
    						<el-button @click="dialogVisible = false">取 消</el-button>
    						<el-button type="primary" @click="dialoges">确 定</el-button>
  						</span>
					</el-dialog>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
let echarts = require('echarts/lib/echarts')		//引入基本模板
require('echarts/lib/chart/line')					//引入条形图组件
require('echarts/lib/component/tooltip')			//引入提示框
require('echarts/lib/component/title')				//引入title组件

export default {
	name : 'Home',
	data () {
		return {
			tables : 0,
			tles : ['本周','本月','本年'],
			checkboxs : ['我是第一行','我是第二行','我是第三行','我是第四行'],
			dialogVisible: false,
			logsible : '',
			Visible : ''
		}
	},
	mounted (){
		this.echweek(),
		this.echmonth(),
		this.echyear()
	},
	methods : {
		tableclick (es) {
			this.tables = es
		},
		echweek () {
			let myChart = echarts.init(this.$refs.week)			//初始化Echarts实例
			myChart.setOption({
				title : {
					text : '本周订单统计',		//控制图的标题名
					left : 'center',			//控制图的位置
					textStyle : {
						color:'#409eff'			//控制图的标题颜色
					}
				},
				tooltip : {						//提示框组件
					trigger : 'axis',			//触发类型('item'散点图和饼图  'axis'柱状和折线图 'none')
					axisPointer : {				//坐标轴的指示器
						type : 'cross'			//指示器类型 ('line'直线指示'shadow'阴影'cross'十字准星'none')
					}
				},	
				toolbox : {						//	工具栏
					feature : {				//各工具配置项
						dataView : {			//可以展现当前图表所用的数据
							show : true,
							readOnly : false	//是否不可编辑
						}
					}
				},
				xAxis : {					//控制图的X轴的内容
					data : ['星期一','星期二','星期三','星期四','星期五','星期六','星期天']
				},
				yAxis : {					//控制图的Y轴的内容
					type : 'value',			//value指的是series里面的data值
					axisLabel : {
						formatter : '{value}件'		//表示给Y轴的值单位
					}
				},
				series : [{
					name : '销量',					//悬浮框了里面的内容名
					type : 'line',					//图类型(折线图‘line’ 柱状图是‘bar’ 饼图是‘’)
					data : [5,20,36,10,30,60,50]	//数据
				}]
			});
		},
		echmonth () {
			let myChart = echarts.init(this.$refs.month)			//初始化Echarts实例
			myChart.setOption({
				title : {
					text : '本月订单统计',		//控制图的标题名
					left : 'center',			//控制图的位置
					textStyle : {
						color:'#409eff'			//控制图的标题颜色
					}
				},
				tooltip : {						//提示框组件
					trigger : 'axis',			//触发类型('item'散点图和饼图  'axis'柱状和折线图 'none')
					axisPointer : {				//坐标轴的指示器
						type : 'cross'			//指示器类型 ('line'直线指示'shadow'阴影'cross'十字准星'none')
					}
				},	
				toolbox : {						//	工具栏
					feature : {				//各工具配置项
						dataView : {			//可以展现当前图表所用的数据
							show : true,
							readOnly : false	//是否不可编辑
						}
					}
				},
				xAxis : {					//控制图的X轴的内容
					data : ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30']
				},
				yAxis : {					//控制图的Y轴的内容
					type : 'value',			//value指的是series里面的data值
					axisLabel : {
						formatter : '{value}件'		//表示给Y轴的值单位
					}
				},
				series : [{
					name : '销量',					//悬浮框了里面的内容名
					type : 'line',					//图类型(折线图‘line’ 柱状图是‘bar’ 饼图是‘’)
					data : [15,21,36,18,33,65,55,85,21,36,17,39,67,54,33,65,55,85,21,36,18,17,39,67,54,33,65,55,85,21]	//数据
				}]
			});
		},
		echyear () {
			let myChart = echarts.init(this.$refs.year)			//初始化Echarts实例
			myChart.setOption({
				title : {
					text : '本年订单统计',		//控制图的标题名
					left : 'center',			//控制图的位置
					textStyle : {
						color:'#409eff'			//控制图的标题颜色
					}
				},
				tooltip : {						//提示框组件
					trigger : 'axis',			//触发类型('item'散点图和饼图  'axis'柱状和折线图 'none')
					axisPointer : {				//坐标轴的指示器
						type : 'cross'			//指示器类型 ('line'直线指示'shadow'阴影'cross'十字准星'none')
					}
				},	
				toolbox : {						//	工具栏
					feature : {				//各工具配置项
						dataView : {			//可以展现当前图表所用的数据
							show : true,
							readOnly : false	//是否不可编辑
						}
					}
				},
				xAxis : {					//控制图的X轴的内容
					data : ['01月','02月','03月','04月','05月','06月','07月','08月','09月','10月','11月','12月']
				},
				yAxis : {					//控制图的Y轴的内容
					type : 'value',			//value指的是series里面的data值
					axisLabel : {
						formatter : '{value}件'		//表示给Y轴的值单位
					}
				},
				series : [{
					name : '销量',					//悬浮框了里面的内容名
					type : 'line',					//图类型(折线图‘line’ 柱状图是‘bar’ 饼图是‘’)
					data : ['390','330','406','520','479','462','493','521','533','610','820','401']	//数据
				}]
			});
		},
		handleClose(done) {
        	this.$confirm('确认关闭？')
      		.then(_ => {
        		done();
      		})
      		.catch(_ => {
      		});
      	},
      	dialoges () {
      		this.dialogVisible = false
      		console.log(this.Visible)
      		if(this.logsible === ''){
      			this.checkboxs.push(this.Visible)
      		}else{
      			this.checkboxs.splice(this.logsible,1,this.Visible)
      		}
      	},
      	sible () {
      		this.Visible = ''
      		this.dialogVisible = true
      	},
      	icedit (bos,num) {
      		this.Visible = ''
      		this.dialogVisible = true
      		this.logsible = num
      		this.Visible = bos
      		console.log(this.checkboxs)
      	},
      	iedits (bos,num) {
      		this.checkboxs.splice(num,1)
      	}
	}
}
</script>

<style scoped lang = "less">
@bottom:10px;
.Home{
	.earnings{
		margin-bottom:@bottom;
		.ear-ts{
			display:flex;
			.el-col{
				width:24%;padding-left:6px;padding-right:6px;font-family:Arial;
				.el-card{
					height:100px;display:flex;align-items:center;
					.icon-god{width:70px;height:70px;margin:0 10px;font-size:40px;text-align:center;line-height:70px;color:#fff;border-radius:35px;}
					.accumulated{
						flex:1;font-size:13px;text-align:center;
						p:nth-child(1){letter-spacing:3px;};
						p:nth-child(2){
							bottom:5px;height:40px;line-height:40px;font-size:25px;
							span{margin-left:6px;font-size:17px;}
						};
					}
				}
				.grand{
					height:100px;background:#fff;
					li{
					 	padding:6px 5px;
						i{
							display:inline-block;width:8px;height:8px;border-radius:4px;margin:0 10px;
						}
						span:nth-child(2){margin-right:20px;};
						span:nth-child(3){font-size:18px;};
					}
				}
			}
			.el-col:nth-child(1) .el-card i,.grand li:nth-child(1) i{background:#409EFF;}
			.el-col:nth-child(2) .el-card i,.grand li:nth-child(2) i{background:#67C23A;}
			.el-col:nth-child(3) .el-card i,.grand li:nth-child(3) i{background:#E6A23C;}
		}
	}
	.statistics{
		margin-bottom:@bottom;
		.tistics{
			position:relative;display:flex;justify-content:center;
			.chars-bar,.await{width:49%;background:#fff;margin:5px;}
			.chars-bar
				.received{text-indent:15px;padding-top:8px;font-size:15px;font-weight:bold;}
				.reced{
					display:flex;justify-content:center;align-items:center;
					li{margin:0 8px;cursor:pointer;}
					.time{color:#409eff;}
			}
			.await{
				.await-head{
					padding:18px 20px;position:relative;border-bottom:1px #ebeef5 solid;
					span:first-of-type{font-size:15px;font-weight:bold;};
					span:last-of-type{position:absolute;right:25px;cursor:pointer;color:#409eff;}
				}
				.await-body{
					padding:10px;overflow:hidden;position:relative;
					ul{
						height:222px;
						li{
							display:flex;
							div{border-bottom:1px #ebeef5 solid;transition:background-color .25s ease;padding:8px 0;}
							div:first-of-type{width:92%;}
							div:last-of-type i{margin:2px;cursor:pointer;}
						}
						li:hover{background:#f6faff;}
					}
				}
			}
		}
	}
}

</style>