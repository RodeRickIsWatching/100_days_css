<template>
    <section class="container">
        <span>目前进度： day 6</span>
        <ul>
            <li v-for="(item, index) in 100" class="item">
                <router-link :to="'/days/'+item" class="url-link">
                    <span :class="'day'+item">{{item}}</span>
                </router-link>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: "100days",
        data() {
            return {}
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
        justify-content: center;
        align-items: center;
        align-content: space-between;
        flex-wrap: wrap;
    }

    li {
        flex: 1;
        flex-basis: 20%;
        list-style: none;
        height: 100px;
        line-height: 100px;
        text-align: center;
        border: 1px solid rgba(0, 0, 0, 0.4);
        margin: 20px 20px;
    }
    .url-link{
        display: inline-block;
        width: 100%;
        height: 100%;
    }
</style>
