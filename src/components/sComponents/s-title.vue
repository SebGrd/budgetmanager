<template>
  <div class="title">
    <div class="title__left">
      <slot>
        <h1>{{ $route.name }}</h1>
      </slot>
      <el-breadcrumb v-if="breadcrumbPaths.length" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
            v-for="(path, key) in breadcrumbPaths"
            :key="key"
            :to="checkSameLink(path)">
          {{ path.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="title__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-title",
  props: {
    breadcrumbPaths: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    checkSameLink(routeObject) {
      if (routeObject.name !== this.$route.name) {
        return routeObject
      } else {
        return false;
      }
    }
  },
}
</script>

<style scoped lang="scss">
.title{
  display: flex;
  justify-content: space-between;
  &__left{
    flex-grow: 1;
  }
  &__right{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  }
}
</style>