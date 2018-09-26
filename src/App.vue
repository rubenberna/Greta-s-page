<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR|PT+Sans|Roboto+Mono');

  body {
    color: rgba(73, 73, 73, 0.75)
  }

  p {
    font-size: 1.2rem;
    font-family: 'PT Sans', sans-serif;
    letter-spacing: .10rem;
  }
</style>
