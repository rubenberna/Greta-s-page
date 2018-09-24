<template>
  <div class="all-therapies container">
    <h5 class="all-therapies-label">Treatments</h5>
    <div class="all-therapies-group"
         v-for="therapy in therapies"
         :key="therapy.id">
      <div class="all-therapies-card">
        <h1 class="all-therapies-card-teaser">{{therapy.teaser}}</h1>
        <div class="all-therapies-card-image">
          <sui-image :src='therapy.image' size="large"/>
        </div>
        <div class="all-therapies-card-description-availability">
          <Booking :therapy='therapy'></Booking>
          <sui-button>
            {{therapy.availability}}
          </sui-button>
        </div>
      </div>
      <div class="all-therapies-description">
        <p class="all-therapies-card-text">
          {{therapy.description}}.
        </p>
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
    font-size: 14px;
  }

  .all-therapies-group {
    display: flex;
    max-width: 735px;
    height: 375px;
    justify-content: space-between;
    box-shadow: 0 1px 5px 0 rgba(0,0,0,0.07),0 1px 0 0 rgba(0,0,0,0.03);
    background: white;
    transition: all 0.3s ease;
    margin-bottom: 78px;
    padding: 9px;
    .all-therapies-card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 50%;
      height: 100%;
      margin-right: 1px;
      .all-therapies-card-teaser {
        text-align: center;
        justify-content: center;
        width: 80%;
        font-family: 'Raleway', sans-serif;
        line-height: 1.2;
        font-weight: 400px;
      }
      .all-therapies-card-image {
      position: relative;
      overflow: hidden;
      display: inline-block;
      margin: 0 auto;
      width: 55%;
      height: 50%;
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
    .all-therapies-card-description-availability {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 300px;
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
    .all-therapies-description {
      width: 50%;
      display: flex;
      align-items: center;
    }
  }

  h1{
    font-size: 2.4rem;
  }

</style>
