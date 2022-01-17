<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router>
          <el-menu-item index="1" :route="{ name: 'Home'}">Home</el-menu-item>
          <el-menu-item index="2" :route="{ name: 'Incomes'}">Incomes</el-menu-item>
          <el-menu-item index="3" :route="{ name: 'Spendings'}">Spendings</el-menu-item>
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
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
#app {
}
</style>
