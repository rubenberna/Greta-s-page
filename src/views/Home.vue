<template>
  <div id="home">
    <banner/>
    <all-therapies/>
    <events />
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/Banner.vue';
import intro from '@/components/Intro.vue';
import allTherapies from '@/components/AllTherapies.vue';
import events from '@/components/Events.vue';

export default {
  name: 'home',
  components: {
    banner,
    intro,
    allTherapies,
    events
  }
}
</script>
