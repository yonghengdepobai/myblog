<template>
    <div class='left'>
      <div class="topBlack"></div>
        <div class='leftMain'>
          <div class="headImgDiv">
            <img class='headImg' src='../../public/img/head.jpeg' />
          </div>
          <div class="flexCenter ">
            <h1 class="bname"> {{blogName}} </h1>
          </div>
          <div class="flexCenter bin">
            {{blogIntroduction}}
          </div>
          <!-- <div class="flexCenter bin">
            {{ blogNav}}
          </div> -->
          <div class="flexCenter bin">
            {{ blogOther}}
          </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({

})
export default class Left extends Vue {
    blogName = '永恒';
    blogIntroduction = '永恒的笔记博客';
    blogOther = '关于我: QQ:1242420764';
    blogNav = '主页';
}

</script>

<style scoped lang="scss">
    .left {
      position: fixed;
      background: #fff;
      width: 300px;
      height: 100vh;
      .topBlack {
        background: #2d3035;
        height: 180px;
      }
      .leftMain {
        .bname {
          font-size: 30px;
          padding: 40px;
          color: #696969;
        }
        .bin {
          color: #999;
          font-size: 14px;
        }
        .headImgDiv {
          display: flex;
          justify-content: center;
          // position: relative;
          transform: translateY(-50%);
          // top: -50%;
        }
        .headImg {
          height: 100px;
          width: 100px;
          border-radius: 50%;
        }
        .flexCenter {
          display: flex;
          justify-content: center;
        }
      }
    }
</style>