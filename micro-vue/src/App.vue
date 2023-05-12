<template>  
  <div class="layout">
    <el-container>
      <el-aside width="250px">
        <el-menu router :default-active="$route.path">
          <el-menu-item index="/">vue子应用home路由</el-menu-item>
          <el-menu-item index="/exer">vue子应用exer路由</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
.layout {
  height: 100%;
}
.layout .el-container, .layout .el-aside, .layout .el-menu {
  height: 100%;
}

</style>
