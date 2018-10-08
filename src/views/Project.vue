<template>
  <div class="project">
    <el-carousel 
      indicator-position="outside"
      :autoplay="false"
      trigger="click"
      :interval="10000" 
      height="700px" 
      style="width: 150%; left: -25%;"
      @change="closePanel"
    >
      <el-carousel-item 
        v-for="(item, index) in items" 
        :key="item.name"
      >
        <div>
          <div class="panel" v-if="status[index]">
            <div class="close-panel">
              <img src="/img/icons/icons8-delete-480.png" height="40" width="40" alt="website" @click="closePanel">
            </div>
            <a :href="item.website" v-if="item.website" target="_blank">
              <img src="/img/icons/icons8-home-480.png" alt="website">
            </a>
            <a :href="item.github" v-if="item.github" target="_blank">
              <img src="/img/icons/icons8-github-480.png" alt="github">
            </a>
          </div>
          <img :src="item.path" :alt="item.name" @click="clickProject(index)">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
const items = [];
items.push({name: "3D Export Import", path:"/img/projects/project_3d.jpg", website: "", github: "https://github.com/xhan91/3D-Import-Export"});
items.push({name: "Flo Monitor", path:"/img/projects/project_flo.png", website: "https://flo.josh-han.com", github: "https://github.com/xhan91/flo-monitor"});
items.push({name: "Easy Exchange", path:"/img/projects/project_ee.png", website: "https://exchange.josh-han.com", github: "https://github.com/xhan91/easy-cad-converter"});

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
    },
    closePanel() {
      for (const index of this.status.keys()) {
        this.$set(this.status, index, false);
      }
    }
  }
}</script>

<style lang="stylus" scoped>
  img 
    max-width 100%
    max-height 100%
    margin auto
    cursor pointer

  a img
    opacity 1
    height 160px
    width 160px
    background-color white

  .panel
    position absolute
    background-color white
    opacity 0.95
    height 100%
    width 100%
    z-index 10
    display flex
    justify-content center
    align-items center
    
  .close-panel
    position absolute
    right 100px
    top 100px
</style>
