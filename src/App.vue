<template>
    <div>
        <div class = "nav-bar">
            <span @click = "goTo('/')">Home</span>
            <span @click = "goTo('/about')">About</span>
            <span @click = "back">BACK</span>
            <span @click = "goTo('/menu')">Menu</span>
        </div>
        <app-router name = "a1"></app-router>

        <app-router name = "a2"></app-router>
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

</style>
