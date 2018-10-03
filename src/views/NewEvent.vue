<template>
  <div class="new-event container">
    <h3 class="new-event-title">Create new Event</h3>
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="name" type="text" class="validate" v-model='event.name'>
          <label for="name">Name of event</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" v-model='event.description'/>
          <label for="textarea1">Describe this event</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <input id="price" type="date" class="validate" v-model='event.date'>
          <label for="price">Date</label>
        </div>
        <div class="input-field col s4">
          <input id="availability" type="text" class="validate" v-model='event.address'>
          <label for="availability">Address</label>
        </div>
      </div>
      <a class="waves-effect waves-light btn" style="color:white" @click='createEvent(event)'>create</a>
    </form>
  </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'newEvent',
    data () {
      return {
        event: {
          name: null,
          description: null,
          date: null,
          address: null
        }
      }
    },
    methods: mapActions(['createEvent'])
  }
</script>

<style lang="scss" scoped>
  .new-event {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 811px;
    .new-event-title {
      padding: 20px 0px;
      align-self: flex-start;
    }
  }
</style>
