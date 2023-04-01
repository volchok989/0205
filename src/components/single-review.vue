<template>
  <div class='review'>
    <div class='head'>
      <span class='author'>{{ review.author }}</span>
      <span class='date'>{{ getCurrentDate(review.date) }}</span>
    </div>
    <div class='comment'>{{ review.text }}</div>
  </div>
</template>

<script>
export default {
  name: 'single-review',
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  methods: {
    getCurrentDate (val) {
      const date = new Date(val)
      const options = { day: 'numeric', month: 'short', year: 'numeric' }
      return date.toLocaleString('en-GB', options)
    }
  }
}
</script>

<style lang='scss' scoped>
.review {
  margin-bottom: 18px;
}
.head {
  display: flex;
  align-items: center;
  .author {
    font-size: 14px;
    line-height: 19px;
    font-weight: 700;
    margin-right: 8px;
  }
  .date {
    font-size: 11px;
    line-height: 19px;
    color: #808080;
  }
}
.comment {
  position: relative;
  margin-top: 20px;
  line-height: 19px;
  padding: 20px;
  background: #F2FBFF;
  box-shadow: 0 4px 10px rgba(128, 128, 128, 0.1);
  overflow-wrap: break-word;
  z-index: 2;
  &:before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: -16px;
    left: 30px;
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
    background: #F2FBFF;
    z-index: -1;
  }
}
</style>
