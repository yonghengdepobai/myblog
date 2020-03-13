<template>
    <div class="rightCon">
        <!-- <button @click="testFetch">test</button> -->
        <article v-for='(row, index) in rowList' :key='index' class="ListRow">
            <div>
                <header class="titelDiv">
                    <h1>{{row.title}}</h1>
                    <a>{{row.time}}</a>
                </header>

                <div class='mainText'>
                    <blockquote class="quote">{{row.mood}}</blockquote>
                    <!-- <p>{{row.instructions}}</p> -->
                    <div id='markedText'></div>
                </div>

                <div class='lableDiv'>
                    <div class='lableList'>
                        <div>
                            <ul><li>
                            <img class='bookIcon' src='../../public/img/book.svg' />
                            <span class="trangle"></span>
                            <span>{{row.type}}</span>
                            </li></ul>
                        </div>
                        <div>
                            <ul><li>
                                <img class='bookIcon' src='../../public/img/blable.svg' />
                                <span class="trangle"></span>
                                <span>{{row.direction}}</span>
                                </li></ul>
                        </div>
                    </div>
                    <div class="openAll">
                        <!-- <a @click="goDetail(row)">展开全文>></a> -->
                    </div>
                </div>

            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { mdList }  from "../mdList";
import marked from 'marked';
// import router from '../router/index';

@Component({})
export default class Detail extends Vue {
    
    rowList = [{}];

    @Watch('$route')
    routeChange(val: Route, oldVal: Route): void {
        console.log(val, oldVal);
    }

    // markedT;

    beforeCreate() { // 在实例初始化之后，数据观测（data observer）和event/watcher事件配置之前被调用

    }

    created() { // 在实例创建完成后立即调用
        // 在这一步实例已经完成以下配置：数据观测（data observer），属性和方法的运算，watch/event事件回调。然而，
        // 挂载阶段还没有开始，$el 属性目前尚不可用

    }

    beforeMount() { // 在挂载之前被调用：相关的 render 函数首次被调用

    }

    mounted(): void { // 实例被挂载后调用，这时el 被新创建的vm.$el替换了。如果根实例挂载到了一个文档内的元素上，当
        // mounted被调用时vm.$el也在文档内
        // 注意mounted不会保证所有的子组件也都一起被挂载。如果希望等到整个视图都渲染完毕
        // 可以在mounted 内部使用vm.$nextTick()
        console.log('???????????', this['$route'], document.getElementById('markedText'));
         let index = parseInt(this.$route.params.index);
         let path: string = this.$route.params.path;
        if (path !== undefined) {
            // 持久化数据
            localStorage.setItem('mdPath', this.$route.params.path);
            localStorage.setItem('mdIndex', index + '');
        } else {
            // 获取持久化数据 如果也没有跳回首页
            path = localStorage.getItem('mdPath') || '';
            // console.log(path, !path, 'xxxx')
            if (path) {
                index = parseInt(localStorage.getItem('mdIndex') + '');
            } else {
                // console.log('????');
                this.$router.push('./');
            }
        }
        this.rowList = [mdList[index]];
        // console.log(path, index)
        this.getInfo(path, index);
    }

    beforeUpdate() { // 数据更新时调用，发生在虚拟DOM打补丁之前。这里适合在更新之前访问现有的DOM，比如手动
        // 移除已添加的事件临听器

    }

    update() { // 由于数据更改导致的虚拟DOM重新渲染和打补丁，在这之后会调用该钩子
        // 当这个钩子被调用时，组件DOM已经更新，所以你现在可以执行依赖于DOM的操作。然而在大多数情况下，你应该避免在此期间
        // 更改状态。如果要相应状态改变，通常最好使用计算属性或watcher取而代之

    }

    ativated() { // 被keep-alive缓存组件激活时调用

    }

    deactivated() { // 被keep-alive缓存组件停用时调用

    }

    beforeDestroy() { // 实例销毁之前调用 在这一步，实例仍然完全可用
    
    }

    destroy() { // 实例销毁后调用。该钩子被调用，对应Vue实例的所有指令都被解绑，所有的事件监听器都被移除，所有的子实例也都
        // 被销毁 

    }

    errorCaptured() { // 当捕获一个来自子孙组件的错误时被调用

    }

    
    private getInfo(path: string, index = 0): void {
        // path = 'https://yonghengdepobai.github.io/showTest/README.md';
        path = mdList[index].path;
        // const text = marked('fsdfsdfsdfd');
        // console.log(text, path)
        const promise = fetch(path).then(
            res => {console.log(res); return res.text()}
        , err => {
            console.log('err', err);
        }).then((res: any) => {
            // this.markedT = ;
            const mtext = document.getElementById('markedText');
            // console.log(mtext);
            const mark = marked(res);
            mtext ? mtext.innerHTML = mark : '';
            console.log(res, mark);
        })
    }

    testFetch() {
        const file = new File(['sfjsljfsldfjsldfjsdj'], 'aaaa.text');
        console.log(file);
        const url = `https://yonghengdepobai.github.io/showTest/testUp`;
        fetch(url).then(res => {
            console.log(res);
        }).catch(res => {
            console.log(res);
        })
    }
}

</script>

<style scoped lang="scss">
    .rightCon {
        flex: 1;
        background: #eaeaea;
        padding: 20px;
        margin-left: 300px;
    }
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
</style>