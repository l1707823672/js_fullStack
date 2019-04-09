DOM 树 有html 结构 再加上css DOM树将被生成，静态页面就有了 docment
DOContentLoaded 有了元素节点 就可以做JS 交互了
页面上还依赖于其他的一些资源 JS ，阻塞下载 img是网页性能的杀手
window.onload 此时写JS 就晚了

如果不等事件的发生 JS操作有可能无效