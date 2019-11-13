<template>
  <div>
    <md-list-bank></md-list-bank>
    <md-search-item v-model="search"></md-search-item>
    {{search}}
    <md-input-item v-model="test" clearable></md-input-item>
    {{test}}
  </div>
</template>

<script>
  import MdListBank from '../components/list-bank'
  import MdSearchItem from '../components/search-item'
  import MdInputItem from "mand-mobile/components/input-item/index";
  export default {
    name: "Home",
    components: {
      MdInputItem,
      MdListBank,
      MdSearchItem
    },
    data() {
      return {
        search: '',
        test: ''
      }
    }
  }
</script>

<style scoped>

</style>
