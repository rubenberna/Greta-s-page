<template>
  <div>
    <NavbarGrey/>
    <div class="show" :style="{ backgroundImage: `linear-gradient(-225deg, rgba(96, 56, 19, 0.5) 0%, rgba(178, 159, 148, 0.5) 50%), url('${therapy.image}')` }">
      <h3 class="show-title">{{ therapy.name }}</h3>

      <div class="show-board">
        <div class="show-board-item">
          <h5 class="show-board-item_title">Wat is het ?</h5>
          <p class="show-board-item_text">{{ therapy.description }}</p>
        </div>
        <div class="show-board-item">
          <h5 class="show-board-item_title">Hoe werkt het ?</h5>
          <p class="show-board-item_text">{{ therapy.method }}</p>
        </div>
        <div class="show-board-item">
          <h5 class="show-board-item_title">Voor wie is het ?</h5>
          <p class="show-board-item_text">{{ therapy.indications }}</p>
        </div>
      </div>

      <div class="show-knobs container">
        <div class="show-knobs_item">
          <img src="../../style/assets/price.png"
               class="image-price">
          <span>{{ therapy.price }}€</span>
        </div>
        <div class="show-knobs_item">
          <img src="../../style/assets/calendar.png">
          <span>Beschikbaar: {{ therapy.availability }}</span>
        </div>
        <div class="show-knobs_item">
          <i class="far fa-check-square"></i>
          <booking :therapy='therapy' />
        </div>
      </div>
    </div>
    <div class="show-map">
      <google-map/>
    </div>
  </div>
</template>

<script>
  import NavbarGrey from '@/components/navbars/NavbarGrey'
  import { mapGetters } from 'vuex'
  import GoogleMap from '@/components/GoogleMap'
  import Booking from '@/components/buttons/BookingShow';

  export default {
    name: 'about',
    components: {
      NavbarGrey,
      GoogleMap,
      Booking
    },
    computed: mapGetters(['therapy'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .show {
    margin-top: 95px;
    margin-bottom: 95px;
    padding-bottom: 40px;
    height: 120vh;
    background-size: cover !important;
    width: 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    display: flex;
    flex-direction: column;
    .show-title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 35%;
      color: white;
      font-weight: 600;
      letter-spacing: .135em;
      font-family: $font-family-h;
    }
    .show-board {
      display: flex;
      justify-content: center;
      height: 600px;
      .show-board-item {
        display: flex;
        flex-direction: column;
        margin: 20px;
        width: 18%;
        height: 90%;
        align-items: center;
        background: white;
        padding: 50px;
        overflow-y: scroll;
        cursor: default;
        .show-board-item_title {
          display: inline-block;
          border-bottom: 3px solid #231f20;
          font-weight: 700;
          line-height: 1em;
          letter-spacing: .135em;
          padding-bottom: .125em;
          text-transform: uppercase;
          text-align: center;
        }
        .show-board-item_text {
          color: grey;
          margin-top: 10px;
        }
      }
    }
    .show-knobs {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .show-knobs_item {
        color: white;
        font-size: 19px;
        font-weight: bolder;
        transition: all 0.5s;
        width: 265px;
        height: 100px;
        &:first-of-type {
          margin-left: 88px;
          display: flex;
          align-items: center;
          font-size: 20px;
          cursor: default;
          img {
            filter: brightness(0) invert(1);
            margin-right: 5px;
            width: 27%;
            height: auto;
          }
        }
        &:nth-of-type(2) {
          margin-left: -35px;
          display: flex;
          align-items: center;
          cursor: default;
          img {
            filter: brightness(0) invert(1);
            width: 27%;
          }
        }
        &:nth-of-type(3){
          display: flex;
          align-items: center;
          margin-left: 50px;
          cursor: pointer;
          i {
            font-size: 70px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .show-map {
    margin-bottom: 95px;
  }


</style>
