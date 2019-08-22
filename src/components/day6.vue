<template>
    <section class="day6-container">
        <div :class="ifActive ? 'navBar-container active' : 'navBar-container'">
            <template v-for="(item, index) in navBar">
                <div class="navBar-item" @click="nowIndex = index">
                    <input type="radio" name="radio" class="input-checkbox" :id="'navBar'+index" :checked="nowIndex == index"/>
                    <label class="navBar-content" :for="'navBar'+index">{{ item.title }}</label>
                </div>
            </template>
        </div>
        <div :class="ifActive ? 'notification-container active' : 'notification-container'">
            <div class="infos-header">
                <div class="icon" @click="ifActive = !ifActive">
                    <div class="top-line"></div>
                    <div class="bottom-line"></div>
                    <div class="header-circle"></div>
                </div>
                <div class="title">{{ navBar[nowIndex]['title'] }}</div>
                <div class="search-box-icon" @click="ifShowSearch = !ifShowSearch"></div>
                <div :class="ifShowSearch ? 'search-box active' : 'search-box'">
                    <input type="text">
                </div>
            </div>
            <div class="left-line"></div>
            <template v-for="(item, index) in navBar">
                <div class="infos-container" v-show="index == nowIndex">
                    <template v-for="(item2) in item.infos">
                        <div class="infos-content">
                            <div class="left-content">
                                <div class="circle"></div>
                            </div>
                            <div class="right-content">
                                <div class="time">{{item2.time}}</div>
                                <div class="word">
                                    <b>{{item2.bold}}</b>
                                    <span>{{item2.content}}</span>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </div>
    </section>
</template>

<script>
    export default {
        name: "day6",
        data() {
            return {
                ifShowSearch: false,
                nowIndex: 0,
                ifActive: false,
                navBar: [{
                    title: 'Dashboard',
                    infos: [
                        {
                            time: '9:24 AM',
                            bold: 'John Walker\n',
                            content: 'posted a photo on your wall.'
                        },
                        {
                            time: '9:24 AM',
                            bold: 'John Walker\n',
                            content: 'posted a photo on your wall.'
                        },
                        {
                            time: '9:24 AM',
                            bold: 'John Walker\n',
                            content: ' posted a photo on your wall.'
                        }
                    ]
                }, {
                    title: 'Profile',
                    infos: [
                        {
                            time: '8:19 AM',
                            bold: 'Alice Parker\n',
                            content: ' commented your last post.'
                        },
                        {
                            time: '8:19 AM',
                            bold: 'Alice Parker\n',
                            content: ' commented your last post.'
                        },
                        {
                            time: '8:19 AM',
                            bold: 'Alice Parker\n',
                            content: ' commented your last post.'
                        }
                    ]
                }, {
                    title: 'Notifications',
                    infos: [
                        {
                            time: '10:25 AM',
                            bold: 'Tony Stark\n',
                            content: ' say hi.'
                        },
                        {
                            time: '10:25 AM',
                            bold: 'Tony Stark\n',
                            content: ' say hi'
                        },
                        {
                            time: '10:25 AM',
                            bold: 'Tony Stark\n',
                            content: ' say hi'
                        }
                    ]
                }, {
                    title: 'Messages',
                    infos: [
                        {
                            time: '12:25 AM',
                            bold: 'Kanye West\n',
                            content: ' say Yeezy.'
                        },
                        {
                            time: '12:25 AM',
                            bold: 'Kanye West\n',
                            content: ' say Yeezy.'
                        },
                        {
                            time: '12:25 AM',
                            bold: 'Kanye West\n',
                            content: ' say Yeezy.'
                        },
                    ]
                }, {
                    title: 'Settings',
                    infos: [
                        {
                            time: '12:25 AM',
                            bold: 'Aubrey Drake\n',
                            content: ' say Kiki.'
                        },
                        {
                            time: '12:25 AM',
                            bold: 'Aubrey Drake\n',
                            content: ' say Kiki.'
                        },
                        {
                            time: '12:25 AM',
                            bold: 'Aubrey Drake\n',
                            content: ' say Kiki.'
                        },
                    ]
                }
                ],

            }
        }
    }
</script>

<style scoped lang="scss">
    .day6-container {
        width: 100%;
        height: 100%;
        background: #264057;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .navBar-container {
        padding: 20px 0;
        width: 170px;
        height: 220px;
        color: #93B2CD;
        background: #43627D;
        border-radius: 3px;
        box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.2);
        display: flex;
        justify-content: space-evenly;
        align-items: start;
        flex-direction: column;
        transform: translate3d(15%, 0 ,0);
    }
    .navBar-container, .notification-container{
        transition: all ease-in-out 0.5s;
    }




    label {
        font-size: 14px;
        line-height: 14px;
    }

    input[type="radio"] {
        /*display: none;*/
        background-color: #43627D;
        border: 1px solid #93B2CD;
        margin-right: 8px;
    }

    .input-checkbox:checked {
        background-color: #43627D;
        border: 1px solid #93B2CD;
    }
    .navBar-item{
        width: 100%;
        padding: 10px 20px;
        transition: all ease-in-out 0.2s;
    }
    .navBar-item:hover{
        background-color: #3d5267;
        color: #fff;
    }
    .notification-container{
        height: 300px;
        width: 300px;
        background-color: white;
        overflow: hidden;
        position: relative;
    }

    .infos-header{
        height: 60px;
        width: 100%;
        background: #5F98CD;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        position: relative;
        padding: 0 20px;
        box-sizing: border-box;
    }

    .infos-header .icon{
        cursor: pointer;
        position: relative;
        width: 29px;
        height: 15px;
        padding: 0 0 0 5px;
    }

    .icon .top-line,.icon .bottom-line,.icon .header-circle{
        position: absolute;
        width: 30px;
        height: 4px;
        background: #B2DAFF;
        transition: all ease-in-out 0.3s;
    }
    .icon:hover .top-line,.icon:hover .bottom-line,.icon:hover .header-circle{
        background: #fff;
    }
    .search-box-icon:hover{
        border-color: #fff;
    }

    .search-box{
        input{
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
        }
    }
    .icon .top-line{
        top: 0;
        width: 22px;
    }

    .icon .bottom-line{
        bottom: 0;
    }
    .icon .bottom-line, .icon .top-line{
        border-radius: 2px;
    }
    .icon .header-circle{
        width: 6px;
        height: 6px;
        border-radius: 3px;
        top: -1px;
        right: -2px;
    }

    .search-box-icon{
        font-size: 21px;
        border-width: 2px;
        border-style: solid;
        border-color: #B2DAFF;
        height: 10px;
        width: 10px;
        transition: all ease-in-out 0.3s;
        cursor: pointer;
    }


    .search-box{
        position: absolute;
        width: 190px;
        height: 34px;
        border-radius: 17px;
        border: none;
        background: #fff;
        padding: 0 17px;
        font-size: 13px;
        color: #666;
        transition: all .3s ease-in-out;
        opacity: 0;
        transform: translate3d(100%,0,0);
        z-index: -1;
    }
    .search-box.active{
        opacity: 1;
        transform: translate3d(0,0,0);
        z-index: 0;
    }

    .left-line{
        position: absolute;
        left: 30px;
        height: 100%;
        width: 3px;
        background-color: #EBEBEB;
    }

    .infos-container{
        height: 240px;
        padding-left: 34px;
        padding-top: 12px;
        /*transform: translate(-6px ,20px);*/
        /*padding-top: -6px;*/
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .infos-content{
        height: 100%;
        display: flex;
        flex-direction: row;
        color: #666666;
        transform: translate3d(0, 100%, 0);
        opacity: 0;
    }

    .circle{
        height: 11px;
        width: 11px;
        background: #fff;
        border: 2px solid #5F98CD;
        box-shadow: 0 0 0 3px #fff;
        border-radius: 6px;
        box-sizing: border-box;
        transform: translate3d(-8px ,1px, 0);
    }

    .time{
        font-size: 11px;
        line-height: 11px;
        margin-bottom: 2px;
    }

    .word{
        font-size: 15px;
        line-height: 20px;
    }
    .word:hover{
        color: #5F98CD;
    }
    .word b, .word span{
        cursor: pointer;
    }

    .notification-container.active{
        transform: translate3d(-80px, 0, 0);
    }
    .navBar-container.active{
        transform: translate3d(100%, 0, 0);
    }


    .infos-content{
        @for $i from 1 through 3 {
            &:nth-of-type(#{$i}) {
                animation: fadeAnimation 0.5s ease-in-out ($i / 8 + s) forwards;
            }
        }
    }

    @keyframes fadeAnimation {
        0%{
            opacity: 0;
            transform: translate3d(0, 100%, 0);
        }

        100%{
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }

</style>
