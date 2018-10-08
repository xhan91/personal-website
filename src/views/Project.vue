<template>
  <div class="project">
    <el-carousel 
      indicator-position="outside"
      trigger="click"
      :interval="10000" 
      height="700px" 
      style="width: 150%; left: -25%;"
    >
      <el-carousel-item 
        v-for="(item, index) in items" 
        :key="item.name"
      >
        <el-row justify="center">
          <div class="panel" v-if="status[index]">
          </div>
          <img :src="item.path" :alt="item.name" @click="clickProject(index)">
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const items = [];
items.push({name: "3D Export Import", path:"/img/projects/project_3d.jpg"});
items.push({name: "Flo Monitor", path:"/img/projects/project_flo.png"});
items.push({name: "Easy Exchange", path:"/img/projects/project_ee.png"});

export default {
  name: "project",
  data() {
    return {
      items,
      status: items.map(_ => false),
    };
  },
  methods: {
    clickProject(index) {
      this.$set(this.status, index, true);
    }
  }
}</script>

<style lang="stylus" scoped>
  img 
    max-width 100%
    max-height 100%
    margin auto
    cursor pointer

  .panel
    position absolute
    background-color white
    opacity 0.8
    height 100%
    width 100%
    z-index 10
    
</style>
