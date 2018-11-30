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
          <sui-dropdown text="Behandelingen">
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
          :active="isActive('Events')"
          content="Events"
          @click.prevent="select('Events'); scrollEvents()"
          />
        </sui-menu-menu>
        <sui-menu-menu position="right">
          <a
          is="sui-menu-item"
          :active="isActive('Even voorstellen')"
          content="Even voorstellen"
          @click.prevent="select('Even voorstellen'); router('/about');"
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

  export default {
    name: 'navbarWhite',
    data() {
      return {
        active: 'Home',
        items: ['Home', 'Even voorstellen', 'Behandelingen', 'Events'],
      };
    },
    computed: {
      ...mapGetters(['therapies', 'currentUser', 'profile'])
    },
    methods: {
      ...mapActions(['logout', 'loggedIn', 'getProfile', 'storeTherapy']),
      isActive(name) {
        return this.active === name;
      },
      select(name) {
        this.active = name;
      },
      router(path) {
        this.$router.push(path)
      },
      scrollEvents() {
        document.querySelector('#events').scrollIntoView({
          behavior: 'smooth'
        });
      }
    },
    created() {
      this.loggedIn();
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .navbar {
    padding-left: 30px;
    .navbar-menu {
      height: 65px;
      color: $white;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .ui.menu .ui.dropdown {
        display: flex;
        align-items: center;
        font-size: 17px;
        margin-left: 13px;
        margin-right: 13px;
        &:hover {
          color: $white !important;
          opacity: 0.8;
        }
        .menu>.item {
          color: $color-heading !important;
          &:hover {
            color: black !important;
          }
        }
      }

      .ui.secondary.pointing.menu {
        border-bottom: 0px;
        .item {
          font-size: 17px;
          color: $white;
          margin-left: -8px;
          margin-right: -8px;
          &:hover {
            color: $white !important;
            opacity: 0.8;
            }
        }
        .active.item {
          color: $white;
          border-bottom: 2px solid $white;
          &:hover {
            color: $white;
            opacity: 0.8;
            border-color: white;
          }
        }
      }
      .profile-menu {
      }
    }
  }
  .therapy-item {
    color: $color-text;
    text-decoration: none;
  }

</style>
