
const textArr = [ 
  "有志者事竟成。", "热爱生活，学会生活，创造生活。", "读书不觉已春深，一寸光阴一寸金。", 
"要么就努力的向上爬，要么就生活在社会最底层。", "坚强的信心，能使平凡的人做出惊人的事业。", "走的再远，也不要忘记回家的路。",
 "当上帝赐给你荒野时，就意味着，他要你成为高飞的鹰。", "过去的事情就应该放下，未来的生活才会没有负担。", 
 "你若能作茧自缚，就能破茧成蝶。", "高傲的活着，不如平凡做自己。", "绳锯木断，水滴石穿。", "光阴似箭，日月如梭。", 
 "人生在勤，不索何获。", "穷则变，变则通，通则久。", "百学须先立志。", "工欲善其事，必先利其器。", 
 "人生如梦，一樽还酹江月。", "吾生也有涯，而知也无涯。", "莫等闲，白了少年头，空悲切。", "少壮不努力，老大徒伤悲。",
  "积土而为山，积水而为海。", "书读百遍，其义自见。", "海阔凭鱼跃，天高任鸟飞。", "穷且益坚，不坠青云之志。", 
  "志当存高远。", "敏而好学，不耻下问。", "一日不书，百事荒芜。", "临渊羡鱼，不如退而结网。", "人而无仪，不死何为。", 
  "言者无罪，闻者足戒。", "他山之石，可以攻玉。", "投我以桃，报之以李。", "满招损，谦受益。", "从善如登，从恶如崩。", 
  "知人者智，自知者明。", "信言不美，美言不信。", "君子坦荡荡，小人长戚戚。", "尺有所短，寸有所长。", "尽信书，不如无书。",
   "当局者迷，旁观者清。", "会当凌绝顶，一览众山小。", "兼听则明，偏信则暗。", "工欲善其事，必先利其器。",
    "不以一眚掩大德。", "千经万典，孝悌为先。", "君子藏器于身，待时而动。", "学而不厌，诲人不倦。",
 "见侮而不斗，辱也。"]

 const typeArr = ['angular', 'javascript', 'typescript'];
 const baseUrl = 'https://yonghengdepobai.github.io/showTest/md';

 function getRandom(): number {
    const len = textArr.length;
   //  Math.random();
    const index = Math.round(Math.random()* len);
    return index;
}

 export const mdList = [
    {
        instructions: '',
        title: 'sort方法分析',
        mood: textArr[getRandom()],
        time: '2020-3-7',
        type: typeArr[0],
        direction: '笔记',
        path: `${baseUrl}/js/sort分析.md`,
    },
    {
        instructions: '',
        title: 'ngMoudel',
        mood: textArr[getRandom()],
        time: '2020-3-6',
        type: typeArr[0],
        direction: '笔记',
        path: `${baseUrl}/js/NgModule.md`,
    },
    {
        instructions: '',
        title: 'ts声明文件',
        mood: textArr[getRandom()],
        time: '2020-3-5',
        type: typeArr[2],
        direction: '笔记',
        path: `${baseUrl}/js/ts描述(声明)文件.md`,
    },
    {
        instructions: '',
        title: '单元测试_Mocha',
        mood: textArr[getRandom()],
        time: '2020-3-4',
        type: typeArr[1],
        direction: '笔记',
        path: `${baseUrl}/js/单元测试_Mocha.md`,
    },
    {
        instructions: '',
        title: '单元测试_Angular.md',
        mood: textArr[getRandom()],
        time: '2020-3-3',
        type: typeArr[1],
        direction: '笔记',
        path: `${baseUrl}/js/单元测试_Angular.md`,
    },
]

