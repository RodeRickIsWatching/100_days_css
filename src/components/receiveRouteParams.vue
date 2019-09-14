<template>
    <section class="router-container">
        <Back/>
        <div class="cmp-container">
            <component :is="'DAY'+$route.params.id"/>
        </div>
    </section>
</template>

<script>
    import Back from './backToBefore'
    import DAY1 from './day1'
    import DAY2 from './day2'
    import DAY3 from './day3'
    import DAY4 from './day4'
    import DAY5 from './day5'
    import DAY6 from './day6'
    import DAY7 from './day7'
    import DAY8 from './day8'
    import DAY9 from './day9'
    import DAY10 from './day10'
    import DAY11 from './day11'
    import DAY12 from './day12'
    import DAY13 from './day13'


    export default {
        name: "receiveRouteParams",
        components: {
            Back,
            DAY1,
            DAY2,
            DAY3,
            DAY4,
            DAY5,
            DAY6,
            DAY7,
            DAY8,
            DAY9,
            DAY10,
            DAY11,
            DAY12,
            DAY13

        }
    }
</script>

<style scoped lang="scss">
    .router-container{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
    }
    .cmp-container{
        position: absolute;
        width: 500px;
        height: 500px;
        border-radius: 5px;
        overflow: hidden;
    }
</style>
