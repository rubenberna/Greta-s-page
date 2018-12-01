<template>
  <div class="edit-event container">
    <heading size='l'
             class="edit-event-title">
             Edit event
    </heading>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s4">
            <input id="name" type="text" class="validate" v-model='thatEvent.name'>
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
            <div v-show='progress'>
              <sui-progress :percent="progress"
                            :indicating="true"/>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model='thatEvent.description'/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s4">
            <input id="date" type="date" class="validate" v-model='thatEvent.date'>
          </div>
          <div class="input-field col s4">
            <input id="address" type="text" class="validate" v-model='thatEvent.address'>
          </div>
        </div>
        <div class="action-buttons">
          <router-link :to="{ name: 'manage'}"><sui-button>Back</sui-button></router-link>
          <a class="waves-effect waves-light btn" style="color:white" @click='editEvent(thatEvent)'>update</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Heading from '@/components/typography/Heading'

  export default {
    name: 'editTherapy',
    components: {
      Heading
    },
    computed: mapGetters(['thatEvent', 'progress']),
    methods: {
      ...mapActions(['editEvent', 'uploadImage']),
      onFileSelect(image) {
        this.uploadImage(image, 'events')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .edit-event {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 811px;
    min-height: 100vh;
    .edit-event-title {
      padding: 20px;
      width: 84%;
      height: 10%;
      display: inline-block;
      line-height: 1em;
      letter-spacing: .135em;
      padding-bottom: .125em;
      margin-bottom: 33px;
    }
    .action-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
