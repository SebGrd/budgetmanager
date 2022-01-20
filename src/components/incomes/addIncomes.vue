<template>
  <el-dialog
      title="Tips"
      :visible.sync="dialogVisibleSync"
      width="30%">
    <span>This is a message</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="closeDialog">Cancel</el-button>
    <el-button type="primary" @click="addIncomes">Confirm</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: "addIncomes",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    dialogVisibleSync: {
      get() {
        return this.dialogVisible;
      },
      set(value) {
        this.$emit('update:dialog-visible', value);
      },
    }
  },
  methods: {
    closeDialog() {
      this.dialogVisibleSync = false;
    },
    addIncomes() {
      console.log('Adding incomes')
      this.closeDialog();
    },
  },
}
</script>

<style scoped>

</style>