(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{221:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));t(1),t(222);var r=t(2);function o(){return Object(r.jsx)("div",{className:"preloader_container",children:Object(r.jsx)("div",{className:"circular-container",children:Object(r.jsx)("div",{className:"circle circular-loader1",children:Object(r.jsx)("div",{className:"circle circular-loader2",children:" "})})})})}},222:function(n,e,t){var r=t(51),o=t(223);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);n.exports=o.locals||{}},223:function(n,e,t){(e=t(52)(!1)).push([n.i,".preloader_container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-container {\n  width: 10%;\n  margin: 0 auto;\n}\n\n.circle {\n  border: 5px solid transparent;\n  border-radius: 50%;\n}\n\n.circular-loader1 {\n  width: 100px;\n  height: 100px;\n  display: table;\n  padding: 10px;\n  border-top: 5px solid #FF6600;\n  border-bottom: 5px solid #FF6600;\n  -webkit-animation: circular_loader1 linear 2s infinite;\n          animation: circular_loader1 linear 2s infinite;\n}\n\n.circular-loader2 {\n  width: 10px;\n  height: 10px;\n  display: table-cell;\n  border-right: 5px solid #FF9F43;\n  border-left: 5px solid #FF9F43;\n  -webkit-animation: circular_loader2 linear 2s infinite;\n          animation: circular_loader2 linear 2s infinite;\n}\n\n@-webkit-keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}",""]),n.exports=e},407:function(n,e,t){var r=t(51),o=t(408);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var c={insert:"head",singleton:!1};r(o,c);n.exports=o.locals||{}},408:function(n,e,t){(e=t(52)(!1)).push([n.i,".document_card {\n  display: flex;\n  margin-bottom: 10px;\n  position: relative;\n}\n.document_card .document_card_content {\n  background: #f0f7fc;\n  border-radius: 23px;\n  height: 104px;\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n}\n.document_card .document_card_content .document_card_title {\n  font-weight: 700;\n}\n.document_card .more_option_box {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  cursor: pointer;\n}\n.document_card .more_option_content_box {\n  position: absolute;\n  top: 30px;\n  right: -2px;\n  z-index: 10000;\n}\n.document_card .more_option_content_box .option_box {\n  background: #FCFEFE;\n  box-shadow: -1px 2px 4px 1px rgba(0, 0, 0, 0.06);\n  height: 30px;\n  width: 30px;\n  border-radius: 20px;\n  margin-bottom: 10px;\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}",""]),n.exports=e},424:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return F}));var r,o=t(16),c=t.n(o),a=t(30),i=t.n(a),s=t(21),d=t.n(s),l=t(1),u=t(19),p=t.n(u),f=t(409),b=t(108),m=t(25),x=t(107),j=t(243),h=t(32),_=(t(407),t(2)),g=Object(m.a)(f.a)(r||(r=p()(["\n    height: 100%;\n"])));function O(n){var e=n.document,t=Object(l.useState)(!1),r=i()(t,2),o=r[0],c=r[1];return Object(_.jsxs)("div",{className:"document_card",children:[Object(_.jsx)("div",{className:"more_option_box",onClick:function(){return c(!o)},children:Object(_.jsx)(b.b,{color:"#5E5E5E",size:17})}),Object(_.jsx)(g,{size:100,color:"#E2EEF6"}),Object(_.jsxs)("div",{className:"document_card_content",children:[Object(_.jsx)("div",{className:"document_card_title",children:e.uniqueId}),Object(_.jsx)("p",{children:e.document})]}),o&&Object(_.jsxs)("div",{className:"more_option_content_box",children:[Object(_.jsx)(h.b,{to:"/get-prediction-results/"+e.uniqueId,className:"option_box",children:Object(_.jsx)(x.a,{color:"#FF6600",size:17})}),Object(_.jsx)("div",{className:"option_box",children:Object(_.jsx)(j.a,{color:"#FF6600",size:17})})]})]})}var v=t(70),w=t(221);function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function F(){var n=Object(l.useState)({fetchedData:!1}),e=i()(n,2),t=e[0],r=e[1],o=function(n,e){t[n]=e,r(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(Object(t),!0).forEach((function(e){c()(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},t))};return Object(l.useEffect)((function(){!function(){var n;d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.awrap(v.a);case 2:return n=e.sent,e.next=5,d.a.awrap(n.get("v1/suspected_users/get-all_recent_documents"));case 5:e.sent.on("static",(function(n){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e=n.response.data,o("fetchedData",e);case 2:case"end":return t.stop()}}),null,null,null,Promise)}));case 7:case"end":return e.stop()}}),null,null,null,Promise)}()}),[]),Object(_.jsx)("div",{className:"container content_Container",children:t.fetchedData?Object(_.jsx)("div",{className:"row",children:t.fetchedData.map((function(n,e){return Object(_.jsx)("div",{className:"col-md-4",children:Object(_.jsx)(O,{document:n})},e)}))}):Object(_.jsx)(w.a,{})})}}}]);
//# sourceMappingURL=11.0bb1966e.chunk.js.map