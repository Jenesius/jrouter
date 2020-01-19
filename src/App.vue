<template>
    <div>
        <div class = "nav-bar">
            <span @click = "goTo('/')">Home</span>

            <span @click = "goTo('/about')">About</span>
            <span @click = "goTo('/about/2lvl')">About2</span>
            <span @click = "goTo('/about/2lvl/3lvl')">About3</span>

            <span @click = "back">BACK</span>

        </div>
        <router-view name="main"/>
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
