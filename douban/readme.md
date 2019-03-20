- css 命名词汇
feeds *-item
- html 结构及布局
从上到下 从左到右 语义性和功能性 
    1. 套路
    content>h3+p
    2. 盒子
    3. a 作为盒子，在移动端是很正常的，
    display:block
    4. 盒子模型
    文字 line-height padding margin
    5. 文字截断
    tmall 商铺信息是由商家填的，它的高度，不被限制
    display:-webkit-box; 新的盒子模型，像flex 来划分父元素的空间。
    overflow:hidden;
    -webkit-line-clamp 行数
    -webkit-box-orient:vertical





界面，切分 切图
按模块来切  .feed-item 词汇量 
块级元素 做盒子 不要在意那些细节。
从外到内，从上到下，从左到右。
写良好结构及语意化的html，
.feed-content+.anthor+h3+p+.author