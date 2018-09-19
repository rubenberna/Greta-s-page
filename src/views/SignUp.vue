<template>
  <div class="signUp container">
    <div class="signUp-title">
      <h4>New account</h4>
    </div>
    <sui-form>
      <sui-form-field>
        <label>Name</label>
        <input v-model='user.name'
               placeholder="Name" >
      </sui-form-field>
      <sui-form-field>
        <label>Email address</label>
        <input v-model='user.email'
               placeholder="Email address" >
      </sui-form-field>
      <sui-form-field>
        <label>Password</label>
        <input v-model='user.password'
               type="password"
               placeholder="Password" >
      </sui-form-field>
      <sui-form-field>
        <sui-button @click.prevent='signUp(user)'
                    type="submit">
                    Sign-up
        </sui-button>
          <p class="signUp-error_msg">{{ errorMsg }}</p>
          <span class="signUp-nav">Or go back to the <router-link to="/" style="font-weight:bold">Homepage</router-link></span>
      </sui-form-field>
    </sui-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'signUp',
    data(){
      return {
        user: {
          name: null,
          email: null,
          password: null
        }
      }
    },
    methods: mapActions(['signUp']),
    computed: mapGetters(['errorMsg'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';
  
  .signUp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 350px;
    .signUp-title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .signUp-error_msg {
      color: $danger;
      padding-top: 10px;
    }
  }
</style>
