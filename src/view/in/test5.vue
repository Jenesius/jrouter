<template>
    <div class = "about">
        <p>Test</p>


    </div>
</template>

<script>
    export default {
        name: "test5",
        mounted() {
            // eslint-disable-next-line no-console
            console.log(this.$parent);
        }
    }
</script>

<style scoped>
    .about{
        padding: 10px;

        background-color: #9dfa47;
    }
</style>