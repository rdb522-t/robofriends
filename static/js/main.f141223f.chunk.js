(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(16),c=n.n(a),i=n(10),s=n(7),l=n(18),u=(n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function h(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(29);var d=n(1),f=n(2),b=n(4),p=n(3),g=n(5),m=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(b.a)(this,Object(p.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return console.log("CounterButton"),r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count: ",this.state.count)}}]),t}(o.PureComponent),E=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return console.log("header"),r.a.createElement("div",null,r.a.createElement("h1",{className:"f2"},"Robofriends"),r.a.createElement(m,{color:"red"}))}}]),t}(o.Component),v=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},O=function(e){var t=e.robots;return console.log("cardlist"),r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(v,{key:t,id:e.id,name:e.name,email:e.email})}))},w=function(e){e.searchfield;var t=e.searchChange;return console.log("searchbox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t}))},j=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)},y=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops.  That is not good"):this.props.children}}]),t}(o.Component),C=(n(30),function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return a?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement(E,null),r.a.createElement(w,{searchChange:n}),r.a.createElement(j,null,r.a.createElement(y,null,r.a.createElement(O,{robots:c}))))}}]),t}(o.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(C),S={searchField:""},k={isPending:!1,robots:[],error:""},_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(l.a));c.a.render(r.a.createElement(i.a,{store:T},r.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/robofriends","/service-worker.js");u?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):h(t,e)})}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.f141223f.chunk.js.map