<template>
    <div class = "about">
        <p>Test</p>

        <test2/>
    </div>
</template>

<script>
    import Test2 from "./test2";
    export default {
        name: "test",
        components: {Test2}
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        background-color: #6de0fa;
    }
</style>