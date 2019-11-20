<!--<template>
  <div :class="[clazz]">
    <slot></slot>
  </div>
</template>-->

<script>
  export default {
    name: "md-col",
    props: {
      span: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        clazz: 'md-col-'+this.span,
      }
    },
    computed: {
      gutter() {
        let parentObj = this.$parent;
        if (parentObj && parentObj.$options.componentName !== 'MdRow') {
          parentObj = parentObj.$parent;
        }
        return parentObj ? parentObj.gutter : 0;
      }
    },
    render(h) {
      let style = {};

      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }
      return h(
          'div',
          {
            class: [
              this.clazz
            ],
            style
          },
          this.$slots.default
      );
    }
  }
</script>

<style scoped>
  [class*=md-col-] {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }
  .md-col-0{
    display: none;
    width: 0%
  }
  .md-col-1{
    width: 4.16667%
  }
  .md-col-2{
    width: 8.33333%
  }
  .md-col-3{
    width: 12.5%
  }
  .md-col-4{
    width: 16.66667%
  }
  .md-col-5{
    width: 20.83333%
  }
  .md-col-6{
    width: 25%
  }
  .md-col-7{
    width: 29.16667%
  }
  .md-col-8{
    width: 33.33333%
  }
  .md-col-9{
    width: 37.5%
  }
  .md-col-10{
    width: 41.66667%
  }
  .md-col-11{
    width: 45.83333%
  }.md-col-12{
     width: 50%
   }
  .md-col-13{
    width: 54.16667%
  }
  .md-col-14{
    width: 58.33333%
  }
  .md-col-15{
    width: 62.5%
  }
  .md-col-16{
    left: 62.5%
  }
  .md-col-17{
    width: 70.83333%
  }
  .md-col-18{
    width: 75%
  }
  .md-col-19{
    width: 79.16667%
  }
  .md-col-20{
    width: 83.33333%
  }
  .md-col-21{
    width: 87.5%
  }
  .md-col-22{
    width: 91.66667%
  }
  .md-col-23{
    width: 95.83333%
  }
  .md-col-24{
    width: 100%
  }


</style>
