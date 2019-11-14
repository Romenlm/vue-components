<template>
  <div class="md-search-item am-input-autoclear">
    <div class="md-search-input">
<!--      <md-icon class="md-search-icon" name="search" size="lg"></md-icon>-->
      <img class="md-search-icon" src="./icon/search.png">
      <div class="md-search-value">
        <input id="search" type="text" v-model="inputValue" @input="inputLoad" :placeholder="placeholder">
      </div>
      <md-icon v-show="inputValue" @click="closeValue" class="md-search-clear" name="clear" size="lg"></md-icon>
    </div>
  </div>
</template>

<script>
  import {Icon} from 'mand-mobile'
  export default {
    name: "md-search-item",
    components: {
      [Icon.name]: Icon
    },
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      placeholder: {
        type: String,
        default: '搜索'
      }
    },
    data () {
      return {
        inputValue: '',
      }
    },
    watch: {
      value(val) {
        if (val === this.currentValue) return;
        this.currentValue = val;
      }
    },
    methods: {
      inputLoad(event){
        let value = event.target.value;
        this.$emit('input', value)
      },
      closeValue(){
        this.inputValue = ''
        this.$emit('input', this.inputValue)
      }
    }
  }
</script>

<style lang="stylus" scoped>
.md-search-item
  background-color #fff
  padding 8px 9px
  .md-search-input
    position relative
    width 100%
    height 38px
    line-height 38px
    background-color rgba(0,0,0,.05)
    overflow hidden
    display flex
    align-items center
    border-radius 4px
    .md-search-icon
      display block
      width 24px
      height 24px
      margin 0px 8px
      color rgba(0,0,0,.05);
    .md-search-value
      flex 1
      height 100%
      input
        height 100%
        width 100%
        border 0
        outline none
        background-color rgba(0, 0, 0, 0)
    .md-search-clear
      margin 0px 8px
      color rgba(0,0,0,.05)

</style>
