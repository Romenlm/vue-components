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
      // 添加注释测试数据
      noSearch(val){
        // eslint-disable-next-line no-console
        console.log(val)
      }
    }
  }
</script>

<style scoped>

</style>