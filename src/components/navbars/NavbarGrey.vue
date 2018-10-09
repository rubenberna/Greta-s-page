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
          <sui-dropdown text="Treatments">
            <sui-dropdown-menu>
               <sui-dropdown-item v-for='therapy in therapies' :key='therapy.id'>
                 <a
                  @click.prevent="storeTherapy(therapy); router(`/therapy/${therapy.name}`);">
                  {{therapy.name}}
                </a>
               </sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('About')"
          content="About"
          @click.prevent="select('About'); router('/about');"
          />
        </sui-menu-menu>
        <sui-menu-menu position="right"
                       v-if='currentUser'
                       class='profile-menu'>
          <sui-dropdown :text='profile.name'>
            <sui-dropdown-menu>
              <sui-dropdown-item v-if='profile.isAdmin'
                                 @click.prevent="router('/management');">
                Manage
              </sui-dropdown-item>
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
  import qs from 'qs'

  export default {
    name: 'navbarWhite',
    data() {
      return {
        active: 'About',
        items: ['Home', 'About', 'Treatments'],
      };
    },
    computed: {
      ...mapGetters(['therapies', 'currentUser', 'profile'])
    },
    methods: {
      ...mapActions(['logout', 'loggedIn', 'getProfile', 'storeTherapy']),
      isActive(name) {
        return this.active === name
      },
      select(name) {
        this.active = name
      },
      router(path) {
        this.$router.push(path)
      },
      setActive() {
        const path = window.location.pathname
        if (path === '/about') this.active = 'About'
        else this.active = 'Treatments'
      }
    },
    created() {
      this.loggedIn()
      this.setActive()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .navbar {
    padding-left: 30px;
    .navbar-menu {
      height: 65px;
      color: $color-heading;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .ui.menu .ui.dropdown {
        display: flex;
        align-items: center;
        font-size: 17px;
        margin-left: 3px;
        margin-right: 3px;
        &:hover {
          color: $color-heading !important;
          opacity: 0.8;
        }
        .menu>.item:hover {
          color: black !important;
        }
      }

      .ui.secondary.pointing.menu {
        border-bottom: 0px;
        margin-left: -13px;
        .item {
          font-size: 17px;
          color: $color-heading;
          &:hover {
            color: $color-heading !important;
            opacity: 0.8;
            }
        }
        .active.item {
          color: $color-heading;
          border-bottom: 2px solid $color-heading;
          &:hover {
            color: $color-heading;
            opacity: 0.8;
            border-color: $color-heading;
          }
        }
      }
      .profile-menu {

      }
    }
  }
  .therapy-item {
    color: $color-heading;
    text-decoration: none;
  }

</style>
