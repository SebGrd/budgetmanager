<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router>
          <el-menu-item
              v-for="(route, index) in routes"
              :key="index"
              :index="index.toString()"
              :route="route">
            {{ route.name }}
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    routes() {
      const routes = this.$router.getRoutes();
      return routes.filter((route) => route.meta.header === true);
    },
    activeIndex() {
      return this.routes.findIndex((route) => route.name === this.$route.name).toString();
    },
  },
}
</script>

<style>
#app {
}
</style>
