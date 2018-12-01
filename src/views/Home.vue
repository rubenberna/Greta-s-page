<template>
  <div id="home">
    <transition name="fade" appear>
      <banner/>
    </transition>
    <div class="home-body">
      <all-therapies/>
      <events />
      <newsletter />
    </div>
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

  .home-body {
    margin-left: 50px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 3s;
  }
</style>
