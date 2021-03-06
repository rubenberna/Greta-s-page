<template>
  <div id="events">
    <div class="events-intro">
      <heading weight='bold'
               size='l'>
        Helemaal welkom voor de volgende sessies
      </heading>
      <paragraph size='xl'>
          Meestal zijn onze events heel snel volgeboekt. Schrijf je dus snel in zodat je plaats gereserveerd is.
      </paragraph>
    </div>
    <div v-for="ev in futureEvents" :key="ev.id">
      <div class="events-frame">
        <div class="events-frame-image">
          <clazy-load :src='ev.image'>
            <transition name='fade' appear>
              <img :src='ev.image'>
              <div slot="placeholder">
                <loader/>
              </div>
            </transition>
          </clazy-load>
        </div>

        <div class="events-frame-description">
          <h5 class="title">{{ ev.name }}.</h5>
          <span class="small-border"/>
          <p class="description">{{ ev.description }}</p>
          <event-button />
          <div class="coordinates">
            <p class="date">{{ ev.date | moment("dddd, MMMM Do YYYY") }}</p>
            <p class="address">{{ ev.address }}</p>
          </div>
        </div>
      </div>
      <div class="separation">
        <span/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Heading from './typography/Heading'
  import Paragraph from './typography/Paragraph'
  import Loader from '@/components/Loader'
  import EventButton from '@/components/buttons/BookingEvent'

  export default {
    name: 'events',
    components: {
      Heading,
      Paragraph,
      Loader,
      EventButton
    },
    computed: {
      ...mapGetters(['events', 'futureEvents']),
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  #events {
    margin: 50px 0 95px 95px;

    .events-intro {
      padding: 20px;
    }

    .events-frame {
      display: flex;
      height: 546px;
      width: 70%;
      justify-content: space-around;
      align-items: flex-start;
      margin-left: 23px;
      margin-top: 15px;

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
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 38px;
        cursor: default;
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
          height: 49%;
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

    .separation {
      width: 36.5%;
      height: 100px;
      display: flex;
      border-right: 7px solid black;
      margin: 30px 0 30px 0;
    }
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 2s;
  }

</style>
