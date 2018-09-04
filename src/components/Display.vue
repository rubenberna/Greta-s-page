<template>
  <div class="display container">
    <div class="display-label">
      <h5>Appointments</h5>
    </div>
    <div class="display-card">
      <div class="display-card-image">
        <sui-image src="http://res.cloudinary.com/megslist/image/upload/v1536062052/jenn-evelyn-ann-112980-unsplash.jpg" size="large" />
      </div>
      <div class="display-card-description">
        <h1>Polarity Healing lets you enjoy the outdoors again</h1>
        <div class="display-card-description-availability">
          <span>Make appointment</span>
          <span>Every Friday</span>
        </div>

      </div>
    </div>
    <p class="display-card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...</p>
    <span style="font-weight:bold">Read More <font-awesome-icon icon="angle-double-right" /> </span>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: 'display'
}
</script>

<style lang="scss" scoped>
  @import '../../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Raleway');

  .display-label {
    text-transform: uppercase;
    font-family: "Open Sans";
    margin-bottom: 20px;
    font-weight: $font-weight-p;
    letter-spacing: .24rem;
    line-height: 1.8;
    font-style: normal;
  }
  .display-card {
    display: flex;
    max-width: 750px;
    height: 300px;
    justify-content: space-between;

    .display-card-image {
     width: 45%;
     max-height: inherit;
    }

    .display-card-description {
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

      .display-card-description-availability {
        display: flex;
        justify-content: center;
        align-items: baseline;
        span {
          padding: 9px 15px;
          font-size: 12px;
          letter-spacing: .10rem;
          text-transform: uppercase;
          border-right: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;
          &:last-child {
            margin-left: 9px;
          }
        }
      }
    }
  }

  .display-card-text {
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
