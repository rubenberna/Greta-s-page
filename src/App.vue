<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '../style/main.scss';
  @import url('https://fonts.googleapis.com/css?family=Noto+Serif+KR|PT+Sans|Roboto+Mono|Raleway');

  body {
    color: #231f20;
  }
  h1, h2, h3, h4, h5 {
    font-family: 'Raleway', sans-serif;
  }
  p {
    font-size: 19px;
    line-height: 1.368em;
    letter-spacing: .05em;
    font-family: "proxima-nova","helvetica","arial","sans";
  }
</style>
