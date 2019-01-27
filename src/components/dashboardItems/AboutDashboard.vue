<template>
  <div class="about-dashboard">
    <heading size='l'
             class="edit-about-title">
             Edit About
    </heading>
    <div class="row about-edit">
      <form class="col s12">
        <div class="row">
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
            <textarea id="textarea1" class="materialize-textarea" v-model='about.text'/>
          </div>
        </div>
        <div class="action-buttons">
          <a class="waves-effect waves-light btn" style="color:white" @click='editAbout(about)'>update</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Heading from '@/components/typography/Heading'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'about-dashboard',
    components: {
      Heading
    },
    computed: mapGetters(['about', 'progress']),
    methods: {
      ...mapActions(['editAbout', 'uploadImage']),
      onFileSelect(image) {
        this.uploadImage(image, 'about')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .about-edit {
    width: 600px;
  }

</style>
