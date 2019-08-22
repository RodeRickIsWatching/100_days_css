<template>
    <section class="day3-container">
        <div class="icon-container">
            <div class="circle circle1"></div>
            <div class="circle circle2"></div>
            <div class="circle circle3"></div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "day3"
    }
</script>

<style scoped>
    .day3-container {
        width: 100%;
        height: 100%;
        background-color: #E56262;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .circle{
        position: absolute;
        border-radius: 50%;
        background-color: white;
        box-shadow: 0px 10px 15px rgba(0,0,0,0.4);
    }
    .circle1{
        z-index: 3;
        width: 30px;
        height: 30px;
        transform: scale(0);
        animation: circle-fade-in 2s 1s cubic-bezier(.21,.98,.6,.99) forwards, reverse circle-fade-out 2s 3s cubic-bezier(.21,.98,.6,.99) forwards;
    }
    .circle2{
        z-index: 2;
        width: 60px;
        height: 60px;
        transform: scale(0);
        animation: circle-fade-in 2s 0.5s cubic-bezier(.21,.98,.6,.99) forwards, reverse circle-fade-out 2s 3.5s cubic-bezier(.21,.98,.6,.99) forwards;
    }
    .circle3{
        z-index: 1;
        width: 90px;
        height: 90px;
        transform: scale(0);
        animation: circle-fade-in 2s cubic-bezier(.21,.98,.6,.99) forwards, reverse circle-fade-out 2s 4s cubic-bezier(.21,.98,.6,.99) forwards;
    }


    @keyframes circle-fade-in {
        0%{
            transform: scale(0);
        }
        100%{
            transform: scale(1.2);
        }
    }


    @keyframes circle-fade-out {
        0%{
            transform: scale(0);
        }
        100%{
            transform: scale(1.2);
        }
    }
</style>
