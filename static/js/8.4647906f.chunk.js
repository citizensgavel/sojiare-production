(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{219:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(16),i=t.n(r),o=t(20),a=t.n(o),s=(t(1),t(104)),c=(t(53),t(226),t(2)),l=["title","loading"];function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e){var n=e.title,t=e.loading,r=a()(e,l);return Object(c.jsxs)("button",p(p({},r),{},{className:"button",disabled:t,children:[t&&Object(c.jsx)(s.a,{color:"#fff",size:18}),Object(c.jsxs)("div",{children:[" ",t?"Please Wait...":n]})]}))}},220:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(1),t(221);var r=t(2);function i(){return Object(r.jsx)("div",{className:"preloader_container",children:Object(r.jsx)("div",{className:"circular-container",children:Object(r.jsx)("div",{className:"circle circular-loader1",children:Object(r.jsx)("div",{className:"circle circular-loader2",children:" "})})})})}},221:function(e,n,t){var r=t(51),i=t(222);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},222:function(e,n,t){(n=t(52)(!1)).push([e.i,".preloader_container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.circular-container {\n  width: 10%;\n  margin: 0 auto;\n}\n\n.circle {\n  border: 5px solid transparent;\n  border-radius: 50%;\n}\n\n.circular-loader1 {\n  width: 100px;\n  height: 100px;\n  display: table;\n  padding: 10px;\n  border-top: 5px solid #FF6600;\n  border-bottom: 5px solid #FF6600;\n  -webkit-animation: circular_loader1 linear 2s infinite;\n          animation: circular_loader1 linear 2s infinite;\n}\n\n.circular-loader2 {\n  width: 10px;\n  height: 10px;\n  display: table-cell;\n  border-right: 5px solid #FF9F43;\n  border-left: 5px solid #FF9F43;\n  -webkit-animation: circular_loader2 linear 2s infinite;\n          animation: circular_loader2 linear 2s infinite;\n}\n\n@-webkit-keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes circular_loader1 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-90deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes circular_loader2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(-180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}",""]),e.exports=n},223:function(e,n,t){"use strict";t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return B}));var r,i,o,a,s,c=t(16),l=t.n(c),d=t(20),p=t.n(d),u=t(19),b=t.n(u),x=(t(1),t(24)),f=t(2),g=["title","important","textarea"];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=x.a.div(r||(r=b()(["\n    position: relative;\n    margin-bottom: 30px;\n    width: 100%;\n"]))),O=x.a.div(i||(i=b()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),v=x.a.div(o||(o=b()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"]))),_=x.a.input(a||(a=b()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    height: 50px;\n    background: ","\n"])),(function(e){return e.disabled?"#F3F2F7":"#f0f7fc"})),y=x.a.textarea(s||(s=b()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    min-height: 100px;\n    max-height: 150px;\n"])));function w(e){var n=e.title,t=e.important,r=e.textarea,i=p()(e,g);return Object(f.jsxs)(m,{children:[Object(f.jsxs)(O,{children:[n," ",t&&Object(f.jsx)(v,{children:"*"})]}),r?Object(f.jsx)(y,h({},i)):Object(f.jsx)(_,h({},i))]})}var P,F,k,N=t(53),D=t(380),S=(t(228),["children","important","title"]);function C(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?C(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var M=x.a.div(P||(P=b()(["\n    position: relative;\n    margin-bottom: 30px;\n    width: 100%;\n"]))),z=x.a.div(F||(F=b()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),A=x.a.div(k||(k=b()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"]))),L=[{value:"chocolate",label:"Chocolate"}];function B(e){e.children;var n=e.important,t=e.title,r=p()(e,S),i={option:function(e,n){return E(E({},e),{},{color:N.a.textColor,backgroundColor:n.isFocused?"rgb(240, 247, 252)":N.a.backgroundColor})}};return Object(f.jsxs)(M,{children:[Object(f.jsxs)(z,{children:[t," ",n&&Object(f.jsx)(A,{children:"*"})]}),Object(f.jsx)(D.a,E({name:"colors",options:L,className:"basic-multi-select",classNamePrefix:"select",style:{height:"50px",width:"100%"},styles:i},r))]})}},226:function(e,n,t){var r=t(51),i=t(227);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},227:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".button {\n  border-radius: 19px;\n  width: 211px;\n  height: 35px;\n  background-color: #FF6600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n}\n.button div {\n  color: #fcfefe;\n  font-family: Montserrat !important;\n}",""]),e.exports=n},228:function(e,n,t){var r=t(51),i=t(229);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},229:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".form-select {\n  border: none !important;\n  height: 50px;\n}\n\n.form-select:focus {\n  border: none;\n  box-shadow: none !important;\n}\n\n.react-datepicker__input-container input {\n  width: 100%;\n}\n\n.basic-multi-select {\n  margin-top: 10px;\n}\n\n.select__control {\n  height: 50px;\n  border: none !important;\n  background-color: #F0F7FC !important;\n}",""]),e.exports=n},234:function(e,n,t){"use strict";t.d(n,"a",(function(){return P}));var r,i,o,a,s,c,l,d=t(19),p=t.n(d),u=(t(1),t(24)),b=t(106),x=t(105),f=t(53),g=t(219),j=t(2),h=u.a.div(r||(r=p()(["\n    max-height: 85vh;\n    min-width: 400px;\n    background-color: #fff;\n    border-radius: 15px;\n    padding: 10px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n"]))),m=u.a.div(i||(i=p()(["\n    width: 100%;\n    text-align: left;\n    font-size: 17px;\n    padding: 10px;\n    border-bottom: 1px solid #f9f9f8;\n    color: ",";\n"])),f.a.defaultColor),O=u.a.div(o||(o=p()(["\n    width: 100%;\n    padding: 10px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    flex: 1;\n"]))),v=u.a.div(a||(a=p()(["\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n    display: flex;\n"]))),_=Object(u.a)(g.a)(s||(s=p()(["\n    width: 400px;\n\n"]))),y=u.a.div(c||(c=p()(["\n    background: #ffeed5;\n    height: 30px;\n    width: 30px;\n    border-radius: 15px;\n    position: absolute;\n    top: 18px;\n    right: 15px;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),w=u.a.p(l||(l=p()(["\n    color: red;\n"])));function P(e){var n=e.onRequestClose,t=e.isPageLoaded,r=e.pageTitle,i=e.children,o=e.error,a=e.isButtonLoading,s=e.buttonTitle,c=e.actionButton,l=e.className;return Object(j.jsx)(h,{className:l,children:t?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{children:r}),Object(j.jsx)(y,{onClick:function(){return n()},children:Object(j.jsx)(x.a,{color:f.a.defaultColor,size:16})}),Object(j.jsx)(O,{children:i}),o&&Object(j.jsxs)(w,{children:["Error Occured: ",o]}),Object(j.jsx)(v,{children:Object(j.jsx)(_,{title:s,loading:a,onClick:function(){return c()}})})]}):Object(j.jsx)(b.a,{})})}},398:function(e,n,t){var r=t(51),i=t(399);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},399:function(e,n,t){(n=t(52)(!1)).push([e.i,".rating_box {\n  background: #ffffff;\n  box-shadow: 3px 1px 29px -2px #ebf2f8;\n  border-radius: 20px;\n  padding: 15px;\n}\n.rating_box .rating_percentage_box {\n  padding: 10px;\n  background: #f0f7fc;\n  border-radius: 11px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.rating_box .rating_percentage_box p {\n  margin: 0 !important;\n}\n.rating_box .rating_percentage_box .percentage_text {\n  color: #ff6600;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n}",""]),e.exports=n},400:function(e,n,t){var r=t(51),i=t(401);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},401:function(e,n,t){(n=t(52)(!1)).push([e.i,".suggestions_box {\n  margin-top: 15px;\n}\n.suggestions_box .suggestions_box_title {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n}\n.suggestions_box .sugestions_box_wrapper {\n  background: #ffffff;\n  box-shadow: 3px 1px 29px -2px #ebf2f8;\n  border-radius: 20px;\n  padding: 15px;\n}\n.suggestions_box .sugestions_box_wrapper .suggest {\n  display: flex;\n  margin-bottom: 10px;\n}\n.suggestions_box .sugestions_box_wrapper .suggest .bullet {\n  height: 5px;\n  width: 5px;\n  background: #FF6600;\n}\n.suggestions_box .sugestions_box_wrapper .suggest .suggestion_text {\n  flex: 1;\n  margin-left: 5px;\n}",""]),e.exports=n},404:function(e,n,t){var r=t(51),i=t(405);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},405:function(e,n,t){(n=t(52)(!1)).push([e.i,".report_modal {\n  width: 65vw;\n  height: 300px;\n  background: #fcfefe;\n  box-shadow: 15px 16px 24px rgba(0, 0, 0, 0.03);\n  border-radius: 22px;\n  padding: 15px;\n  display: flex;\n  flex-direction: column;\n}\n.report_modal .modal_textbox {\n  flex: 1;\n  border: 1px solid #c4c4c4;\n  box-sizing: border-box;\n  border-radius: 22px;\n  width: 100%;\n  padding: 15px;\n  margin-bottom: 10px;\n}",""]),e.exports=n},406:function(e,n,t){var r=t(51),i=t(407);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},407:function(e,n,t){(n=t(52)(!1)).push([e.i,".reporting_box {\n  height: 100%;\n  background: #ffffff;\n  box-shadow: 3px 1px 29px -2px #ebf2f8;\n  padding: 15px;\n  border-radius: 15px;\n}\n.reporting_box .report_form_box {\n  margin-bottom: 10px;\n}\n.reporting_box .report_form_box .form_title_box {\n  display: flex;\n  align-items: center;\n}\n.reporting_box .report_form_box .form_title_box .bullet {\n  height: 5px;\n  width: 5px;\n  background: #ff6600;\n  border-radius: 6px;\n  margin-right: 5px;\n}\n.reporting_box .report_button {\n  padding: 15px;\n  background: #FF6600;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 19px;\n  color: #fff;\n  margin-bottom: 10px;\n}\n.reporting_box .report_share_button {\n  padding: 15px;\n  border: 1.5px solid #FF6600;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 19px;\n  margin-bottom: 10px;\n}",""]),e.exports=n},408:function(e,n,t){var r=t(51),i=t(409);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);e.exports=i.locals||{}},409:function(e,n,t){(n=t(52)(!1)).push([e.i,".content_Container {\n  height: 100%;\n}\n\n.content_wrapper {\n  height: 100%;\n}",""]),e.exports=n},425:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return L}));var r=t(16),i=t.n(r),o=t(29),a=t.n(o),s=t(30),c=t.n(s),l=t(1),d=t(9),p=t(102),u=t(220),b=t(2);function x(e){var n=e.data;return Object(b.jsx)("p",{children:n.document})}t(398);function f(e){var n=e.data;return Object(b.jsxs)("div",{className:"rating_box",children:[Object(b.jsxs)("p",{children:["Your content matches ",Object(b.jsx)("span",{style:{color:"#FF6600",fontWeight:"bold",fontSize:18},children:"20"})," fradualent documents."]}),Object(b.jsxs)("div",{className:"rating_percentage_box",children:[Object(b.jsx)("p",{children:"Percentage Match:"}),Object(b.jsxs)("p",{className:"percentage_text",children:[parseInt(n.prediction).toFixed(2),"%"]})]})]})}t(400);function g(){return Object(b.jsxs)("div",{className:"suggestions_box",children:[Object(b.jsx)("p",{className:"suggestions_box_title",children:"Security Suggestions"}),Object(b.jsxs)("div",{className:"sugestions_box_wrapper",children:[Object(b.jsxs)("div",{className:"suggest",children:[Object(b.jsx)("div",{className:"bullet"}),Object(b.jsx)("div",{className:"suggestion_text",children:"Lorem ipsum dolor sit amet,sitelit litametconsectetur adipiscing elit."})]}),Object(b.jsxs)("div",{className:"suggest",children:[Object(b.jsx)("div",{className:"bullet"}),Object(b.jsx)("div",{className:"suggestion_text",children:"Lorem ipsum dolor sit amet,sitelit litametconsectetur adipiscing elit."})]})," ",Object(b.jsxs)("div",{className:"suggest",children:[Object(b.jsx)("div",{className:"bullet"}),Object(b.jsx)("div",{className:"suggestion_text",children:"Lorem ipsum dolor sit amet,sitelit litametconsectetur adipiscing elit."})]})]})]})}var j,h,m,O=t(19),v=t.n(O),_=t(402),y=t.n(_),w=t(24),P=w.a.div(j||(j=v()(["\n    display: flex;\n"]))),F=w.a.div(h||(h=v()(["\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n"]))),k=w.a.div(m||(m=v()(["\n    height: 20px;\n    width: 20px;\n    background-color: ",";\n    border-radius: 5px;\n    margin-bottom: 5px;\n"])),(function(e){return e.background}));function N(){var e=Object(l.useState)({series:[76,67,61],options:{chart:{height:250,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},labels:["Email","Text","Phone Number"],colors:["#FF6600","#FF9F43","#A5A5A5"]}}),n=a()(e,2),t=n[0];n[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y.a,{options:t.options,series:t.series,type:"radialBar",height:250}),Object(b.jsxs)(P,{children:[Object(b.jsxs)(F,{children:[Object(b.jsx)(k,{background:"#FF6600"}),Object(b.jsx)("p",{children:"Email"})]}),Object(b.jsxs)(F,{children:[Object(b.jsx)(k,{background:"#FF9F43"}),Object(b.jsx)("p",{children:"Text"})]}),Object(b.jsxs)(F,{children:[Object(b.jsx)(k,{background:"#A5A5A5"}),Object(b.jsx)("p",{children:"Phone Number"})]})]})]})}function D(e){var n=e.data;return Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{data:n}),Object(b.jsx)(N,{}),Object(b.jsx)(g,{data:n})]})}var S=t(223),C=t(103),E=t(234);t(404);function M(e){var n=e.onRequestClose,t=Object(l.useState)(!1),r=a()(t,2),i=r[0],o=(r[1],Object(l.useState)()),s=a()(o,2),d=s[0];s[1];return Object(b.jsx)(E.a,{isPageLoaded:!0,pageTitle:"Enter Your Statement",buttonTitle:"Report Suspected",isButtonLoading:i,actionButton:function(){return c.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return");case 1:case"end":return e.stop()}}),null,null,null,Promise)},onRequestClose:n,error:d,className:"sender_details",children:Object(b.jsx)("div",{className:"report_modal",children:Object(b.jsx)("textarea",{className:"modal_textbox"})})})}t(406);function z(e){var n=e.data,t=Object(l.useState)(!1),r=a()(t,2),i=r[0],o=r[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"reporting_box",children:[Object(b.jsx)(S.a,{value:n.name,title:"Full Name"}),Object(b.jsx)(S.a,{value:n.email,title:"Email Address"}),Object(b.jsx)(S.a,{value:n.phoneNumber,title:"Phone Number"}),Object(b.jsx)(S.a,{value:n.scammedAmount,title:"Scammed Amount"}),Object(b.jsx)("button",{className:"report_button",onClick:function(){return o(!i)},children:"Report"}),Object(b.jsx)("button",{className:"report_share_button",children:"Share"})]}),Object(b.jsx)(C.a,{visible:i,onRequestClose:function(){return o(!1)},children:Object(b.jsx)(M,{onRequestClose:function(){return o(!1)}})})]})}t(408);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function L(){var e=Object(d.g)().uniqueId,n=Object(l.useState)({fetchedData:!1}),t=a()(n,2),r=t[0],o=t[1],s=function(e,n){r[e]=n,o(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},r))};return Object(l.useEffect)((function(){!function(){var n;c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.awrap(p.a);case 2:return n=t.sent,t.next=5,c.a.awrap(n.get("v1/suspected_users/get-prediction-results/"+e));case 5:t.sent.on("static",(function(e){var n;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.response.data[0],s("fetchedData",n);case 2:case"end":return t.stop()}}),null,null,null,Promise)}));case 7:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(b.jsx)("div",{className:"container content_Container",children:r.fetchedData?Object(b.jsxs)("div",{className:"row content_wrapper",children:[Object(b.jsx)("div",{className:"col-md-5",children:Object(b.jsx)(x,{data:r.fetchedData})}),Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(D,{data:r.fetchedData})}),Object(b.jsx)("div",{className:"col-md-3",children:Object(b.jsx)(z,{data:r.fetchedData})})]}):Object(b.jsx)(u.a,{})})}}}]);
//# sourceMappingURL=8.4647906f.chunk.js.map