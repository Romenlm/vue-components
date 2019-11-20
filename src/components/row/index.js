export default {
  name: "md-row",
  props: {
    content: {
      type: String,
      default: '内容'
    }
  },
  render(h) {
    return h(
        'div',
        {
          class: [
              'el-row'
          ],
          style:{
            height: '50px',
            backgroundColor: '#dedede'
          }
        }
    );
  }
}
