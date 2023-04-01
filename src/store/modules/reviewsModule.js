export default {
  namespaced: true,
  state: {
    likesCount: 131,
    reviews: [
      {
        id: 3,
        author: 'Samuel Jackson2',
        date: '18 Apr 2022',
        text: 'Hey Eva! You\'re cool. Nice pic!ggggggggggggg'
      },
      {
        id: 2,
        author: 'Samuel Jackson',
        date: '13 Apr 2022',
        text: 'Hey Eva! You\'re cool. Nice pic!'
      },
      {
        id: 1,
        author: 'Angela Deimon',
        date: '10 Apr 2022',
        text: 'Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.'
      },
      {
        id: 0,
        author: 'Ronald Harris',
        date: '8 Apr 2022',
        text: 'Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?'
      }
    ]
  },
  getters: {
    reviewsCount: state => state.reviews.length,
    threeLatestReviews: state => state.reviews.slice(0, 3)
  },
  mutations: {
    ADD_NEW_REVIEW: (state, review) => state.reviews.unshift(review)
  },
  actions: {}
}
