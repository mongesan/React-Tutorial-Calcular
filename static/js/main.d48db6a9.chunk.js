(this["webpackJsonpredux-calculator"]=this["webpackJsonpredux-calculator"]||[]).push([[0],{14:function(e,n,t){e.exports=t(25)},25:function(e,n,t){"use strict";t.r(n);var u={};t.r(u),t.d(u,"onNumClick",(function(){return C})),t.d(u,"onPlusClick",(function(){return E}));var c=t(0),l=t.n(c),r=t(3),a=t(1),i=t(4),o=t(10),m=t(11),s=t(13),k=t(12),C=function(e){return{type:"INPUT_NUMBER",number:e}},E=function(){return{type:"PLUS"}},f=function(e){var n=e.n,t=e.onClick;return l.a.createElement("button",{onClick:t},n)},p=function(e){var n=e.onClick;return l.a.createElement("button",{onClick:n},"+")},b=function(e){var n=e.result;return l.a.createElement("div",null,"Result: ",l.a.createElement("span",null,n))},v=function(e){Object(s.a)(t,e);var n=Object(k.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,n=e.calculator,t=e.actions;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(f,{n:1,onClick:function(){return t.onNumClick(1)}}),l.a.createElement(f,{n:2,onClick:function(){return t.onNumClick(2)}}),l.a.createElement(f,{n:3,onClick:function(){return t.onNumClick(3)}})),l.a.createElement("div",null,l.a.createElement(f,{n:4,onClick:function(){return t.onNumClick(4)}}),l.a.createElement(f,{n:5,onClick:function(){return t.onNumClick(5)}}),l.a.createElement(f,{n:6,onClick:function(){return t.onNumClick(6)}})),l.a.createElement("div",null,l.a.createElement(f,{n:7,onClick:function(){return t.onNumClick(7)}}),l.a.createElement(f,{n:8,onClick:function(){return t.onNumClick(8)}}),l.a.createElement(f,{n:9,onClick:function(){return t.onNumClick(9)}})),l.a.createElement("div",null,l.a.createElement(f,{n:0,onClick:function(){return t.onNumClick(0)}}),l.a.createElement(p,{onClick:t.onPlusClick})),l.a.createElement(b,{result:n.showingResult?n.resultValue:n.inputValue}))}}]),t}(c.Component);var d=Object(i.b)((function(e,n){return{calculator:e.calculator}}),(function(e){return{actions:Object(a.a)(u,e)}}))(v),N=t(2),j={inputValue:0,resultValue:0,showingResult:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;return"INPUT_NUMBER"===n.type?Object(N.a)(Object(N.a)({},e),{},{inputValue:10*e.inputValue+n.number,showingResult:!1}):"PLUS"===n.type?Object(N.a)(Object(N.a)({},e),{},{inputValue:0,resultValue:e.resultValue+e.inputValue,showingResult:!0}):e},h=Object(a.b)({calculator:O}),V=Object(a.c)(h);Object(r.render)(l.a.createElement(i.a,{store:V},l.a.createElement(d,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d48db6a9.chunk.js.map