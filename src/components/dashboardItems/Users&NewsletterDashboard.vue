<template>
  <div class="users-newsletter">
    <div class="users">
      <div class="users-newsletter-heading">
        <heading class="users-newsletter-heading_title"> Users </heading>
      </div>
      <sui-table stackable single-line>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Name</sui-table-header-cell>
            <sui-table-header-cell>Email</sui-table-header-cell>
            <sui-table-header-cell>Admin ?</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body v-for="user in allUsers" :key="user.id" selectable>
          <sui-table-row class="users-newsletter-item">
            <sui-table-cell>{{ user.name }}</sui-table-cell>
            <sui-table-cell>{{ user.email }}</sui-table-cell>
            <sui-table-cell>{{ user.isAdmin }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>

    <div class="newsletter">
      <div class="users-newsletter-heading">
        <heading class="users-newsletter-heading_title"> Newsletter </heading>
      </div>
      <sui-table stackable single-line>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell>Email</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body v-for="user in newsletterUsers" :key="user.id" selectable>
          <sui-table-row class="users-newsletter-item">
            <sui-table-cell>{{ user.email }}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>

  </div>
</template>

<script>
  import Heading from '@/components/typography/Heading'
  import { mapGetters } from 'vuex'

  export default {
    name: 'users-newsletter-dashboard',
    components: {
      Heading
    },
    computed: mapGetters(['allUsers', 'newsletterUsers'])
  }
</script>

<style lang="scss" scoped>
@import '../../../style/main.scss';

    .users-newsletter {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      .users {
        width: 40%;
      }

      .newsletter {
        width: 25%;
      }
      .users-newsletter-heading {
        display: flex;
        align-items: center;
        width: 19%;
        justify-content: space-between;
        margin-bottom: 15px;
        .users-newsletter-heading_title {
          display: inline-block;
          line-height: 1em;
          letter-spacing: .135em;
        }
      }
      .users-newsletter-item:hover {
        background: rgba(203, 155, 66, 0.1);
        cursor: default;
      }
    }
</style>
