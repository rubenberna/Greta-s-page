<template>
  <div class="banner" style="background-image: url('http://res.cloudinary.com/megslist/image/upload/v1535983801/karl-fredrickson-15871-unsplash.jpg')">
    <section class="banner-menu">
      <sui-menu pointing secondary >
        <a
        is="sui-menu-item"
        v-for="item in items"
        :active="isActive(item)"
        :key="item"
        :content="item"
        @click="select(item)"
        />
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click="select('Logout')"
          />
        </sui-menu-menu>
      </sui-menu>
    </section>
    <section class="banner-title">
      <h1>Terug in balans</h1>
    </section>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      active: 'Home',
      items: ['Home', 'Messages', 'Friends'],
    };
  },
  methods: {
    isActive(name) {
      return this.active === name;
    },
    select(name) {
      this.active = name;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  .banner {
    color: white;
    height: 100vh;
    background-size: cover !important;
  }

  .banner-menu {
    height: 65px;
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .banner-title {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin-bottom: 300px;
      font-family: 'Raleway', sans-serif;
      font-size: 60px;
      font-weight: bolder;
    }
  }

  .ui.secondary.pointing.menu .active.item {
    color: white;
    border-color: white;
    &:hover {
      color: white;
      opacity: 0.8;
      border-color: white;
    }
  }

  .ui.secondary.pointing.menu .item {
    font-size: 17px;
    color: white;
    border-bottom: 2px solid rgba(255,255,255,.15);
    &:hover {
      color: white !important;
      opacity: 0.8;
      // border-bottom: white;
    }
  }
</style>
