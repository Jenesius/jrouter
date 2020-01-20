<template>
    <div class = "mask">
        <p>Mask</p>
        <router-view name = "2lvl"></router-view>
    </div>
</template>

<script>
    export default {
        name: "ViewMaska",
        methods:{

        }
    }
</script>

<style scoped>
    .mask{
        color:white;

        padding: 10px;

        background-color: blueviolet;
    }
</style>