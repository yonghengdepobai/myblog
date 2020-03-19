<template>
      <div class='contain'>
        <Left />
        <div class="right">
          <!-- <Right /> -->
          <div class="topRight">
            <div @click="goMain" class="navD">主页</div>
            <div class="navD">分类</div>
          </div>
          <router-view></router-view>
        </div>
      </div>
</template>


<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
  .contain {
    padding: 0;
    display: flex;
      
  }
  .right {
    flex: 1;
    background: #eaeaea;
  }
  .topRight {
    height: 50px;
    background: #fafafa;
    // background: white;
    z-index: 2;
    display: flex;
    position: sticky;
    margin-left: 320px;
    align-items: center;
    // margin: 10px;
    margin-right: 20px;
    top: 0;
  }
  .navD {
    margin: 0 20px;
    cursor: pointer;
  }
  
</style>
<script lang='ts'>
// import {Component, Prop, Vue} from "vue-property-decorator";
import Vue from 'vue';
import Component from 'vue-class-component';
import Left from './components/Left.vue';
import Right from './components/Right.vue';


@Component({
  components: {
    Left,
    Right
  }
})
export default class App extends Vue {
  // components: {
  //   Left
  // }

  mounted() {
    // alert('info');
    // this.$router.push('Right');
  }

  goMain() {
    // this.$router
     this['$router'].push({name: 'Right', });
  }
  
}

</script>