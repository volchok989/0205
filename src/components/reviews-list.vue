<template>
  <div>
    <single-review
      v-for='review in reviews'
      :key='review.id'
      :review='review'
    />
  </div>
</template>

<script>
import SingleReview from '@/components/single-review.vue'

export default {
  name: 'reviews-list',
  components: {
    SingleReview
  },
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
