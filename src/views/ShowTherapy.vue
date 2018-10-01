<template>
  <div class="show-therapy">
    <NavbarGrey/>
    <h1>{{therapy.name}}</h1>
  </div>
</template>

<script>
  import NavbarGrey from '@/components/NavbarGrey'
  import { mapGetters } from 'vuex'

  export default {
    name: 'about',
    components: {
      NavbarGrey
    },
    computed: mapGetters(['therapy'])
  }
</script>

<style lang="scss" scoped>
</style>
