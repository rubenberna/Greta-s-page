<template>
  <div class="all-therapies container">
    <div class="row">
      <div class="all-therapies-group col-xs-6"
           v-for="therapy in therapies"
           :key="therapy.id">
          <h1 class="all-therapies-card-teaser"
              @click.prevent="storeTherapy(therapy); router(`/therapy/${therapy.name}`)">
              {{therapy.name}}
          </h1>
          <div class="all-therapies-card_container"
               @click.prevent="storeTherapy(therapy); router(`/therapy/${therapy.name}`)">
            <div class="all-therapies-card-image">
               <sui-image :src='therapy.image' size="large"/>
            </div>
            <div class="all-therapies-description">
              <p class="all-therapies-card-text">
                  {{therapy.description}}
              </p>
              <p class="all-therapies-card-text_more">
                Read more
             </p >
            </div>
          </div>
            <div class="all-therapies-card-availability">
              <Booking :therapy='therapy'></Booking>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import Booking from '@/components/Booking'
  import Heading from '@/components/typography/Heading';
  import BodyText from '@/components/typography/BodyText';

  export default {
    name: 'allTherapies',
    computed: mapGetters(['therapies']),
    components: {
      Booking,
      Heading,
      BodyText
    },
    methods: {
      ...mapActions(['storeTherapy']),
      router(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .all-therapies {
    margin-top: 122px;
    display: grid;

    .all-therapies-group {
      width: 600px;
      height: 400px;
      box-shadow: 0 1px 5px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
      background: rgba(177, 209, 197, 0.3);
      margin-bottom: 78px;
      padding: 9px;
      margin: 11px;
      transition: all 1s;
      &:hover {
        box-shadow: 2px 6px 9px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
      }

      .all-therapies-card-teaser {
        justify-content: center;
        width: 100%;
        line-height: 1.2;
        font-weight: $semibold;
        padding-left: 16px;
        padding-top: 16px;
        font-family: $font-family-h;
        font-size: $heading-size-m;
        opacity: 0.8;
        cursor: pointer;
      }
      .all-therapies-card_container {
        display: flex;
        justify-content: space-around;
        padding-top: 16px;
        padding-bottom: 16px;
        height: 65%;
        cursor: pointer;

        .all-therapies-card-image {
          position: relative;
          overflow: hidden;
          margin-right: 1px;
          width: 35%;
          img {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 100%;
            height: auto;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
          }
        }

        .all-therapies-description {
          // details for text ellipsis
          $font-size: 19px;
          $line-height: 1.368;
          $lines-to-show: 6;

          width: 50%;
          display: flex;
          padding-right: 16px;
          height: 80%;
          display: inline-block; /* Fallback for non-webkit */
          display: -webkit-inline-box;
          color: $color-text-light;
          p {
            font-family: $font-family-p;
            display: inline-block; /* Fallback for non-webkit */
            display: -webkit-inline-box;
            height: $font-size*$line-height*$lines-to-show; /* Fallback for non-webkit */
            margin: 0 auto;
            font-size: $font-size;
            line-height: $line-height;
            -webkit-line-clamp: $lines-to-show;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            &:last-child {
              font-weight: 600;
              font-size: 15px;
            }
          }
          .all-therapies-card-text_more {
            color: $color-text;
          }
        }
      }
      .all-therapies-card-availability {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: right;
        width: 91%;
      }
    }
  }

</style>
