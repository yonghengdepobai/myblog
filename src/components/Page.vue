<template>
    <div class='pageContain'>
        <div @click="goPage('first')" class='basePage'>首页</div>
        <div @click="goPage('up')" class='basePage'> {{upText}} </div>
        <div @click="goPage(value)" class='basePage' v-bind:class='{checkPage: page == value}' v-for="(value, index) in this.pageList" :key='index'>
            {{value}}
        </div>
        <div @click="goPage('next')" class='basePage'> > </div>
        <div @click="goPage('end')" class='basePage'>尾页</div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Model } from "vue-property-decorator";

@Component({})
export default class Page extends Vue {
    // @Prop() private pageOption!: {page: number, pageCount: number, pageSize: number};
    @Model() private pageOption!: {page: number, pageCount: number, pageSize: number};
    @Prop() private pageBack!: any;

    pageList: number[] = [];
    pageCount!: number;
    page = 1;
    upText = '<';
    mounted() {
         console.log('mountedsss', this.pageOption);
         this.pageCount = this.pageOption.pageCount;
         this.page = this.pageOption.page;
         this.setPage();
     }

    setPage() {
        // console.log('???');
        if (this.pageCount < 6) {
            const arr = [];
            for (let i = 0; i < this.pageCount; i++) {
                arr[i] = i + 1;
            }
            this.pageList = arr;
        }
        if (this.page + 2 < this.pageCount && this.page - 2 > 0) {
            const arr = [];
            for (let p = 0; p < 5; p++) {
                arr[p] = this.pageCount - p;
            }
            this.pageList = arr;
        }
        if (this.page < 4) {
            const len = Math.min(5, this.pageCount);
             const arr = [];
            for (let i = 0; i < len; i++) {
                arr[i] = i + 1;
            }
            this.pageList = arr;
        }
    }

    goPage(type: string | number) {
        const page = this.typeList(type);
        if (this.page == page) {
            return;
        }
        this.page = page;
        console.log(this.page);
        this.pageOption.page = this.page;
        this.$emit('pageBack', page);
        // 返回点击的页数 让父页面自已处理
        // this.$router.push({name})
    }

     typeList(type: string | number): number {
        if (type == 'first') {return 1;}
        if (type == 'end') {return this.pageCount}
        if (type == 'next') {return Math.min(this.pageCount, this.page + 1)}
        if (type == 'up') {return Math.max(1, this.page - 1)}
        return parseInt(type + '');
     }

}
</script>

<style lang="scss" scoped>
    .pageContain {
        display: flex;
        justify-content: center;
    }
    .basePage {
         border: 1px solid #ebebeb;
        height: 30px;
        font-size: 14px;
        min-width: 36px;
        min-height: 28px;
        line-height: 28px;
        padding: 0 10px;
        text-align: center;
        border-radius: 6px;
        color: #606266;
        cursor: pointer;
        background: #fff;
    }
    .checkPage {
        background: #98a6ad;
        color: #fff;
        cursor: not-allowed;
    }
</style>