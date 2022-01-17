<template>
  <div class="home">
    <h1>Home</h1>
    <el-timeline>
      <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp">
        {{activity.content}}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
