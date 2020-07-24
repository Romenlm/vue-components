<template>
  <search-item v-model="content" :round="true" @search="noSearch"></search-item>
</template>

<script>
  import searchItem from '../../components/search-item'
  export default {
    name: "SearchItemTest",
    components: {
      searchItem
    },
    data(){
      return{
        content: ''
      }
    },
    methods: {
      noSearch(val){
        // eslint-disable-next-line no-console
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>