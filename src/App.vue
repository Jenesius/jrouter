<template>
    <div>
        <div class = "nav-bar">
            <span @click = "goTo('/')">Home</span>
            <span @click = "goTo('/about')">About</span>
            <span @click = "goTo('#player')" class = "sub">Player</span>
            <span @click = "back">BACK</span>
            <span @click = "goTo('#menu')">Menu</span>
        </div>

        <j-router-view name="menu"></j-router-view>
        <j-router-view name="player"></j-router-view>
        <j-router-view name="main"></j-router-view>


    </div>

</template>

<script>


export default {
  name: 'app',

    methods: {
      back() {
          this.$backRoute();
      },
      goTo(route) {
          this.$pushRoute(route);

      }
    },

}
</script>

<style>
.nav-bar{
    height: 60px;
    width: 100%;

    display: flex;

}
.nav-bar>span{
    padding: 10px;
    margin: 10px;

    background-color: #5679ff;

    color:white
}
.sub{
    padding: 2px !important;

}
</style>
