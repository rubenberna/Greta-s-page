<template>
  <div>
    <NavbarGrey/>
    <div class="show" :style="{ backgroundImage: `linear-gradient(-225deg, rgba(96, 56, 19, 0.5) 0%, rgba(178, 159, 148, 0.5) 50%), url('${therapy.image}')` }">
      <h3 class="show-title">{{ therapy.name }}</h3>

      <div class="show-board">
        <div class="show-board-item">
          <h5 class="show-board-item_title">What is it?</h5>
          <p class="show-board-item_text">{{ therapy.description }}</p>
        </div>
        <div class="show-board-item">
          <h5 class="show-board-item_title">How does it work?</h5>
          <p class="show-board-item_text">{{ therapy.method }}</p>
        </div>
        <div class="show-board-item">
          <h5 class="show-board-item_title">Who is it for?</h5>
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
          <span>Availability: {{ therapy.availability }}</span>
        </div>
        <div class="show-knobs_item">
          <i class="far fa-check-square"></i>
          <span>Schedule and appointment!</span>
        </div>
      </div>

      <div class="show-map">

      </div>

    </div>
  </div>
</template>

<script>
  import NavbarGrey from '@/components/NavbarGrey'
  import { mapGetters } from 'vuex'

  export default {
    name: 'about',
    components: {
      NavbarGrey
    },
    computed: mapGetters(['therapy'])
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .show {
    margin-top: 95px;
    margin-bottom: 95px;
    height: 160vh;
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
    }
    .show-board {
      display: flex;
      justify-content: center;
      height: 700px;
      .show-board-item {
        display: flex;
        flex-direction: column;
        margin: 20px;
        width: 18%;
        height: 100%;
        align-items: center;
        background: white;
        padding: 60px;
        .show-board-item_title {
          display: inline-block;
          border-bottom: 3px solid #231f20;
          font-weight: 700;
          line-height: 1em;
          letter-spacing: .135em;
          padding-bottom: .125em;
          text-transform: uppercase;
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
      margin-top: 50px;
      .show-knobs_item {
        color: white;
        font-size: 17px;
        font-weight: bolder;
        margin-left: 60px;
        &:first-of-type {
          margin-left: 90px;
          img {
            filter: brightness(0) invert(1);
          }
        }
        &:nth-of-type(2) {
          margin-left: 95px;
          img {
            filter: brightness(0) invert(1);
            width: 23%;
          }
        }
        &:nth-of-type(3){
          display: flex;
          align-items: center;
          margin-left: -15px;
          i {
            font-size: 40px;
            margin-right: 10px;
          }
        }
      }
    }
  }


</style>
