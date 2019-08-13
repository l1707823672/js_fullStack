# BFC 是一个什么概念
Block Formatting Context (块级格式化上下文)


#BFC 的原理 （渲染规则）
1. 正常的文档流会存在边距折叠的问题 （父子元素，兄弟元素） ， 水平方向的外边距不存在折叠的情况（因为水平方向不存在块级元素）
2. BFC 容器不会与浮动元素的BOX重叠
3. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔离的空间，外面的元素不会影响容器里面的元素，反之，里面的元素也不会影响容器外面的元素。
4. 计算BFC容器高度时，浮动元素也会参与高度的计算（也是通常清除浮动的原理）



# 创建BFC的条件
1. 根元素或包含根元素的元素
2. 浮动元素（元素的 float 不是 none）
3. 绝对定位元素（元素的 position 为 absolute 或 fixed）
4. 行内块元素（元素的 display 为 inline-block）
5. 表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
6. 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
7. 匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、        table-header-group、table-footer-group（分别是HTML table、row、tbody、         thead、tfoot的默认属性）或 inline-table）
8. overflow 值不为 visible 的块元素
9. display 值为 flow-root 的元素
10. contain 值为 layout、content或 strict 的元素
11. 弹性元素（display为 flex 或 inline-flex元素的直接子元素）
12. 网格元素（display为 grid 或 inline-grid 元素的直接子元素）
13. 多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
14. column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。
15. 。。。。