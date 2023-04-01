<template>
  <div class='reviews-head'>
    <div>
      <h2>Latest reviews</h2>
      <span
        class='all-reviews'
        @click='emitClick'
      >
        {{ btnText }}
      </span>
    </div>
    <div>
      <div class='counter'>
        <img
          src='@/assets/images/like-icon.svg'
          alt='Likes count'
        >
        <span>{{ likes }}</span>
      </div>
      <div class='counter'>
        <img
          src='@/assets/images/comment-icon.svg'
          alt='Comments count'
        >
        <span>{{ reviews }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reviews-head',
  props: {
    likes: {
      type: Number,
      defaults: 0
    },
    reviews: {
      type: Number,
      defaults: 0
    }
  },
  computed: {
    btnText () {
      return this.isBtnToggled ? 'Collapse' : 'All reviews'
    }
  },
  data () {
    return {
      isBtnToggled: false
    }
  },
  methods: {
    emitClick () {
      this.isBtnToggled = !this.isBtnToggled
      this.$emit('all-reviews', this.isBtnToggled)
    }
  }
}
</script>

<style lang='scss' scoped>
.reviews-head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  > div {
    display: flex;
  }
}
h2 {
  font-size: 16px;
  line-height: 16px;
  margin-right: 8px;
}
.all-reviews {
  text-decoration: underline;
  cursor: pointer;
  color: #005DA1;
  &:hover {
    text-decoration: none;
  }
}
.counter {
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 18px;
  }
  img {
    margin-right: 5px;
  }
  span {
    line-height: 14px;
  }
}
</style>
