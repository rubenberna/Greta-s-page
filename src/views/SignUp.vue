<template>
  <div class="signUp container">
    <div class="signUp-title">
      <h3>Let's create a new account</h3>
    </div>
    <sui-form>
  <sui-form-field>
    <label>Name</label>
    <input placeholder="Name" >
  </sui-form-field>
  <sui-form-field>
    <label>Email address</label>
    <input placeholder="Email address" >
  </sui-form-field>
  <sui-form-field>
    <label>Password</label>
    <input placeholder="Password" >
  </sui-form-field>
  <sui-form-field>
  <sui-button type="submit">Enter</sui-button> <span>Or go back to the Homepage</span>
</sui-form-field>
</sui-form>
  </div>
</template>

<script>
export default {
  name: 'signUp'
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
