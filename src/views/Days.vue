<template>
    <section class="container">
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
                nowDay: 7
            }
        },
        methods:{
            transitionPending(el){
                console.log(el)
            },
            transitionComplete(e){
                console.log(e)
            }
        },
        mounted(){
            if(window){
                window.onscroll = null;
            }
        }
    }
</script>

<style scoped>
    .container {
        /*height: 100vw;*/
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
        box-shadow: rgba(0,0,0,0.2) 5px 5px;
        margin: 20px 20px;
        width: 20%;
    }
    .url-link{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
</style>
