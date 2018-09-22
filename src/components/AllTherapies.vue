<template>
  <div class="all-therapies container">
    <div class="all-therapies-label">
      <h5>Treatments</h5>
    </div>
    <div v-for="therapy in therapies"
         :key="therapy.id">
    <div class="all-therapies-card">
      <div class="all-therapies-card-image">
        <sui-image :src='therapy.image' size="large" />
      </div>
      <div class="all-therapies-card-description">
        <h1>{{therapy.teaser}}</h1>
        <div class="all-therapies-card-description-availability">
          <Booking :therapy='therapy'></Booking>
          <span>{{therapy.availability}}</span>
        </div>
      </div>
    </div>
    <!-- <p class="all-therapies-card-text">
      {{therapy.indications}}.
    </p>
    <span style="font-weight:bold">Read More <font-awesome-icon icon="coffee" /> </span>
    <br>
    <br> -->
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
    h5 {
      font-size: 1rem;
    }
  }
  .all-therapies-card {
    display: flex;
    max-width: 750px;
    height: 350px;
    justify-content: space-between;
    margin-bottom: 78px;

    .all-therapies-card-image {
     width: 50%;
     height: inherit;
     margin-right: 1px;
     position: relative;
     overflow: hidden;
     display: inline-block;
     // background-position: center center;
     // background-repeat: no-repeat;
     // overflow: hidden;
     // object-fit: cover;
     // object-position: center;
     // background-size: cover;
     img {
       position: absolute;
       left: 50%;
       top: 50%;
       width: 90%;
       height: auto;
       -webkit-transform: translate(-50%,-50%);
           -ms-transform: translate(-50%,-50%);
               transform: translate(-50%,-50%);
       // width: 100%;
       // height: auto;
     }
    }

    .all-therapies-card-description {
      display: flex;
      flex-direction: column;
      max-width: 45%;
      max-height: 250px;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      font-family: 'Raleway', sans-serif;
      line-height: 1.2;
      font-weight: 400px;
      h1 {
        font-size: 2.2rem;
      }

      .all-therapies-card-description-availability {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        span {
          padding: 9px 15px;
          font-size: 12px;
          letter-spacing: .10rem;
          text-transform: uppercase;
          border-right: 1px solid $light-grey;
          border-bottom: 1px solid $light-grey;
        }
      }
    }
  }

  .all-therapies-card-text {
    max-width: 750px;
    margin-top: -40px;
    line-height: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: $font-family-p;
    font-weight: $font-weight-p;
  }
</style>
