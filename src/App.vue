<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Footer from '@/components/Footer'
  import { mapActions } from 'vuex'

  export default {
    components: {
      Footer
    },
    methods: mapActions(['fetchTherapies', 'fetchEvents']),
    created() {
      this.fetchTherapies()
      this.fetchEvents()
    }
  }
</script>

<style lang="scss" scoped>
</style>
