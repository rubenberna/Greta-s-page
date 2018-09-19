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
        <p class="login-error_msg">{{ errorMsg }}</p>
        <span>No account yet? You can <router-link to="/sign-up" style="font-weight:bold">create one</router-link></span>
      </sui-form-field>
      <div class="login-submit">
        <sui-button type="submit"
                    @click.prevent='login(user)'>
                    Enter
      </sui-button>
      <sui-button basic negative
                  @click.prevent='home'>
                  Back</sui-button>
      </div>
    </sui-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

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
    methods: {
      ...mapActions(['login']),
      home() {
        this.$router.push('/')
      }
    },
    computed: mapGetters(['errorMsg'])
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
    .login-error_msg {
      color: red;
    }
    .login-submit {
      display: flex;
    }
  }
</style>
