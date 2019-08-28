<template>
  <div class="about">
    <div class="scroll-item-container">
      <div class="menu-box index1">
        <template v-for="(item, index) in menuArr">
          <div :key="index" class="menu-container menu-box1" :ref="'menu'+index">
            <router-link :to="item.router">
              <h2 class="menu-item">
                {{item.title}}
              </h2>
            </router-link>
          </div>
        </template>
      </div>
      <div class="menu-box index2">
        <template v-for="(item, index) in menuArr ">
          <div :key="index+'1'" class="menu-container menu-box2" :ref="'menu2'+index">
            <router-link :to="item.router">
              <h2 class="menu-item">
                {{item.title}}
              </h2>
            </router-link>
          </div>
        </template>
      </div>
      <div class="menu-box index3">
        <template v-for="(item, index) in menuArr">
          <div :key="index+'2'" class="menu-container menu-box3" :ref="'menu3'+index">
            <router-link :to="item.router">
              <h2 class="menu-item">
                {{item.title}}
              </h2>
            </router-link>
          </div>
        </template>
      </div>
      <div class="menu-box index4">
        <template v-for="(item, index) in menuArr">
            <div :key="index+'3'" class="menu-container menu-box4" :ref="'menu4'+index">
              <router-link :to="item.router">
                <h2 class="menu-item">
                  {{item.title}}
                </h2>
              </router-link>
            </div>
        </template>
      </div>
    </div>
    <div class="menu-box index5">
      <template v-for="(item, index) in menuArr">
        <template v-if="index < 3">
          <div :key="index+'4'" class="menu-container menu-box5" :ref="'menu5'+index">
            <router-link :to="item.router">
              <h2 class="menu-item">
                {{item.title}}
              </h2>
            </router-link>
          </div>
        </template>
      </template>
    </div>

    <!--scroll-container 即通过该dom来控制屏幕高度产生滚动条-->
    <div class="forceHeight" :style="{height: forceHeight}"/>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        menuArr: [{
          title: 'presentation',
          router: '/'
        }, {
          title: 'work collection',
          router: '/days'
        }, {
          title: 'contact',
          router: '/'
        }],
        scrollVal: 0,
        forceHeight: 0,
        middlePosition: 0,
        ifAnimated: false,
      }
    },
    methods:{
      scrollInit(_dom){
        for(let i = 0; i < _dom.length; i++){
          _dom[i].style.top = i * 120 + 'px';
        }
        this.forceHeight = document.body.scrollHeight;

        this.middlePosition = (document.body.offsetHeight - 150) / 2;
        return this.forceHeight;
      },
      bindScrollBar(_dom){
        this.scrollVal = window.scrollY;
        _dom.style.top = -this.scrollVal + 'px'
        if(Math.abs(this.scrollVal+document.body.offsetHeight-this.forceHeight.split('p')[0]) <= 0){
          window.scrollTo(0, 0)
        }
        if(this.scrollVal === 0){
          window.scrollTo(0, this.forceHeight.split('p')[0]);
        }
      },
      updateMatrix(_scroll, _dom){
        //  渲染matrix变化，rotate+scale
        for(let i = 0; i < _dom.length; i ++){
          const elementScrollVal = _dom[i].offsetTop - _scroll;
          const division = Math.abs(elementScrollVal - this.middlePosition);
          _dom[i].style.transform = `scale(${division / 100 < 0.8 ? 1.2 : 1})`;
          _dom[i].childNodes[0].style.color = `${division / 100 < 0.6 ? '#000' : '#a4a4a4'}`;
        }
      }
    },
    mounted() {
      const menuContainer = document.getElementsByClassName('menu-container');
      const srcollItemContainer = document.getElementsByClassName('scroll-item-container')[0];
      this.forceHeight = this.scrollInit(menuContainer) + 'px'
      // 绑定滚动事件
      if(window){
        window.onscroll = (e)=>{
          this.bindScrollBar(srcollItemContainer)
          this.updateMatrix(window.scrollY, menuContainer)
        }
      }
    }
  }

</script>

<style scoped lang="scss">
  .about{
    position: relative;
    margin: 0 auto;
  }
  .scroll-item-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    perspective: 500px;
  }
  .menu-item{
    font-size: 10vw;
    line-height: 10vw;
    display: block;
    margin: 0;
    font-weight: 600;
    /*color: #a4a4a4;*/
  }
  .forceHeight{
    width: 1px;
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .menu-container{
    position: absolute;
    height: 120px;
    transform-origin: 0% 50%;
    transition: all ease-in-out 0.2s;
  }
  .menu-container:hover a{
    color: #000!important;
    transition: color ease-in-out 0.3s;
  }
</style>
