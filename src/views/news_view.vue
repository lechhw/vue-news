<template>
  <div>
    <div v-for="user in users" :key="users[user]">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      users: [],
    }
  },

  created() {
    const _this = this
    axios
      .get('https://api.hnpwa.com/v0/news/1.json')
      .then((res) => (_this.users = res.data))
      .catch((err) => console.log(err))
  },

  mounted() {},

  methods: {},
}
</script>

<style lang="scss" scoped></style>
å
