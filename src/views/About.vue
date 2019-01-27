<template>
  <div>
    <NavbarGrey/>
    <div class="about">
      <div class="about container">
        <h4 class="title">Welkom</h4>
        <p class="signature">bij Greta en Hilde</p>
        <div class="about-frame">
          <div class="about-bio">
            <p>{{about.text}}</p>
          </div>
          <div class="about-image">
            <img :src='about.image'>
          </div>
        </div>
        <div class="about-contacts">
          <div class="about-contacts_details">
            <p>0485 649 035</p>
            <p>greta.lowel@hotmail.com</p>
            <p>13 Kwaenijkstraat, 3191 Boortmeerbeek</p>
            <div class="about-contacts_details_links">
              <p>Volg mij op</p>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div class="about-contacts_image">
            <img src="https://firebasestorage.googleapis.com/v0/b/greta-f481d.appspot.com/o/about%2Fabout.jpg?alt=media&token=796125c7-1f49-4cbe-8161-b8b0cae605a4">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavbarGrey from '@/components/navbars/NavbarGrey'
  import { mapGetters } from 'vuex'

  export default {
    name: 'about',
    computed: mapGetters(['about']),
    components: {
      NavbarGrey
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';

  .about {
    background: $about-background;
    margin-bottom: 30px;
    padding: 1px;
    margin-top: 95px;
    margin-bottom: 95px;
    color: black;
    cursor: default;
    .about.container {
      .title {
        display: inline-block;
        border-bottom: 3px solid #231f20;
        font-weight: 700;
        line-height: 1em;
        letter-spacing: .135em;
        padding-bottom: .125em;
        text-transform: uppercase;
      }
      .signature {
        font-family: $font-about;
        font-size: 24px;
      }
      .about-frame {
        display: flex;
        justify-content: center;
        height: 500px;
        margin-top: 35px;
        margin-bottom: -44px;

        .about-bio {
          display: flex;
          width: 50%;
          height: 80%;
          margin-right: 20px;
          justify-content: center;
          align-items: center;
          background: white;
          padding: 80px;
          font-size: $font-size-xl;
        }
        .about-image {
          width: 50%;
          height: 80%;
          position: relative;
          overflow: hidden;
          margin-right: 1px;
          img {
            position: absolute;
            border-radius: 4px;
            margin-left: -37px;
            left: 60%;
            top: 47%;
            width: 100%;
            height: auto;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
          }
        }
      }
      .about-contacts {
        display: flex;
        .about-contacts_details {
          padding: 40px;
          vertical-align: middle;
          background: white;
          text-transform: uppercase;
          height: 386px;
          width: 360px;
          .about-contacts_details_links {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            height: 180px;
            i {
              font-size: 20px;
            }
          }
          p {
            display: inline-block;
            border-bottom: 3px solid #231f20;
            font-weight: 700;
            line-height: 1em;
            letter-spacing: .135em;
            padding-bottom: .125em;
            text-transform: uppercase;
            font-size: 16px;

          }
        }
        .about-contacts_image {
          width: 100%;
          height: inherit;
          position: relative;
          overflow: hidden;
          margin-right: 1px;
          img {
            position: absolute;
            left: 50%;
            top: 67%;
            width: 100%;
            height: auto;
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
          }
        }
      }
    }
  }
</style>
