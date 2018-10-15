<template>
  <div>
    <div class="manage-dashboard">
      <div class="manage-menu-wrapper">
        <div class="manage-menu">
          <heading class="manage-menu_item home"
                   size='s'
                   weight='semibold'
                   @click.native='goHome'> Home </heading>
          <heading class="manage-menu_item"
                   size='s'
                   :class="getStatusClass('Therapies')"
                   @click.native="getCurrentView('Therapies')">
                   Therapies
          </heading>
          <heading class="manage-menu_item"
                   size='s'
                   :class="getStatusClass('Events')"
                   @click.native="getCurrentView('Events')">
                   Events
          </heading>
          <heading class="manage-menu_item"
                   size='s'
                   :class="getStatusClass('Bookings')"
                   @click.native="getCurrentView('Bookings')">
                   Bookings
          </heading>
          <heading class="manage-menu_item"
                   size='s'
                   :class="getStatusClass('UsersNewsletter')"
                   @click.native="getCurrentView('UsersNewsletter')">
                   Users & Newsletter
          </heading>
        </div>
      </div>
      <div class="manage-view">
        <bookings v-if="currentView === 'Bookings'"/>
        <events v-if="currentView === 'Events'"/>
        <therapies v-if="currentView === 'Therapies'"/>
        <users-newsletter v-if="currentView === 'UsersNewsletter'"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Heading from '@/components/typography/Heading';
  import Bookings from '@/components/dashboardItems/BookingsDashboard'
  import Events from '@/components/dashboardItems/EventsDashboard'
  import Therapies from '@/components/dashboardItems/TherapiesDashboard'
  import UsersNewsletter from '@/components/dashboardItems/Users&NewsletterDashboard'
  import router from '../router'

  export default {
    name: 'manage',
    data () {
      return {
        currentView: null
      }
    },
    components: {
      Heading,
      Bookings,
      Events,
      Therapies,
      UsersNewsletter
    },
    computed: {
      ...mapGetters(['therapies'])
    },
    methods: {
      ...mapActions(['fetchNewsletter', 'fetchBookings', 'fetchUsers']),
      goHome() {
        router.push('/')
      },
      getStatusClass(name) {
        if (this.currentView === name) return 'active'
      },
      getCurrentView(name) {
        this.currentView = name
      }
    },
    created() {
      this.fetchNewsletter()
      this.fetchBookings()
      this.fetchUsers()
      this.currentView = 'Therapies'
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .manage-dashboard {
    display: flex;
    min-height: 100vh;
    .manage-menu-wrapper {
      // height: 100vh;
      width: 17%;
      background-color: $green;
      color: $white;
      display: flex;
      flex-direction: column;
      align-items: center;
      .manage-menu {
        height: 43%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .manage-menu_item {
          cursor: pointer;
        }
        .manage-menu_item.home {
          text-transform: uppercase;
          &:hover {
            color: orange;
          }
        }
      }
    }

    .manage-view {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
  }

  .active {
    color: orange;
  }

</style>
