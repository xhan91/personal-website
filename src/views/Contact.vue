<template>
  <div class="contact">
    <el-card 
    v-for="contact in contacts" 
    :key="contact.name"
    :style="backgroundAndText(contact)"
    shadow="hover">
      <a class="j-a" :href="contact.link">
        <h1>{{ contact.name }}</h1>
      </a>
    </el-card>
  </div>
</template>

<script>
const contacts = [];
contacts.push({name: "LinkedIn", link: "https://www.linkedin.com/in/xu-josh-han-b68b95122/", bg: "#0077B5", tx: "white"});
contacts.push({name: "GitHub", link:"https://github.com/xhan91", bg: "#24292e", tx: "white"});
contacts.push({name: "Email", link:"mailto:xhan91ca@gmail.com", bg: "white", tx: "black"});
contacts.push({name: "Blog", link:"https://blog.josh-han.com", bg: "#222", tx: "white"});

export default {
  name: "Contact",
  data() {
    return {
      contacts
    };
  },
  methods: {
    backgroundAndText(contact) {
      return `background-color: ${contact.bg}; color: ${contact.tx}`;
    }
  }
}</script>

<style lang="stylus">
  .contact
    text-align center

  .j-a
  .j-a:link
  .j-a:visited
  .j-a:hover
  .j-a:active
    text-decoration none
    color inherit
</style>
