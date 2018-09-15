<template>
  <div class="navbar">
    <section class="navbar-menu">
      <sui-menu pointing secondary >
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('Home')"
          content="Home"
          @click.prevent="select('Home'); "
          />
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('About')"
          content="About"
          @click.prevent="select('About'); "
          />
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <sui-dropdown text="Treatments">
            <sui-dropdown-menu>
              <sui-dropdown-item>New</sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('Logout')"
          content="Logout"
          @click.prevent="select('Logout'); "
          />
        </sui-menu-menu>
      </sui-menu>
    </section>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'navbar',
    data() {
      return {
        active: 'Home',
        items: ['Home', 'About', 'Treatments'],
      };
    },
    methods: {
      isActive(name) {
        return this.active === name;
      },
      select(name) {
        this.active = name;
      },
      logout() {
        firebase
          .auth()
          .signOut()
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

      .ui.menu .ui.dropdown {
        display: flex;
        align-items: center;
        font-size: 17px;
        &:hover {
          color: white !important;
          opacity: 0.8;
        }
        .menu>.item:hover {
          color: black !important;
        }
      }

      .ui.secondary.pointing.menu {
        border-bottom: 0px;
        .item {
          font-size: 17px;
          color: white;
          &:hover {
            color: white !important;
            opacity: 0.8;
            }
        }
        .active.item {
          color: white;
          border-bottom: 2px solid white;
          &:hover {
            color: white;
            opacity: 0.8;
            border-color: white;
          }
        }
      }
    }
  }
</style>
