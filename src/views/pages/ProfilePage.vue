<template>
  <div class='content'>
    <profile-main-info/>
    <reviews-component/>
    <review-form/>
  </div>
</template>

<script>
import ProfileMainInfo from '@/components/profile-card.vue'
import ReviewsComponent from '@/components/reviews-component.vue'
import ReviewForm from '@/components/review-form.vue'

export default {
  name: 'ProfilePage',
  components: {
    ProfileMainInfo,
    ReviewsComponent,
    ReviewForm
  }
}
</script>

<style lang='scss' scoped>
.content {
  padding-top: 14px;
}
</style>
