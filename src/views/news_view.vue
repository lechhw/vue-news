<template>
  <div>
    <div v-for="user in users" :key="users[user]">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'
export default {
  data() {
    return {
      users: [],
    }
  },

  created() {
    const _this = this
    fetchNewsList()
      .then((res) => (_this.users = res.data))
      .catch((err) => console.log(err))
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped></style>
