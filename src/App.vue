<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->

    <section class="shelter" v-show="ifToCollections" ref="shelter">
      <span>{{toDays}}</span>
    </section>

    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
  import './assets/css/animationCss.css'
  export default {
    data(){
      return {
        transitionName: '',
        ifToCollections: false,
        toDays: 0
      }
    },
    watch: {//使用watch 监听$router的变化
      $router(to, from){
        console.log(to, from)
      },
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index) {
          //设置动画名称
          this.transitionName = 'slide-left';
        } else {
          this.transitionName = 'slide-right';
        }
        // if(to.meta.index === 2){
        //   this.toDays = to.path.split('/')[2];
        //   this.ifToCollections = true;
        //   this.$refs.shelter.style.animationName = 'shelterOut';
        // }else if(from.meta.index === 2){
        //   this.toDays = to.path.split('/')[2];
        //   this.ifToCollections = true;
        //   this.$refs.shelter.style.animationName = 'shelterIn';
        // }else{
        //   if (to.meta.index > from.meta.index) {
        //     //设置动画名称
        //     this.transitionName = 'slide-left';
        //   } else {
        //     this.transitionName = 'slide-right';
        //   }
        // }
      }
    }
  }
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  body{
    height: 100vh;
  }
  a{
    color: #a4a4a4;
    outline: none;
    text-decoration: none;
  }
  .shelter{
    width: 100vw;
    height: 100vh;
    position: fixed;
    font-size: 500px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    transform: scale(0);
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-duration: 2s;
    z-index: 999;
  }
  .shelter span{
    display: inline-block;
    color: #fff;
  }

  @keyframes openTheDoor {
    0%{
      
    }
    20%{

    }
  }
</style>
