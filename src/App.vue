<template>
      <div class='contain'>
        <Left />
        <div class="right">
          <!-- <Right /> -->
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
}

</script>