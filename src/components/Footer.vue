<template>
  <div class="footer">
    <div class="footer-contacts">
      <h5>Contacts</h5>
      <ul>
        <li>0485 649 035</li>
        <li>greta.lowel@hotmail.com</li>
        <li>13 Kwaenijkstraat, 3191 Boortmeerbeek</li>
      </ul>

      <!-- <a href="#"><i class="fa fa-github"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a> -->
    </div>
    <div class="footer-copyright">
        2018 Powered by rubenberna
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .footer {
    background: $footer-background;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    padding: 0px 50px;
    color: $footer-font;
    width: 100%;
  }
  .footer-contacts {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    padding-top: 30px;
    h5 {
      font-size: 12px;
      font-weight: 600;
    }
    li {
      font-size: 10px;
    }
  }
</style>
