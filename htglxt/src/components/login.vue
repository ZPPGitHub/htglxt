<template>
	<div class = "login-warp">
		<div class = "login">
			<h2>后台管理系统登录</h2>
			<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
				<el-form-item prop="usename">
					<label for = "name">
						<div class = "input-group">
							<i class = "iconfont">&#xe623;</i>
						</div>
					</label>
					<el-input id = "name" type="text" v-model="ruleForm2.usename" autocomplete="off" placeholder = "请输入邮箱/用户名/已验证的手机"></el-input>
				</el-form-item>
				<el-form-item prop="Password">
					<label for = "password">
						<div class = "input-group">
							<i class = "iconfont">&#xe605;</i>
						</div>
					</label>
					<el-input type="password" id="password" v-model="ruleForm2.Password" autocomplete="off"  placeholder = "请输入密码"></el-input>
				</el-form-item>
				<el-form-item prop="code" class = "codese">
					<label for = "codes">
						<div class = "input-group">
							<i class = "iconfont">&#xe604;</i>
						</div>
					</label>
					<el-input type="text" id = "codes" v-model.number="ruleForm2.code"  placeholder = "请输入验证码"></el-input>
					<div @click = "createCode" class = "keycodes">{{ ruleForm2.keycodes }}</div>
				</el-form-item>
				<el-form-item class = "buttons">
					<el-button type="primary" :plain="true" @click="submitForm('ruleForm2')">登录</el-button>
					<el-button @click="resetForm('ruleForm2')">重置</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import qs from "qs"

export default {
	name : 'login',
	data () {
		var username = (rule, value, callback) => {
			const re = /^[a-zA-Z]\w{3,15}$/;		//用户名登陆验证
	    	const reg = /^1\d{10}$/;				//手机号登陆验证
	    	const regs = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;		//邮箱登陆验证
        	if (!value) {
          		return callback(new Error('用户名不能为空'));
        	};
        	setTimeout(() => {
          		if (re.test(value)||reg.test(value)||regs.test(value)) {
            		callback();
          		} else {
            		callback(new Error('请输入正确的用户名'))
          		}
        	}, 1000);
      	};
      	var password = (rule, value, callback) => {
      		const rge = /^[A-Z][A-z0-9]*$/;
        	if (value === '') {
          		callback(new Error('请输入密码'));
        	};
        	setTimeout(() => {
          		if (rge.test(value)) {
            		callback();
          		} else {
            		callback(new Error('密码首字母必须大写'))
          		}
        	}, 1000);
      	};
      	var keycode = (rule, value, callback) => {
        	if (value === '') {
          		callback(new Error('请输入验证码'));
        	};
        	setTimeout(() => { 
	        	if (value !== this.ruleForm2.keycodes) {
	          		callback(new Error('验证码错误'));
	          		this.createCode()
	        	} else {
	          		callback();
	        	}
	        },1000);
      	};
      	return {
        	ruleForm2: {
          		usename: '',
          		Password: '',
          		code: '',
          		keycodes : ''
        	},
        	rules2: {
	          usename: [
	            { validator: username, trigger: 'blur' }
	          ],
	          Password: [
	            { validator: password, trigger: 'blur' }
	          ],
	          code: [
	            { validator: keycode, trigger: 'blur' }
	          ]
        	}
      	}
	},
	created () {
		this.createCode()
	},
	methods: {
      	submitForm(formName) {
        	this.$refs[formName].validate((valid) => {
          		if (valid) {
          			this.$http.post('http://localhost:3000/username',qs.stringify({
          				username : this.ruleForm2.usename,
          				password : this.ruleForm2.Password
          			}))
          			.then(function(reponse){
          				console.log('后端已接受到数据')
          			})
          			.catch(function(error){
          				console.log(error)
          			})
            		/*this.$message({
         				message: '登录成功，正在跳转',
          				type: 'success'
        			});*/
          		} else {
            		//this.$message.error('用户名或密码错误');
            		return false;
          		}
        	});
      	},
      	resetForm(formName) {
        	this.$refs[formName].resetFields();
      	},
      	createCode () {				//生成验证码
      		var code = "";
      		var codeLength = 4;//验证码的长度
      		var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
      		for(var i = 0; i < codeLength; i++) {
      			var index = Math.floor(Math.random()*36);//取得随机数的索引(0~35)
      			code += random[index];//根据索引取得随机数加到code上
      		}
      		this.ruleForm2.keycodes = code;//把code值赋给验证码
      	}
    }
}
</script>


<style scoped lang="less">
@width:100%;
.login-warp{
	position:relative;width:@width;height:@width;background-image:url(../assets/6577103_093204036110_2.jpg);background-size:@width;
	.login{position:absolute;left:50%;top:50%;width:400px;margin:-190px 0 0 -200px;border-radius:5px;background:hsla(0,0%,100%,.3);}
	h2{line-height:50px;text-align:center;border-bottom:1px #ddd solid;}
	.el-form{padding:30px;}
	.input-group,.el-input{float:left;}
	.input-group{padding:0 15px;border-radius:4px;position:relative;display:table-cell;background:#f5f7fa;cursor:pointer;border-top-right-radius:0;border-bottom-right-radius:0}
	.el-input{width:85%;}
	.codese .el-input{width:55%;}
	.iconfont{font-size:15px;}
	.keycodes{position:absolute;right:5px;width:88px;height:38px;border:1px #ddd solid;cursor:pointer;text-align:center;letter-spacing:5px;background:#ddd;}
	.buttons{text-align:center;}
	.buttons button{margin:0px 30px;}
}
</style>