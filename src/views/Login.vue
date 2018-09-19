<template>
  <div class="login container">
    <div class="login-title">
      <h4>Login</h4>
    </div>
    <sui-form>
      <sui-form-field>
        <label>Email address</label>
        <input placeholder="Email address"
               v-model='user.email'>
      </sui-form-field>
      <sui-form-field>
        <section class='login-password'>
          <label>Password</label>
          <label>Reset password</label>
        </section>
        <input type="password"
               placeholder="******"
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
        },
        emailErr: null
      }
    },
    methods: {
      ...mapActions(['login', 'resetPassword']),
      home() {
        this.$router.push('/')
      },
      forgottenPassword() {
        this.resetPassword(this.user.email)
      }
    },
    computed: mapGetters(['errorMsg'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

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
    .login-options {
      display: flex;
      flex-direction: column;
      .login-error_msg {
        color: red;
      }
    }
    .login-password {
      width: 350px;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      label {
        color: black;
        &:last-child {
          color: #bbbbbb;
          align-self: flex-end;
          font-weight: lighter;
          cursor: pointer;
          &:hover {
            color: $dark-grey;
          }

        }
      }
    }
  }
</style>
