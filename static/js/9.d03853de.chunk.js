(this.webpackJsonp=this.webpackJsonp||[]).push([[9],{220:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));t(1),t(221);var r=t(2);function a(){return Object(r.jsx)("div",{className:"preloader_container",children:Object(r.jsx)("div",{className:"circular-container",children:Object(r.jsx)("div",{className:"circle circular-loader1",children:Object(r.jsx)("div",{className:"circle circular-loader2",children:" "})})})})}},221:function(e,n,t){var r=t(52),a=t(222);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},222:function(e,n,t){(n=t(51)(!1)).push([e.i,".preloader_container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-container {\n  width: 10%;\n  margin: 0 auto;\n}\n\n.circle {\n  border: 5px solid transparent;\n  border-radius: 50%;\n}\n\n.circular-loader1 {\n  width: 100px;\n  height: 100px;\n  display: table;\n  padding: 10px;\n  border-top: 5px solid #FF6600;\n  border-bottom: 5px solid #FF6600;\n  -webkit-animation: circular_loader1 linear 2s infinite;\n          animation: circular_loader1 linear 2s infinite;\n}\n\n.circular-loader2 {\n  width: 10px;\n  height: 10px;\n  display: table-cell;\n  border-right: 5px solid #FF9F43;\n  border-left: 5px solid #FF9F43;\n  -webkit-animation: circular_loader2 linear 2s infinite;\n          animation: circular_loader2 linear 2s infinite;\n}\n\n@-webkit-keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}",""]),e.exports=n},234:function(e,n,t){"use strict";t.d(n,"a",(function(){return S}));var r,a,o,i,c,s,l,u=t(19),d=t.n(u),p=(t(1),t(24)),f=t(108),m=t(105),b=t(53),x=t(219),h=t(2),j=p.a.div(r||(r=d()(["\n    max-height: 85vh;\n    min-width: 400px;\n    background-color: #fff;\n    border-radius: 15px;\n    padding: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n"]))),g=p.a.div(a||(a=d()(["\n    width: 100%;\n    text-align: left;\n    font-size: 17px;\n    padding: 10px;\n    border-bottom: 1px solid #f9f9f8;\n    color: ",";\n"])),b.a.defaultColor),v=p.a.div(o||(o=d()(["\n    width: 100%;\n    padding: 10px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex: 1;\n"]))),O=p.a.div(i||(i=d()(["\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n"]))),y=Object(p.a)(x.a)(c||(c=d()(["\n    width: 400px;\n\n"]))),w=p.a.div(s||(s=d()(["\n    background: #ffeed5;\n    height: 30px;\n    width: 30px;\n    border-radius: 15px;\n    position: absolute;\n    top: 18px;\n    right: 15px;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),_=p.a.p(l||(l=d()(["\n    color: red;\n"])));function S(e){var n=e.onRequestClose,t=e.isPageLoaded,r=e.pageTitle,a=e.children,o=e.error,i=e.isButtonLoading,c=e.buttonTitle,s=e.actionButton,l=e.className;return Object(h.jsx)(j,{className:l,children:t?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{children:r}),Object(h.jsx)(w,{onClick:function(){return n()},children:Object(h.jsx)(m.a,{color:b.a.defaultColor,size:16})}),Object(h.jsx)(v,{children:a}),o&&Object(h.jsxs)(_,{children:["Error Occured: ",o]}),Object(h.jsx)(O,{children:Object(h.jsx)(y,{title:c,loading:i,onClick:function(){return s()}})})]}):Object(h.jsx)(f.a,{})})}},392:function(e,n,t){var r=t(52),a=t(393);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},393:function(e,n,t){(n=t(51)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".sender_details {\n  height: 80vh;\n  width: 70vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #FCFEFE;\n  border-radius: 10px;\n}\n.sender_details .close_button {\n  height: 35px;\n  width: 35px;\n  border-radius: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  background-color: #C4C4C4;\n  right: 3px;\n  top: 4px;\n  cursor: pointer;\n}\n.sender_details .sender_details_title {\n  font-size: 18px;\n  line-height: 22px;\n  margin-bottom: 15px;\n  padding: 15px;\n  text-align: center;\n}\n.sender_details .form_box_container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 15px;\n}\n.sender_details .form_box {\n  width: 100%;\n}",""]),e.exports=n},396:function(e,n,t){var r=t(52),a=t(397);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},397:function(e,n,t){var r=t(51),a=t(398);(n=r(!1)).i(a),n.push([e.i,".verification_form_box {\n  width: 100%;\n  flex: 1;\n}\n.verification_form_box .verification_box_content {\n  display: flex;\n  flex-direction: column;\n  height: 350px;\n  border-top-left-radius: 22px;\n  border-top-right-radius: 22px;\n}\n.verification_form_box .verification_form_input {\n  border: 1px solid #F3F2F7;\n  box-sizing: border-box;\n  border-radius: 22px;\n  flex: 1;\n  padding: 15px;\n  resize: none;\n  font-size: 17px;\n}",""]),e.exports=n},398:function(e,n,t){(n=t(51)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,"",""]),e.exports=n},427:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return A}));var r=t(16),a=t.n(r),o=t(29),i=t.n(o),c=t(1),s=t(219),l=t(103),u=t(223),d=t(381),p=t(30),f=t.n(p),m=t(234),b=t(102),x=t(72),h=t.n(x),j=(t(392),t(2)),g=[{label:"Yes",value:"Yes"},{label:"No",value:"No"}];function v(e){var n=e.onRequestClose,t=e.stateHandler,r=e.state,a=Object(c.useState)(!1),o=i()(a,2),s=o[0],l=(o[1],Object(c.useState)()),d=i()(l,2),p=d[0];d[1];return Object(c.useEffect)((function(){!function(){var e;f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.awrap(b.a);case 2:return e=n.sent,n.next=5,f.a.awrap(e.get("v1/utils/scam_source"));case 5:n.sent.on("static",(function(e){return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t("scamSourceData",e.response.data);case 1:case"end":return n.stop()}}),null,null,null,Promise)}));case 7:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),Object(j.jsx)(m.a,{isPageLoaded:r.scamSourceData,pageTitle:"Tell Us more Information about the document",buttonTitle:"Scan through Document",isButtonLoading:s,actionButton:function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:"undefined"!=typeof h.a.get("SOJI_uft_token")?(n(),t("requestActionModal",!0)):(n(),t("autheModal",!0));case 1:case"end":return e.stop()}}),null,null,null,Promise)},onRequestClose:n,error:p,className:"sender_details",children:r.scamSourceData&&Object(j.jsx)("div",{className:"form_box_container",children:Object(j.jsxs)("div",{className:"row form_box",children:[Object(j.jsx)(u.a,{placeholder:"Enter the Full Name Here",onChange:function(e){return t("name",e.target.value)},title:"Is any name attached to the document?",value:r.name}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.a,{placeholder:"Enter the Email Here",title:"Is any email address attached to the document?",onChange:function(e){return t("email",e.target.value)},value:r.email})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.a,{placeholder:"Enter the Phone Number Here",title:"Is any contact phone number provided as well?",onChange:function(e){return t("phoneNumber",e.target.value)},value:r.phoneNumber})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.a,{placeholder:"Social Media Link",title:"If any Social Media Link were shared, Please provide it below",onChange:function(e){return t("socialMediaLink",e.target.value)},value:r.socialMediaLink})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.b,{placeholder:"Select Scam Source",title:"Scam Source",options:r.scamSourceData,onChange:function(e){return t("scamSource",e.value)},value:r.scamSourceData.filter((function(e){return e.value===r.scamSource}))})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.b,{title:"Have you been scammed with this document?",onChange:function(e){return t("alreadyScammed",e.value)},options:g,value:g.filter((function(e){return e.value===r.alreadyScammed}))})}),Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsx)(u.a,{disabled:"Yes"!=r.alreadyScammed,title:"How much were you scammed?",onChange:function(e){return t("scammedAmount",e.target.value)},value:r.scammedAmount})})]})})})}var O,y=t(19),w=t.n(y),_=t(24),S=t(241),N=t(242),k=t(243);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var M,P=_.a.div(O||(O=w()(["\n    width: 500px;\n    max-height: 95vh;\n    background-color: #fff;\n    overflow-y: auto;\n    border-radius: 15px;\n    display: flex;\n"]))),D=function(e){var n=e.onRequestClose,t=e.stateHandler,r=Object(c.useState)({pageName:"login"}),o=i()(r,2),s=o[0],l=o[1],u=function(e,n){s[e]=n,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},s))},d=function(){return f.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n(),t("requestActionModal",!0);case 2:case"end":return e.stop()}}),null,null,null,Promise)};return Object(j.jsxs)(P,{children:["login"===s.pageName&&Object(j.jsx)(S.a,{pageHandler:u,embedToGetUserToken:d}),"signup"===s.pageName&&Object(j.jsx)(N.a,{pageHandler:u,embedToGetUserToken:d}),"forgotPassword"===s.pageName&&Object(j.jsx)(k.a,{pageHandler:u})]})},F=t(220),q=t(9),T=_.a.div(M||(M=w()(["\n    border-radius: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"])));function E(e){var n=e.state,t=Object(q.f)();return Object(c.useEffect)((function(){!function(){var e,r,a;f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e={document:n.userTextToScan,name:n.name,email:n.email,phoneNumber:n.phoneNumber,socialMediaLink:n.socialMediaLink,scamSource:n.scamSource,alreadyScammed:n.alreadyScammed,scammedAmount:n.scammedAmount},o.next=3,f.a.awrap(b.a);case 3:return r=o.sent,a={userText:e.document},o.next=7,f.a.awrap(r.post("http://soji-app.herokuapp.com/api/v1/predict1",a,!0));case 7:o.sent.on("static",(function(n){var a;return f.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(a=n.percentage)){o.next=7;break}return e.prediction=a,o.next=5,f.a.awrap(r.post("v1/suspected_users/save_seaches",e));case 5:o.sent.on("static",(function(e){if(200==e.statusCode){var n=e.response.data;t("/get-prediction-results/"+n.uniqueId,{replace:!1})}}));case 7:case"end":return o.stop()}}),null,null,null,Promise)}));case 9:case"end":return o.stop()}}),null,null,null,Promise)}()}),[]),Object(j.jsx)(T,{children:Object(j.jsx)(F.a,{})})}t(396);function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function A(){var e=Object(c.useState)({userTextToScan:"",name:"",email:"",phoneNumber:"",socialMediaLink:"",scamSource:"",scamSourceData:!1,alreadyScammed:"",scammedAmount:"",onRequest:!1,getUserDetailsModal:!1,autheModal:!1,requestActionModal:!1}),n=i()(e,2),t=n[0],r=n[1],o=function(e,n){t[e]=n,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){a()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.a,{description:Object(j.jsx)((function(){return Object(j.jsxs)("div",{className:"desc",children:["Drop your content here (",Object(j.jsx)("span",{className:"text_default_color",children:"crtl + v"}),")"]})}),{}),children:Object(j.jsx)("div",{className:"verification_form_box",children:Object(j.jsxs)("div",{className:"verification_box_content",children:[Object(j.jsx)("textarea",{value:t.userTextToScan,onChange:function(e){return o("userTextToScan",e.target.value)},className:"verification_form_input",placeholder:"Paste Document text here..."}),Object(j.jsx)("div",{className:"button_container",children:Object(j.jsx)(s.a,{title:"Continue",onClick:function(){return o("getUserDetailsModal",!0)}})})]})})}),Object(j.jsx)(l.a,{visible:t.getUserDetailsModal,onRequestClose:function(){return o("getUserDetailsModal",!1)},children:Object(j.jsx)(v,{onRequestClose:function(){return o("getUserDetailsModal",!1)},stateHandler:o,state:t})}),Object(j.jsx)(l.a,{visible:t.autheModal,onRequestClose:function(){return o("autheModal",!1)},children:Object(j.jsx)(D,{onRequestClose:function(){return o("autheModal",!1)},stateHandler:o})}),Object(j.jsx)(l.a,{visible:t.requestActionModal,onRequestClose:function(){return o("requestActionModal",!1)},children:Object(j.jsx)(E,{onRequestClose:function(){return o("requestActionModal",!1)},state:t})})]})}}}]);
//# sourceMappingURL=9.d03853de.chunk.js.map