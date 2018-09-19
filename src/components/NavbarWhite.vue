<template>
  <div class="navbar">
    <section class="navbar-menu">
      <sui-menu pointing secondary >
       <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('Home')"
          content="Home"
          @click.prevent="select('Home'); router('/');"
          />
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('About')"
          content="About"
          @click.prevent="select('About'); router('/about');"
          />
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <sui-dropdown text="Treatments">
            <sui-dropdown-menu>
              <sui-dropdown-item v-for='therapy in therapies' :key='therapy.id'>{{therapy.name}}</sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu-menu>
        <sui-menu-menu position="right"
                       v-if='currentUser'
                       class='profile-menu'>
          <sui-dropdown :text='currentUser.displayName'>
            <sui-dropdown-menu>
              <sui-dropdown-item @click='logout'>
                Logout
              </sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu-menu>
        <sui-menu-menu position="right"
                       v-else>
          <a
          is="sui-menu-item"
          :active="isActive('Login')"
          content="Login"
          @click.prevent="select('Login'); router('/login')"
          />
        </sui-menu-menu>
      </sui-menu>
    </section>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'navbarWhite',
    data() {
      return {
        active: 'Home',
        items: ['Home', 'About', 'Treatments'],
      };
    },
    computed: {
      ...mapGetters(['therapies', 'currentUser'])
    },
    methods: {
      ...mapActions(['fetchTherapies', 'logout']),
      isActive(name) {
        return this.active === name;
      },
      select(name) {
        this.active = name;
      },
      router(path) {
        this.$router.push(path)
      }
    },
    created() {
      this.fetchTherapies();
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

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
      .profile-menu {
        padding-left: 25px;
      }
    }
  }
</style>
