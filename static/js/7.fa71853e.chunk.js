(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{256:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(12),r=n.n(o),i=n(17),a=n.n(i),c=(n(1),n(120)),s=(n(38),n(263),n(2)),u=["title","loading"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=e.title,n=e.loading,o=a()(e,u);return Object(s.jsxs)("button",d(d({className:"button"},o),{},{disabled:n,children:[n&&Object(s.jsx)(c.a,{color:"#fff",size:18}),Object(s.jsxs)("div",{children:[" ",n?"Please Wait...":t]})]}))}},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return P}));var o,r,i,a,c,s=n(12),u=n.n(s),l=n(17),d=n.n(l),p=n(16),f=n.n(p),g=(n(1),n(20)),b=n(2),j=["title","important","textarea"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=g.a.div(o||(o=f()(["\n    position: relative;\n    width: 100%;\n"]))),x=g.a.div(r||(r=f()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),y=g.a.div(i||(i=f()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"]))),v=g.a.input(a||(a=f()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    height: 50px;\n    border: 1px solid #C4C4C4;\n    margin-bottom: 10px;\n"]))),w=g.a.textarea(c||(c=f()(["\n    width: 100%;\n    padding: 10px;\n    border-radius: 6px;\n    min-height: 100px;\n    max-height: 150px;\n    border: 1px solid #C4C4C4;\n"])));function P(e){var t=e.title,n=e.important,o=e.textarea,r=d()(e,j);return Object(b.jsxs)(m,{children:[Object(b.jsxs)(x,{children:[t," ",n&&Object(b.jsx)(y,{children:"*"})]}),o?Object(b.jsx)(w,O({},r)):Object(b.jsx)(v,O({},r))]})}var _,S,k;n(38),n(277),n(261);g.a.div(_||(_=f()(["\n    position: relative;\n    margin-bottom: 30px;\n    width: 100%;\n"]))),g.a.div(S||(S=f()(["\n    margin-bottom: 10px;\n    font-weight: 700;\n"]))),g.a.div(k||(k=f()(["\n    margin: 2px;\n    color: #ff6600;\n    display: inline-block;\n    font-weight: bold;\n"])))},258:function(e,t,n){var o=n(59),r=n(266);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},259:function(e,t,n){"use strict";n.d(t,"a",(function(){return K}));var o=n(12),r=n.n(o),i=n(27),a=n.n(i),c=n(6),s=n.n(c),u=n(1),l=n.n(u),d=n(10),p=n(119),f=n.n(p),g=n(179),b=n.n(g),j=function(e,t,n,o,r,i){var a=e.getElementsByTagName(t)[0],c=a,s=a;(s=e.createElement(t)).id=n,s.src=o,c&&c.parentNode?c.parentNode.insertBefore(s,c):e.head.appendChild(s),s.onerror=i,s.onload=r},h=function(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)},O=n(61),m=function(e){var t=e.onSuccess,n=void 0===t?function(){}:t,o=e.onAutoLoadFinished,r=void 0===o?function(){}:o,i=e.onFailure,c=void 0===i?function(){}:i,s=e.onRequest,l=void 0===s?function(){}:s,d=e.onScriptLoadFailure,p=e.clientId,f=e.cookiePolicy,g=e.loginHint,b=e.hostedDomain,O=e.autoLoad,m=e.isSignedIn,x=e.fetchBasicProfile,y=e.redirectUri,v=e.discoveryDocs,w=e.uxMode,P=e.scope,_=e.accessType,S=e.responseType,k=e.jsSrc,N=void 0===k?"https://apis.google.com/js/api.js":k,D=e.prompt,C=Object(u.useState)(!1),I=a()(C,2),F=I[0],T=I[1];function L(e){var t=e.getBasicProfile(),o=e.getAuthResponse(!0);e.googleId=t.getId(),e.tokenObj=o,e.tokenId=o.id_token,e.accessToken=o.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},n(e)}function E(e){if(e&&e.preventDefault(),F){var t=window.gapi.auth2.getAuthInstance(),o={prompt:D};l(),"code"===S?t.grantOfflineAccess(o).then((function(e){return n(e)}),(function(e){return c(e)})):t.signIn(o).then((function(e){return L(e)}),(function(e){return c(e)}))}}return Object(u.useEffect)((function(){var e=!1,t=d||c;return j(document,"script","google-login",N,(function(){var n={client_id:p,cookie_policy:f,login_hint:g,hosted_domain:b,fetch_basic_profile:x,discoveryDocs:v,ux_mode:w,redirect_uri:y,scope:P,access_type:_};"code"===S&&(n.access_type="offline"),window.gapi.load("auth2",(function(){var o=window.gapi.auth2.getAuthInstance();o?o.then((function(){e||(m&&o.isSignedIn.get()?(T(!0),r(!0),L(o.currentUser.get())):(T(!0),r(!1)))}),(function(e){c(e)})):window.gapi.auth2.init(n).then((function(t){if(!e){T(!0);var n=m&&t.isSignedIn.get();r(n),n&&L(t.currentUser.get())}}),(function(e){T(!0),r(!1),t(e)}))}))}),(function(e){t(e)})),function(){e=!0,h(document,"google-login")}}),[]),Object(u.useEffect)((function(){O&&E()}),[F]),{signIn:E,loaded:F}},x=n(2),y=function(e){var t=e.children,n=e.icon;return Object(x.jsx)("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:n?0:10,paddingTop:10,paddingBottom:10},children:t})},v=function(e){var t=e.active;return Object(x.jsx)("div",{style:{marginRight:10,background:t?"#eee":"#fff",padding:10,borderRadius:2},children:Object(x.jsx)("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsxs)("g",{fill:"#000",fillRule:"evenodd",children:[Object(x.jsx)("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),Object(x.jsx)("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),Object(x.jsx)("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),Object(x.jsx)("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),Object(x.jsx)("path",{fill:"none",d:"M0 0h18v18H0z"})]})})})},w=function(e){var t=Object(u.useState)(!1),n=a()(t,2),o=n[0],r=n[1],i=Object(u.useState)(!1),c=a()(i,2),s=c[0],d=c[1],p=e.onSuccess,g=e.onAutoLoadFinished,b=e.onRequest,j=e.onFailure,h=e.onScriptLoadFailure,O=e.tag,w=e.type,P=e.className,_=e.disabledStyle,S=e.buttonText,k=e.children,N=e.render,D=e.theme,C=e.icon,I=e.disabled,F=e.clientId,T=e.cookiePolicy,L=e.loginHint,E=e.hostedDomain,R=e.autoLoad,M=e.isSignedIn,U=e.fetchBasicProfile,q=e.redirectUri,H=e.discoveryDocs,B=e.uxMode,z=e.scope,A=e.accessType,G=e.responseType,J=e.jsSrc,W=e.prompt,K=m({onSuccess:p,onAutoLoadFinished:g,onRequest:b,onFailure:j,onScriptLoadFailure:h,clientId:F,cookiePolicy:T,loginHint:L,hostedDomain:E,autoLoad:R,isSignedIn:M,fetchBasicProfile:U,redirectUri:q,discoveryDocs:H,uxMode:B,scope:z,accessType:A,responseType:G,jsSrc:J,prompt:W}),Q=K.signIn,V=K.loaded,X=I||!V;if(N)return N({onClick:Q,disabled:X});var Y={backgroundColor:"dark"===D?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===D?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},Z={cursor:"pointer",opacity:.9},$={cursor:"pointer",backgroundColor:"dark"===D?"#3367D6":"#eee",color:"dark"===D?"#fff":"rgba(0, 0, 0, .54)",opacity:1},ee=X?f()({},Y,_):s?f()({},Y,$):o?f()({},Y,Z):Y;return l.a.createElement(O,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),d(!1)},onMouseDown:function(){return d(!0)},onMouseUp:function(){return d(!1)},onClick:Q,style:ee,type:w,disabled:X,className:P},[C&&Object(x.jsx)(v,{active:s},1),Object(x.jsx)(y,{icon:C,children:k||S},2)])};w.propTypes={onSuccess:b.a.func.isRequired,onFailure:b.a.func.isRequired,onScriptLoadFailure:b.a.func,clientId:b.a.string.isRequired,jsSrc:b.a.string,onRequest:b.a.func,buttonText:b.a.node,scope:b.a.string,className:b.a.string,redirectUri:b.a.string,cookiePolicy:b.a.string,loginHint:b.a.string,hostedDomain:b.a.string,children:b.a.node,disabledStyle:b.a.object,fetchBasicProfile:b.a.bool,prompt:b.a.string,tag:b.a.string,autoLoad:b.a.bool,disabled:b.a.bool,discoveryDocs:b.a.array,uxMode:b.a.string,isSignedIn:b.a.bool,responseType:b.a.string,type:b.a.string,accessType:b.a.string,render:b.a.func,theme:b.a.string,icon:b.a.bool},w.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var P=w,_=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,o=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,c=e.cookiePolicy,s=e.loginHint,l=e.hostedDomain,d=e.fetchBasicProfile,p=e.discoveryDocs,f=e.uxMode,g=e.redirectUri,b=e.scope,O=e.accessType,m=e.onLogoutSuccess,x=Object(u.useState)(!1),y=a()(x,2),v=y[0],w=y[1],P=Object(u.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),m()}))}),(function(e){return o(e)}))}}),[m]);return Object(u.useEffect)((function(){var e=r||o;return j(document,"script","google-login",n,(function(){var t={client_id:i,cookie_policy:c,login_hint:s,hosted_domain:l,fetch_basic_profile:d,discoveryDocs:p,ux_mode:f,redirect_uri:g,scope:b,access_type:O};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?w(!0):window.gapi.auth2.init(t).then((function(){return w(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){h(document,"google-login")}}),[]),{signOut:P,loaded:v}},S=function(e){var t=Object(u.useState)(!1),n=a()(t,2),o=n[0],r=n[1],i=Object(u.useState)(!1),c=a()(i,2),s=c[0],d=c[1],p=e.tag,g=e.type,b=e.className,j=e.disabledStyle,h=e.buttonText,O=e.children,m=e.render,w=e.theme,P=e.icon,S=e.disabled,k=e.onLogoutSuccess,N=e.clientId,D=e.cookiePolicy,C=e.loginHint,I=e.hostedDomain,F=e.fetchBasicProfile,T=e.redirectUri,L=e.discoveryDocs,E=e.onFailure,R=e.onScriptLoadFailure,M=e.uxMode,U=e.scope,q=e.accessType,H=e.jsSrc,B=_({jsSrc:H,onFailure:E,onScriptLoadFailure:R,clientId:N,cookiePolicy:D,loginHint:C,hostedDomain:I,fetchBasicProfile:F,discoveryDocs:L,uxMode:M,redirectUri:T,scope:U,accessType:q,onLogoutSuccess:k}),z=B.signOut,A=B.loaded,G=S||!A;if(m)return m({onClick:z,disabled:G});var J={backgroundColor:"dark"===w?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===w?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},W={cursor:"pointer",opacity:.9},K={cursor:"pointer",backgroundColor:"dark"===w?"#3367D6":"#eee",color:"dark"===w?"#fff":"rgba(0, 0, 0, .54)",opacity:1},Q=G?f()({},J,j):s?f()({},J,K):o?f()({},J,W):J;return l.a.createElement(p,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),d(!1)},onMouseDown:function(){return d(!0)},onMouseUp:function(){return d(!1)},onClick:z,style:Q,type:g,disabled:G,className:b},[P&&Object(x.jsx)(v,{active:s},1),Object(x.jsx)(y,{icon:P,children:O||h},2)])};S.propTypes={jsSrc:b.a.string,buttonText:b.a.node,className:b.a.string,children:b.a.node,disabledStyle:b.a.object,tag:b.a.string,disabled:b.a.bool,onLogoutSuccess:b.a.func,type:b.a.string,render:b.a.func,theme:b.a.string,icon:b.a.bool,onFailure:b.a.func,onScriptLoadFailure:b.a.func},S.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var k,N,D=n(79),C=n(82),I=n(81),F=n.n(I),T=n(17),L=n.n(T),E=n(16),R=n.n(E),M=n(20),U=n(275),q=["text"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=M.a.div(k||(k=R()(["\n    background: #fff;\n    box-shadow: 0px 4px 10px rgb(0 0 0 / 2%);\n    border-radius: 6px;\n    margin: 20px;\n    padding: 15px;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n"]))),A=M.a.div(N||(N=R()(["\n    margin-left: 10px;\n"])));function G(e){var t=e.text,n=L()(e,q);return Object(x.jsxs)(z,B(B({},n),{},{children:[Object(x.jsx)(U.a,{size:24}),Object(x.jsx)(A,{children:t})]}))}var J=n(118);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function K(e){var t=e.text,n=e.embedToGetUserToken,o=Object(d.f)(),i=Object(J.a)(),c=Object(u.useState)({email:"",password:"",onRequest:!1}),l=a()(c,2),p=l[0],f=l[1],g=function(e,t){p[e]=t,f(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p))};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(P,{render:function(e){return Object(x.jsx)(G,{text:t,onClick:function(){return e.onClick()},disabled:e.disabled})},clientId:"178683516706-bgoi08u14chjoopdmk0rjbk0hfpsb7df.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){return function(e){var t,r,a,c,u,l,d;return s.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if("popup_closed_by_user"!=e.error){p.next=4;break}return p.abrupt("return");case 4:return g("onRequest",!0),t=e.profileObj,r=t.email,a=t.familyName,c=t.givenName,u=t.imageUrl,l={email:r,firstName:c,lastName:a,profileUrl:u},p.next=10,s.a.awrap(O.a);case 10:return d=p.sent,p.next=13,s.a.awrap(d.post("v1/authe/oauth",l));case 13:p.sent.on("static",(function(e){g("onRequest",!1);var t=e.response.data;t.token&&(F.a.set("SOJI_uft_token",t.token),"undefined"!=typeof F.a.get("SOJI_uft_token")&&(o("/"),i.set(t),n&&n(t.token)))}));case 15:case"end":return p.stop()}}),null,null,null,Promise)}(e)},onFailure:function(){return null},cookiePolicy:"single_host_origin"}),Object(x.jsx)(D.a,{visible:p.onRequest,onRequestClose:function(){return g("onRequest",!1)},children:Object(x.jsx)(C.b,{})})]})}},261:function(e,t,n){var o=n(59),r=n(262);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},262:function(e,t,n){(t=n(60)(!1)).push([e.i,".form-select {\n  border: none !important;\n  height: 40px;\n}\n\n.form-select:focus {\n  border: none;\n  box-shadow: none !important;\n}\n.react-datepicker__input-container input {\n  width: 100%;\n}\n\n.select__control {\n  height: 50px;\n  border: 1px solid #C4C4C4 !important;\n  box-shadow: none !important;\n}\n\n.select__menu {\n  z-index: 100000;\n}\n\n.basic-multi-select {\n  z-index: 999;\n}\n\n.select__placeholder,\n.select__input-container,.select__single-value {\n  font-weight: 500;\n}\n\n\n.select {\n  width: 444px !important;\n  margin-right: 5px;\n  z-index: 0 !important;\n}\n\n.select.is-open {\nz-index: 100000 !important;\n}\n\n.select-menu {\n  position: fixed !important;\n  width: 440px !important;\n  margin: 1px;\n}\n",""]),e.exports=t},263:function(e,t,n){var o=n(59),r=n(264);"string"===typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},264:function(e,t,n){(t=n(60)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap);"]),t.push([e.i,".button {\n  border-radius: 19px;\n  height: 40px;\n  background-color: #FF6600;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5px;\n}\n.button div {\n  color: #fff;\n  font-family: Montserrat !important;\n}",""]),e.exports=t},265:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o,r=n(12),i=n.n(r),a=n(27),c=n.n(a),s=n(16),u=n.n(s),l=n(6),d=n.n(l),p=n(1),f=n(10),g=n(257),b=n(256),j=n(61),h=n(20),O=n(81),m=n.n(O),x=(n(258),n(259)),y=n(118),v=n(2);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=Object(h.a)(b.a)(o||(o=u()(["\n    width: 60%;\n    height: 40px;\n"])));function _(e){var t=e.pageHandler,n=e.embedToGetUserToken,o=Object(f.f)(),r=Object(y.a)(),a=Object(p.useState)({email:"",password:"",onRequest:!1,error:!1}),s=c()(a,2),u=s[0],l=s[1],b=function(e,t){u[e]=t,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"authe_container",children:[Object(v.jsx)("div",{className:"title",children:"Sign In"}),Object(v.jsx)(x.a,{text:"Login with Google",embedToGetUserToken:n}),Object(v.jsx)(g.a,{placeholder:"Email",title:"Email",onChange:function(e){return b("email",e.target.value)}}),Object(v.jsx)(g.a,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return b("password",e.target.value)}}),Object(v.jsxs)("div",{className:"authe_action_box",children:[Object(v.jsxs)("p",{children:["Have no account?",Object(v.jsx)("a",{onClick:function(){return t("pageName","signup")},className:"text_default_color text_bold cursor_pointer",children:"Sign Up here"})]}),Object(v.jsx)("p",{children:Object(v.jsx)("a",{onClick:function(){return t("pageName","forgotPassword")},className:"text_default_color cursor_pointer",children:"Forgot Password?"})})]}),u.error&&Object(v.jsx)("p",{style:{color:"red"},children:u.error}),Object(v.jsx)("div",{className:"button_container",children:Object(v.jsx)(P,{className:"button",title:"Login",loading:u.onRequest,onClick:function(){var e,t;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return b("onRequest",!0),e={email:u.email,password:u.password},i.next=4,d.a.awrap(j.a);case 4:return t=i.sent,i.next=7,d.a.awrap(t.post("v1/authe/login",e));case 7:i.sent.on("static",(function(e){if(b("onRequest",!1),403==e.response.status)b("error",e.response.data);else{var t=e.response.data;t.token&&(m.a.set("SOJI_uft_token",t.token),r.set(t),"undefined"!=typeof m.a.get("SOJI_uft_token")&&(o("/"),n&&n(t.token)))}}));case 9:case"end":return i.stop()}}),null,null,null,Promise)}})})]})})}},266:function(e,t,n){(t=n(60)(!1)).push([e.i,".authe_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  flex: 1;\n}\n.authe_container .title {\n  font-size: 24px;\n  line-height: 29px;\n}\n.authe_container .authe_content {\n  width: 100%;\n  flex: 1;\n  overflow-y: auto;\n}\n.authe_container .authe_action_box {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}",""]),e.exports=t},267:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var o,r=n(12),i=n.n(r),a=n(27),c=n.n(a),s=n(16),u=n.n(s),l=n(6),d=n.n(l),p=n(1),f=n(257),g=n(10),b=n(256),j=n(61),h=n(20),O=n(81),m=n.n(O),x=(n(258),n(259)),y=n(118),v=n(2);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var P=Object(h.a)(b.a)(o||(o=u()(["\n    width: 60%;\n    height: 40px;\n"])));function _(e){var t=e.pageHandler,n=e.embedToGetUserToken,o=Object(g.f)(),r=Object(y.a)(),a=Object(p.useState)({firstName:"",lastName:"",phoneNumber:"",email:"",password:"",confirmPassword:"",onRequest:!1}),s=c()(a,2),u=s[0],l=s[1],b=function(e,t){u[e]=t,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u))};return Object(v.jsxs)("div",{className:"authe_container",children:[Object(v.jsx)("div",{className:"title",children:"Sign Up"}),Object(v.jsx)(x.a,{text:"Signup with Google",embedToGetUserToken:n}),Object(v.jsxs)("div",{className:"authe_content",children:[Object(v.jsx)(f.a,{placeholder:"First Name",title:"FIrst Name",onChange:function(e){return b("firstName",e.target.value)}}),Object(v.jsx)(f.a,{placeholder:"Last Name",title:"Last Name",onChange:function(e){return b("lastName",e.target.value)}}),Object(v.jsx)(f.a,{placeholder:"Phone Number",title:"Phone Number",onChange:function(e){return b("phoneNumber",e.target.value)}}),Object(v.jsx)(f.a,{placeholder:"Email",title:"Email",onChange:function(e){return b("email",e.target.value)}}),Object(v.jsx)(f.a,{placeholder:"Password",title:"Password",type:"password",onChange:function(e){return b("password",e.target.value)}}),Object(v.jsx)(f.a,{placeholder:"Confirm Password",title:"Confirm Password",type:"password",onChange:function(e){return b("confirmPassword",e.target.value)}})]}),Object(v.jsx)("div",{className:"authe_action_box",children:Object(v.jsxs)("p",{children:["Have an account?",Object(v.jsx)("a",{onClick:function(){return t("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(v.jsx)("div",{className:"button_container",children:Object(v.jsx)(P,{className:"button",title:"Sign Up",loading:u.onRequest,onClick:function(){var e,t;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return b("onRequest",!0),e={firstName:u.firstName,lastName:u.lastName,phoneNumber:u.phoneNumber,email:u.email,password:u.password},i.next=4,d.a.awrap(j.a);case 4:return t=i.sent,i.next=7,d.a.awrap(t.post("v1/authe/signup",e));case 7:i.sent.on("static",(function(e){b("onRequest",!1);var t=e.response.data;t.token&&(m.a.set("SOJI_uft_token",t.token),r.set(t),"undefined"!=typeof m.a.get("SOJI_uft_token")&&(o("/"),n&&n(t.token)))}));case 9:case"end":return i.stop()}}),null,null,null,Promise)}})})]})}},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o,r=n(16),i=n.n(r),a=(n(1),n(257)),c=n(256),s=n(20),u=(n(258),n(2)),l=Object(s.a)(c.a)(o||(o=i()(["\n    width: 60%;\n    height: 40px;\n"])));function d(e){var t=e.pageHandler;return Object(u.jsxs)("div",{className:"authe_container",children:[Object(u.jsx)("div",{className:"title",children:"Forgot Password"}),Object(u.jsx)(a.a,{placeholder:"Email"}),Object(u.jsx)("div",{className:"authe_action_box",children:Object(u.jsxs)("p",{children:["Have an account?",Object(u.jsx)("a",{onClick:function(){return t("pageName","login")},className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),Object(u.jsx)("div",{className:"button_container",children:Object(u.jsx)(l,{className:"button",title:"Send"})})]})}},269:function(e,t,n){"use strict";var o=n(276),r=n.n(o);r.a.init("12ee3cf398f805c6b4163cc243a4b4ef",{debug:!0,ignore_dnt:!0}),t.a=r.a},310:function(e,t,n){"use strict";n.r(t);var o=n(12),r=n.n(o),i=n(27),a=n.n(i),c=n(1),s=n(10),u=n(269),l=n(270),d=n(265),p=n(267),f=n(268),g=n(2);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.default=function(){var e=Object(s.g)().pageName,t=Object(c.useState)({pageName:"login"===e?"login":"signup"===e?"signup":"forgotPassword"}),n=a()(t,2),o=n[0],i=n[1],j=function(e,t){"login"===t&&window.history.pushState("","Login","/authe/login"),"signup"===t&&window.history.pushState("","Login","/authe/signup"),"forgotPassword"===t&&window.history.pushState("","Login","/authe/forgot-password"),o[e]=t,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o))};return Object(c.useEffect)((function(){u.a.track(e+" Page",{"Opted out of email":!0,ip:"0"})}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(l.a,{children:["login"===o.pageName&&Object(g.jsx)(d.a,{pageHandler:j}),"signup"===o.pageName&&Object(g.jsx)(p.a,{pageHandler:j}),"forgotPassword"===o.pageName&&Object(g.jsx)(f.a,{pageHandler:j})]})})}}}]);
//# sourceMappingURL=7.fa71853e.chunk.js.map