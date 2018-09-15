<template>
  <div class="signUp container">
    <div class="signUp-title">
      <h3>Let's create a new account</h3>
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
        <sui-button @click='signUp'
                    type="submit">
                    Sign-up
        </sui-button>
                    <span>Or go back to the <router-link to="/" style="font-weight:bold">Homepage</router-link></span>
      </sui-form-field>
    </sui-form>
  </div>
</template>

<script>
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
    methods: {
      signUp() {
        }
    }
  }
</script>

<style lang="scss" scoped>
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
    span {
      margin-left: 10px;
    }
  }
</style>

<!--
firebase.auth().currentUser
if(user) {
  user.updateProfile({
    displayname: this.user.name -->
