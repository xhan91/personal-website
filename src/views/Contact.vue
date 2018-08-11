<template>
  <div class="contact">
    <el-card 
    v-for="contact in contacts" 
    :key="contact.name"
    :style="contact.style"
    shadow="hover">
      <a class="j-a" :href="contact.link">
        <h1>{{ contact.name }}</h1>
      </a>
    </el-card>
  </div>
</template>

<script>
const contacts = [];
contacts.push({name: "LinkedIn", link: "https://www.linkedin.com/in/xu-josh-han-b68b95122/", style: "background-color: #0077B5; color: white"});
contacts.push({name: "GitHub", link:"https://github.com/xhan91", style: "background-color: #24292e; color: white"});
contacts.push({name: "Email", link:"mailto:xhan91ca@gmail.com", style: "background-color: white; color: black"});
contacts.push({name: "Blog", link:"https://blog.josh-han.com", style: "background-color: #222; color:white"});

export default {
  name: "Contact",
  data() {
    return {
      contacts
    };
  }
}</script>

<style lang="stylus">
  .j-a
  .j-a:link
  .j-a:visited
  .j-a:hover
  .j-a:active
    text-decoration none
    color inherit
</style>
