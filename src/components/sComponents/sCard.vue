<template>
  <el-card class="s-card">
    <div slot="header" v-if="title">
      <span>{{ title }}</span>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: "sCard",
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped lang="scss">
.s-card::v-deep{
  .el-card__header{
    padding: .8rem 1rem;
  }
}
</style>