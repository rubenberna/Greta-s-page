<template>
  <div class="navbar-admin">
    <router-link :to="{ name: 'home' }">
      <sui-button>
        Home
      </sui-button>
    </router-link>
    <router-link :to="{ name: 'about' }">
      <sui-button basic secondary class="about">
        About
      </sui-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavbarAdmin'
}
</script>

<style lang="scss" scoped>
  .navbar-admin {
    padding: 50px;
    width: 17%;
    justify-content: space-around;
    display: flex;
  }
</style>
