<template>
  <div>
    <div class="j-header">
      <h1 class="j-title">Josh Han</h1>
      <h3 class="j-subtitle">A tech finder / wife lover</h3>
      <el-tabs :activeName="activeName" @tab-click="navigate">
        <el-tab-pane v-for="tab in tabs" :key="tab" :label="tab" :name="tab"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const tabs = ["home", "project", "contact", "about"].map(capitalize);

export default {
  name: 'Header',
  data() {
    return {
      tabs: tabs,
    }
  },
  computed: {
    activeName() {
      return this.$router.history.current.name;
    }
  },
  methods: {
    navigate(tab, event) {
      this.$router.push({name: tab.label});
    }
  }
}</script>

<style lang="stylus">
  .j-header
    text-align left

  .j-title
    margin-bottom 0

  .j-subtitle
    color #567
    margin-top 0

  .grid-content
    min-width 36px
</style>
