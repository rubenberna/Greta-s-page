<template>
  <div class="login container">
    <div class="login-title">
      <h4>Login please</h4>
    </div>
    <sui-form>
      <sui-form-field>
        <label>Email address</label>
        <input placeholder="Email address"
               v-model='user.email'>
      </sui-form-field>
      <sui-form-field>
        <label>Password</label>
        <input type="password"
               placeholder="Password"
               v-model='user.password'>
      </sui-form-field>
      <sui-form-field>
        <span>No account yet? You can <router-link to="/sign-up" style="font-weight:bold">create one</router-link></span>
      </sui-form-field>
        <sui-button @click.prevent='login(user)'
                    type="submit">
                    Enter
        </sui-button>
    </sui-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'login',
    data(){
      return {
        user: {
          email: null,
          password: null
        }
      }
    },
    methods: mapActions(['login'])
  }
</script>

<style lang="scss" scoped>
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 350px;
    .login-title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
</style>
