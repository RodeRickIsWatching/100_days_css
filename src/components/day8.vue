<template>
    <section class="day8-container">
            <div class="moon">
                <template v-for="index in 11">
                    <div :class="`crater-${index}`"></div>
                </template>
            </div>

        <div class="hill-bg-1"></div>
        <div class="hill-bg-2"></div>
        <div class="hill-fg-1"></div>
        <div class="hill-fg-2"></div>
        <div class="hill-fg-3"></div>

        <div class="font"></div>

        <template v-for="index in 10">
            <div :class="`drop-big-${index}`"></div>
            <div :class="`drop-medium-${index}`"></div>
            <div :class="`drop-small-${index}`"></div>
        </template>





    </section>
</template>

<script>
    export default {
        name: "day8"
    }
</script>

<style scoped lang="scss">

    $drop-color: #7FC1F9;

    .day8-container {
        width: 100%;
        height: 100%;
        border-radius: 2px;
        box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.3);
        background: #1A2238;
        color: #394568;
        font-family: 'Open Sans', Helvetica, sans-serif;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }

    .moon {
        position: absolute;
        width: 67px;
        height: 67px;
        top: 45px;
        left: 55px;
        border-radius: 50px;
        background: #F6EDBD;
        overflow: hidden;
        box-shadow: 0 0 10px 0 #F6EDBD;
        animation: rise 1s ease-out;

        .crater-1 {
            position: absolute;
            width: 11px;
            height: 11px;
            top: 9px;
            left: 28px;
            border-radius: 10px;
            background: #ECE1A8;
        }

        .crater-2 {
            @extend .crater-1;
            top: 12px;
            left: 0;
        }

        .crater-3 {
            @extend .crater-1;
            top: 56px;
            left: 10px;
        }

        .crater-4 {
            @extend .crater-1;
            width: 6px;
            height: 6px;
            top: 37px;
            left: 49px;
        }

        .crater-5 {
            @extend .crater-4;
            top: 24px;
            left: 61px;
        }

        .crater-6 {
            @extend .crater-4;
            top: 55px;
            left: 33px;
        }

        .crater-7 {
            @extend .crater-4;
            top: 17px;
            left: 46px;
        }

        .crater-8 {
            @extend .crater-4;
            top: 28px;
            left: 27px;
        }

        .crater-9 {
            @extend .crater-4;
            top: 39px;
            left: 17px;
        }

        .crater-10 {
            @extend .crater-1;
            width: 4px;
            height: 4px;
            top: 25px;
            left: 15px;
        }

        .crater-11 {
            @extend .crater-10;
            top: 37px;
            left: 37px;
        }

    }

    .hill-bg-1 {
        position: absolute;
        z-index: 2;
        width: 337px;
        height: 281px;
        top: 230px;
        left: -57px;
        background: #26314F;
        border-radius: 50%;
    }

    .hill-bg-2 {
        @extend .hill-bg-1;
        top: 225px;
        left: 177px;
    }

    .hill-fg-1 {
        @extend .hill-bg-1;
        background: #303C5D;
        top: 300px;
        left: -137px;
    }

    .hill-fg-2 {
        @extend .hill-fg-1;
        top: 290px;
        left: 63px;
    }

    .hill-fg-3 {
        @extend .hill-fg-1;
        top: 248px;
        left: 292px;
    }


    @for $i from 1 through 10 {

        .drop-big-#{$i} {
            position: absolute;
            z-index: 20;
            left: (45 * $i) + px;
            bottom: 0px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: $drop-color;
            animation: drop (1.3 + random(2) / 6) + s linear (random(50) / 25) + s infinite;
            animation-fill-mode: both;
            transform-origin: 50% 100%;

            &:before {
                position: absolute;
                content: '';
                display: block;
                top: 3px;
                left: 1px;
                width: 6px;
                height: 6px;
                background: $drop-color;
                border-radius: 3px;
            }

            &:after {
                position: absolute;
                content: '';
                display: block;
                top: 0px;
                left: 2px;
                width: 4px;
                height: 10px;
                background: $drop-color;
                border-radius: 50%;
            }

        }

        .drop-medium-#{$i} {
            @extend .drop-big-1;
            left: (45 * $i) + px;
            opacity: 0.6;
            width: 6px;
            height: 6px;
            animation: drop (1.3 + random(2) / 8) + s linear (random(50) / 25) + s infinite;
            animation-fill-mode: both;

            &:before {
                top: 3px;
                left: 1px;
                width: 4px;
                height: 4px;
            }

            &:after {
                top: 0px;
                left: 2px;
                width: 2px;
                height: 6px;
            }

        }

        .drop-small-#{$i} {
            @extend .drop-big-1;
            left: (45 * $i) + px;
            opacity: 0.3;
            width: 4px;
            height: 4px;
            animation: drop (1.9 + random(2) / 6) + s linear (random(50) / 25) + s infinite;
            animation-fill-mode: both;

            &:before {
                top: 3px;
                left: 1px;
                width: 2px;
                height: 2px;
            }

            &:after {
                top: 0px;
                left: 1px;
                width: 2px;
                height: 4px;
            }

        }

    }



    @keyframes drop {
        0% {
            transform: translate3d(40px,-500px,0) scaleX(1) scaleY(1) rotate(17deg);
        }
        85% {
            transform: translate3d(0,0,0) scaleX(1) scaleY(1) rotate(17deg);
        }
        100% {
            transform: translate3d(0,0,0) scaleX(1) scaleY(0) rotate(0deg);
        }
    }

    @keyframes rise {
        from {
            transform: translate(-20px,200px);
        }
        to {
            transform: translate(0,0px);
        }
    }

</style>
