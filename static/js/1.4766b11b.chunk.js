(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{219:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t(16),o=t.n(r),a=t(20),i=t.n(a),c=(t(1),t(104)),s=(t(53),t(226),t(2)),l=["title","loading"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var n=e.title,t=e.loading,r=i()(e,l);return Object(s.jsxs)("button",u(u({},r),{},{className:"button",disabled:t,children:[t&&Object(s.jsx)(c.a,{color:"#fff",size:18}),Object(s.jsxs)("div",{children:[" ",t?"Please Wait...":n]})]}))}},223:function(e,n,t){"use strict";t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return M}));var r,o,a,i,c,s=t(16),l=t.n(s),p=t(20),u=t.n(p),d=t(19),b=t.n(d),f=(t(1),t(24)),j=t(2),x=["title","important","textarea"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=f.a.div(r||(r=b()(["\n    position: relative;\n    margin-bottom: 30px;\n    width: 100%;\n"]))),O=f.a.div(o||(o=b()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),v=f.a.div(a||(a=b()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"]))),y=f.a.input(i||(i=b()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    height: 50px;\n    background: ","\n"])),(function(e){return e.disabled?"#F3F2F7":"#f0f7fc"})),_=f.a.textarea(c||(c=b()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    min-height: 100px;\n    max-height: 150px;\n"])));function w(e){var n=e.title,t=e.important,r=e.textarea,o=u()(e,x);return Object(j.jsxs)(g,{children:[Object(j.jsxs)(O,{children:[n," ",t&&Object(j.jsx)(v,{children:"*"})]}),r?Object(j.jsx)(_,m({},o)):Object(j.jsx)(y,m({},o))]})}var P,N,k,S=t(53),D=t(380),F=(t(228),["children","important","title"]);function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){l()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var R=f.a.div(P||(P=b()(["\n    position: relative;\n    margin-bottom: 30px;\n    width: 100%;\n"]))),q=f.a.div(N||(N=b()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),I=f.a.div(k||(k=b()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"]))),U=[{value:"chocolate",label:"Chocolate"}];function M(e){e.children;var n=e.important,t=e.title,r=u()(e,F),o={option:function(e,n){return C(C({},e),{},{color:S.a.textColor,backgroundColor:n.isFocused?"rgb(240, 247, 252)":S.a.backgroundColor})}};return Object(j.jsxs)(R,{children:[Object(j.jsxs)(q,{children:[t," ",n&&Object(j.jsx)(I,{children:"*"})]}),Object(j.jsx)(D.a,C({name:"colors",options:U,className:"basic-multi-select",classNamePrefix:"select",style:{height:"50px",width:"100%"},styles:o},r))]})}},226:function(e,n,t){var r=t(51),o=t(227);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},227:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".button {\n  border-radius: 19px;\n  width: 211px;\n  height: 35px;\n  background-color: #FF6600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n}\n.button div {\n  color: #fcfefe;\n  font-family: Montserrat !important;\n}",""]),e.exports=n},228:function(e,n,t){var r=t(51),o=t(229);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},229:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".form-select {\n  border: none !important;\n  height: 50px;\n}\n\n.form-select:focus {\n  border: none;\n  box-shadow: none !important;\n}\n\n.react-datepicker__input-container input {\n  width: 100%;\n}\n\n.basic-multi-select {\n  margin-top: 10px;\n}\n\n.select__control {\n  height: 50px;\n  border: none !important;\n  background-color: #F0F7FC !important;\n}",""]),e.exports=n},235:function(e,n,t){var r=t(51),o=t(394);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},241:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(16),o=t.n(r),a=t(29),i=t.n(a),c=t(30),s=t.n(c),l=t(1),p=t(9),u=t(223),d=t(219),b=t(102),f=t(69),j=t.n(f),x=(t(235),t(382)),h=t(2);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){var n=e.pageHandler,t=e.embedToGetUserToken,r=Object(p.f)(),a=Object(l.useState)({email:"",password:"",onRequest:!1}),c=i()(a,2),f=c[0],g=c[1],O=function(e,n){f[e]=n,g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},f))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"authe_container",children:[Object(h.jsx)("div",{className:"title",children:"Sign In"}),Object(h.jsx)(x.a,{text:"Login with Google",embedToGetUserToken:t}),Object(h.jsx)(u.a,{placeholder:"Email",title:"Email",onChange:function(e){return O("email",e.target.value)}}),Object(h.jsx)(u.a,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return O("password",e.target.value)}}),Object(h.jsxs)("div",{className:"authe_action_box",children:[Object(h.jsxs)("p",{children:["Have no account?",Object(h.jsx)("a",{onClick:function(){return n("pageName","signup")},className:"text_default_color text_bold cursor_pointer",children:"Sign Up here"})]}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{onClick:function(){return n("pageName","forgotPassword")},className:"text_default_color cursor_pointer",children:"Forgot Password?"})})]}),Object(h.jsx)("div",{className:"button_container",children:Object(h.jsx)(d.a,{title:"Login",loading:f.onRequest,onClick:function(){var e,n;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return O("onRequest",!0),e={email:f.email,password:f.password},o.next=4,s.a.awrap(b.a);case 4:return n=o.sent,o.next=7,s.a.awrap(n.post("v1/authe/login",e));case 7:o.sent.on("static",(function(e){O("onRequest",!1);var n=e.response.data;n.token&&(j.a.set("SOJI_uft_token",n.token),"undefined"!=typeof j.a.get("SOJI_uft_token")&&(t?t(n.token):r("/recent-document",{replace:!0})))}));case 9:case"end":return o.stop()}}),null,null,null,Promise)}})})]})})}},242:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t(16),o=t.n(r),a=t(29),i=t.n(a),c=t(30),s=t.n(c),l=t(1),p=t(223),u=t(9),d=t(219),b=t(102),f=t(69),j=t.n(f),x=(t(235),t(382)),h=t(2);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){var n=e.pageHandler,t=e.embedToGetUserToken,r=Object(u.f)(),a=Object(l.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",confirmPassword:"",onRequest:!1}),c=i()(a,2),f=c[0],g=c[1],O=function(e,n){f[e]=n,g(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(Object(t),!0).forEach((function(n){o()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},f))};return Object(h.jsxs)("div",{className:"authe_container",children:[Object(h.jsx)("div",{className:"title",children:"Sign Up"}),Object(h.jsx)(x.a,{text:"Signup with Google",embedToGetUserToken:t}),Object(h.jsxs)("div",{className:"authe_content",children:[Object(h.jsx)(p.a,{placeholder:"First Name",title:"FIrst Name",onChange:function(e){return O("firstName",e.target.value)}}),Object(h.jsx)(p.a,{placeholder:"Last Name",title:"Last Name",onChange:function(e){return O("lastName",e.target.value)}}),Object(h.jsx)(p.a,{placeholder:"Phone Number",title:"Phone Number",onChange:function(e){return O("phoneNumber",e.target.value)}}),Object(h.jsx)(p.a,{placeholder:"Email",title:"Email",onChange:function(e){return O("email",e.target.value)}}),Object(h.jsx)(p.a,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return O("password",e.target.value)}}),Object(h.jsx)(p.a,{placeholder:"Confirm Password",title:"Confirm Password",type:"password",onChange:function(e){return O("confirmPassword",e.target.value)}})]}),Object(h.jsx)("div",{className:"authe_action_box",children:Object(h.jsxs)("p",{children:["Have an account?",Object(h.jsx)("a",{onClick:function(){return n("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(h.jsx)("div",{className:"button_container",children:Object(h.jsx)(d.a,{title:"Sign Up",loading:f.onRequest,onClick:function(){var e,n;return s.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return O("onRequest",!0),e={firstName:f.firstName,lastName:f.lastName,phoneNumber:f.phoneNumber,email:f.email,password:f.password},o.next=4,s.a.awrap(b.a);case 4:return n=o.sent,o.next=7,s.a.awrap(n.post("v1/authe/signup",e));case 7:o.sent.on("static",(function(e){O("onRequest",!1);var n=e.response.data;n.token&&(j.a.set("SOJI_uft_token",n.token),"undefined"!=typeof j.a.get("SOJI_uft_token")&&(t?t(n.token):r("/recent-document",{replace:!0})))}));case 9:case"end":return o.stop()}}),null,null,null,Promise)}})})]})}},243:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));t(1);var r=t(223),o=t(219),a=(t(235),t(2));function i(e){var n=e.pageHandler;return Object(a.jsxs)("div",{className:"authe_container",children:[Object(a.jsx)("div",{className:"title",children:"Forgot Password"}),Object(a.jsx)(r.a,{placeholder:"Email"}),Object(a.jsx)("div",{className:"authe_action_box",children:Object(a.jsxs)("p",{children:["Have an account?",Object(a.jsx)("a",{onClick:function(){return n("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(a.jsx)("div",{className:"button_container",children:Object(a.jsx)(o.a,{title:"Send"})})]})}},381:function(e,n,t){"use strict";t(1);var r=t(39),o=t(114),a=t.n(o),i=(t(384),t(2)),c=function(){return Object(i.jsx)("div",{className:"main_header",children:Object(i.jsxs)("div",{className:"main_header_wrapper container",children:[Object(i.jsx)("div",{className:"logo_container",children:Object(i.jsx)("img",{src:a.a})}),Object(i.jsxs)("div",{className:"nav_bar_container",children:[Object(i.jsxs)(r.b,{to:"/",children:[Object(i.jsx)("div",{className:"nav_dot"})," Home"]}),Object(i.jsxs)(r.b,{to:"/",children:[Object(i.jsx)("div",{className:"nav_dot"})," API"]}),Object(i.jsxs)(r.b,{to:"/",children:[Object(i.jsx)("div",{className:"nav_dot"}),"Pricing"]}),Object(i.jsxs)(r.b,{to:"/",children:[Object(i.jsx)("div",{className:"nav_dot"}),"How it works"]}),Object(i.jsxs)(r.b,{to:"/",children:[Object(i.jsx)("div",{className:"nav_dot"}),"About us"]})]}),Object(i.jsxs)("div",{className:"action_container",children:[Object(i.jsx)("a",{href:"/authe/login",children:"Login"}),Object(i.jsx)("a",{href:"/authe/signup",className:"sign_up",children:"Sign Up"})]})]})})},s=t(386),l=t.n(s),p=t(387),u=t.n(p),d=(t(388),function(e){var n=e.children,t=e.description;return Object(i.jsxs)("div",{className:"container content row",children:[Object(i.jsx)("div",{className:"content_desc",children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{children:["Scan For ",Object(i.jsx)("span",{className:"text_default_color text_bold",children:"FRAUDULENT"})]}),Object(i.jsx)("p",{className:"text_bold",children:"Documents"})]})}),Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"jumbion_container",style:{backgroundImage:"url("+l.a+")"},children:Object(i.jsx)("div",{className:"jumbion_container_adds",style:{backgroundImage:"url("+u.a+")"}})})}),Object(i.jsx)("div",{className:"col-md-6",children:Object(i.jsx)("div",{className:"content_wrapper",children:Object(i.jsxs)("div",{className:"content_wrapper_box",children:[Object(i.jsx)("div",{className:"content_body",children:n}),t&&Object(i.jsx)("div",{className:"box_description",children:t})]})})})]})}),b=(t(390),function(){return Object(i.jsx)("div",{className:"main_footer"})});n.a=function(e){var n=e.children,t=e.description;return Object(i.jsxs)("div",{className:"main_container",children:[Object(i.jsx)(c,{}),Object(i.jsx)(d,{description:t,children:n}),Object(i.jsx)(b,{})]})}},382:function(e,n,t){"use strict";t.d(n,"a",(function(){return q}));var r,o,a=t(16),i=t.n(a),c=t(29),s=t.n(c),l=t(30),p=t.n(l),u=t(1),d=t(9),b=t(124),f=t.n(b),j=t(103),x=t(106),h=t(102),m=t(69),g=t.n(m),O=t(20),v=t.n(O),y=t(19),_=t.n(y),w=t(24),P=t(395),N=t(2),k=["text"];function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=w.a.div(r||(r=_()(["\n    background: #fff;\n    box-shadow: 0px 4px 10px rgb(0 0 0 / 2%);\n    border-radius: 6px;\n    margin: 20px;\n    padding: 15px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n"]))),E=w.a.div(o||(o=_()(["\n    margin-left: 10px;\n"])));function C(e){var n=e.text,t=v()(e,k);return Object(N.jsxs)(F,D(D({},t),{},{children:[Object(N.jsx)(P.a,{size:24}),Object(N.jsx)(E,{children:n})]}))}function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function q(e){var n=e.text,t=e.embedToGetUserToken,r=Object(d.f)(),o=Object(u.useState)({email:"",password:"",onRequest:!1}),a=s()(o,2),c=a[0],l=a[1],b=function(e,n){c[e]=n,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){i()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},c))},m=function(e){var n,o,a,i,c,s,l;return p.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return b("onRequest",!0),n=e.profileObj,o=n.email,a=n.familyName,i=n.givenName,c=n.imageUrl,s={email:o,firstName:i,lastName:a,profileUrl:c},u.next=6,p.a.awrap(h.a);case 6:return l=u.sent,u.next=9,p.a.awrap(l.post("v1/authe/oauth",s));case 9:u.sent.on("static",(function(e){b("onRequest",!1);var n=e.response.data;n.token&&(g.a.set("SOJI_uft_token",n.token),"undefined"!=typeof g.a.get("SOJI_uft_token")&&(t?t(n.token):r("/recent-document",{replace:!0})))})),console.log(e);case 12:case"end":return u.stop()}}),null,null,null,Promise)};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(f.a,{render:function(e){return Object(N.jsx)(C,{text:n,onClick:e.onClick,disabled:e.disabled})},clientId:"178683516706-bgoi08u14chjoopdmk0rjbk0hfpsb7df.apps.googleusercontent.com",buttonText:"Login",onSuccess:m,onFailure:m,cookiePolicy:"single_host_origin"}),Object(N.jsx)(j.a,{visible:c.onRequest,onRequestClose:function(){return b("onRequest",!1)},children:Object(N.jsx)(x.a,{})})]})}},384:function(e,n,t){var r=t(51),o=t(385);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},385:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".main_header {\n  background: #FCFEFE;\n  box-shadow: 0px 4px 33px rgba(0, 0, 0, 0.07);\n  height: 72px;\n  display: flex;\n  align-items: center;\n  padding: 15px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  font-size: 15px;\n}\n.main_header .main_header_wrapper {\n  display: flex;\n  justify-content: space-between;\n}\n.main_header .logo_container {\n  display: flex;\n  align-items: center;\n}\n.main_header .nav_bar_container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.main_header .nav_bar_container a {\n  margin: 15px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 15px;\n}\n.main_header .nav_bar_container a .nav_dot {\n  height: 7px;\n  width: 7px;\n  background-color: #FF6600;\n  border-radius: 6px;\n  margin-right: 4px;\n}\n@media screen and (max-width: 767px) {\n  .main_header .nav_bar_container {\n    display: none;\n  }\n}\n.main_header .action_container {\n  display: flex;\n  align-items: center;\n}\n.main_header .action_container a {\n  margin: 5px;\n}\n.main_header .action_container .sign_up {\n  font-weight: bold;\n  color: #FF6600;\n}",""]),e.exports=n},386:function(e,n,t){e.exports=t.p+"static/media/frame.226f6032.png"},387:function(e,n,t){e.exports=t.p+"static/media/vector.1751dc97.png"},388:function(e,n,t){var r=t(51),o=t(389);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},389:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".content {\n  min-height: calc(100vh - 75px);\n  display: flex;\n  margin: auto;\n  padding: 0;\n}\n.content .content_desc {\n  font-size: 47px;\n  line-height: 35px;\n  color: #5E5E5E;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 30px;\n}\n.content .jumbion_container {\n  flex: 1;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  margin-top: -135px;\n  margin-left: -30px;\n}\n.content .jumbion_container .jumbion_container_adds {\n  width: 96.05px;\n  height: 115.4px;\n  position: absolute;\n  top: 170px;\n  right: -20px;\n}\n.content .content_wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.content .content_wrapper .content_wrapper_box {\n  width: 550px;\n  margin-top: 10px;\n  box-shadow: 3px 12px 24px 13px rgba(0, 0, 0, 0.03);\n  border-radius: 22px;\n  display: flex;\n  flex-direction: column;\n}\n.content .content_wrapper .content_wrapper_box .content_body {\n  flex: 1;\n  padding: 10px;\n}\n.content .box_description {\n  background: rgba(196, 196, 196, 0.23);\n  border-radius: 0px 0px 22px 22px;\n  height: 60px;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #FF6600 !important;\n}\n.content .desc {\n  color: #5E5E5E !important;\n}\n\n@media screen and (max-width: 767px) {\n  .content .content_desc {\n    font-size: 30px;\n    line-height: 20px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n}",""]),e.exports=n},390:function(e,n,t){var r=t(51),o=t(391);"string"===typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},391:function(e,n,t){(n=t(52)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),n.push([e.i,".main_footer {\n  min-height: 200px;\n  background-color: #F0F7FC;\n}",""]),e.exports=n},394:function(e,n,t){(n=t(52)(!1)).push([e.i,".authe_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  flex: 1;\n}\n.authe_container .title {\n  font-size: 24px;\n  line-height: 29px;\n}\n.authe_container .authe_content {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n}\n.authe_container .authe_action_box {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}",""]),e.exports=n}}]);
//# sourceMappingURL=1.4766b11b.chunk.js.map