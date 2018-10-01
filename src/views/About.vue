<template>
  <div>
    <NavbarGrey/>
    <div class="about">
      <div class="about container">
        <h4 class="title">Welcome</h4>
        <p class="signature">by Greta Lowel</p>
        <div class="about-frame">
          <div class="about-bio">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div class="about-image">
            <img src="https://firebasestorage.googleapis.com/v0/b/greta-f481d.appspot.com/o/greta.jpg?alt=media&token=3cc6cdb2-e80c-4665-8ae2-ad762a5195fb">
          </div>
        </div>
        <div class="about-contacts">
          <div class="about-contacts_details">
            <p>0485 649 035</p>
            <p>greta.lowel@hotmail.com</p>
            <p>13 Kwaenijkstraat, 3191 Boortmeerbeek</p>
            <div class="about-contacts_details_links">
              <p>Connect</p>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div class="about-contacts_image">
            <img src="https://firebasestorage.googleapis.com/v0/b/greta-f481d.appspot.com/o/corinne-kutz-157292-unsplash.jpg?alt=media&token=7a99d373-8f4d-49d9-af28-db4b9bf4fcb7">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import NavbarGrey from '@/components/NavbarGrey'

  export default {
    name: 'about',
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
    color: black;
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
        font-family: 'Charmonman', cursive;
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
