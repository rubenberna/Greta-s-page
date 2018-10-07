<template>
  <div class="new-therapy container">
    <h3 class="new-therapy-title">Create new Therapy</h3>
    <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s4">
          <input id="name" type="text" class="validate" v-model='therapy.name'>
          <label for="name">Name of therapy</label>
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
          <textarea id="textarea1" class="materialize-textarea" v-model='therapy.description'/>
          <label for="textarea1">Describe this therapy</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" v-model='therapy.method' />
          <label for="textarea1">How is the treatment?</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea" v-model='therapy.indications' />
          <label for="textarea1">What is it indicated for?</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s4">
          <input id="price" type="number" class="validate" v-model='therapy.price'>
          <label for="price">Price</label>
        </div>
        <div class="input-field col s4">
          <input id="availability" type="text" class="validate" v-model='therapy.availability'>
          <label for="availability">Availability</label>
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
    name: 'newTherapy',
    data () {
      return {
        therapy: {
          availability: null,
          description: null,
          indications: null,
          method: null,
          name: null,
          image: null,
          price: null,
          teaser: null
        }
      }
    },
    methods: {
      ...mapActions(['createTherapy', 'uploadImageTherapy']),
      onFileSelect(image) {
        this.uploadImageTherapy(image)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-therapy {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 811px;
    height: 100vh;
    .new-therapy-title {
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
