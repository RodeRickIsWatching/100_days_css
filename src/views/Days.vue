<template>
    <section class="container">
        <div class="shelter-door" v-show="ifShowShelter" ref="shelter">
            <div class="shelter-bg" ref="shelterBg"/>
            <div class="left-door" ref="leftDoor"/>
            <div class="right-door" ref="rightDoor"/>
        </div>

        <span>目前进度： day {{nowDay-1}}</span>
        <ul>
            <li v-for="(item, index) in 100" class="item" v-show="index < nowDay">
                <router-link :to="'/days/'+item" class="url-link">
                    <span :class="'day'+item">{{item}}</span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                nowDay: 7,
                ifShowShelter: false,
            }
        },
        methods: {
            transitionPending(el) {
                console.log(el)
            },
            transitionComplete(e) {
                console.log(e)
            },
            showTheShelter(){
                this.ifShowShelter = true
            }
        },
        beforeRouteLeave(to, from, next) {
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
        },
        mounted() {
            if (window) {
                window.onscroll = null;
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
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
    }

    li {
        /*flex: 1;*/
        flex-basis: 20%;
        list-style: none;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.2) 5px 5px;
        margin: 20px 20px;
        width: 20%;
        border: 1px solid rgba(0, 0, 0, 0.1);
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


</style>
