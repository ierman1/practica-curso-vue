(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/practica-curso-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var s=a("2b0e"),n=a("ecee"),r=a("c074"),o=a("ad3d");n["c"].add(r["a"]),s["default"].component("font-awesome-icon",o["a"]);var i=a("5f5b");a("ab8b"),a("2dd8");s["default"].use(i["a"]);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",{staticClass:"container-sm mt-4 py-3 border-bottom"},[a("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar",modifiers:{sidebar:!0}}],attrs:{variant:"dark"}},[a("span",{staticClass:"sr-only"},[t._v(" Desplegar menú lateral ")]),a("font-awesome-icon",{attrs:{icon:"bars"}})],1),a("h1",{staticClass:"font-weight-bold text-center"},[t._v("Proyecto VUE")]),a("div")],1),a("main",{staticClass:"container pt-5"},[a("aside",[a("Sidebar")],1),a("router-view")],1),t._m(0)])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-secondary text-white text-center p-3"},[t._v(" Germán Pérez Bordera · "),a("a",{staticClass:"text-white",attrs:{href:"mailto:germanperezb98@gmail.com"}},[t._v("germanperezb98@gmail.com")])])}],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-sidebar",{attrs:{id:"sidebar",shadow:"",backdrop:""}},[a("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/"}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"home"}}),t._v(" Inicio ")],1),a("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/tasks"}},[a("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"list"}}),t._v(" Tareas ")],1),a("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{to:"/about"}},[a("font-awesome-icon",{staticClass:"mr-4 ml-2",attrs:{icon:"info"}}),t._v(" Información ")],1)],1)},d=[],f={name:"Sidebar"},m=f,p=a("2877"),b=Object(p["a"])(m,u,d,!1,null,null,null),v=b.exports,h={name:"App",components:{Sidebar:v},head:{htmlAttrs:{lang:"es"}}},k=h,g=(a("034f"),Object(p["a"])(k,c,l,!1,null,null,null)),_=g.exports,w=a("8c4f"),C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("h2",{staticClass:"font-weight-bold mb-5"},[t._v("Inicio")]),a("p",{staticClass:"font-weight-bold"},[t._v("¿Qué es esto?")])])}],x={name:"Home",components:{}},T=x,O=Object(p["a"])(T,C,y,!1,null,null,null),j=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tasks"},[a("h2",{staticClass:"mb-5 font-weight-bold"},[t._v("Gestor de tareas")]),a("form",{on:{submit:t.createTask}},[a("div",{staticClass:"d-flex align-items-center"},[a("b-form-group",{staticClass:"font-weight-bold flex-grow-1 pr-2",attrs:{label:"Nueva tarea","label-for":"newTask",description:'Pulsa "/" para acceder directamente'}},[a("b-form-input",{attrs:{id:"newTask",size:"lg",type:"text",placeholder:"Texto de la nueva tarea",required:""},model:{value:t.newTask,callback:function(e){t.newTask=e},expression:"newTask"}})],1),a("b-button",{staticStyle:{"margin-top":"-8px"},attrs:{variant:"primary",size:"lg",type:"submit"}},[a("span",{staticClass:"sr-only"},[t._v(" Crear nueva tarea ")]),a("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1)]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"todo-tasks mt-5"},[a("h2",{staticClass:"mb-3"},[t._v("Tareas por hacer")]),t._l(t.tasks.filter((function(t){return"todo"==t.status})),(function(e){return a("Task",{key:e.text,attrs:{task:e},on:{changed:t.changeStatus,deleted:t.deleteTask}})}))],2)]),a("div",{staticClass:"col-12 col-lg-6"},[a("div",{staticClass:"done-tasks mt-5"},[a("h2",{staticClass:"mb-3"},[t._v("Tareas completadas")]),t._l(t.tasks.filter((function(t){return"done"==t.status})),(function(e){return a("Task",{key:e.text,attrs:{task:e},on:{changed:t.changeStatus,deleted:t.deleteTask}})}))],2)])])])},S=[],$=(a("7db0"),a("a434"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-alert",{attrs:{show:"",variant:t.variant}},[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[t._v(t._s(t.task.text))]),a("b-button-group",["todo"==t.task.status?a("b-button",{attrs:{variant:t.variant},on:{click:function(e){return t.emitChange("done")}}},[a("span",{staticClass:"sr-only"},[t._v(" Cambiar estado a 'finalizada' ")]),a("font-awesome-icon",{attrs:{icon:"arrow-right"}})],1):t._e(),"done"==t.task.status?a("b-button",{attrs:{variant:t.variant,"data-toggle":"tooltip"},on:{click:function(e){return t.emitChange("todo")}}},[a("span",{staticClass:"sr-only"},[t._v(" Cambiar estado a 'pendiente' ")]),a("font-awesome-icon",{attrs:{icon:"arrow-left"}})],1):t._e(),a("b-button",{attrs:{variant:"outline-"+t.variant},on:{click:t.emitRemoval}},[a("span",{staticClass:"sr-only"},[t._v(" Eliminar tarea ")]),a("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)],1)])}),P=[],z={name:"Task",props:["task"],data:function(){return{variant:"done"==this.task.status?"success":"info"}},methods:{emitRemoval:function(){this.$emit("deleted",this.task.id)},emitChange:function(t){this.$emit("changed",{id:this.task.id,status:t})}}},A=z,I=Object(p["a"])(A,$,P,!1,null,null,null),D=I.exports,H={name:"Tasks",data:function(){return{newTask:"",tasks:[{id:1,text:"Hacer la compra",status:"done"},{id:2,text:"Pasear al perro",status:"done"},{id:3,text:"Hacer accesible esta pàgina",status:"todo"},{id:4,text:"Ir al gimnasio",status:"todo"}]}},methods:{createTask:function(t){t.preventDefault(),this.tasks.push({id:Date.now(),text:this.newTask,status:"todo"}),this.newTask=""},changeStatus:function(t){this.tasks.find((function(e){return e.id==t.id})).status=t.status},deleteTask:function(t){this.tasks.splice(this.tasks.indexOf(this.tasks.find((function(e){return e.id==t}))),1)}},mounted:function(){document.onkeypress=function(t){t=t||window.event,47==t.keyCode&&(t.preventDefault(),document.querySelector("#newTask").focus())}},components:{Task:D}},M=H,q=Object(p["a"])(M,E,S,!1,null,null,null),G=q.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h2",[t._v("About")])])}],R={name:"About",components:{}},B=R,Q=Object(p["a"])(B,J,N,!1,null,null,null),U=Q.exports;s["default"].use(w["a"]);var V=[{path:"/",name:"Home",meta:{title:"Inicio"},component:j},{path:"/tasks",name:"Tasks",meta:{title:"Tareas"},component:G},{path:"/about",name:"About",meta:{title:"Información"},component:U}],F=new w["a"]({routes:V,mode:"history",base:"/practica-curso-vue/",linkExactActiveClass:"active"});F.beforeEach((function(t,e,a){document.title=t.meta.title,a()}));var K=F;s["default"].config.productionTip=!1,new s["default"]({router:K,render:function(t){return t(_)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.8e28ab13.js.map