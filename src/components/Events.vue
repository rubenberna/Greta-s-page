<template>
  <div class="events">
    <div v-for="ev in events" :key="ev.id">
      <p>{{ev.name}}</p>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'events',
    computed: mapGetters(['events']),
    methods: mapActions(['fetchEvents']),
    created() {
      this.fetchEvents()
    }
  }
</script>

<style lang="scss" scoped>
</style>
