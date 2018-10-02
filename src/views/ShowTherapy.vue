<template>
  <div>
    <NavbarGrey/>
    <div class="show" :style="{ backgroundImage: `linear-gradient(-225deg, rgba(0, 90, 167, 0.4) 0%, rgba(255, 253, 228, 0.4) 50%), url('${therapy.image}')` }">
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
          <h5 class="show-board-item_title">For who is it?</h5>
          <p class="show-board-item_text">{{ therapy.indications }}</p>
        </div>
      </div>

      <div class="show-knobs">
        <div class="show-knobs_price">

        </div>
        <div class="show-knobs_availability">

        </div>
        <div class="show-knobs_book">

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
  }


</style>
