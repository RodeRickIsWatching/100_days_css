<template>
    <section class="day1-container">
        <div :class="ifActive ? 'icon-box active' : 'icon-box'" @click="ifActive = !ifActive">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "day1",
        data(){
            return {
                ifActive: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .day1-container{
        width: 100%;
        height: 100%;
        background-color: #3FAF82;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .icon-box{
        width: 80px;
        height: 52px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
    }

    .line{
        height: 8px;
        width: 80px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 3px 3px 5px rgba(0,0,0,0.3);
    }

    .icon-box .line1{
        animation: reverseLine1Animation 1s ease-in-out forwards reverse;
    }
    .icon-box.active .line1{
        animation: line1Animation 1s ease-in-out forwards;
    }

    .icon-box .line3{
        animation: reverseLine3Animation 1s ease-in-out forwards reverse;
    }
    .icon-box.active .line3{
        animation: line3Animation 1s ease-in-out forwards;
    }

    .icon-box .line2{
        animation: reverseLine2Animation 0.5s ease-in-out forwards reverse;
    }
    .icon-box.active .line2{
        animation: line2Animation 0.5s ease-in-out forwards;
    }

    @keyframes line1Animation {
        0%{
            transform: translateY(0%);
        }
        50%{
            transform: translateY(300%);
        }
        100%{
            transform: translateY(300%) rotateZ(45deg);
        }
    }
    @keyframes line3Animation {
        0%{
            transform: translateY(0%);
        }
        50%{
            transform: translateY(-250%);
        }
        100%{
            transform: translateY(-250%) rotateZ(135deg);
        }
    }

    @keyframes line2Animation {
        0%{
            transform: scale(1);
        }

        50%{
            transform: scale(0);
        }

        100%{
            transform: scale(0);
        }
    }

    @keyframes reverseLine1Animation {
        0%{
            transform: translateY(0%);
        }
        50%{
            transform: translateY(300%);
        }
        100%{
            transform: translateY(300%) rotateZ(45deg);
        }
    }
    @keyframes reverseLine3Animation {
        0%{
            transform: translateY(0%);
        }
        50%{
            transform: translateY(-250%);
        }
        100%{
            transform: translateY(-250%) rotateZ(135deg);
        }
    }

    @keyframes reverseLine2Animation {
        0%{
            transform: scale(1);
        }

        50%{
            transform: scale(0);
        }

        100%{
            transform: scale(0);
        }
    }







</style>
