(function(t){function e(e){for(var r,s,u=e[0],i=e[1],c=e[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/practice/vm/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"0726":function(t,e,n){"use strict";var r=n("398c"),o=n.n(r);o.a},"398c":function(t,e,n){},"45cc":function(t,e,n){"use strict";var r=n("5982"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("ecee"),a=n("c074"),s=n("ad3d");o["c"].add(a["a"]),r["a"].component("AppIcon",s["a"]);var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c=(n("034f"),n("2877")),l={},f=Object(c["a"])(l,u,i,!1,null,null,null),p=f.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("div",{staticClass:"flex flex-row items-start"},[t._l(t.board.columns,(function(e,r){return n("BoardColumn",{key:r,attrs:{column:e,columnIndex:r,board:t.board}})})),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow bg-transparent font-bold",attrs:{type:"text",placeholder:"+ New column"},domProps:{value:t.newColumnName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)},input:function(e){e.target.composing||(t.newColumnName=e.target.value)}}})])],2),t.isTaskOpen?n("div",{staticClass:"task-bg",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("router-view")],1):t._e()])},b=[],v=(n("8e6e"),n("ac6a"),n("456d"),n("7f7f"),n("bd86")),y=n("2f62"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"column",attrs:{transferData:{type:"column",fromColumnIndex:t.columnIndex}}},[n("div",{staticClass:"flex items-center ml-2 mt-2 mb-4 font-bold"},[t._v("\n    "+t._s(t.column.name)+"\n  ")]),n("div",{staticClass:"list-reset"},[t._l(t.column.tasks,(function(e,r){return n("ColumnTask",{key:r,attrs:{task:e,taskIndex:r,column:t.column,columnIndex:t.columnIndex,board:t.board}})})),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{type:"text",placeholder:"+ New task"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createTask(e,t.column.tasks)}}})],2)])],1)},g=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("AppDrop",{on:{drop:t.moveTaskOrColumn}},[n("AppDrag",{staticClass:"task",attrs:{transferData:{type:"task",fromColumnIndex:t.columnIndex,fromTaskIndex:t.taskIndex}},nativeOn:{click:function(e){return t.goToTask(t.task)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[t._v("\n    "+t._s(t.task.name)+"\n  ")]),t.task.description?n("p",{staticClass:"w-full flex-no-shrink mt-2 text-sm"},[t._v("\n    "+t._s(t.task.description)+"\n  ")]):t._e()])],1)},O=[],x=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{draggable:""},on:{dragstart:function(e){return e.target!==e.currentTarget?null:t.onDrag(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)}),w=[],C={props:{transferData:{type:Object,required:!0}},methods:{onDrag:function(t){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("payload",JSON.stringify(this.transferData))}}},T=C,j=Object(c["a"])(T,x,w,!1,null,null,null),_=j.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{drop:function(e){return e.stopPropagation(),t.onDrop(e)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[t._t("default")],2)},D=[],P={methods:{onDrop:function(t){var e=JSON.parse(t.dataTransfer.getData("payload"));this.$emit("drop",e)}}},I=P,E=Object(c["a"])(I,A,D,!1,null,null,null),S=E.exports,N={props:{column:{type:Object,required:!0},columnIndex:{type:Number,required:!0},board:{type:Object,required:!0}},methods:{moveTaskOrColumn:function(t){"task"===t.type?this.moveTask(t):this.moveColumn(t)},moveTask:function(t){var e=t.fromColumnIndex,n=t.fromTaskIndex,r=this.board.columns[e].tasks;this.$store.commit("MOVE_TASK",{fromTasks:r,toTasks:this.column.tasks,fromTaskIndex:n,toTaskIndex:this.taskIndex})},moveColumn:function(t){var e=t.fromColumnIndex;this.$store.commit("MOVE_COLUMN",{fromColumnIndex:e,toColumnIndex:this.columnIndex})}}},$={components:{AppDrag:_,AppDrop:S},mixins:[N],props:{task:{type:Object,required:!0},taskIndex:{type:Number,required:!0}},methods:{goToTask:function(t){this.$router.push({name:"task",params:{id:t.id}})}}},M=$,U=Object(c["a"])(M,h,O,!1,null,null,null),q=U.exports,J={components:{ColumnTask:q,AppDrag:_,AppDrop:S},mixins:[N],methods:{createTask:function(t,e){this.$store.commit("CREATE_TASK",{tasks:e,name:t.target.value}),t.target.value=""}}},K=J,L=(n("0726"),Object(c["a"])(K,k,g,!1,null,null,null)),R=L.exports;function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var z={components:{BoardColumn:R},data:function(){return{newColumnName:""}},computed:B({},Object(y["c"])(["board"]),{isTaskOpen:function(){return"task"===this.$route.name}}),methods:{close:function(){this.$router.push({name:"board"})},createColumn:function(){this.$store.commit("CREATE_COLUMN",{name:this.newColumnName}),this.newColumnName=""}}},F=z,G=(n("5ee7"),Object(c["a"])(F,m,b,!1,null,null,null)),H=G.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{staticClass:"p-2 w-full mr-2 flex-grow text-xl font-bold",attrs:{type:"text"},domProps:{value:t.task.name},on:{change:function(e){return t.updateTaskProperty(e,"name")}}}),n("textarea",{staticClass:"relative w-full bg-transparent px-2 border mt-2 h-64 border-none leading-normal",domProps:{value:t.task.description},on:{change:function(e){return t.updateTaskProperty(e,"description")}}})])])},W=[];function X(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?X(Object(n),!0).forEach((function(e){Object(v["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Z={computed:Y({},Object(y["b"])(["getTask"]),{task:function(){return this.getTask(this.$route.params.id)}}),methods:{updateTaskProperty:function(t,e){this.$store.commit("UPDATE_TASK",{task:this.task,key:e,value:t.target.value})}}},tt=Z,et=(n("45cc"),Object(c["a"])(tt,Q,W,!1,null,null,null)),nt=et.exports;r["a"].use(d["a"]);var rt=new d["a"]({mode:"history",base:"/practice/vm/",routes:[{path:"/",name:"board",component:H,children:[{path:"task/:id",name:"task",component:nt}]}]});n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54");function ot(){return Math.random().toString(16).slice(2)}function at(t){t.subscribe((function(t,e){return localStorage.setItem("boards",JSON.stringify(e.boards))}))}var st={name:"workshop",columns:[{name:"todo",tasks:[{description:"",name:"laia",id:ot(),userAssigned:null},{description:"",name:"my wifey",id:ot(),userAssigned:null},{description:"",name:"dinner",id:ot(),userAssigned:null}]},{name:"in-progress",tasks:[{description:"",name:"first task",id:ot(),userAssigned:null}]},{name:"done",tasks:[{description:"",name:"first task",id:ot(),userAssigned:null}]}]};function ut(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=it(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,a=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,o=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function it(t,e){if(t){if("string"===typeof t)return ct(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ct(t,e):void 0}}function ct(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}r["a"].use(y["a"]);var lt=JSON.parse(localStorage.getItem("board"))||st,ft=new y["a"].Store({plugins:[at],state:{board:lt},getters:{getTask:function(t){return function(e){var n,r=ut(t.board.columns);try{for(r.s();!(n=r.n()).done;){var o,a=n.value,s=ut(a.tasks);try{for(s.s();!(o=s.n()).done;){var u=o.value;if(u.id===e)return u}}catch(i){s.e(i)}finally{s.f()}}}catch(i){r.e(i)}finally{r.f()}}}},mutations:{CREATE_TASK:function(t,e){var n=e.tasks,r=e.name;n.push({name:r,id:ot(),description:""})},CREATE_COLUMN:function(t,e){var n=e.name;t.board.columns.push({name:n,tasks:[]})},UPDATE_TASK:function(t,e){var n=e.task,r=e.key,o=e.value;n[r]=o},MOVE_TASK:function(t,e){var n=e.fromTasks,r=e.toTasks,o=e.fromTaskIndex,a=e.toTaskIndex,s=n.splice(o,1)[0];r.splice(a,0,s)},MOVE_COLUMN:function(t,e){var n=e.fromColumnIndex,r=e.toColumnIndex,o=t.board.columns,a=o.splice(n,1)[0];o.splice(r,0,a)}}}),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:t.typeClasses,attrs:{type:"button"}},[t._t("default")],2)},dt=[],mt={props:{type:{type:String}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},bt=mt,vt=(n("b9b4"),Object(c["a"])(bt,pt,dt,!1,null,"460433cb",null)),yt=vt.exports;r["a"].component("AppButton",yt),r["a"].config.productionTip=!1,new r["a"]({router:rt,store:ft,render:function(t){return t(p)}}).$mount("#app")},5982:function(t,e,n){},"5ee7":function(t,e,n){"use strict";var r=n("9b98"),o=n.n(r);o.a},"64a9":function(t,e,n){},"6eff":function(t,e,n){},"9b98":function(t,e,n){},b9b4:function(t,e,n){"use strict";var r=n("6eff"),o=n.n(r);o.a}});
//# sourceMappingURL=app.c411711f.js.map