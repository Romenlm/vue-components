<template>
  <div class="md-search-item" :class="[round?'is-round':'no-round',isFocus?'is-focus':'']">
    <md-icon class="md-search-icon" name="search" size="lg" @click="search"></md-icon>
    <!--      <img class="md-search-icon" src="./icon/search.png">-->
    <div class="md-search-value">
      <input id="search" type="text" v-model="inputValue" @input="inputLoad" :placeholder="placeholder" @keyup.13="search" @focus="isFocus = true" @blur="isFocus = false">
    </div>
    <md-icon v-show="inputValue" @click="closeValue" class="md-search-clear" name="clear" size="lg"></md-icon>
  </div>
</template>

<script>
  import {Icon} from 'mand-mobile'
  export default {
    name: "md-search-input",
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
      },
      round: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        inputValue: '',
        isFocus:false
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
      },
      search(){
        // eslint-disable-next-line no-console
        // console.log(this.inputValue)
        this.$emit('search', this.inputValue)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-search-item
    background-color #fff
    /*padding 8px 9px*/
    height 80px /*高*/
    font-size 32px /*字体大小*/
    /*border-radius 10px*/
    border 1px solid #dedede
    display flex
    overflow hidden
    .md-search-icon
      width  60px
      height 100%
      margin-left 20px
      color rgba(0,0,0,.5)
      line-height 80px
    .md-search-value
      width 0
      flex-grow 1
      height 78px
      input
        height 100%
        width 100%
        border none
        outline none
        font-size 32px
    .md-search-clear
      width 60px
      height 100%
      line-height 80px
      color rgba(0,0,0,.5)

  .is-round
    border-radius 40px
  .no-round
    border-radius 10px

  .is-focus
    border 1px solid color-primary
    box-shadow 0px 0px 5px color-primary

</style>
