<template>
  <div class="signUp container">
    <div class="signUp-title">
      <h4>Nieuw account</h4>
    </div>
    <sui-form>
      <sui-form-field>
        <label>Naam</label>
        <input v-model='user.name'
               placeholder="Naam" >
      </sui-form-field>
      <sui-form-field>
        <label>Email adres</label>
        <input v-model='user.email'
               placeholder="Email adres" >
      </sui-form-field>
      <sui-form-field>
        <label>Paswoord</label>
        <input v-model='user.password'
               type="password"
               placeholder="Paswoord" >
      </sui-form-field>
      <sui-label v-if='errorMsg || err'
                 basic color="red" pointing='above'
                 class="notification">
                 {{err}} {{errorMsg}}
      </sui-label>
      <sui-form-field>
        <sui-button @click.prevent='checkSignUp'
                    type="submit">
                    Sign-up
        </sui-button>
        <clip-loader :loading='loading' />
        <span class="signUp-nav">Terug naar de <router-link to="/" style="font-weight:bold">Homepage</router-link></span>
      </sui-form-field>
    </sui-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

  export default {
    name: 'signUp',
    data(){
      return {
        user: {
          name: null,
          email: null,
          password: null
        },
        err: null
      }
    },
    components: {
      ClipLoader
    },
    computed: mapGetters(['errorMsg', 'successMsg', 'loading']),
    methods: {
      ...mapActions(['signUp', 'clearMsgs']),
      checkSignUp() {
        if (!this.user.name || !this.user.email || !this.user.password) {
          this.err = "Gelieve alle velden in te vullen AUB"
        } else {
          this.err = null
          this.signUp(this.user)
        }
      }
    },
    created() {
      this.clearMsgs()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 350px;
    .signUp-title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .notification {
      margin-bottom: 12px;
    }
  }
</style>
