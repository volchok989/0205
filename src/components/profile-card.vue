<template>
  <div class='container'>
    <div class='profile-card'>
      <div class='avatar'>
        <img
          :src='specialistInfo.avatar'
          :alt='specialistInfo.fullName'
        >
      </div>
      <div class='main-info'>
        <h1>{{ specialistInfo.fullName }}</h1>
        <p class='job-title'>{{ specialistInfo.job }}</p>
        <div class='about-text'>
          <p>{{ specialistInfo.aboutText }}</p>
        </div>
        <services-chart :services='specialistInfo.services'/>
      </div>
    </div>
  </div>
</template>

<script>
import ServicesChart from '@/components/services-chart.vue'

export default {
  name: 'profile-main-info',
  components: {
    ServicesChart
  },
  data () {
    return {
      specialistInfo: {
        avatar: require('@/assets/images/avatar.png'),
        fullName: 'Eva Jonson',
        job: 'Sales Manager',
        aboutText: 'I will find the best offers for you. My services are absolutely free.',
        services: [
          {
            title: 'Manual tour booking',
            number: 11,
            color: '#B1E19B'
          },
          {
            title: 'Package tours',
            number: 3,
            color: '#ACE2F8'
          },
          {
            title: 'Hotels',
            number: 1,
            color: '#ACE2F8'
          }
        ]
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.profile-card {
  display: flex;
}
.avatar {
  max-width: 124px;
  width: 100%;
  height: 124px;
  margin-right: 10px;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.main-info {
  padding-top: 10px;
  width: 100%;
}
h1 {
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
}
.job-title {
  font-size: 14px;
  color: #808080;
  margin-bottom: 6px;
}
.about-text {
  background-color: #FFFBC8;
  border: 1px solid #DADADA;
  border-radius: 5px;
  padding: 8px 20px 8px 45px;
  margin-left: -45px;
  margin-bottom: 20px;
  @media (min-width: 489px) {
    padding-right: 100px;
  }
}
</style>
