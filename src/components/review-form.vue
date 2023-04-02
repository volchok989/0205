<template>
  <div class='form-section'>
    <div class='container'>
      <textarea
        v-model='reviewText'
        @keydown.ctrl.enter='addReview'
      ></textarea>
      <p
        :class='{"show-error": showError}'
        class='error'
      >
        This field is required!
      </p>
      <button
        class='btn-submit'
        @click='addReview'
      >
        Send a message
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'review-form',
  data () {
    return {
      reviewText: '',
      showError: false
    }
  },
  watch: {
    reviewText () {
      if (this.reviewText) this.showError = false
    }
  },
  methods: {
    ...mapMutations({
      ADD_NEW_REVIEW: 'reviewsModule/ADD_NEW_REVIEW'
    }),
    addReview () {
      if (this.reviewText) {
        const data = {
          id: Math.round(Math.random() * 1000),
          author: 'Anonymous',
          date: new Date(),
          text: this.reviewText
        }
        this.ADD_NEW_REVIEW(data)
        this.reviewText = ''
      } else {
        this.showError = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.form-section {
  background-color: #F2F2F2;
}
.container {
  padding-top: 28px;
  padding-bottom: 34px;
}

textarea {
  width: 100%;
  height: 65px;
  font-family: 'Arial', serif;
  font-size: 14px;
  resize: none;
  border: 1px solid #000000;
  border-radius: 1px;
  margin-bottom: 5px;
}

.error {
  text-align: center;
  color: red;
  margin-bottom: 18px;
  visibility: hidden;
}

.show-error {
  visibility: visible;
}

.btn-submit {
  background-color: #FDD639;
  border: 2px solid transparent;
  border-radius: 23px;
  display: block;
  margin: 0 auto;
  padding: 11px 90px;
  font-size: 16px;
  font-family: 'PT Sans', serif;
  font-weight: 700;
  cursor: pointer;
  transition: .3s;
  color: #333;

  &:hover {
    background-color: #FFF;
    border: 2px solid #FDD639;
  }
}
</style>
