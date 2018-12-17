<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
*{margin:0;padding:0}
body{font:14px/150% tahoma,arial,Micorosoft YaHei,Hiragino SansGB,"\5b8b\4f53",sans-serif;color:#666}
ul{list-style:none}
a{text-decoration:none;color:#666}
html,body,#app{width:100%;height:100%;overflow:hidden}

.login-warp .el-input .el-input__inner{border-top-left-radius:0;border-bottom-left-radius:0}
.el-menu-item-group__title{padding:0;}
.el-submenu__title:hover{background:#d1dbe5}
.el-menu--vertical ul{background:#eef1f6;}
aside .Active .el-menu-item .el-tooltip i{color:#409EFF;}
.await .await-body .el-checkbox__input{padding:0 10px;}
.await .await-body .el-checkbox{width:100%;}
.await .await-body .is-checked .el-checkbox__label{text-decoration:line-through;color:#999;}
</style>
