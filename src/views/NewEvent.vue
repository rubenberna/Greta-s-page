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
        <div class="file-field input-field col s4">
          <div class="btn">
            <span>Image</span>
            <input type="file"
            @change='onFileSelect($event.target.files[0])'>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
          </div>
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
      <div class="action-buttons">
        <router-link :to="{ name: 'manage'}"><sui-button>Back</sui-button></router-link>
        <a class="waves-effect waves-light btn" style="color:white" @click='createTherapy(therapy)'>create</a>
      </div>
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
          address: null,
          image: null
        }
      }
    },
    methods: {
      ...mapActions(['createEvent', 'uploadImageEvent']),
      onFileSelect(image) {
        this.uploadImageEvent(image)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-event {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 811px;
    height: 100vh;
    .new-event-title {
      padding: 20px 0px;
      align-self: flex-start;
    }
    .action-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
