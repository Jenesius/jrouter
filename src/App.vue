<template>
    <div>
        <div class = "nav-bar">
            <span @click = "goTo('/')">Home</span>

            <span @click = "goTo('/about')">About</span>
            <span @click = "goTo('/about/2lvl')">About2</span>
            <span @click = "goTo('/about/2lvl/3lvl')">About3</span>

            <span @click = "goTo('#menu')">Menu</span>
            <span @click = "goTo('#player')">Player</span>



            <span @click = "back">BACK</span>

            <span @click = "checkBack('#menu')">CheckBack #menu</span>
            <span @click = "checkBack('/about/2lvl')">CheckBack /about/2lvl</span>

        </div>
        <router-view name="main"/>

        <router-view name = "menu"/>
        <router-view name = "player"/>
    </div>

</template>

<script>

export default {
  name: 'app',
    components: {},
    methods: {
      back() {
          this.$backRoute();
      },
      goTo(route) {
          this.$pushRoute(route);
      },
        checkBack(str){
          this.$backRoute(str);
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
