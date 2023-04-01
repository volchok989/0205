<template>
  <div class='container'>
    <reviews-head
      :likes='likesCount'
      :reviews='reviewsCount'
      @all-reviews='showReviews'
    />
    <reviews-list :reviews='reviews'/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ReviewsHead from '@/components/reviews-head.vue'
import ReviewsList from '@/components/reviews-list.vue'

export default {
  name: 'reviews-component',
  components: {
    ReviewsHead,
    ReviewsList
  },
  data () {
    return {
      reviews: [],
      allReviewsAreDisplaying: false
    }
  },
  computed: {
    ...mapState({
      allReviews: state => state.reviewsModule.reviews,
      likesCount: state => state.reviewsModule.likesCount
    }),
    ...mapGetters({
      threeLatestReviews: 'reviewsModule/threeLatestReviews',
      reviewsCount: 'reviewsModule/reviewsCount'
    })
  },
  watch: {
    allReviews () {
      this.allReviewsAreDisplaying ? this.reviews = this.allReviews : this.reviews = this.threeLatestReviews
    }
  },
  created () {
    this.reviews = this.threeLatestReviews
  },
  methods: {
    showReviews (val) {
      if (val) {
        this.reviews = this.allReviews
        this.allReviewsAreDisplaying = true
      } else {
        this.reviews = this.threeLatestReviews
        this.allReviewsAreDisplaying = false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.container {
  padding-top: 26px;
  padding-bottom: 4px;
}
</style>
