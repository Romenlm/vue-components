<template>
  <div>
    <span class="btn" v-for="(item, index) in com" @click="goto(item)" :key="index">{{item.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {
    },
    data() {
      return {
        com: [
          {
            title: '银行列表',
            name: 'ShowComponent'
          },
          {
            title: '搜索框',
            name: 'searchTest'
          }
        ]
      }
    },
    methods: {
      goto(item) {
        this.$router.push(item.name)
      }
    }
  }
</script>

<style scoped>
.btn{
  display: block;
  width: 90%;
  height: 40px;
  margin: 10px auto;
  border: 1px solid #dedede;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
}
</style>
