<template>
    <div class = "about">
        <p>About</p>

        <view-maska></view-maska>

    </div>
</template>

<script>
    import ViewMaska from "./ViewMaska";
    export default {
        name: "ViewAbout",
        components: {ViewMaska},
        methods: {

        }
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        font-weight: 600;

        background-color: #5ffa68;
        border-radius: 6px;
    }
</style>