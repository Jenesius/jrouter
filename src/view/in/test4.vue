<template>
    <div class = "about">
        <p>Test</p>

        <test5/>
    </div>
</template>

<script>
    import Test5 from "./test5";
    export default {
        name: "test4",
        components: {Test5}
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        background-color: #b8fa71;
    }
</style>