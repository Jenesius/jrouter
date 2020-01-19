<template>
    <div class = "about">
        <p>Test</p>

        <test4></test4>
    </div>
</template>

<script>
    import Test4 from "./test4";
    export default {
        name: "test3",
        components: {Test4}
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        background-color: #faf9a4;
    }
</style>