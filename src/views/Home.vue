<template>
  <div>
    <md-list-bank></md-list-bank>
    <md-search-item v-model="search"></md-search-item>
    {{search}}
<!--    <test></test>-->
    <row :gutter="40">
      <cidc-col :span="24"><div style="background-color: coral">1</div></cidc-col>
      <cidc-col :span="24"><div style="background-color: darkseagreen">1</div></cidc-col>
    </row>
  </div>
</template>

<script>
  import MdListBank from '../components/list-bank'
  import MdSearchItem from '../components/search-item'
  // import Test from '../components/row'
  import Row from '../components/row/row'
  import CidcCol from '../components/row/col'
  export default {
    name: "Home",
    components: {
      MdListBank,
      MdSearchItem,
      // Test,
      Row,
      CidcCol
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
