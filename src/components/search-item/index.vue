<template>
  <div class="md-search-item am-input-autoclear">
    <div class="md-search-input">
      <div class="md-search-icon"><md-icon name="search" size="sm"></md-icon></div>
      <div class="md-search-value">
        <input id="search" type="text" v-model="inputBindValue" @input="inputload" :placeholder="placeholder">
      </div>
      <div class="md-search-clear" @click="closeValue"><md-icon name="clear" size="xs"></md-icon></div>
    </div>
  </div>
</template>

<script>
  import {Icon} from 'mand-mobile'
  import MdIcon from "mand-mobile/components/icon/index";
  export default {
    name: "md-search-item",
    components: {
      MdIcon,
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
        inputBindValue: this.value
      }
    },
    watch: {
      inputValue(val) {
        this.inputBindValue = val
        if (val !== this.value) {
          this.$emit('input', val)
        }
      }
    },
    methods: {
      // setCurrentValue(value){
      //   if (value === this.currentValue) return;
      //   this.currentValue = value;
      // },
      inputload(event){
        let value = event.target.value;
        this.$emit('input', value)
      },
      closeValue(){
        this.inputBindValue = ''
        this.$emit('input', this.inputBindValue)
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
      height 24px
      width 24px
      margin 0px 8px
      line-height 24px
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
      width 20px
      height 20px
      margin 0px 8px
      line-height 20px
      color rgba(0,0,0,.05)

</style>
