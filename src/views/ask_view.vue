<template>
  <div>
    <div v-for="user in users" :key="users[user]">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'
export default {
  name: 'JobsView',

  data() {
    return {
      users: [],
    }
  },

  created() {
    const _this = this
    fetchAskList()
      .then((res) => {
        _this.users = res.data
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  mounted() {},

  methods: {},
}
</script>
