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
  import { mapActions, mapGetters } from 'vuex'
  import firebase from 'firebase'

  export default {
    name: 'navbar',
    data() {
      return {
        active: 'About',
        items: ['Home', 'About', 'Treatments'],
      };
    },
    computed: {
      ...mapGetters(['therapies'])
    },
    methods: {
      ...mapActions(['fetchTherapies']),
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
      color: $dark-grey;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;

      .ui.menu .ui.dropdown {
        display: flex;
        align-items: center;
        font-size: 17px;
        &:hover {
          color: $dark-grey !important;
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
          color: $dark-grey;
          &:hover {
            color: $dark-grey !important;
            opacity: 0.8;
            }
        }
        .active.item {
          color: $dark-grey;
          border-bottom: 2px solid $dark-grey;
          &:hover {
            color: $dark-grey;
            opacity: 0.8;
            border-color: $dark-grey;
          }
        }
      }
    }
  }
</style>
