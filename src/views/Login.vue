<template>
  <div class="login container">
    <div class="login-title">
      <h2>Sign-in</h2>
    </div>
    <sui-form>
      <sui-form-field error>
        <label>Email address</label>
        <input placeholder="Email address" >
      </sui-form-field>
      <sui-form-field error>
        <label>Password</label>
        <input type="password"
               placeholder="Password" >
      </sui-form-field>
      <sui-form-field>
        <span>No account yet? You can <router-link to="/sign-up" style="font-weight:bold">create one</router-link></span>
      </sui-form-field>
        <sui-button @click="login"
                    type="submit">
                    Enter
        </sui-button>
    </sui-form>
  </div>
</template>

<script>
import router from '../router.js'

export default {
  name: 'login',
  methods: {
    login() {
      router.push('/');
    }
  }
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
