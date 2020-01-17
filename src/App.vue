<template>
    <div>
        <div class = "nav-bar">
            <span @click = "goTo('/')">Home</span>
            <span @click = "goTo('/about')">About</span>
            <span @click = "goTo('#player')" class = "sub">Player</span>
            <span @click = "back">BACK</span>
            <span @click = "goTo('#menu')">Menu</span>

            <span @click = "back1('#menu')">hash</span>
            <span @click = "back2('/about')">path</span>
        </div>

        <router-view name="menu"></router-view>
        <router-view name="player"></router-view>
        <router-view name="main"></router-view>


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
      },
      back1(str){
          this.$backRoute(str, 'hash');
      },
        back2(str){
            this.$backRoute(str, 'path');
        },
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
