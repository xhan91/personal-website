<template>
  <div class="footer">
    <p>© 2016 - {{ currentYear }} by Josh Han | All rights reserved.</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear() {
      return (new Date()).getFullYear();
    }
  }
}</script>

<style lang="stylus">
  .footer
    margin-top 20px
    text-align center
    color #666
    font-size 0.75em
</style>
