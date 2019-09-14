<template>
    <section class="day9-container">
        <div class="watch-container">
            <template v-for="index in 60">
                <div :class="`second second-${index}` "></div>
            </template>
            <div class="word-info">
                <div class="year-month">
                    <span class="week">
                        {{new Date().toString().slice(0, 3).toUpperCase()}}
                    </span>
                    <span class="day">
                        {{new Date().toString().slice(8, 10).toUpperCase()}}
                    </span>
                    <span class="month">
                        {{new Date().toString().slice(4, 7).toUpperCase()}}
                    </span>
                        <span class="year">
                        {{new Date().toString().slice(11, 15).toUpperCase()}}
                    </span>
                </div>
                <div class="hour-minute">
                    <span class="hour">
                        {{new Date().toString().slice(16, 18).toUpperCase()}}
                    </span>
                        :
                        <span class="minute">
                        {{new Date().toString().slice(19, 21).toUpperCase()}}
                    </span>
                </div>
                <div class="heart-rate-kcal">
                    <span class="heart-rate">
                        81
                    </span>
                    <span class="kcal">
                        1248KACL
                    </span>
                </div>
            </div>

            <svg class="loading-rate" viewBox="0 0 202 202" xlmns="http://www.w3.org/2000/svg">
                <circle cx="101" cy="101" r="99.5" stroke="red" stroke-width="10" ></circle>
            </svg>
        </div>
    </section>
</template>

<script>
    export default {
        name: "day9",
        data(){
            return {}
        },
        computed:{
            // tellYear(){},
            // tellMonth(){},
            // tellWeek(){},
            // tellDay(){},
            // tellTime(){},
        }
    }
</script>

<style scoped lang="scss">
    .day9-container {
        width: 100%;
        height: 100%;
        background: rgb(76,76,76);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        color: #fff;
    }

    .day9-container{
        .word-info{
            height: 50%;
            width: 100%;
            position: absolute;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            .year-month{
                font-size: 12px;
            }
            .hour-minute{
                font-size: 45px;
                font-weight: bolder;
            }
            .heart-rate-kcal{
                font-size: 12px;
                position: relative;
                .heart-rate{
                    &::before{
                        content: "";
                        display: block;
                        height: 5px;
                        width: 5px;
                        /*background-color: transparent;*/
                        position: absolute;
                        left: -15px;
                        top: -16px;
                        border-radius: 50%;
                        box-shadow: -2px 18px 0px 1px red, 4px 18px 0px 1px red;
                        animation: heart-rate 1000ms ease-in-out infinite;
                    }
                    &::after{
                        content: "";
                        display: block;
                        height: 5px;
                        width: 5px;
                        border: 1px solid red;
                        background-color: red;
                        position: absolute;
                        left: -15px;
                        top: 4px;
                        /*transform: rotate(45deg);*/
                        animation: heart-rate-after 1000ms ease-in-out infinite;
                    }
                }
            }
        }
    }



    .watch-container{
        width: 212px;
        height: 212px;
        border-radius: 50%;
        background: #242424;
        border: 7px solid #3A3A3A;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }



    .second{
        position: absolute;
        width: 88%;
        height: 88%;
        border-radius: 50%;
        transform-origin: 50% 50%;
        z-index: 222;
        &::after{
            content: '';
            position: absolute;
            width: 2px;
            height: 2px;
            background-color: #fff;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @for $i from 1 through 60 {
        .second-#{$i}{
            transform: rotate(($i) * 6deg);
        }
    }

    .loading-rate{
        width: 202px;
        height: 202px;
        transform: rotate(-90deg);

        circle{
            stroke: #F85B5B;
            stroke-width: 3;
            fill: none;
            stroke-dasharray: 625;
            animation: loading-rate 60s linear infinite;
        }
    }

    @keyframes loading-rate {
        0% {
            stroke-dashoffset: 625;
        }

        100% {
            stroke-dashoffset: 0;
        }
    }


    @keyframes heart-rate {
        0%{
            transform: translateY(-1px);
        }
        50%{
            transform: translateY(1px);
        }
        100%{
            transform: translateY(-1px);
        }
    }
    @keyframes heart-rate-after {
        0%{
            transform: translateY(-1px) rotate(45deg);
        }
        50%{
            transform: translateY(1px) rotate(45deg);
        }
        100%{
            transform: translateY(-1px) rotate(45deg);
        }
    }
</style>
