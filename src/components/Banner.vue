<template>
  <div class="banner" style="background-image: url('https://firebasestorage.googleapis.com/v0/b/greta-f481d.appspot.com/o/rsz_banner.jpg?alt=media&token=487d1d77-51a2-4d14-bf7c-7f3290146454')">
  <navbar-white />
    <section class="banner-title">
      <h1>Terug in balans</h1>
    </section>
  </div>
</template>

<script>
import NavbarWhite from './navbars/NavbarWhite'

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
    height: 100vh;
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
        // letter-spacing: .1em;
      }
    }
  }
</style>
