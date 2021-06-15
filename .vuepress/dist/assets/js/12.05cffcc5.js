(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{369:function(t,n,e){"use strict";e.r(n);var r=e(44),l=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"多个容器滚动同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多个容器滚动同步"}},[t._v("#")]),t._v(" 多个容器滚动同步")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("在实际工作中，会遇到一种场景，多个容器需要同步滚动--也就是滚动其中一个，另外几个容器也会同步的滚动以保证这几个容器所显示的内容都是相关的。\n例如：")]),t._v(" "),e("ul",[e("li",[t._v("markdown编辑器--左边编辑，右边预览")]),t._v(" "),e("li",[t._v("同一个月的多个报表(每一天为一行)--把其中一个报表滚动到20日，另外几个报表也会滚动到20日的数据")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdn.net/20171221175252440?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvRGVlcExpZXM=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:"示意图"}})]),t._v(" "),e("h2",{attrs:{id:"例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),e("p",[t._v("以下的内容，都会以 2 个容器为例")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// 容器1\n<div id="left"></div>\n\n// 容器2\n<div id="right"></div>\n')])])]),e("h2",{attrs:{id:"常规解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常规解决"}},[t._v("#")]),t._v(" 常规解决")]),t._v(" "),e("p",[t._v("分别给这两个容器绑定滚动事件")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// 获取 dom\nvar left = document.getElementBy('left');\nvar right = document.getElementBy('right');\n\n// 绑定事件\nleft.addEventListener('scroll', function(){\n    box.scrollTop = right.scrollTop\n})\n\nright.addEventListener('scroll', function(){\n    box.scrollTop = box1.scrollTop\n})\n")])])]),e("p",[t._v("以上确实能实现两个容器同步滚动，并且拉动滚动条滚动效果也是正常，但是"),e("strong",[t._v("当我们用鼠标滚轮进行滚动的时候，会发现非常难以滑动，像是被什么东西卡住一样")])]),t._v(" "),e("p",[e("strong",[t._v("原因： 当左边滚动的时候，触发了左边的滚动事件，于是右边跟随滚动，但是与此同时右边的跟随滚动也是滚动，于是也触发了右边的滚动，于是左边也要跟随右边滚动…然后就进入了一个类似于相互触发的情况，所以就会发现滚动得很吃力。")])]),t._v(" "),e("h2",{attrs:{id:"解决思路"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[t._v("#")]),t._v(" 解决思路")]),t._v(" "),e("p",[t._v("由于卡顿产生的原因是因为左右两边的滚动事件一直互相触发，所以我们只要保证在当前滚动的容器触发事件，而另外一个联动的容器不触发事件就好了。主要分以下两步")]),t._v(" "),e("ol",[e("li",[t._v("确定当前哪个是主动滚动")])]),t._v(" "),e("p",[t._v("滚动的时候，需要我们鼠标停留在上面，所以用mouseover事件可以确定当前的容器。")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("在绑定事件之前先移除其他容器的事件，防止相互触发，所以整个滚动过程中，始终只有鼠标停留的容器有事件监听，其余容器是没有事件的。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function combinedScroll() {\n\n    // 获取元素\n  var left = document.getElementById('left');\n  var right = document.getElementById('right')\n\n  // 绑定左边的滚动事件\n  function bindEventLeft() {\n      removeEventRight() //关键点-先解绑右边\n      left.addEventListener('scroll', leftScroll)\n  }\n  // 绑定右边的滚动事件\n  function bindEventRight() {\n      removeEventLeft() //关键点-先解绑左边\n      right.addEventListener('scroll', rightScroll)\n  }\n\n//   解绑左边的滚动事件\n  function removeEventLeft() {\n      left.removeEventListener('scroll', leftScroll)\n  }\n\n//   解绑右边的滚动事件\n\n  function removeEventRight() {\n      right.removeEventListener('scroll', rightScroll)\n  }\n\n  // 左边滚动时候，右边同步\n  function leftScroll() {\n      var a = left.scrollTop;\n      right.scrollTop = a\n  }\n\n  // 右边滚动时候，左边同步\n  function rightScroll() {\n      var a = right.scrollTop;\n      left.scrollTop = a\n  }\n  left.addEventListener('mouseover', bindEventLeft)\n  right.addEventListener('mouseover', bindEventRight)\n}\n\n// 调用\ncombinedScroll()\n")])])]),e("h2",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),e("p",[t._v("在实际场景中，可能有时候不只有2个容器，这时候我们可以对函数进行改写和封装。")]),t._v(" "),e("p",[t._v("参考: https://blog.csdn.net/DeepLies/article/details/78854032")])])}),[],!1,null,null,null);n.default=l.exports}}]);