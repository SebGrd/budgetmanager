<template>
  <div class="home">
    <s-title title="Home"></s-title>
    <el-row :gutter="15">
      <el-col :span="12">
        <el-timeline>
          <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </el-col>
      <el-col :span="12">
        <s-card title="Money left" class="card">
          <strong class="card__number">705€</strong>
        </s-card>
        <s-card title="Repartition">

        </s-card>
      </el-col>
    </el-row>
    <s-card>
      <mixed-table></mixed-table>
    </s-card>
  </div>
</template>

<script>

import MixedTable from "../components/MixedTable";
import SCard from "../components/sComponents/sCard";
import STitle from "../components/sComponents/s-title";
export default {
  name: 'Home',
  components: {STitle, SCard, MixedTable},
  data() {
    return {
      activities: [{
        content: 'Event start',
        timestamp: '2018-04-15'
      }, {
        content: 'Approved',
        timestamp: '2018-04-13'
      }, {
        content: 'Success',
        timestamp: '2018-04-11'
      }]
    };
  },
}
</script>

<style lang="scss" scoped>
.card__number{
  font-size: 2.5rem;
}
</style>