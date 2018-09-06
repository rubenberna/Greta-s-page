<template>
  <div class="login container">
    <div class="login-title">
      <h2>Sign-in</h2>
    </div>
    <sui-form>
  <sui-form-field>
    <label>Email address</label>
    <input placeholder="Email address" >
  </sui-form-field>
  <sui-form-field>
    <label>Password</label>
    <input placeholder="Password" >
  </sui-form-field>
  <sui-form-field>
    <span>No account yet? You can create one</span>
  </sui-form-field>
  <sui-button type="submit">Enter</sui-button>
</sui-form>
  </div>
</template>

<script>
export default {
  name: 'login'
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
