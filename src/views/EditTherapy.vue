<template>
  <div class="edit-therapy">
    {{ therapy.name }}
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'editTherapy',
    data () {
      return {

      }
    },
    computed: mapGetters(['therapy'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .edit-therapy {
    height: 100vh;
  }
</style>
