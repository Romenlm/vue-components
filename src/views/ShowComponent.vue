<template>
  <div>
    <component :is="compontentName"></component>
  </div>
</template>

<script>
  import ListBank from '@/components/list-bank'
  export default {
    name: "ShowComponent",
    components: {
      ListBank
    },
    data () {
      return {
        compontentName: ''
      }
    },
    mounted() {
      // eslint-disable-next-line no-console
      this.compontentName = this.$route.params.item.name
    }
  }
</script>

<style scoped>

</style>
