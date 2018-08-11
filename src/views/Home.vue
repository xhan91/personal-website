<template>
  <div class="home">
    <p class="j-hashtag"><span class='hashtag'>#Resume</span></p><a href="/Xu_Han-Software_Engineer.pdf" class="j-pdf-button" ><el-button type="success" plain>View as PDF</el-button></a>
    <hr>
    <h3>Personal Information</h3>
    <p><b>Name:</b> (Josh) Xu Han</p>
    <p><b>Location:</b> Vancouver, BC, Canada</p>
    <hr>
    <h3>Education</h3>
    <ul><li><b>Web Development Bootcamp | Lighthouse Labs, Vancouver, Canada</b> 2016.6 – 2016.8  
    </li><li><b>MSc Project and Enterprise Management | University College London, UK</b> 2013.9 – 2014.9 
    </li><li><b>BSc Computer Science and Management | University of Nottingham, UK</b> 2009.9 – 2013.6 
    </li></ul>
    <hr>
    <h3>Experience</h3>
    <ul><li><b>Software Engineer | Adacado, Vancouver, Canada</b> 2016.8 - Current
    </li></ul>
    <blockquote>
    <p>- Test driven development of both frontend and backend features</p>
    <p>- Learning new languages and techniques and implement in production project </p>
    </blockquote>
    <ul><li><b>Assistant Procurement Manager | Hebei Zhongcheng Group, Hebei, China</b> 2014.9 - 2015.10
    </li></ul>
    <blockquote>
    <p>Responsible for negotiating suppliers, optimizing supply chain and keeping raw material supply with coworkers as a team. </p>
    </blockquote>
    <hr>
    <h3>Skill Set</h3>
    <ul><li>Good at <b>Java</b>, worked deeply with <b>Spring framework</b>, knowledge of <b>design pattern</b> implementation and usage in a Java project, experience with profiling in JVM.
    </li><li>Using <b>React.js</b> and <b>Vue.js</b> as frontend framework, familiar with idea of data flow with tools <b>Redux</b> and <b>Vuex</b>.
    </li><li>Much experience with <b>Python</b> (3 preferred) in side projects, code in pythonic way.
    </li><li>Have used <b>Kubernetes</b> in production projects, much experience of building, developing, deploying and managing <b>docker</b> containers.
    </li><li>Using <b>Jenkins</b> as CI/CD tools.
    </li><li>A good fit when working in <b>SCRUM</b> agile software development team.
    </li></ul>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
  }
};</script>

<style lang="stylus">
  .home
    text-align left

  .j-hashtag
    display inline-block

  .j-pdf-button
    display inline-block
    float right

  ul
    -webkit-padding-start 20px

  blockquote
    -webkit-margin-start 0
</style>
