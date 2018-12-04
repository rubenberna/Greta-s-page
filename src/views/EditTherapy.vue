<template>
  <div class="edit-therapy container">
    <heading size='l'
             class="new-therapy-title">
             Edit Therapy
    </heading>
    <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s4">
            <input id="name" type="text" class="validate" v-model='therapy.name'>
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
              <label>{{Math.floor(progress)}}% completed</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model='therapy.description'/>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model='therapy.method' />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" v-model='therapy.indications' />
          </div>
        </div>
        <div class="row">
          <div class="input-field col s4">
            <input id="price" type="number" class="validate" v-model='therapy.price'>
          </div>
          <div class="input-field col s4">
            <input id="availability" type="text" class="validate" v-model='therapy.availability'>
          </div>
          <div class="input-field col s4">
            <input id="position" type="text" class="validate" v-model='therapy.position'>
          </div>
        </div>
        <div class="action-buttons">
          <router-link :to="{ name: 'manage'}">
            <sui-button>
              Back
            </sui-button>
          </router-link>
          <a class="waves-effect waves-light btn" style="color:white" @click='editTherapy(therapy)'>update</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import Heading from '@/components/typography/Heading'

  export default {
    name: 'editTherapy',
    components: {
      Heading
    },
    computed: mapGetters(['therapy', 'progress']),
    methods: {
      ...mapActions(['editTherapy', 'uploadImage']),
      ...mapMutations(['setImageURL']),
      onFileSelect(image) {
        this.uploadImage(image, 'therapies')
      }
    },
    watch: {
      '$route' (to, from) {
      // react to route changes...
      console.log('changed');
      }
    },
    beforeRouteUpdate (to, from, next) {
   // react to route changes...
   // don't forget to call next()
    console.log('changed 3');
    next()
   }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .edit-therapy {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 811px;
    min-height: 100vh;
    .new-therapy-title {
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
      button {
        height: 40px;
      }
    }
  }

  .ui.progress:first-child {
    margin-bottom: 0;
  }
</style>
