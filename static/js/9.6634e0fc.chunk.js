(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{221:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t(1),t(222);var r=t(2);function a(){return Object(r.jsx)("div",{className:"preloader_container",children:Object(r.jsx)("div",{className:"circular-container",children:Object(r.jsx)("div",{className:"circle circular-loader1",children:Object(r.jsx)("div",{className:"circle circular-loader2",children:" "})})})})}},222:function(e,n,t){var r=t(51),a=t(223);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},223:function(e,n,t){(n=t(52)(!1)).push([e.i,".preloader_container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-container {\n  width: 10%;\n  margin: 0 auto;\n}\n\n.circle {\n  border: 5px solid transparent;\n  border-radius: 50%;\n}\n\n.circular-loader1 {\n  width: 100px;\n  height: 100px;\n  display: table;\n  padding: 10px;\n  border-top: 5px solid #FF6600;\n  border-bottom: 5px solid #FF6600;\n  -webkit-animation: circular_loader1 linear 2s infinite;\n          animation: circular_loader1 linear 2s infinite;\n}\n\n.circular-loader2 {\n  width: 10px;\n  height: 10px;\n  display: table-cell;\n  border-right: 5px solid #FF9F43;\n  border-left: 5px solid #FF9F43;\n  -webkit-animation: circular_loader2 linear 2s infinite;\n          animation: circular_loader2 linear 2s infinite;\n}\n\n@-webkit-keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}",""]),e.exports=n},391:function(e,n,t){var r=t(51),a=t(392);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},392:function(e,n,t){(n=t(52)(!1)).push([e.i,".authe_modal_box {\r\n    width: 500px;\r\n    max-height: 95vh;\r\n    background-color: #fff;\r\n    overflow-y: auto;\r\n    border-radius: 15px;\r\n    display: flex;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .authe_modal_box {\r\n        width: 95vw;\r\n    }\r\n}\r\n",""]),e.exports=n},395:function(e,n,t){var r=t(51),a=t(396);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},396:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".tab_container {\n  display: flex;\n  margin-bottom: 10px;\n}\n.tab_container .tab_button {\n  height: 40px;\n  margin: 5px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 5px;\n  flex: 1;\n  padding: 10px;\n}\n.tab_container .tab_button.active {\n  background-color: #FF6600;\n  color: #fff;\n}\n\n@media screen and (max-width: 767px) {\n  .tab_container {\n    flex-direction: column;\n  }\n}\n.verification_form_box {\n  width: 100%;\n  flex: 1;\n}\n.verification_form_box .verification_box_content {\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n}\n.verification_form_box .verification_form_input {\n  box-sizing: border-box;\n  border-radius: 22px;\n  flex: 1;\n  padding: 15px;\n  resize: none;\n  background: #f0f7fc;\n}",""]),e.exports=n},425:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return A}));var r=t(16),a=t.n(r),o=t(30),c=t.n(o),i=t(21),s=t.n(i),u=t(1),l=t(219),d=t(104),p=t(220),f=t(380),b=t(71),m=t.n(b),j=(t(391),t(240)),h=t(241),x=t(242),O=t(2);function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var v,y=function(e){var n=e.onRequestClose,t=e.stateHandler,r=Object(u.useState)({pageName:"login"}),o=c()(r,2),i=o[0],l=o[1],d=function(e,n){i[e]=n,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},i))},p=function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n(),t("requestActionModal",!0);case 2:case"end":return e.stop()}}),null,null,null,Promise)};return Object(O.jsxs)("div",{className:"authe_modal_box",children:["login"===i.pageName&&Object(O.jsx)(j.a,{pageHandler:d,embedToGetUserToken:p}),"signup"===i.pageName&&Object(O.jsx)(h.a,{pageHandler:d,embedToGetUserToken:p}),"forgotPassword"===i.pageName&&Object(O.jsx)(x.a,{pageHandler:d})]})},w=t(19),_=t.n(w),P=t(25),N=t(221),k=t(70),S=t(9),D=P.a.div(v||(v=_()(["\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));function M(e){var n=e.state,t=Object(S.f)();return Object(u.useEffect)((function(){!function(){var e,r,a;s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e={document:n.userTextToScan,name:n.name,email:n.email,phoneNumber:n.phoneNumber,socialMediaLink:n.socialMediaLink,scamSource:n.scamSource,alreadyScammed:""==n.alreadyScammed?"No":"Yes",scammedAmount:n.scammedAmount},o.next=3,s.a.awrap(k.a);case 3:return r=o.sent,a={userText:e.document},o.next=7,s.a.awrap(r.post("https://soji-app.herokuapp.com/api/v1/predict1",a,!0));case 7:o.sent.on("static",(function(n){var a;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(a=n.percentage)){o.next=7;break}return e.prediction=a,o.next=5,s.a.awrap(r.post("v1/suspected_users/save_seaches",e));case 5:o.sent.on("static",(function(e){if(200==e.statusCode){var n=e.response.data;t("/get-prediction-results/"+n.uniqueId,{replace:!1})}}));case 7:case"end":return o.stop()}}),null,null,null,Promise)}));case 9:case"end":return o.stop()}}),null,null,null,Promise)}()}),[]),Object(O.jsx)(D,{children:Object(O.jsx)(N.a,{})})}function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function F(){var e=Object(u.useState)({phoneNumber:""}),n=c()(e,2),t=n[0],r=n[1],o=function(e,n){t[e]=n,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{placeholder:"Phone Number",onChange:function(e){return o("phoneNumber",e.target.value)}}),Object(O.jsx)("div",{className:"button_container",children:Object(O.jsx)(l.a,{title:"Continue",onClick:function(){return function(){var e,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(k.a);case 2:return e=r.sent,n={phoneNumber:t.phoneNumber},r.next=6,s.a.awrap(e.post("v1/search_engine/search_phones",n));case 6:r.sent.on("static",(function(e){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),null,null,null,Promise)}));case 8:case"end":return r.stop()}}),null,null,null,Promise)}()}})})]})}function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(){var e=Object(u.useState)({email:""}),n=c()(e,2),t=n[0],r=n[1],o=function(e,n){t[e]=n,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(p.a,{placeholder:"Email",onChange:function(e){return o("email",e.target.value)}}),Object(O.jsx)("div",{className:"button_container",children:Object(O.jsx)(l.a,{title:"Continue",onClick:function(){return function(){var e,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(k.a);case 2:return e=r.sent,n={email:t.email},r.next=6,s.a.awrap(e.post("v1/search_engine/search_emails",n));case 6:r.sent.on("static",(function(e){return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e);case 1:case"end":return n.stop()}}),null,null,null,Promise)}));case 8:case"end":return r.stop()}}),null,null,null,Promise)}()}})})]})}t(395);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(){var e=Object(u.useState)({userTextToScan:"",name:"",email:"",phoneNumber:"",socialMediaLink:"",scamSource:"",scamSourceData:!1,alreadyScammed:"",scammedAmount:"",onRequest:!1,getUserDetailsModal:!1,autheModal:!1,requestActionModal:!1,error:!1}),n=c()(e,2),t=n[0],r=n[1],o=Object(u.useState)("documents"),i=c()(o,2),p=i[0],b=i[1],j=function(e,n){t[e]=n,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(f.a,{description:Object(O.jsx)((function(){return Object(O.jsx)("div",{className:"desc",children:"Scan for FRAUDULENT Documents, Phone Number and Email"})}),{}),children:[Object(O.jsxs)("div",{className:"tab_container",children:[Object(O.jsx)("div",{className:"tab_button "+("documents"==p&&"active"),onClick:function(){return b("documents")},children:"Documents"}),Object(O.jsx)("div",{className:"tab_button "+("phoneNumber"==p&&"active"),onClick:function(){return b("phoneNumber")},children:"Phone Number"}),Object(O.jsx)("div",{className:"tab_button "+("email"==p&&"active"),onClick:function(){return b("email")},children:"Email"})]}),"documents"==p&&Object(O.jsxs)("div",{className:"verification_form_box",children:[Object(O.jsxs)("div",{className:"verification_box_content",children:[Object(O.jsx)("textarea",{value:t.userTextToScan,onChange:function(e){return j("userTextToScan",e.target.value)},className:"verification_form_input",placeholder:"Paste Document text here..."}),Object(O.jsx)("div",{className:"button_container",children:Object(O.jsx)(l.a,{title:"Continue",onClick:function(){return s.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:t.userTextToScan.split(" ").length<4?j("error","Please make your search up to four(4) characters"):"undefined"!=typeof m.a.get("SOJI_uft_token")?j("requestActionModal",!0):j("autheModal",!0);case 2:case"end":return e.stop()}}),null,null,null,Promise)}})})]}),t.error&&Object(O.jsx)("p",{style:{color:"red"},children:t.error})]}),"phoneNumber"==p&&Object(O.jsx)(F,{}),"email"==p&&Object(O.jsx)(q,{})]}),Object(O.jsx)(d.a,{visible:t.autheModal,onRequestClose:function(){return j("autheModal",!1)},children:Object(O.jsx)(y,{onRequestClose:function(){return j("autheModal",!1)},stateHandler:j})}),Object(O.jsx)(d.a,{visible:t.requestActionModal,onRequestClose:function(){return j("requestActionModal",!1)},children:Object(O.jsx)(M,{onRequestClose:function(){return j("requestActionModal",!1)},state:t})})]})}}}]);
//# sourceMappingURL=9.6634e0fc.chunk.js.map