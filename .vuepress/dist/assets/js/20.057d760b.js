(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{378:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("h2",{attrs:{id:"异步加载script-提高前端性能-defer和async属性的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载script-提高前端性能-defer和async属性的区别"}},[t._v("#")]),t._v(" 异步加载script, 提高前端性能(defer和async属性的区别)")]),t._v(" "),a("blockquote",[a("p",[t._v("原文链接：https://blog.csdn.net/qq_19644471/article/details/81949680")])]),t._v(" "),a("h3",{attrs:{id:"异步加载script的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载script的好处"}},[t._v("#")]),t._v(" 异步加载script的好处")]),t._v(" "),a("p",[t._v("为了加快首屏响应速度, 前端会采用代码切割、按需加载等方式优化性能。异步加载script也是一种前端优化的手段。")]),t._v(" "),a("p",[t._v("就好比如果我的页面其中一个功能需要打开地图, 但是地图的js插件包是非常大的, 而如果用户不用地图功能的时候, 我们当然不能再给它加载js地图包, 白白让他多花等待时间岂不是很冤枉! 于是我们可以动态插入script, 当用户点击了某个按钮的时候, 再新建script标签, 引入地图js资源。")]),t._v(" "),a("h3",{attrs:{id:"异步加载script的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步加载script的方式"}},[t._v("#")]),t._v(" 异步加载script的方式")]),t._v(" "),a("ol",[a("li",[t._v("按需加载js")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("getMap.onclick = function(){\n    //获得需要插入的位置\n    var oDiv = document.getElementById('div');\n    //异步创建script\n    var script = document.createElement('script');\n\n    script.src = 'https://map.baidu.com/...'\n\n    oDiv.appendChild(script);\n}\n\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("script标签加上defer或async")]),t._v(" "),a("ul",[a("li",[t._v("没有defer或async属性，浏览器会立即加载并执行相应的脚本。也就是说在渲染script标签之后的文档之前，不等待后续加载的文档元素，读到就开始加载和执行，此举会阻塞后续文档的加载")]),t._v(" "),a("li",[t._v("有了async属性，表示后续文档的加载和渲染与js脚本的加载和执行是并行进行的，即异步执行")]),t._v(" "),a("li",[t._v("有了defer属性，加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本的执行需要等到文档所有元素解析完成之后，DOMContentLoaded事件触发执行之前。")])]),t._v(" "),a("blockquote",[a("p",[t._v("1.defer和async在网络加载过程是一致的，都是异步执行的")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("两者的区别在于脚本加载完成之后何时执行，可以看出defer更符合大多数场景对应用脚本加载和执行的要求")]),t._v(" "),a("li",[t._v("如果存在多个有defer属性的脚本，那么它们是按照加载顺序执行脚本的；而对于async，它的加载和执行是紧紧挨着的，无论声明顺序如何，只要加载完成就立刻执行，它对于应用脚本用处不大，因为它完全不考虑依赖。")])])]),t._v(" "),a("li",[a("p",[t._v("通过 ajax 去获取 js 代码，然后通过 eval 执行")])]),t._v(" "),a("li",[a("p",[t._v("创建并插入 iframe，让它异步执行 js")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("var iframe = document.createElement('iframe'); \ndocument.body.appendChild(iframe); \nvar doc = iframe.contentWindow.document; \ndoc.open().write('<body οnlοad=\"insertJS()\">'); \ndoc.close();\n")])])]),a("h3",{attrs:{id:"插入几万个-dom-如何实现页面不卡顿"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入几万个-dom-如何实现页面不卡顿"}},[t._v("#")]),t._v(" 插入几万个 DOM，如何实现页面不卡顿？")]),t._v(" "),a("p",[t._v("虚拟列表: 只渲染可视区域内的内容，非可见区域的那就完全不渲染了，当用户在滚动的时候就实时去替换渲染的内容。")]),t._v(" "),a("h4",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("ol",[a("li",[t._v("列表中固定只显示少量的数据，比如60条")]),t._v(" "),a("li",[t._v("在列表滚动的时候不断的去插入删除dom")]),t._v(" "),a("li",[t._v("startIndex、endIndex，不断的改变这个值来获取最新的显示列表")]),t._v(" "),a("li",[t._v("paddingTop、paddingBottom撑开容器的滚动区域")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" mounted() {\n    const container = this.$refs.container\n    container.addEventListener('scroll', () => {\n        const top = container.scrollTop\n        this.startIndex = Math.floor(top / 30)\n        this.endIndex = this.startIndex + 60\n\n        this.paddingTop = top\n        if (this.endIndex >= this.list.length - 1) {\n            this.paddingBottom = 0\n            return\n        }\n        this.paddingBottom = this.allHeight - 600 - top\n    })\n},\n")])])]),a("h2",{attrs:{id:"首屏优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化"}},[t._v("#")]),t._v(" 首屏优化")]),t._v(" "),a("ol",[a("li",[t._v("使用懒加载。")]),t._v(" "),a("li",[t._v("使用cnd。")]),t._v(" "),a("li",[t._v("使用服务端渲染。")]),t._v(" "),a("li",[t._v("雪碧图。")]),t._v(" "),a("li",[t._v("动态插入js。")]),t._v(" "),a("li",[t._v("dom不宜过多，css不要嵌套太多。")]),t._v(" "),a("li",[t._v("loading图标和骨架屏提升用户体验。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);