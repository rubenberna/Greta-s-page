<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR|PT+Sans|Roboto+Mono');

  p {
    color: $dark-grey;
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: .10rem;
  }
</style>
