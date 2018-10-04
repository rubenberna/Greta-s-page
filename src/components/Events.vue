<template>
  <div>
    <div class="events container" v-for="ev in events" :key="ev.id">
      <div class="events-frame">
        <div class="events-frame-image">
          <img :src='ev.image'>
        </div>
        <div class="events-frame-description">
          <h5 class="title">{{ ev.name }}.</h5>
          <span class="small-border"/>
          <p class="description">{{ ev.description }}</p>
          <div class="coordinates">
            <p class="date">{{ ev.date | moment("dddd, MMMM Do YYYY") }}</p>
            <p class="address">{{ ev.address }}</p>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import moment from 'moment';

  export default {
    name: 'events',
    computed: {
      ...mapGetters(['events']),
    },
    methods: mapActions(['fetchEvents']),
    created() {
      this.fetchEvents()
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .events-frame {
    display: flex;
    height: 605px;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 50px;

    .events-frame-image {
      height: 100%;
      width: 50%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        left: 50%;
        top: 33%;
        width: 100%;
        height: auto;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }
    }

    .events-frame-description {
      width: 50%;
      height: 89%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 38px;
      .title {
        font-size: 3.125rem;
        font-weight: $semibold;
        height: 15%;
      }
      .small-border {
        width: 10%;
        display: inline-block;
        border-bottom: 4px solid black;
      }
      .description {
        margin-top: 8%;
      }
      .coordinates {
        height: 118px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: $color-text-light;
        font-weight: $semibold;
        font-style: italic;
        .date {
          margin-bottom: -2px;
          text-transform: uppercase;
        }
      }
    }
  }

</style>
