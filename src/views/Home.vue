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
import Banner from '@/components/Banner.vue';
import AllTherapies from '@/components/AllTherapies.vue';
import Events from '@/components/Events.vue';
import Newsletter from '@/components/Newsletter.vue';

export default {
  name: 'home',
  components: {
    Banner,
    AllTherapies,
    Events,
    Newsletter
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  #home {
    // background: beige;
  }
</style>
