<template>
    <section class="day7-container">
        <div class="ball"/>
        <div v-for="item in 10" :class="'bubble bubble-' + item"/>
        <div v-for="item in 10" :class="'sparkle sparkle-' + item"/>
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
        z-index: -1;
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

    @for $i from 1 through 10 {
        .bubble-#{$i} {
            position: absolute;
            width: 50px;
            height: 50px;
            transform: rotate( (random(300)) + deg);

            &:after {
                position: absolute;
                display: block;
                content: '';
                width: 50px;
                height: 50px;
                background: #fff;
                border-radius: 50%;
                transform-origin: (40 - $i * 3) + px (40 - $i * 3) + px;
                animation: rotate (2.5 + $i / 5) + s ease-in-out ($i / 5) + s infinite;
                filter: blur(5px);
            }
        }
    }

    @for $i from 1 through 10 {
        .sparkle-#{$i} {
            position: absolute;
            width: (5 + $i) + px;
            height: (5 + $i) + px;
            transform: rotate( (random(275)) + deg);

            &:after {
                position: absolute;
                display: block;
                content: '';
                width: (5 + $i) + px;
                height: (5 + $i) + px;
                background: #fff;
                border-radius: 50%;
                transform-origin: (60 - $i * 2) + px (60 - $i * 2) + px;
                animation: rotate (2 + $i / 5) + s ease-in-out ($i / 3) + s infinite;
                filter: blur(3px);
            }
        }
    }




    @keyframes rotate {
        from {
            transform: rotate(0deg) translate3d(0, 0, 0);
        }
        to {
            transform: rotate(360deg) translate3d(0, 0, 0);
        }
    }

</style>
