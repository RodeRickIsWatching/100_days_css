<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <router-view/>
  </div>
</template>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  body{
    height: 100vh;
  }
  a{
    color: #a4a4a4;
    outline: none;
    text-decoration: none;
  }

</style>
