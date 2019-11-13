<template>
  <div class="md-list-bank">
    <div class="md-list-thumb"><img :src="log" alt=""></div>
    <div class="md-list-content">
      <div class="md-list-title">{{bankName}}</div>
      <div class="md-list-brief">{{brief}}</div>
    </div>
    <div class="md-list-arrow" aria-hidden="true"><md-icon name="arrow-right"></md-icon></div>
  </div>
</template>

<script>
  export default {
    name: "md-list-bank",
    props: {
      bankName: {
        type: String,
        default: '科蓝银行'
      },
      log: {
        type: String,
        default: 'https://os.alipayobjects.com/rmsportal/OhSzVdRBnfwiuCK.png'
      },
      brief: {
        type: String,
        default: '尾号8888'
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .md-list-bank
    display flex
    height 50px
    align-items center
    padding 10px 16px
    position: relative
    line-height 24px
    &:after
      content: ''
      background-color: #eee
      position: absolute
      left: 15px
      height: 1px
      width: auto
      right: 0
      bottom: 0
    .md-list-thumb
      width 34px
      height 34px
      img
        height 100%
        width 100%
    .md-list-content
      margin 0px 16px
      flex-grow 1
      .md-list-title
        font-size 16px
      .md-list-brief
        font-size 14px
        color #999
    .md-list-arrow
      margin-left: 10px
      margin-right: -2px
      width: 12px
      padding: 16px 0
      font-size 14px
      color #333
</style>
