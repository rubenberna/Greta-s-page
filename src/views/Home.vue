<template>
  <div id="home">
    <banner/>
    <intro/>
    <allTherapies/>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/Banner.vue';
import intro from '@/components/Intro.vue';
import allTherapies from '@/components/AllTherapies.vue';

export default {
  name: 'home',
  components: {
    banner,
    intro,
    allTherapies
  }
}
</script>
