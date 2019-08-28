<template>
    <section class="back-container" @click="function(){$router.go(-1)}">
        <span/>
    </section>
</template>

<script>
    export default {
        name: "backToBefore",
    }
</script>

<style scoped>
    .back-container{
        position: fixed;
        top: 5vw;
        left: 5vw;
        cursor: pointer;
    }
    .back-container span{
        display: inline-block;
        height: 20px;
        width: 20px;
        position: relative;
    }
    .back-container span:before{
        display: block;
        content: '';
        position: absolute;
        height: 3px;
        background-color: black;
        width: 20px;
        transform: rotateZ(-45deg);
        transition: all ease-in-out 0.2s;
    }
    .back-container span:after{
        display: block;
        content: '';
        position: absolute;
        height: 3px;
        background-color: black;
        width: 20px;
        transform: rotateZ(45deg);
        transition: all ease-in-out 0.2s;
    }

    .back-container:hover span:before{
        transform: rotateZ(135deg);
        background-color: #676c7f;
    }
    .back-container:hover span:after{
        transform: rotateZ(-135deg);
        background-color: #676c7f;
    }



</style>
