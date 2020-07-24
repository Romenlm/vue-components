<template>
  <div>
    <list-bank></list-bank>
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
    }
  }
</script>

<style scoped>

</style>
