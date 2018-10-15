<template>
  <div id="home">
    <banner/>
    <all-therapies/>
    <events />
    <newsletter />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import AllTherapies from '@/components/AllTherapies'
import Events from '@/components/Events'
import Newsletter from '@/components/Newsletter'

export default {
  name: 'home',
  components: {
    Banner,
    AllTherapies,
    Events,
    Newsletter,
  }
}
</script>

<style lang="scss" scoped>
</style>
