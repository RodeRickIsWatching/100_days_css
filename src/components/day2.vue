<template>
    <section class="day2-container">
        <div class="icon-container">
            <div class="sky"></div>
            <div class="ground"></div>
            <div class="sun"></div>
            <div class="side-left"></div>
            <div class="side-right"></div>
            <div class="shadow"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "day2"
    }
</script>

<style scoped lang="scss">
    .day2-container{
        width: 100%;
        height: 100%;
        background-color: #272C34;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-container{
        width: 180px;
        height: 180px;
        border-radius: 50%;
        position: absolute;
        overflow: hidden;
        transform: translate3d(0,0,10px);
        z-index: 99;
    }
    .sky{
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #7DDFFC;
        width: 100%;
        height: 124px;
    }
    .ground{
        z-index: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #F0DE75;
        width: 100%;
        height: 56px;
    }
    .sun{
        z-index: 0;
        position: absolute;
        top: 35px;
        left: 0;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        background-color: #FFEF00;
        /*origin有问题*/
        transform-origin: 300% 350%;
    }
    .side-left{
        z-index: 0;
        position: absolute;
        bottom: 55px;
        height: 57px;
        width: 116px;
        background-color: #F4F4F4;
        clip-path: polygon(30% 100%, 100% 100%, 90% 0%);
    }
    .side-right{
        z-index: 0;
        position: absolute;
        bottom: 55px;
        left: 100px;
        height: 57px;
        width: 58px;
        background-color: #DDDADA;
        clip-path: polygon(20% 100%, 100% 100%, 7% 0%);
    }

    .shadow{
        z-index: 0;
        position: absolute;
        bottom: -1px;
        left: 0px;
        height: 57px;
        width:  180px;
        background-color: rgba(0, 0, 0, 0.2);
        transform-origin: 50% 0%;
        clip-path: polygon(20% 0%, 88% 0%, 88% 0%);
        /*clip-path: polygon(20% 0%, 88% 0%, 0% 100%);*/
    }


    .sun{
        animation: sunMove 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }
    .shadow{
        animation: shadowMove 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }
    .side-left{
        animation: side-left 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }
    .side-right{
        animation: side-right 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }
    .sky{
        animation: day-fade 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }
    .ground{
        animation: ground-fade 3.5s cubic-bezier(0.42, 0, 0.85, 0.93) forwards infinite;
    }


    @keyframes sunMove {
        0% {
            background: #F57209;
            transform: rotate(-30deg);
        }
        30% {
            background: #FFEF00;
            transform: rotate(10deg);
        }
        70% {
            background: #FFEF00;
        }
        100% {
            background: #F57209;
            transform: rotate(80deg);
        }
    }


    @keyframes shadowMove {
        0%{
            transform: scaleY(0);
            clip-path: polygon(20% 0%, 88% 0%, 100% 70%);
        }
        30%{
            transform: scaleY(1);
            clip-path: polygon(20% 0%, 88% 0%, 88% 70%);
        }
        70%{
            transform: scaleY(0.4);
            /*clip-path: polygon(20% 0%, 88% 0%, 30% 50%);*/
        }
        100%{
            transform: scaleY(0);
            clip-path: polygon(20% 0%, 88% 0%, 0% 70%);
        }
    }

    @keyframes side-left {
        0% {
            background: #272C34;
        }

        20%{
            background: #F4F4F4;
        }

        50% {
            background: #e2e2e2;
        }

        70% {
            background: #cecece;
        }

        80% {
            background: #DDDADA;
        }

        100%{
            background: #272C34;
        }
    }

    @keyframes side-right {
        0% {
            background: #272C34;
        }
        20%{
            background: #b8b8b8;
        }

        50% {
            background: #d4d4d4;
        }

        70% {
            background: #e1dede;
        }

        80% {
            background: #cbc8c8;
        }

        100%{
            background: #272C34;
        }
    }

    @keyframes day-fade {
        0% {
            background: #272C34;
        }

        20% {
            background: #7DDFFC;
        }

        80% {
            background: #7DDFFC;
        }

        100% {
            background: #272C34;
        }
    }
    @keyframes ground-fade {
        0% {
            background: #272C34;
        }

        20% {
            background: #F0DE75;
        }

        80% {
            background: #F0DE75;
        }

        100% {
            background: #272C34;
        }
    }
</style>
