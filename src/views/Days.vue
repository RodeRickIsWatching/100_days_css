<template>
    <section class="container">
        <div class="shelter-door" v-show="ifShowShelter" ref="shelter">
            <div class="shelter-bg" ref="shelterBg"/>
            <div class="left-door" ref="leftDoor"/>
            <div class="right-door" ref="rightDoor"/>
        </div>

        <span>目前进度： day {{nowDay}}</span>
        <router-link to="/">
            <div class="back-icon">
                <span>B</span>
                <span>A</span>
                <span>C</span>
                <span>K</span>
            </div>
        </router-link>


        <ul>
            <li v-for="(item, index) in 100" class="item" @mouseenter="showInfoMsg(index, item)" @mouseleave="restoreInfoMsg(index, item)" v-show="index < totalDays" :style="{background: index >= nowDay ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.3)', cursor: index >= nowDay ? 'not-allowed' : 'pointer'}">
                <router-link :to="index >= nowDay ? '/days' : '/days/'+item" class="url-link" :style="{cursor: index >= nowDay ? 'not-allowed' : 'pointer'}">
                    <span :class="'day'+item">
                        {{showMsg[index]}}
                    </span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                nowDay: 10,
                totalDays: 20,
                ifShowShelter: false,
                showMsg: []
            }
        },
        methods: {
            showTheShelter(){
                this.ifShowShelter = true
            },
            showInfoMsg(_index, msg){
                if(_index >= this.nowDay){
                    this.showMsg[_index] = 'coming soon';
                }else{
                    this.showMsg[_index] = msg;
                }
                this.showMsg = [...this.showMsg]
            },
            restoreInfoMsg(_index, msg){
                this.showMsg[_index] = msg;
                this.showMsg = [...this.showMsg]
            }
        },
        beforeRouteLeave(to, from, next) {
            if(this.nowDay < this.totalDays){
                console.log(typeof to.path.split('/')[2] )
                if(to.path.split('/')[2]){
                    this.showTheShelter();
                    this.$refs.shelterBg.style.animationName = 'shelterOpacity';
                    this.$refs.leftDoor.style.animationName = 'leftDoors';
                    this.$refs.rightDoor.style.animationName = 'rightDoors';
                    setTimeout(()=>{
                        this.$refs.shelter.style = '{background: #fff, opacity: 1}'
                        this.$refs.leftDoor.style.opacity = '0';
                        this.$refs.rightDoor.style.opacity = '0';
                        next();
                    }, 1900)
                }else{
                    next()
                }

            }else{
                // next()
                alert('coming soon')
            }
        },
        mounted() {
            if (window) {
                window.onscroll = null;
                this.showMsg = [...Array.from(Array(100).fill(1).map((item, index)=>{return index+1}))];
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        padding: 20px 0;
    }

    ul {
        height: 100%;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin: auto;
    }

    li {
        /*flex: 1;*/
        font-family: Arial;
        flex-basis: 25%;
        list-style: none;
        height: 12.36vw;
        line-height: 100px;
        text-align: center;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 30px;
        margin: 20px 20px;
        width: 25vw;
        transition: all ease-in-out 0.2s;
        /*border: 1px solid rgba(0, 0, 0, 0.1);*/

    }
    li a{
        display: flex!important;
        justify-content: center;
        align-items: center;
    }
    li a span{
        font-size: 25px
    }
    li:hover{
     transform: scale(1.1);

    }

    .url-link {
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .shelter-door{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        transform-style: preserve-3d;
        perspective: 500px;
        /*transition: all ease-in-out 0.2s;*/
    }
    .shelter-bg{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100vw;
        height: 100vh;
        transform-style: preserve-3d;
        perspective: 500px;
        /*transition: all ease-in-out 0.2s;*/
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        background-color: white;
        z-index: 1;
    }
    .left-door{
        position: fixed;
        width: 50vw;
        height: 100%;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: black;
        transform-origin: left;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        z-index: 2;
    }
    .right-door{
        position: fixed;
        width: 50vw;
        height: 100%;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: black;
        transform-origin: right;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        z-index: 2;
    }

    .back-icon{
        position: fixed;
        left: 5vw;
        top: 10vw;
        display: inline-block;
        font-size: 100px;
        font-weight: 700;
        width: 25px;
        height: 100px;
        word-break: break-word;
        transition: all ease-in-out 0.5s;
    }

    .back-icon span{
        display: inline-block;
        transition: all ease-in-out 0.01s;
        color: #a4a4a4;
        cursor: pointer;
    }

    .back-icon:hover span:nth-of-type(1), .back-icon:hover span:nth-of-type(3){
        /*transform: rotateZ(10deg);*/
        animation: letterTranslateEven 1s forwards cubic-bezier(0.42, 0, 0.95, 0.46);
        color: #000;
    }

    .back-icon:hover span:nth-of-type(2), .back-icon:hover span:nth-of-type(4){
        /*transform: rotateZ(-10deg);*/
        animation: letterTranslateOdd 1s forwards cubic-bezier(0.42, 0, 0.95, 0.46);
        color: #000;
    }

    @keyframes letterTranslateEven {
        0%{
            transform: translateX(0px)
        }
        50%{
            transform: translateX(-15px)
        }
        100%{
            transform: translateX(0px)
        }
    }

    @keyframes letterTranslateOdd {
        0%{
            transform: translateX(0px)
        }
        50%{
            transform: translateX(10px)
        }
        100%{
            transform: translateX(0px)
        }
    }

</style>
