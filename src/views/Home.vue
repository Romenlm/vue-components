<template>
  <div>
    <md-list-bank></md-list-bank>
    <md-search-item v-model="search"></md-search-item>
    {{search}}
  </div>
</template>

<script>
  import MdListBank from '../components/list-bank'
  import MdSearchItem from '../components/search-item'
  export default {
    name: "Home",
    components: {
      MdListBank,
      MdSearchItem
    },
    data() {
      return {
        search: ''
      }
    }
  }
</script>

<style scoped>

</style>
