<template>
	<div class = "merchandise">
		<div>
			<i class = "el-icon-menu"></i>
			<span>商品信息</span>
		</div>
		<div class = "container">
			<div class = "tainer">
				<div class = "ta-item">
					<input class = "el-input__inner" type = "text" placeholder = "请输入姓名">
				</div>
				<div class = "ta-item">
					<el-button type="primary">查询</el-button>
				</div>
				<div class = "ta-item">
					<el-button type="primary">新增</el-button>
				</div>
			</div>
			<div class = "tainen">
				<el-table v-loading="loading" ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
    				<el-table-column type="selection" width="55"></el-table-column>
    				<el-table-column prop="date" sortable label="日期" width="120">
      					
    				</el-table-column>
    				<el-table-column prop="name" label="姓名" width="120"></el-table-column>
    				<el-table-column prop="sex" sortable label="年龄" width='88'></el-table-column>
    				<el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
    				<el-table-column label="操作" width='150'>
      					<template slot-scope="scope">
        					<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      					</template>
    				</el-table-column>
  				</el-table>
			</div>
			<div class = "taines" style = "position:relative">
				<el-button :disabled = "aaa" type="primary">批量删除</el-button>
				<div class="blocks" style = "position:absolute;top:14px;right:0">
    				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage3" :page-size="100" layout="prev, pager, next, jumper" :total="1000">
    				</el-pagination>
  				</div>
			</div>
		</div>
	</div>
</template>

<script>


export default{
	name : '',
	data () {
		return {
			tableData3: [
				{
					date: '2016-05-03',name: '王小虎',sex : '15',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-02',name: '王小虎',sex : '13',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-04',name: '王小虎',sex : '25',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-01',name: '王小虎',sex : '28',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-08',name: '王小虎',sex : '20',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-06',name: '王小虎',sex : '19',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-07',name: '王小虎',sex : '22',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-08',name: '王小虎',sex : '20',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-06',name: '王小虎',sex : '19',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-07',name: '王小虎',sex : '22',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-08',name: '王小虎',sex : '20',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-06',name: '王小虎',sex : '19',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-07',name: '王小虎',sex : '22',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-08',name: '王小虎',sex : '20',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-06',name: '王小虎',sex : '19',address: '上海市普陀区金沙江路 1518 弄'
        		},{
          			date: '2016-05-07',name: '王小虎',sex : '22',address: '上海市普陀区金沙江路 1518 弄'
        		}
        	],
        	multipleSelection: [],
        	loading: false,
        	aaa : true,
        	currentPage3 : 1
		}
	},
	watch : {
		multipleSelection () {
			if(this.multipleSelection.length){
				this.aaa = false
			}else{
				this.aaa = true
			}
		}
	},
	methods : {
		handleEdit(index, row) {
        	console.log(index, row);
      	},
      	handleDelete(index, row) {
        	console.log(index, row);
        	console.log(this.multipleSelection.length)
      	},
      	handleSelectionChange(val) {
        	this.multipleSelection = val;
        	console.log(val)
      	},
      	handleSizeChange(val) {
        	console.log(`每页 ${val} 条`);
      	},
      	handleCurrentChange(val) {
        	console.log(`当前页: ${val}`);
      	}
	}
}
</script>

<style scoped lang = "less">
.merchandise{
	.container{
		padding:15px;background:#fff;border:1px #ddd solid;border-radius:5px;
		.tainer,.taines{margin:10px 0;padding:10px;background:#f2f2f2;}
		.tainer{
			overflow:hidden;zoom:1;
			.ta-item{float:left;line-height:36px;}
			.ta-item:nth-child(2){margin:0 15px;}
		}
		.tainen{border:1px solid #dfe6ec;box-sizing:border-box;overflow:hidden;}
	}
}
</style>