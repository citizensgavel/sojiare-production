(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{330:function(e,t,n){var o=n(45),r=n(332);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},331:function(e,t,n){"use strict";var o=n(333),r=n.n(o);r.a.init("12ee3cf398f805c6b4163cc243a4b4ef",{debug:!0,ignore_dnt:!0}),t.a=r.a},332:function(e,t,n){(t=n(46)(!1)).push([e.i,".authe_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  flex: 1;\n}\n.authe_container .title {\n  font-size: 24px;\n  line-height: 29px;\n}\n.authe_container .authe_content {\n  width: 100%;\n  flex: 1;\n}\n.authe_container .authe_action_box {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}",""]),e.exports=t},335:function(e,t,n){"use strict";n.d(t,"a",(function(){return Y}));var o=n(7),r=n.n(o),a=n(8),i=n.n(a),c=n(9),s=n.n(c),u=n(1),l=n.n(u),d=n(20),p=n(101),f=n.n(p),g=n(3),b=n.n(g),j=function(e,t,n,o,r,a){var i=e.getElementsByTagName(t)[0],c=i,s=i;(s=e.createElement(t)).id=n,s.src=o,c&&c.parentNode?c.parentNode.insertBefore(s,c):e.head.appendChild(s),s.onerror=a,s.onload=r},h=function(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)},O=n(24),m=function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,o=e.onAutoLoadFinished,r=void 0===o?function(){}:o,a=e.onFailure,c=void 0===a?function(){}:a,s=e.onRequest,l=void 0===s?function(){}:s,d=e.onScriptLoadFailure,p=e.clientId,f=e.cookiePolicy,g=e.loginHint,b=e.hostedDomain,O=e.autoLoad,m=e.isSignedIn,x=e.fetchBasicProfile,y=e.redirectUri,v=e.discoveryDocs,w=e.uxMode,S=e.scope,_=e.accessType,P=e.responseType,k=e.jsSrc,N=void 0===k?"https://apis.google.com/js/api.js":k,C=e.prompt,I=Object(u.useState)(!1),D=i()(I,2),L=D[0],T=D[1];function F(e){var t=e.getBasicProfile(),o=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=o,e.tokenId=o.id_token,e.accessToken=o.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},n(e)}function R(e){if(e&&e.preventDefault(),L){var t=window.gapi.auth2.getAuthInstance(),o={prompt:C};l(),"code"===P?t.grantOfflineAccess(o).then((function(e){return n(e)}),(function(e){return c(e)})):t.signIn(o).then((function(e){return F(e)}),(function(e){return c(e)}))}}return Object(u.useEffect)((function(){var e=!1,t=d||c;return j(document,"script","google-login",N,(function(){var n={client_id:p,cookie_policy:f,login_hint:g,hosted_domain:b,fetch_basic_profile:x,discoveryDocs:v,ux_mode:w,redirect_uri:y,scope:S,access_type:_};"code"===P&&(n.access_type="offline"),window.gapi.load("auth2",(function(){var o=window.gapi.auth2.getAuthInstance();o?o.then((function(){e||(m&&o.isSignedIn.get()?(T(!0),r(!0),F(o.currentUser.get())):(T(!0),r(!1)))}),(function(e){c(e)})):window.gapi.auth2.init(n).then((function(t){if(!e){T(!0);var n=m&&t.isSignedIn.get();r(n),n&&F(t.currentUser.get())}}),(function(e){T(!0),r(!1),t(e)}))}))}),(function(e){t(e)})),function(){e=!0,h(document,"google-login")}}),[]),Object(u.useEffect)((function(){O&&R()}),[L]),{signIn:R,loaded:L}},x=n(2),y=function(e){var t=e.children,n=e.icon;return Object(x.jsx)("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:n?0:10,paddingTop:10,paddingBottom:10},children:t})},v=function(e){var t=e.active;return Object(x.jsx)("div",{style:{marginRight:10,background:t?"#eee":"#fff",padding:10,borderRadius:2},children:Object(x.jsx)("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsxs)("g",{fill:"#000",fillRule:"evenodd",children:[Object(x.jsx)("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),Object(x.jsx)("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),Object(x.jsx)("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),Object(x.jsx)("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),Object(x.jsx)("path",{fill:"none",d:"M0 0h18v18H0z"})]})})})},w=function(e){var t=Object(u.useState)(!1),n=i()(t,2),o=n[0],r=n[1],a=Object(u.useState)(!1),c=i()(a,2),s=c[0],d=c[1],p=e.onSuccess,g=e.onAutoLoadFinished,b=e.onRequest,j=e.onFailure,h=e.onScriptLoadFailure,O=e.tag,w=e.type,S=e.className,_=e.disabledStyle,P=e.buttonText,k=e.children,N=e.render,C=e.theme,I=e.icon,D=e.disabled,L=e.clientId,T=e.cookiePolicy,F=e.loginHint,R=e.hostedDomain,E=e.autoLoad,M=e.isSignedIn,U=e.fetchBasicProfile,q=e.redirectUri,H=e.discoveryDocs,A=e.uxMode,B=e.scope,G=e.accessType,J=e.responseType,z=e.jsSrc,W=e.prompt,Y=m({onSuccess:p,onAutoLoadFinished:g,onRequest:b,onFailure:j,onScriptLoadFailure:h,clientId:L,cookiePolicy:T,loginHint:F,hostedDomain:R,autoLoad:E,isSignedIn:M,fetchBasicProfile:U,redirectUri:q,discoveryDocs:H,uxMode:A,scope:B,accessType:G,responseType:J,jsSrc:z,prompt:W}),K=Y.signIn,Q=Y.loaded,V=D||!Q;if(N)return N({onClick:K,disabled:V});var X={backgroundColor:"dark"===C?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===C?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},Z={cursor:"pointer",opacity:.9},$={cursor:"pointer",backgroundColor:"dark"===C?"#3367D6":"#eee",color:"dark"===C?"#fff":"rgba(0, 0, 0, .54)",opacity:1},ee=V?f()({},X,_):s?f()({},X,$):o?f()({},X,Z):X;return l.a.createElement(O,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),d(!1)},onMouseDown:function(){return d(!0)},onMouseUp:function(){return d(!1)},onClick:K,style:ee,type:w,disabled:V,className:S},[I&&Object(x.jsx)(v,{active:s},1),Object(x.jsx)(y,{icon:I,children:k||P},2)])};w.propTypes={onSuccess:b.a.func.isRequired,onFailure:b.a.func.isRequired,onScriptLoadFailure:b.a.func,clientId:b.a.string.isRequired,jsSrc:b.a.string,onRequest:b.a.func,buttonText:b.a.node,scope:b.a.string,className:b.a.string,redirectUri:b.a.string,cookiePolicy:b.a.string,loginHint:b.a.string,hostedDomain:b.a.string,children:b.a.node,disabledStyle:b.a.object,fetchBasicProfile:b.a.bool,prompt:b.a.string,tag:b.a.string,autoLoad:b.a.bool,disabled:b.a.bool,discoveryDocs:b.a.array,uxMode:b.a.string,isSignedIn:b.a.bool,responseType:b.a.string,type:b.a.string,accessType:b.a.string,render:b.a.func,theme:b.a.string,icon:b.a.bool},w.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var S=w,_=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,a=e.clientId,c=e.cookiePolicy,s=e.loginHint,l=e.hostedDomain,d=e.fetchBasicProfile,p=e.discoveryDocs,f=e.uxMode,g=e.redirectUri,b=e.scope,O=e.accessType,m=e.onLogoutSuccess,x=Object(u.useState)(!1),y=i()(x,2),v=y[0],w=y[1],S=Object(u.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),m()}))}),(function(e){return o(e)}))}}),[m]);return Object(u.useEffect)((function(){var e=r||o;return j(document,"script","google-login",n,(function(){var t={client_id:a,cookie_policy:c,login_hint:s,hosted_domain:l,fetch_basic_profile:d,discoveryDocs:p,ux_mode:f,redirect_uri:g,scope:b,access_type:O};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?w(!0):window.gapi.auth2.init(t).then((function(){return w(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){h(document,"google-login")}}),[]),{signOut:S,loaded:v}},P=function(e){var t=Object(u.useState)(!1),n=i()(t,2),o=n[0],r=n[1],a=Object(u.useState)(!1),c=i()(a,2),s=c[0],d=c[1],p=e.tag,g=e.type,b=e.className,j=e.disabledStyle,h=e.buttonText,O=e.children,m=e.render,w=e.theme,S=e.icon,P=e.disabled,k=e.onLogoutSuccess,N=e.clientId,C=e.cookiePolicy,I=e.loginHint,D=e.hostedDomain,L=e.fetchBasicProfile,T=e.redirectUri,F=e.discoveryDocs,R=e.onFailure,E=e.onScriptLoadFailure,M=e.uxMode,U=e.scope,q=e.accessType,H=e.jsSrc,A=_({jsSrc:H,onFailure:R,onScriptLoadFailure:E,clientId:N,cookiePolicy:C,loginHint:I,hostedDomain:D,fetchBasicProfile:L,discoveryDocs:F,uxMode:M,redirectUri:T,scope:U,accessType:q,onLogoutSuccess:k}),B=A.signOut,G=A.loaded,J=P||!G;if(m)return m({onClick:B,disabled:J});var z={backgroundColor:"dark"===w?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===w?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},W={cursor:"pointer",opacity:.9},Y={cursor:"pointer",backgroundColor:"dark"===w?"#3367D6":"#eee",color:"dark"===w?"#fff":"rgba(0, 0, 0, .54)",opacity:1},K=J?f()({},z,j):s?f()({},z,Y):o?f()({},z,W):z;return l.a.createElement(p,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),d(!1)},onMouseDown:function(){return d(!0)},onMouseUp:function(){return d(!1)},onClick:B,style:K,type:g,disabled:J,className:b},[S&&Object(x.jsx)(v,{active:s},1),Object(x.jsx)(y,{icon:S,children:O||h},2)])};P.propTypes={jsSrc:b.a.string,buttonText:b.a.node,className:b.a.string,children:b.a.node,disabledStyle:b.a.object,tag:b.a.string,disabled:b.a.bool,onLogoutSuccess:b.a.func,type:b.a.string,render:b.a.func,theme:b.a.string,icon:b.a.bool,onFailure:b.a.func,onScriptLoadFailure:b.a.func},P.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var k,N,C=n(34),I=n(40),D=n(68),L=n.n(D),T=n(16),F=n.n(T),R=n(4),E=n.n(R),M=n(5),U=n(343),q=["text"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=M.b.div(k||(k=E()(["\n    background: #fff;\n    box-shadow: 0px 4px 10px rgb(0 0 0 / 2%);\n    border-radius: 6px;\n    margin: 20px;\n    padding: 15px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n"]))),G=M.b.div(N||(N=E()(["\n    margin-left: 10px;\n"])));function J(e){var t=e.text,n=F()(e,q);return Object(x.jsxs)(B,A(A({},n),{},{children:[Object(x.jsx)(U.a,{size:24}),Object(x.jsx)(G,{children:t})]}))}var z=n(53);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Y(e){var t=e.text,n=e.embedToGetUserToken,o=Object(d.f)(),a=Object(z.a)(),c=Object(u.useState)({email:"",password:"",onRequest:!1}),l=i()(c,2),p=l[0],f=l[1],g=function(e,t){p[e]=t,f(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(S,{render:function(e){return Object(x.jsx)(J,{text:t,onClick:function(){return e.onClick()},disabled:e.disabled})},clientId:"178683516706-bgoi08u14chjoopdmk0rjbk0hfpsb7df.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){return function(e){var t,r,i,c,u,l,d;return s.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if("popup_closed_by_user"!=e.error){p.next=4;break}return p.abrupt("return");case 4:return g("onRequest",!0),t=e.profileObj,r=t.email,i=t.familyName,c=t.givenName,u=t.imageUrl,l={email:r,firstName:c,lastName:i,profileUrl:u},p.next=10,s.a.awrap(O.b);case 10:return d=p.sent,p.next=13,s.a.awrap(d.post("v1/authe/oauth",l));case 13:p.sent.on("static",(function(e){g("onRequest",!1);var t=e.response.data;t.token&&(L.a.set("SOJI_uft_token",t.token),"undefined"!=typeof L.a.get("SOJI_uft_token")&&(o("/"),a.set(t),n&&n(t.token)))}));case 15:case"end":return p.stop()}}),null,null,null,Promise)}(e)},onFailure:function(){return null},cookiePolicy:"single_host_origin"}),Object(x.jsx)(C.a,{visible:p.onRequest,onRequestClose:function(){return g("onRequest",!1)},children:Object(x.jsx)(I.b,{})})]})}},339:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o,r=n(7),a=n.n(r),i=n(8),c=n.n(i),s=n(4),u=n.n(s),l=n(9),d=n.n(l),p=n(1),f=n(20),g=n(84),b=n(56),j=n(24),h=n(5),O=n(68),m=n.n(O),x=(n(330),n(335)),y=n(53),v=n(2);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var S=Object(h.b)(b.a)(o||(o=u()(["\n    width: 60%;\n    height: 40px;\n"])));function _(e){var t=e.pageHandler,n=e.embedToGetUserToken,o=Object(f.f)(),r=Object(y.a)(),i=Object(p.useState)({email:"",password:"",onRequest:!1,error:!1}),s=c()(i,2),u=s[0],l=s[1],b=function(e,t){u[e]=t,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"authe_container",children:[Object(v.jsx)("div",{className:"title",children:"Login as a User"}),Object(v.jsx)(x.a,{text:"Login with Google",embedToGetUserToken:n}),Object(v.jsx)(g.c,{placeholder:"Email",title:"Email",onChange:function(e){return b("email",e.target.value)}}),Object(v.jsx)(g.c,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return b("password",e.target.value)}}),Object(v.jsxs)("div",{className:"authe_action_box",children:[Object(v.jsxs)("p",{children:["Have no account?",Object(v.jsx)("a",{onClick:function(){return t("pageName","signup")},className:"text_default_color text_bold cursor_pointer",children:"Sign Up here"})]}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{onClick:function(){return t("pageName","forgotPassword")},className:"text_default_color cursor_pointer",children:"Forgot Password?"})})]}),u.error&&Object(v.jsx)("p",{style:{color:"red"},children:u.error}),Object(v.jsx)("div",{className:"button_container",children:Object(v.jsx)(S,{className:"button",title:"Login",loading:u.onRequest,onClick:function(){var e,t,a;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if("undefined"==typeof m.a.get("COMPANY_SOJI_uft_token")){i.next=7;break}return i.next=3,d.a.awrap(j.b);case 3:return e=i.sent,i.next=6,d.a.awrap(e.deleteCookie());case 6:r.set(!1);case 7:return b("onRequest",!0),t={email:u.email,password:u.password},i.next=11,d.a.awrap(j.b);case 11:return a=i.sent,i.next=14,d.a.awrap(a.post("v1/authe/login",t));case 14:i.sent.on("static",(function(e){if(b("onRequest",!1),403==e.response.status)b("error",e.response.data);else{var t=e.response.data;t.token&&(m.a.set("SOJI_uft_token",t.token),r.set(t),"undefined"!=typeof m.a.get("SOJI_uft_token")&&(o("/"),n&&n(t.token)))}}));case 16:case"end":return i.stop()}}),null,null,null,Promise)}})})]})})}},340:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o,r=n(7),a=n.n(r),i=n(8),c=n.n(i),s=n(4),u=n.n(s),l=n(9),d=n.n(l),p=n(1),f=n(84),g=n(20),b=n(56),j=n(24),h=n(5),O=n(68),m=n.n(O),x=(n(330),n(335)),y=n(53),v=n(40),w=n(2);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var _=Object(h.b)(b.a)(o||(o=u()(["\n    width: 60%;\n    height: 40px;\n"])));function P(e){var t=e.pageHandler,n=e.embedToGetUserToken,o=Object(g.f)(),r=Object(y.a)(),i=Object(p.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",confirmPassword:"",onRequest:!1,country:""}),s=c()(i,2),u=s[0],l=s[1],b=function(e,t){u[e]=t,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u))};return Object(p.useEffect)((function(){!function(){var e;d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(j.b);case 2:return e=t.sent,t.next=5,d.a.awrap(e.get("v1/utils/countries"));case 5:t.sent.on("static",(function(e){b("countriesList",e.response.data)}));case 7:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(w.jsx)(w.Fragment,{children:u.countriesList?Object(w.jsxs)("div",{className:"authe_container",children:[Object(w.jsx)("div",{className:"title",children:"Signup as a User"}),Object(w.jsx)(x.a,{text:"Signup with Google",embedToGetUserToken:n}),Object(w.jsxs)("div",{className:"authe_content",children:[Object(w.jsx)(f.c,{placeholder:"First Name",title:"FIrst Name",onChange:function(e){return b("firstName",e.target.value)}}),Object(w.jsx)(f.c,{placeholder:"Last Name",title:"Last Name",onChange:function(e){return b("lastName",e.target.value)}}),Object(w.jsx)(f.c,{placeholder:"Phone Number",title:"Phone Number",onChange:function(e){return b("phoneNumber",e.target.value)}}),Object(w.jsx)(f.c,{placeholder:"Email",title:"Email",onChange:function(e){return b("email",e.target.value)}}),Object(w.jsx)(f.e,{placeholder:"Select Country",title:"Select Country",onChange:function(e){b("country",e.value)},options:u.countriesList,important:!0,value:u.countriesList.filter((function(e){return e.value===u.country}))}),Object(w.jsx)(f.c,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return b("password",e.target.value)}}),Object(w.jsx)(f.c,{placeholder:"Confirm Password",title:"Confirm Password",type:"password",onChange:function(e){return b("confirmPassword",e.target.value)}})]}),Object(w.jsx)("div",{className:"authe_action_box",children:Object(w.jsxs)("p",{children:["Have an account?",Object(w.jsx)("a",{onClick:function(){return t("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(w.jsx)("div",{className:"button_container",children:Object(w.jsx)(_,{className:"button",title:"Sign Up",loading:u.onRequest,onClick:function(){var e,t,a;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if("undefined"==typeof m.a.get("COMPANY_SOJI_uft_token")){i.next=7;break}return i.next=3,d.a.awrap(j.b);case 3:return e=i.sent,i.next=6,d.a.awrap(e.deleteCookie());case 6:r.set(!1);case 7:return b("onRequest",!0),t={firstName:u.firstName,lastName:u.lastName,phoneNumber:u.phoneNumber,email:u.email,password:u.password,countryID:u.country},i.next=11,d.a.awrap(j.b);case 11:return a=i.sent,i.next=14,d.a.awrap(a.post("v1/authe/signup",t));case 14:i.sent.on("static",(function(e){b("onRequest",!1);var t=e.response.data;t.token&&(m.a.set("SOJI_uft_token",t.token),r.set(t),"undefined"!=typeof m.a.get("SOJI_uft_token")&&(o("/"),n&&n(t.token)))}));case 16:case"end":return i.stop()}}),null,null,null,Promise)}})})]}):Object(w.jsx)(v.b,{})})}},341:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var o,r=n(8),a=n.n(r),i=n(4),c=n.n(i),s=n(9),u=n.n(s),l=n(1),d=n(84),p=n(56),f=n(5),g=n(24),b=(n(330),n(2)),j=Object(f.b)(p.a)(o||(o=c()(["\n    width: 60%;\n    height: 40px;\n"])));function h(e){var t=e.pageHandler,n=Object(l.useState)(),o=a()(n,2),r=o[0],i=o[1],c=Object(l.useState)(!1),s=a()(c,2),p=s[0],f=s[1],h=Object(l.useState)(),O=a()(h,2),m=O[0],x=O[1],y=Object(l.useState)(),v=a()(y,2),w=v[0],S=v[1];return Object(b.jsxs)("div",{className:"authe_container",children:[Object(b.jsx)("div",{className:"title",children:"Forgot Password"}),Object(b.jsx)(d.c,{placeholder:"Email",onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("div",{className:"authe_action_box",children:Object(b.jsxs)("p",{children:["Have an account?",Object(b.jsx)("a",{onClick:function(){return t("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(b.jsx)("p",{style:{color:"red"},children:m&&m}),Object(b.jsx)("p",{style:{color:"green"},children:w&&w}),Object(b.jsx)("div",{className:"button_container",children:Object(b.jsx)(j,{className:"button",loading:p,title:"Send",onClick:function(){return function(){var e,t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(g.b);case 2:return e=n.sent,t={email:r},f(!0),n.next=7,u.a.awrap(e.post("v1/authe/forgot_password",t));case 7:n.sent.on("static",(function(e){f(!1),403==e.response.status?x(e.response.data):S(e.response.data)}));case 9:case"end":return n.stop()}}),null,null,null,Promise)}()}})})]})}},370:function(e,t,n){"use strict";n.r(t);var o=n(7),r=n.n(o),a=n(8),i=n.n(a),c=n(1),s=n(20),u=n(331),l=n(162),d=n(339),p=n(340),f=n(341),g=n(2);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.default=function(){var e=Object(s.g)().pageName,t=Object(c.useState)({pageName:"login"===e?"login":"signup"===e?"signup":"forgotPassword"}),n=i()(t,2),o=n[0],a=n[1],j=function(e,t){"login"===t&&window.history.pushState("","Login","/authe/login"),"signup"===t&&window.history.pushState("","Login","/authe/signup"),"forgotPassword"===t&&window.history.pushState("","Login","/authe/forgot-password"),o[e]=t,a(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))};return Object(c.useEffect)((function(){u.a.track(e+" Page",{"Opted out of email":!0,ip:"0"})}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(l.a,{userAuthe:!0,children:["login"===o.pageName&&Object(g.jsx)(d.a,{pageHandler:j}),"signup"===o.pageName&&Object(g.jsx)(p.a,{pageHandler:j}),"forgotPassword"===o.pageName&&Object(g.jsx)(f.a,{pageHandler:j})]})})}}}]);
//# sourceMappingURL=7.8d87d19f.chunk.js.map