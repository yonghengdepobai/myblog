<template>
    <div class='rightCon'>
        <article v-for='(row, index) in rowList' :key='index' class="ListRow">
            <div>
                <header class="titelDiv">
                    <h1>{{row.title}}</h1>
                    <a>{{row.time}}</a>
                </header>

                <div class='mainText'>
                    <blockquote class="quote">{{row.mood}}</blockquote>
                    <p>{{row.instructions}}</p>
                </div>

                <div class='lableDiv'>
                    <div class='lableList'>
                        <div>
                            <ul><li>
                                    <img class='bookIcon' src='../../public/img/book.svg' />
                                    <span class="trangle"></span>
                                    <span>{{row.type}}</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul><li>
                                    <img class='bookIcon' src='../../public/img/blable.svg' />
                                    <span class="trangle"></span>
                                    <span>{{row.direction}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="openAll">
                        <a @click="goDetail(row, index)">展开全文>></a>
                    </div>
                </div>

            </div>
        </article>
        <div class='pageDiv'>
            <Page v-on:pageBack='pageBack' v-model='pageOption' ></Page>
        </div>
    </div>
</template>

<script lang="ts">
    import Page from './Page.vue';
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    // import router from '../router/index';
    import { mdList }  from "../mdList";

    @Component({
        components: {
            Page
        }
    })
    export default class Right extends Vue {
        rowList = [{}];
         pageSize = 3;
         isPage = false;

        pageOption = {
            page: 1,
            pageSize: this.pageSize,
            pageCount: Math.floor((mdList.length - 1) / this.pageSize) + 1 
        }

        @Watch('$route')
        goDetail(row: any, index: string) { // 跳转到详情页面
            // router.push({name: 'Detail', params: {path: row.path}})

            // console.log(this['$route'], this, this['$route'].replace, this['$router'], '///////', this['$router'].push);
            // console.log(this['$router'].push);
            // index 根据当前页面变化
            index = (parseInt(index) + (this.pageOption.page - 1) * this.pageSize) + '';
            this['$router'].push({name: 'Detail', params: {index: index,path: row.path}});
        }

        beforeCreate() {
            console.log('bbbR');
        }

        pageBack(event: number) {
            // 操作
            this.rowList = mdList.slice((this.pageOption.page - 1) * this.pageOption.pageSize,
             this.pageOption.page * this.pageOption.pageSize);
        }

        mounted() {
            console.log(this.pageOption);
            this.rowList = mdList.slice((this.pageOption.page - 1) * this.pageOption.pageSize,
             this.pageOption.page * this.pageOption.pageSize);
             this.isPage = true;
            //  console.log(this.rowList);
        }
    }

</script>

<style scoped lang="scss">
    .rightCon {
        flex: 1;
        margin-left: 300px;
        background: #eaeaea;
        padding: 20px;
        .ListRow {
            background: white;
            margin-bottom: 20px;
        }
        .titelDiv {
            border-left: 5px solid #4d4d4d;
            padding: 30px 0 15px 25px;
            padding-left: 7.7%;
            padding-right: 7.7%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                color: #999;
            }
        }
        .mainText {
            padding-left: 7.7%;
            padding-right: 7.7%;
        }
        .quote {
            border-left: 5px solid #657b83;
            padding: 15px 20px;
            background: #f6f6f6;
            margin-top: 10px;
            margin: 0;
        }
        .lableDiv {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #ddd;
            padding-top: 20px;
            margin: 30px 7.6923% 0;
            min-height: 72px;
        }
        .openAll {
            background: 'openAll';
            a {
                background: #4d4d4d;
                color: #fff;
                font-size: 12px;
                padding: 5px 8px;
                line-height: 16px;
                border-radius: 2px;
                transition: background .3s;
            }
        }
        .lableList {
            display: flex;
            justify-content: space-between;
            .bookIcon {
                    position: absolute;
                    height: 18px;
                    margin-left: -35px;
            }
            li {
                background: #7b5d5f;
                color: #fff;
                padding: 0 5px 0 5px;
                font-size: 10px;
                border-radius: 0 0px 5px 0;
            }
            .trangle {
                border: 8.5px solid transparent;
                border-right-color: #7b5d5f;
                display: inline-block;
                content: '';
                padding: 0;
                margin: 0;
                color: black;
                width: 0px;
                height: 0px;
                position: absolute;
                margin-left: -22px;
            }
        }
        .pageDiv {
        }
    }
</style>