<template>
	<div class = "Home">
		<header>
			<div class = "Collapsebtn" @click = "Collapse">
				<i class = "el-icon-menu"></i>
			</div>
			<div class = "logo">后台管理系统</div>
			<div class = "header-right">
				<div title = "您有条${ iconmessage }消息未处理" class = "unmessage">
					<a href = "">
						<i class = "el-icon-message"></i>
						<span>{{ iconmessage }}</span>
					</a>
				</div>
				<div title = "点击查看帮助" class = "help">
					<a href = ""><i class = "el-icon-question"></i></a>
				</div>
				<div title = "系统设置" class = "system">
					<a href = ""><i class = "el-icon-setting"></i></a>
				</div>
				<div class = "user-name" @mouseover = "users" @mouseout = "userse">
					<img width = "40px" height = "40px" src = "/../static/5a28ba185fe96.jpg">
					<div class = "names">
						<span>赵丽颖</span>
						<i class = "el-icon-caret-bottom"></i>
						<div class = "dropdown" v-if = "usernames">
							<ul>
								<li><a href = "">我是第一个</a></li>
								<li><a href = "">我是第二个</a></li>
								<li><a href = "">退出登录</a></li>
							</ul>
							<span></span>
						</div>
					</div>
				</div>
			</div>
		</header>
		<aside>
			<el-menu default-active="1-4-1" :class="[elMenu,{'vertical':!isCollapse}]" @open="handleOpen" @close="handleClose" :collapse="isCollapse" style = "transition:.3s;background:#eef1f6">
			  	<router-link exact :to = "{name : 'Home'}">
				  	<el-menu-item index="1">
					    <i class="el-icon-star-on"></i>
					    <span slot="title">系统首页</span>
				  	</el-menu-item>
				</router-link>
				<router-link :to = "{name : 'commodity'}">
				  	<el-menu-item index="2">
					    <i class="el-icon-menu"></i>
					    <span slot="title">商品信息</span>
				  	</el-menu-item>
				</router-link>
			  	<el-submenu index="3">
			    	<template slot="title">
			      		<i class="el-icon-document"></i>
			      		<span slot="title">客户信息</span>
			    	</template>
			    	<el-menu-item-group>
			      		<el-menu-item index="3-1">选项1</el-menu-item>
			      		<el-menu-item index="3-2">选项2</el-menu-item>
			    	</el-menu-item-group>
			  	</el-submenu>
			  	<el-submenu index="4">
			    	<template slot="title">
			      		<i class="el-icon-picture"></i>
			      		<span slot="title">统计数据</span>
			    	</template>
			    	<el-menu-item-group>
			      		<el-menu-item index="4-1">选项1</el-menu-item>
			      		<el-menu-item index="4-2">选项2</el-menu-item>
			    	</el-menu-item-group>
			  	</el-submenu>
			  	<el-submenu index="5">
			    	<template slot="title">
			      		<i class="el-icon-bell"></i>
			      		<span slot="title">消息管理</span>
			    	</template>
			    	<el-menu-item-group>
			      		<el-menu-item index="5-1">选项1</el-menu-item>
			      		<el-menu-item index="5-2">选项2</el-menu-item>
			    	</el-menu-item-group>
			  	</el-submenu>
			  	<el-menu-item index="6">
			    	<i class="el-icon-more"></i>
			    	<span slot="title">系统设置</span>
			  	</el-menu-item>
			</el-menu>
		</aside>
		<section :class = "{'contents' : isCollapse}">
			<nav>
				<ul>
					<li v-for = "(paths,index) in PathName">
						<router-link exact :to = "{name : paths.pathed}">
							{{ paths.names }}
							<span class = "el-icon-close" @click = "close(index)"></span>
						</router-link>
					</li>
				</ul>
			</nav>
			<div class = "content">
				<router-view></router-view>
			</div>
		</section>
	</div>
</template>

<script>

export default {
	name : "HomePage",
	data () {
		return {
			elMenu : 'el-menu-vertical-demo',
			iconmessage : '6',
			usernames : false,
			isCollapse: true,
			isActive : 0,
			PathName : [
				{pathed : 'Home',names : '系统首页'},
				{pathed : 'commodity',names : '商品信息'},
				{pathed : 'Home',names : '商品信息'},
				{pathed : 'commodity',names : '商品信息'},
				{pathed : 'Home',names : '商品信息'},
				{pathed : 'commodity',names : '商品信息'},
				{pathed : 'Home',names : '商品信息'}
			]
		}
	},
	methods: {
		users () {
			this.usernames = true
		},
		userse () {
			this.usernames = false
		},
		Collapse () {
			this.isCollapse = !this.isCollapse
		},
		close (num) {
			this.PathName.splice(num,1)
			if(num < this.PathName.length && num > 0 || num === 0 && this.PathName.length >= 1){
				console.log(this.PathName[num].pathed)
				console.log('拿后面')
			}
			if(num === this.PathName.length && num !== 0){
				console.log(this.PathName[num-1].pathed)
				console.log('拿前面')
			}
			if(num === 0 && this.PathName.length < 1){
				console.log('Home')
				console.log('拿主页')
			}
			console.log(num)
		},
      	handleOpen(key, keyPath) {
        	console.log(key, keyPath);
      	},
      	handleClose(key, keyPath) {
        	console.log(key, keyPath);
      	}
    }
}
</script>

<style lang = "less" scoped>
header{
	position:relative;box-sizing:border-box;width:100%;height:60px;color:#fff;background:#20a0ff;
	.Collapsebtn{float:left;padding:0 20px;cursor:pointer;line-height:60px;font-size:22px;}
	.logo{float:left;width:250px;line-height:60px;font-size:22px;}
	.header-right{
		float:right;height:60px;padding-right:50px;display:flex;align-items:center;font-size:22px;
		.unmessage,.help,.system{
			position:relative;width:30px;height:30px;text-align:center;border-radius:15px;cursor:pointer;margin:0 6px;
			a{color:#fff;}
		}
		.unmessage span{position:absolute;display:inline-block;font-size:12px;line-height:18px;padding:0 6px;text-align:center;white-space:nowrap;border:1px #fff solid;border-radius:10px;background:#f56c6c;top:-10px;left:15px;}
		.user-name{
			margin-left:20px;display:flex;cursor:pointer;
			img{display:block;border-radius:50%;}
			.names{
				margin-left:10px;position:relative;font-size:14px;
				span,i{vertical-align:-8px;}
				.dropdown{
					position:absolute;top:35px;left:-40px;background:#fff;padding:6px 0;margin-top:12px;margin:5px 0;border-radius:4px;border:1px #ebeef5 solid;box-shadow:0 2px 12px 0 rgba(0,0,0,.1);z-index:1000;
					li{line-height:27px;padding:0 15px;font-size:13px;text-align:center;}
					li:last-of-type{margin-top:4px;border-top:1px #ebeef5 solid;}
					span{display:block;position:absolute;width:0;height:0;border-color:transparent;border-style:solid;border-width:6px;top:-6px;margin-right:3px;border-top-width:0;border-bottom-color:#ebeef5;left:60%;}
					li:hover{
						background:#ecf5ff;
						a{color:#66b1ff;}
					}
				}
			}
		}
	}
}
aside{
	position:absolute;left:0;top:60px;bottom:0;overflow-y:scroll;
	.el-menu-vertical-demo{height:100%;}
	.vertical{width:200px;transition:0s !important;}
	.el-menu-vertical-demo,.el-menu-item,.el-submenu,.el-menu-item-group{background:#eef1f6;}
}
aside::-webkit-scrollbar {display: none;}
.Home .contents{left:65px}
section{
	position:absolute;left:200px;right:0;top:60px;bottom:0;padding-bottom:30px;transition:left .3s ease-in-out;background:#f0f0f0;
	nav{
		position:relative;height:35px;line-height:35px;overflow:hidden;background:#fafafa;box-shadow:0 5px 10px #ddd;border-bottom:2px #409EFF solid;
		ul{
			box-sizing:border-box;width:100%;height:100%;
			li{float:left;
				a{display:block;font-size:12px;padding:0 15px;padding-right:8px;}
			}
			.Active{background:#409EFF;color:#fff;}
		}
	}
	.content{
		width:auto;height:100%;overflow-y:scroll;padding:10px;box-sizing:border-box;
		
	}
}
.el-menu-item:focus, .el-menu-item:hover,.el-submenu__title:hover{background:#d1dbe5}
.el-radio-group{float:left;padding:0 21px;cursor:pointer;line-height:70px;font-size:22px;}
</style>