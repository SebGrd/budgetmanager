<template>
  <el-dialog
      title="Create bill"
      :visible.sync="dialogVisibleSync"
      width="50%">
    <el-form v-if="formDisplayed" ref="form" :model="form" label-width="120px">
      <el-form-item label="Bill's name" required>
        <el-input v-model="form.name" placeholder="Electricity..."></el-input>
      </el-form-item>
      <el-form-item label="Bill's amount" required>
        <el-input-number
            v-model="form.amount" :min="1"></el-input-number>
      </el-form-item>
      <el-form-item label="Bill's date">
        <el-date-picker
            type="date"
            placeholder="Pick a date"
            v-model="form.date"
            style="width: 100%;"
            format="dd"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleForm">Create</el-button>
        <el-button @click="closeDialog">Cancel</el-button>
      </el-form-item>
    </el-form>
    <el-result
        v-show="successDisplayed"
        icon="success"
        title="Success"
        subTitle="Your new bill has been saved.">
    </el-result>
    <el-result
        v-show="errorDisplayed"
        icon="error"
        title="Error"
        :subTitle="errorMessage.toString()">
      <template #extra>
        <el-button @click="resetDisplay">Back to the form</el-button>
      </template>
    </el-result>
  </el-dialog>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "addBills",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      formDisplayed: true,
      form: {
        name: '',
        amount: 0,
        date: '',
      },
      successDisplayed: false,
      errorDisplayed: false,
      errorMessage: '',
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
    ...mapActions([
        'addBill'
    ]),
    closeDialog() {
      this.dialogVisibleSync = false;
    },
    async handleForm() {
      if (this.form.amount < 1 || !this.form.name.length) {
        this.errorMessage = 'Some fields are empty.'
        this.showError()
      } else {
        try {
          await this.addBill({
            date: this.form.date,
            name: this.form.name,
            amount: this.form.amount,
          });
          this.showSuccess();
        } catch (e) {
          this.errorMessage = e;
          this.showError()
        }
      }
    },
    showSuccess() {
      this.formDisplayed = false;
      this.successDisplayed = true;
      setTimeout(() => {
        this.closeDialog();
      }, 1000)
    },
    showError() {
      this.formDisplayed = false;
      this.errorDisplayed = true;
    },
    resetDisplay() {
      this.formDisplayed = true;
      this.errorDisplayed = false;
      this.successDisplayed = false;
    },

  },
}
</script>

<style scoped>

</style>