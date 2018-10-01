<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR|PT+Sans|Roboto+Mono|Raleway');

  body {
    color: $dark-grey;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Raleway', sans-serif;
  }
  p {
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: .10rem;
  }
</style>
