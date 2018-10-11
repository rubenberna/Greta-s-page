<template>
  <div class="events">
    <div class="events-heading">
      <heading class="events-heading_title"> Events </heading>
      <router-link :to="{ name: 'newEvent'}">
        <heading size='s'
                 uppercase
                 weight='semibold'> New
      </heading>
    </router-link>
    </div>
    <sui-table fixed single-line>
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell>Name</sui-table-header-cell>
          <sui-table-header-cell>Date</sui-table-header-cell>
          <sui-table-header-cell>Description</sui-table-header-cell>
          <sui-table-header-cell>Action</sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <sui-table-body v-for="eventObj in events" :key="eventObj.id" selectable>
        <sui-table-row class="events-item">
          <sui-table-cell>{{ eventObj.name }}</sui-table-cell>
          <sui-table-cell>{{ eventObj.date }}</sui-table-cell>
          <sui-table-cell>{{ eventObj.description }}</sui-table-cell>
          <sui-table-cell class="events-actions">
            <span class="events-actions_item" @click.prevent="storeEvent(eventObj); edit(eventObj)">Edit</span>
            <span class="events-actions_item" @click.prevent='deleteEvent(eventObj.id)'>Delete</span>
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
    name: 'events-dashboard',
    components: {
      Heading
    },
    computed: {
      ...mapGetters(['events']),
    },
    methods: {
      ...mapActions(['storeEvent', 'deleteEvent']),
      edit(eventObj) {
        this.$router.push({ name: 'editEvent', params: { event_id: eventObj.id}})
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../style/main.scss';

  .events {
    width: 64%;

    .events-heading {
      display: flex;
      align-items: center;
      width: 19%;
      justify-content: space-between;
      .events-heading_title {
        display: inline-block;
        line-height: 1em;
        letter-spacing: .135em;
      }
    }
    th:nth-of-type(3) {
      width: 40%;
    }
    th:nth-of-type(4) {
      width: 17%;
      text-align: center;
    }

    .events-actions {
      text-align: right;
      display: flex;
      justify-content: space-around;
      cursor: pointer;
      .events-actions_item:hover {
        font-weight: $semibold;
      }
    }
    .events-item:hover {
      background: rgba(203, 155, 66, 0.1);
      cursor: default;
    }
  }
</style>
