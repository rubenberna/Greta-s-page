<template>
  <div class="login container">
    <div class="login-msg">
      {{ loginMsg }}
    </div>
    <div class="login-title">
      <h4>Login</h4>
    </div>
    <sui-form>
      <sui-form-field>
        <label>Email adres</label>
        <input placeholder="Email address"
               v-model='user.email'>
          <sui-label v-if='errorMsg || resetPass.error'
                     basic color="red" pointing='above'
                     class="notification">
                     {{resetPass.error}} {{errorMsg}}
          </sui-label>
          <sui-label v-if='successMsg'
                     basic color="green" pointing='above'
                     class="notification">
                     {{successMsg}}
          </sui-label>
      </sui-form-field>
      <sui-form-field>
        <section class='login-password'>
          <label>Paswoord</label>
          <label @click='newPassword'>Paswoord Reset</label>
        </section>
        <input type="password"
               placeholder="Password"
               v-model='user.password'>
      </sui-form-field>
      <sui-form-field>
        <span>Nog geen account? Je kan <router-link to="/sign-up" style="font-weight:bold" @click="clearMsgs">hier</router-link> een creëren</span>
      </sui-form-field>
      <div class="login-submit">
        <sui-button type="submit"
                    @click.prevent='login(user)'>
                    Enter
        </sui-button>
        <sui-button basic negative
                    @click.prevent='home'>
                    Terug
       </sui-button>
       <clip-loader :loading='loading'
                    class='loader'/>
      </div>
    </sui-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ClipLoader from 'vue-spinner/src/ClipLoader.vue';

  export default {
    name: 'login',
    data(){
      return {
        user: {
          email: null,
          password: null
        },
        resetPass: {
          error: null,
          success: null
        }
      }
    },
    props: {
      loginMsg: String
    },
    components: {
      ClipLoader
    },
    computed: mapGetters(['errorMsg', 'successMsg', 'loading']),
    methods: {
      ...mapActions(['login', 'resetPassword', 'clearMsgs']),
      home() {
        this.$router.push('/')
      },
      newPassword() {
        if (!this.user.email) {
          this.resetPass.error = "Vul beide velden is AUB"
          this.clearMsgs()
        } else {
          this.resetPass.error = null
          this.resetPassword(this.user.email)
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

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 350px;
    .login-msg {
      text-align: center;
      height: 50px;
      color: $steel;
    }
    .login-title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
    .notification {
      margin-bottom: 12px;
    }
    .login-password {
      width: 350px;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      label {
        color: black;
        &:last-child {
          color: $color-text-light;
          align-self: flex-end;
          font-weight: lighter;
          cursor: pointer;
          &:hover {
            color: $color-text;
          }
        }
      }
    }
    .login-submit {
      display: flex;
      .loader {
        margin-left: 14px;
      }
    }
  }
</style>
