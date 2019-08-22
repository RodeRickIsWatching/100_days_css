<template>
    <section class="day7-container">
        <div class="ball"></div>


        <div v-for="item in 10" :class="'bubble bubble' + item"/>
        <div v-for="item in 8" :class="'sparkle sparkle' + item"/>


    </section>
</template>

<script>
    export default {
        name: "day7"
    }
</script>

<style scoped lang="scss">
    .day7-container {
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        filter: contrast(25);
        position: relative;
    }

    .ball{
        position: relative;
        width: 90px;
        height: 90px;
        background: #fff;
        border-radius: 50%;
        -webkit-filter: blur(15px);
        filter: blur(15px);
    }

    .bubble{
        position: absolute;
        top: calc(50% - 25px);
        left: calc(50% -25px);
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50%;
    }
    .sparkle{
        position: absolute;
        background: #fff;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        top: calc(50% - 5px);
        left: calc(50% -5px);
    }





</style>
