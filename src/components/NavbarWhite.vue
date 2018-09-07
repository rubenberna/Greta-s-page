<template>
  <div class="navbar">
    <section class="navbar-menu">
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
  </div>
</template>

<script>
  export default {
    name: 'navbar',
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
  .navbar {
    padding-left: 30px;
    .navbar-menu {
      height: 65px;
      color: white;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
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
      }
    }
  }
</style>
