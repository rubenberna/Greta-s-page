<template>
  <div id="home">
    <banner/>
    <intro/>
    <display/>
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/Banner.vue';
import intro from '@/components/Intro.vue';
import display from '@/components/Display.vue';


export default {
  name: 'home',
  components: {
    banner,
    intro,
    display
  }
}
</script>
