<template>
  <div class="banner" style="background-image: url('http://res.cloudinary.com/megslist/image/upload/v1535983801/karl-fredrickson-15871-unsplash.jpg')">
  <NavbarWhite />
    <section class="banner-title">
      <h1>Terug in balans</h1>
    </section>
  </div>
</template>

<script>
import NavbarWhite from './NavbarWhite'

export default {
  name: 'banner',
  components: {
    NavbarWhite
  }
}
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .banner {
    color: $white;
    height: 70vh;
    background-size: cover !important;
    .banner-title {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      h1 {
        margin-bottom: 300px;
        font-family: $font-banner;
        font-size: 74px;
        font-weight: bolder;
      }
    }
  }
</style>
