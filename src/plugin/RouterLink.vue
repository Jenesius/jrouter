<template>
    <a href = "#" @click = "this.goTo">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: "RouterLink",
        data: ()=>{
          return {
              link: "",
          }
        },
        created() {
            this.link = this.$attrs.to;
        },
        methods:{
            goTo(e){
                e.preventDefault();
                this.$pushRoute(this.link);
            },
        },
    }
</script>

<style scoped>

</style>