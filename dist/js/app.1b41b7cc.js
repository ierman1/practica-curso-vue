(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/practica-curso-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),r=a("ecee"),s=a("c074"),o=a("ad3d");r["c"].add(s["a"]),n["default"].component("font-awesome-icon",o["a"]);var i=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(i["a"]);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"container-sm py-3 border-bottom"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],attrs:{variant:"dark"}},[a("font-awesome-icon",{attrs:{icon:"bars"}})],1),a("h1",{staticClass:"font-weight-bold text-center"},[t._v("Proyecto VUE")]),a("div")],1),a("main",{staticClass:"container pt-5"},[a("aside",[a("Sidebar")],1),a("router-view")],1),a("footer",{staticClass:"bg-secondary text-white text-center p-3"},[t._v(" Footer ")])])},u=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-sidebar",{attrs:{id:"sidebar",shadow:"",backdrop:""}},[a("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/"}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"home"}}),t._v(" Tareas ")],1),a("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/about"}},[a("font-awesome-icon",{staticClass:"mr-4 ml-2",attrs:{icon:"info"}}),t._v(" Información ")],1)],1)},d=[],f={name:"Sidebar"},p=f,b=a("2877"),m=Object(b["a"])(p,l,d,!1,null,null,null),v=m.exports,h={name:"App",components:{Sidebar:v}},w=h,k=(a("034f"),Object(b["a"])(w,c,u,!1,null,null,null)),x=k.exports,_=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks"},[a("b-form-group",{staticClass:"font-weight-bold",attrs:{label:"Nueva tarea","label-for":"newTask",description:'Pulsa "/" para acceder directamente'}},[a("b-form-input",{attrs:{id:"newTask",size:"lg",type:"text",placeholder:"Texto de la nueva tarea",required:""},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"todo-tasks mt-5"},[a("h2",{staticClass:"mb-3"},[t._v("Tareas por hacer")]),t._l(t.tasks.filter((function(t){return"todo"==t.status})),(function(t){return a("Task",{key:t.text,attrs:{text:t.text,status:t.status}})}))],2)]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"done-tasks mt-5"},[a("h2",{staticClass:"mb-3"},[t._v("Tareas completadas")]),t._l(t.tasks.filter((function(t){return"done"==t.status})),(function(t){return a("Task",{key:t.text,attrs:{text:t.text,status:t.status}})}))],2)])])],1)},y=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-alert",{attrs:{show:"",variant:"done"==t.status?"success":"info"}},[t._v(" "+t._s(t.text)+" ")])},T=[],O={name:"Task",props:["text","status"]},j=O,P=Object(b["a"])(j,C,T,!1,null,null,null),S=P.exports,E={name:"Tasks",data:function(){return{newTask:"",tasks:[{text:"Hacer la compra",status:"done"},{text:"Pasear al perro",status:"done"},{text:"Hacer accesible esta pàgina",status:"todo"},{text:"Ir al gimnasio",status:"todo"}]}},mounted:function(){document.onkeypress=function(t){t=t||window.event,47==t.keyCode&&(t.preventDefault(),document.querySelector("#newTask").focus())}},components:{Task:S}},$=E,A=Object(b["a"])($,g,y,!1,null,null,null),M=A.exports,q=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("About")])])}],I={name:"About",components:{}},J=I,N=Object(b["a"])(J,q,H,!1,null,null,null),z=N.exports;n["default"].use(_["a"]);var D=[{path:"/",name:"Tasks",component:M},{path:"/about",name:"About",component:z}],F=new _["a"]({routes:D,mode:"history",base:"/practica-curso-vue/",linkExactActiveClass:"active"}),U=F;n["default"].config.productionTip=!1,new n["default"]({router:U,render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.1b41b7cc.js.map