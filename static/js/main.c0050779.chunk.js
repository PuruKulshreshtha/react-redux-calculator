(this["webpackJsonpreact-redux-calculator"]=this["webpackJsonpreact-redux-calculator"]||[]).push([[0],{11:function(e,a,t){e.exports=t(22)},16:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(4),c=t.n(n),s=(t(16),t(2));const o=(e,a)=>{if(isNaN(e[e.length-1]))return a;let t,l=function(e){let a=[],t="";for(let l,r=0;l=e.charAt(r);r++)"*%/+-".indexOf(l)>-1?""===t&&"-"===l?t="-":(a.push(parseFloat(t),l),t=""):t+=e.charAt(r);return""!==t&&("0."===t?a.push("0."):a.push(parseFloat(t))),a}(e.join("")),r=[{"%":(e,a)=>e/100*a},{"/":(e,a)=>e/a},{"*":(e,a)=>e*a},{"+":(e,a)=>e+a},{"-":(e,a)=>e-a}],n=[];for(let c=0;c<r.length;c++){for(let e=0;e<l.length;e++)r[c][l[e]]?t=r[c][l[e]]:t?(n[n.length-1]=t(n[n.length-1],l[e]),t=null):n.push(l[e]);l=n,n=[]}return l.length>1?(console.log("Error: unable to resolve calculation"),l):l[0]};var u={UPDATE_CALCULATION_AND_RESULT:"UPDATE_CALCULATION_AND_RESULT",CLEAR_ALL:"CLEAR_ALL"};const i=u.UPDATE_CALCULATION_AND_RESULT,p=u.CLEAR_ALL,d=(e,a,t)=>{let l=((e,a)=>{a=[...a];let t=["%","*","/","+","-"];if("."===e){if(a.length){let l=a.lastIndexOf(".");if(-1===l&&(l=a.lastIndexOf("0.")),-1===l)return[...a,e];for(let r=l;r<a.length;r++)if(t.includes(a[r]))return[...a,e];return a}return[...a,"0."]}if(["\xb1","="].includes(e)&&o(a))return"\xb1"===e?[-1*o(a)]:[o(a)];if("number"!==typeof e&&!t.includes(e))return a;if(t.includes(e)&&!a.length)return a;let l=a[a.length-1],r=t.includes(l),n=t.includes(e);return n&&"."===l||r&&n?(a[a.length-1]=e,a):[...a,e]})(e,a),r=o(l,t);return{type:i,payload:{calculation:l,result:r}}};var m=Object(s.b)(e=>({calculation:e.calculation,result:e.result}))(e=>{const a=e.additionalClassWrapper,t=void 0===a?"":a,l=e.additionalClass,n=void 0===l?"":l,c=e.onClick,s=e.dispatch,o=e.value,u=e.calculation,i=e.result,p=e.htmlCode;return r.a.createElement("div",{className:"Button ".concat(t)},r.a.createElement("button",{className:"calc-input ".concat(n),onClick:c||(()=>s(d(o,u,i)))},p?String.fromCharCode(p):o))});class h extends l.Component{constructor(...e){super(...e),this.formatNumber=e=>e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}componentDidMount(){this._forceScrollOnDisplay()}componentDidUpdate(){this._forceScrollOnDisplay()}_replaceChars(e){return e=(e=(e=(e=(e=(e=(e=(e=e.join("")).split(/(\+|-|\*|\%|\/)/g).map(e=>e.length>8?parseFloat(e).toPrecision(2):e)).join("")).replace(/\//g,'<span class="operatorStyle">\xf7</span>')).replace(/\*/g,'<span class="operatorStyle">\xd7</span>')).replace(/\%/g,'<span class="operatorStyle">%</span>')).replace(/\+/g,'<span class="operatorStyle">+</span>')).replace(/-/g,'<span class="operatorStyle">-</span>')}_forceScrollOnDisplay(){this.refs.calculationDisplay.scrollLeft=1e4,this.refs.resultDisplay.scrollLeft=1e4}render(){const e=this.props,a=e.result,t=e.calculation;return r.a.createElement("div",{className:"calculator-results"},r.a.createElement("div",{ref:"calculationDisplay",className:"calculationDisplay",dangerouslySetInnerHTML:{__html:t.length?this._replaceChars(t):0}}),r.a.createElement("div",{ref:"resultDisplay",className:"resultDisplay"},a.toString().length>10?a.toPrecision(4):this.formatNumber(a)))}}var E=Object(s.b)(e=>({calculation:e.calculation,result:e.result}))(h);var v=Object(s.b)(e=>({calculation:e.calculation,result:e.result}))(e=>{const a=e.dispatch;return r.a.createElement("div",{className:"calculator"},r.a.createElement(E,null),r.a.createElement("div",{className:"calculator_wrapper"},r.a.createElement(m,{value:"c",onClick:()=>a({type:p,payload:{calculation:[],result:0}})}),r.a.createElement(m,{value:"\xb1"}),r.a.createElement(m,{value:"%"}),r.a.createElement(m,{value:"/",htmlCode:"247",additionalClass:"operator"}),r.a.createElement(m,{value:7}),r.a.createElement(m,{value:8}),r.a.createElement(m,{value:9}),r.a.createElement(m,{value:"*",htmlCode:"215",additionalClass:"operator"}),r.a.createElement(m,{value:4}),r.a.createElement(m,{value:5}),r.a.createElement(m,{value:6}),r.a.createElement(m,{value:"-",htmlCode:"8722",additionalClass:"operator"}),r.a.createElement(m,{value:1}),r.a.createElement(m,{value:2}),r.a.createElement(m,{value:3}),r.a.createElement(m,{value:"+",htmlCode:"43",additionalClass:"operator"}),r.a.createElement(m,{value:0}),r.a.createElement(m,{value:"."}),r.a.createElement(m,{value:"=",additionalClassWrapper:"equal",additionalClass:"equal"})))});const f=u.UPDATE_CALCULATION_AND_RESULT,C=u.CLEAR_ALL,g={calculation:[],result:0};var L=(e=g,a)=>{switch(a.type){case f:return{calculation:a.payload.calculation,result:a.payload.result};case C:return{calculation:[],result:0};default:return e}},A=t(5);let y=Object(A.b)(L);c.a.render(r.a.createElement(s.a,{store:y},r.a.createElement(v,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.c0050779.chunk.js.map