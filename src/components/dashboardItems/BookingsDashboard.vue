<template>
  <div class="bookings">
    <div class="bookings-heading">
      <heading class="bookings-heading_title"> Appointments </heading>
    </div>
    <sui-table stackable single-line>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Date</sui-table-header-cell>
          <sui-table-header-cell>Therapy</sui-table-header-cell>
          <sui-table-header-cell>Client</sui-table-header-cell>
          <sui-table-header-cell>Phone</sui-table-header-cell>
          <sui-table-header-cell>Action</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body v-for="booking in bookings" :key="booking.id" selectable
                      v-if='!booking.archived'>
        <sui-table-row class="bookings-item">
          <sui-table-cell>{{ booking.date }}</sui-table-cell>
          <sui-table-cell>{{ booking.therapyName }}</sui-table-cell>
          <sui-table-cell>{{ booking.clientName }}</sui-table-cell>
          <sui-table-cell>{{ booking.phone }}</sui-table-cell>
          <sui-table-cell class="bookings-actions_item"
                          @click.prevent='archiveBooking(booking)'>
                          Archive
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
    </sui-table>
  </div>
</template>

<script>
  import Heading from '@/components/typography/Heading'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'bookings-dashboard',
    components: {
      Heading
    },
    computed: {
      ...mapGetters(['bookings'])
    },
    methods: {
      ...mapActions(['archiveBooking'])
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .bookings {
    width: 64%;

    .bookings-heading {
      display: flex;
      align-items: center;
      width: 19%;
      justify-content: space-between;
      margin-bottom: 15px;
      .bookings-heading_title {
        display: inline-block;
        line-height: 1em;
        letter-spacing: .135em;
      }
    }
    .bookings-item:hover {
      background: rgba(203, 155, 66, 0.1);
      cursor: default;
      .bookings-actions_item:hover {
        font-weight: $semibold;
        cursor: pointer;
      }
    }
  }
</style>
