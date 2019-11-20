<template>
  <div class="md-row">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'md-row',
    componentName: 'MdRow',
    props: {
      gutter: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style scoped>
  .md-row {
    display: flex;
    /*background-color: transparent;*/
    flex-wrap: nowrap;
    position: relative;
    -webkit-box-sizing: border-box;
    box-sizing: border-box
  }

  .md-row::after, .md-row::before {
    display: table;
    content: ""
  }

  .md-row::after {
    clear: both
  }

</style>
