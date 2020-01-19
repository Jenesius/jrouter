<template>
    <div class = "test1">
        <p>Test</p>

        <test3></test3>
    </div>
</template>

<script>
    import Test3 from "./test3";
    export default {
        name: "test2",
        components: {Test3}
    }
</script>

<style scoped>
    .test1{
        padding: 10px;

        background-color: #fa3946;
    }
</style>