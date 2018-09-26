<template>
  <div class="all-therapies container">
    <h5 class="all-therapies-label">Treatments</h5>

    <div class="all-therapies-group"
         v-for="therapy in therapies"
         :key="therapy.id">
       <h1 class="all-therapies-card-teaser">{{therapy.teaser}}</h1>

       <div class="all-therapies-card_container">
           <div class="all-therapies-card-image">
             <sui-image :src='therapy.image' size="large"/>
           </div>
         <div class="all-therapies-description">
           <p class="all-therapies-card-text">
             {{therapy.description}}
           </p>
         </div>
       </div>

       <div class="all-therapies-card-availability">
         <Booking :therapy='therapy'></Booking>
         <sui-button>
           {{therapy.availability}}
         </sui-button>
       </div>

    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Booking from '@/components/Booking'

  export default {
    name: 'allTherapies',
    computed: mapGetters(['therapies']),
    components: {
      Booking
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  .all-therapies-label {
    text-transform: uppercase;
    font-family: "Open Sans";
    margin-bottom: 20px;
    font-weight: $font-weight-p;
    letter-spacing: .24rem;
    line-height: 1.8;
    font-style: normal;
    font-size: 18px;
  }

  .all-therapies-group {
    max-width: 600px;
    height: 400px;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
    background: white;
    margin-bottom: 78px;
    padding: 9px;
    &:hover {
      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
    }

    .all-therapies-card-teaser {
      justify-content: center;
      width: 100%;
      font-family: 'Raleway', sans-serif;
      line-height: 1.2;
      font-weight: 400px;
      padding-left: 16px;
      padding-top: 16px;
    }
    .all-therapies-card_container {
      display: flex;
      justify-content: space-around;
      padding-top: 16px;
      padding-bottom: 16px;
      height: 65%;

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
        $font-size: 19.2px;
        $line-height: 1.4;
        $lines-to-show: 6;

        width: 50%;
        display: flex;
        padding-right: 16px;
        height: 80%;
        p {
          display: block; /* Fallback for non-webkit */
          display: -webkit-box;
          height: $font-size*$line-height*$lines-to-show; /* Fallback for non-webkit */
          margin: 0 auto;
          font-size: $font-size;
          line-height: $line-height;
          -webkit-line-clamp: $lines-to-show;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .all-therapies-card-availability {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: right;
      button {
        height: 38px;
        padding: 9px 15px;
        font-size: 11px;
        letter-spacing: .10rem;
        text-transform: uppercase;
        border-right: 1px solid $light-grey;
        border-bottom: 1px solid $light-grey;
        border-radius: 0px;
        background-color: white;
        font-family: $font-family-p;
        font-weight: $font-weight-p;
        cursor: inherit;
      }
    }
  }

  h1 {
    font-size: 2.4rem;
  }

</style>
