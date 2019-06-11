<template>
    <div style="display: none;"></div>
</template>

<script>
  export default {
    name: "index",
    props: {
      fullscreenLoading: {
        type: Boolean,
        default() {
          return false
        }
      }
    },
    data() {
      return {
        loading: null
      }
    },
    methods: {
      openFullScreen() {
        this.loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      },
      closeFullScreen() {
        this.loading.close()
      }
    }
  }
</script>

<style scoped>

</style>