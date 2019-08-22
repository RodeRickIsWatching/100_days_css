<template>
    <section class="day5-container">
        <div class="icon-container">
            <div class="avatar-container">
                <div class="avatar">
                    <div class="circle circle1"></div>
                    <div class="circle circle2"></div>
                    <img class="avatar-img" :src="avatarInfos.avatarSrc" alt="">
                </div>
                <div class="title">{{avatarInfos.name}}</div>
                <div class="subTitle">{{avatarInfos.position}}</div>
                <div class="button-container">
                    <button class="button" type="button">Follow</button>
                    <button class="button" type="button">Message</button>
                </div>
            </div>
            <div class="self-infos">
                <div v-for="(item, index) in selfInfos" :class="'box ' + item.title">
                    <div class="amount">{{item.amount}}</div>
                    <div class="title">{{item.title}}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "day5",
        data(){
            return {
                avatarInfos: {
                    name: 'Jessica Potter',
                    position: 'Visual Artist',
                    avatarSrc: 'https://100dayscss.com/codepen/jessica-potter.jpg'
                },
                selfInfos: [{
                    title: 'posts',
                    amount: 523
                },{
                    title: 'likes',
                    amount: 1387
                },{
                    title: 'follower',
                    amount: 146
                }]
            }
        }
    }
</script>

<style scoped>
    .day5-container {
        height: 100%;
        width: 100%;
        background: linear-gradient(to top right, #EEBE6C 0%, #CA7C4E 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-container{
        height: 300px;
        width: 320px;
        background: #fff;
        display: flex;
        flex-direction: Row;
        color: #786450;
    }


    .avatar-container, .button-container{
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .self-infos{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .box{
        flex: 1;
        height: 30%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #F5E8DF;
        transition: all 0.2s ease-in-out;
    }
    .box:last-child{
        height: calc(30% + 1px);
    }
    .box:not(:last-child){
        border-bottom: 1px solid white;
    }

    .box:hover{
        background-color: rgb(222,207,196);
    }
    .amount{
        font-size: 18px;
        font-weight: 600;
    }
    .title{
        font-size: 11px;
    }

    button{
        display: inline-block;
        width: 120px;
        height: 30px;
        border-radius: 25px 25px 25px 25px;
        outline: none;
        text-decoration: none;
        border: 1px solid #786450;
        margin: 0 auto 10px auto;
        transition: all 0.3s ease-in-out;
    }
    button:hover{
        background-color: #786450;
        color: #fff;
    }
    .avatar{
        width: 80px;
        height: 80px;
        position: relative;
        margin: 38px auto 0 auto;
    }
    .circle, .avatar-img{
        position: absolute;
        top: 0;
    }
    .avatar-img{
        z-index: 0;
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .avatar, .circle{
        border-radius: 50%;
    }
    .circle1{
        top: -3px;
        left: -3px;
        z-index: 1;
        width: 84px;
        height: 84px;
        border-color: #786450 #786450 #786450 transparent;
    }
    .circle2{
        top: -6px;
        left: -6px;
        z-index: 1;
        width: 90px;
        height: 90px;
        border-color: #786450 transparent #786450 #786450;
    }
    .circle1, .circle2{
        border-width: 1px;
        border-style: solid;
        transition: transform 1s ease-in-out;
    }
    .title{
        font-size: 15px;
        font-weight: 600;
        margin-top: 20px;
    }
    .subTitle{
        font-size: 11px;
        line-height: 15px;
    }

    .avatar:hover .circle1{
        transform: rotateZ(360deg);
    }
    .avatar:hover .circle2{
        transform: rotateZ(-360deg);
    }

</style>
