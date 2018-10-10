<template>
  <div>
    <div class="manage-wrapper">
      <div class="manage-menu">
        <heading class="manage-menu_item home"
                 size='s'
                 weight='semibold'
                 @click.native='goHome'> Home </heading>
        <heading class="manage-menu_item"
                 size='s'> Therapies </heading>
        <heading class="manage-menu_item"
                 size='s'> Events </heading>
        <heading class="manage-menu_item"
                 size='s'> Bookings </heading>
        <heading class="manage-menu_item"
                 size='s'> Users & Newsletter </heading>
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
      ...mapActions(['fetchTherapies', 'fetchNewsletter']),
      goHome() {
        router.push('/')
      }
    },
    created() {
      this.fetchTherapies()
      this.fetchNewsletter()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .manage-wrapper {
    height: 100vh;
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
        &:hover {
          color: orange;
        }
      }
      .manage-menu_item.home {
        text-transform: uppercase;
      }
    }
  }

</style>
