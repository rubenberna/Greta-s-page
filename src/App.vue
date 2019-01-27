<template>
  <div id="app">
    <router-view/>
    <delay :wait='5000'>
      <Footer/>
    </delay>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Footer
    },
    methods: mapActions(['fetchTherapies', 'fetchEvents', 'fetchAbout']),
    created() {
      this.fetchTherapies()
      this.fetchEvents()
      this.fetchAbout()
    }
  }
</script>

<style lang="scss" scoped>
</style>
