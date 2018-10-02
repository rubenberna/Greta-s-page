<template>
  <div>
    <NavbarGrey/>
    <div class="show" :style="{ backgroundImage: `url('${therapy.image}')` }">
      <h3>{{ therapy.name }}</h3>

    </div>
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
  @import '../../style/main.scss';

  .show {
    margin-top: 95px;
    margin-bottom: 95px;
    height: 160vh;
    background-size: cover !important;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
  }


</style>
