<template>
    <div class = "about">
        <p>2 lvl</p>

        <router-view name = "3lvl"></router-view>
    </div>
</template>

<script>
    export default {
        name: "ViewAbout2",
        methods: {
        }
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        color:white;
        font-weight: 600;

        background-color: #fa565d;
        border-radius: 6px;
    }
</style>