(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{316:function(e,t,n){var r=n(50),a=n(318);"string"===typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);e.exports=a.locals||{}},317:function(e,t,n){"use strict";var r=n(319),a=n.n(r);a.a.init("12ee3cf398f805c6b4163cc243a4b4ef",{debug:!0,ignore_dnt:!0}),t.a=a.a},318:function(e,t,n){(t=n(51)(!1)).push([e.i,".authe_container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  flex: 1;\n}\n.authe_container .title {\n  font-size: 24px;\n  line-height: 29px;\n}\n.authe_container .authe_content {\n  width: 100%;\n  flex: 1;\n}\n.authe_container .authe_action_box {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 15px;\n}",""]),e.exports=t},364:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));var r=n(6),a=n.n(r),o=n(8),i=n.n(o),c=n(3),s=n.n(c),p=n(9),u=n.n(p),d=n(1),l=n.n(d),h=n(85),f=n(20),m=n(61),b=n(24),y=n(25),g=n(86),v=n(67),x=n.n(v),j=n(44),O=n(68),w=n(158),_=(n(316),n(4)),C=(n(16),n(317)),N=n(7),R=n.n(N);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var S=function(e){var t,n;function r(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(E(t)),t.handleErrored=t.handleErrored.bind(E(t)),t.handleChange=t.handleChange.bind(E(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(E(t)),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},a.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},a.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},a.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},a.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},a.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},a.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},a.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},a.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},a.componentDidMount=function(){this.explicitRender()},a.componentDidUpdate=function(){this.explicitRender()},a.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},a.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},a.handleRecaptchaRef=function(e){this.captcha=e},a.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return l.a.createElement("div",L({},t,{ref:this.handleRecaptchaRef}))},r}(l.a.Component);S.displayName="ReCAPTCHA",S.propTypes={sitekey:R.a.string.isRequired,onChange:R.a.func,grecaptcha:R.a.object,theme:R.a.oneOf(["dark","light"]),type:R.a.oneOf(["image","audio"]),tabindex:R.a.number,onExpired:R.a.func,onErrored:R.a.func,size:R.a.oneOf(["compact","normal","invisible"]),stoken:R.a.string,hl:R.a.string,badge:R.a.oneOf(["bottomright","bottomleft","inline"])},S.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var k=n(89),P=n.n(k);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var D={},U=0;var A,q,H,T=(A=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload=onloadcallback&render=explicit"},q=(q={callbackName:"onloadcallback",globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,r;function a(e,n){var r;return(r=t.call(this,e,n)||this).state={},r.__scriptURL="",r}r=t,(n=a).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=a.prototype;return o.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+U++),this.__scriptLoaderID},o.setupScriptURL=function(){return this.__scriptURL="function"===typeof A?A():A,this.__scriptURL},o.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},o.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=D[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[q.callbackName]},o.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),r=q,a=r.globalName,o=r.callbackName,i=r.scriptId;if(a&&"undefined"!==typeof window[a]&&(D[t]={loaded:!0,observers:{}}),D[t]){var c=D[t];return c&&(c.loaded||c.errored)?void this.asyncScriptLoaderHandleLoad(c):void(c.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var s={};s[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},D[t]={loaded:!1,observers:s};var p=document.createElement("script");for(var u in p.src=t,p.async=!0,q.attributes)p.setAttribute(u,q.attributes[u]);i&&(p.id=i);var d=function(e){if(D[t]){var n=D[t].observers;for(var r in n)e(n[r])&&delete n[r]}};o&&"undefined"!==typeof window&&(window[o]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),p.onload=function(){var e=D[t];e&&(e.loaded=!0,d((function(t){return!o&&(t(e),!0)})))},p.onerror=function(){var e=D[t];e&&(e.errored=!0,d((function(t){return t(e),!0})))},document.body.appendChild(p)},o.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===q.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var r=D[e];r&&(delete r.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===q.removeOnUnmount&&delete D[e])},o.render=function(){var t=q.globalName,n=this.props,r=(n.asyncScriptOnLoad,n.forwardedRef),a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(a[t]="undefined"!==typeof window[t]?window[t]:void 0),a.ref=r,Object(d.createElement)(e,a)},a}(d.Component),r=Object(d.forwardRef)((function(e,t){return Object(d.createElement)(n,I({},e,{forwardedRef:t}))}));return r.displayName="AsyncScriptLoader("+t+")",r.propTypes={asyncScriptOnLoad:R.a.func},P()(r,e)})(S),z=n(2);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var W=Object(_.b)(m.a)(H||(H=s()(["\n    width: 60%;\n    height: 40px;\n"])));function G(e){e.pageHandler,e.embedToGetUserToken;var t,n=Object(O.a)(),r=Object(f.f)(),o=Object(g.a)(),c=Object(d.useState)({company:"",companyName:"",countriesList:!1,country:!1,email:"",phoneNumber:"",website:"",onRequest:!1,companiesList:[],isFromExistingCompany:!1,notARobot:!1}),s=i()(c,2),p=s[0],l=s[1],m=function(e,t){p[e]=t,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p))};Object(d.useEffect)((function(){!function(){var e;u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return C.a.track("Sojiare Company Page Login",{"Opted out of email":!0,ip:"0"}),t.next=3,u.a.awrap(b.b);case 3:return e=t.sent,t.next=6,u.a.awrap(e.get("v1/utils/countries"));case 6:t.sent.on("static",(function(e){m("countriesList",e.response.data)}));case 8:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]);return Object(z.jsx)(w.a,{companyAuthe:!0,children:p.countriesList?Object(z.jsxs)("div",{className:"authe_container",children:[Object(z.jsx)("div",{className:"title",children:"Signup as a Company"}),Object(z.jsxs)("div",{className:"authe_content",children:[Object(z.jsx)(h.a,{getOptionLabel:function(e){return e.companyName},getOptionValue:function(e){return e.pageHandle},allowCreateWhileLoading:!1,placeholder:"Company Name",title:"Company Name",onChange:function(e){var n;m("company",e),n=e.companyName,m("companyName",n),m("isFromExistingCompany",n!=t)},value:p.company,cacheOptions:!1,getNewOptionData:function(e){t=e}}),p.isFromExistingCompany?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(h.c,{placeholder:"Company Email",title:"Company Email",value:p.email,onChange:function(e){return m("email",e.target.value)},desc:"Seperate each email address by ,"}),Object(z.jsx)(h.c,{placeholder:"Company Phone Number",title:"Company Phone Number",value:p.phoneNumber,onChange:function(e){return m("phoneNumber",e.target.value)},desc:"Seperate each Phone Number by ,"})]}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(h.c,{placeholder:"Company Email",title:"Company Email",value:p.email,onChange:function(e){return m("email",e.target.value)},desc:"Seperate each email address by ,"}),Object(z.jsx)(h.c,{placeholder:"Company Phone Number",title:"Company Phone Number",value:p.phoneNumber,onChange:function(e){return m("phoneNumber",e.target.value)},desc:"Seperate each Phone Number by ,"}),Object(z.jsx)(h.d,{placeholder:"Select Country",title:"Select Country",onChange:function(e){m("country",e.value)},options:p.countriesList,important:!0,value:p.countriesList.filter((function(e){return e.value===p.country}))}),Object(z.jsx)(h.c,{placeholder:"Company Website",value:p.website,title:"Company Website",onChange:function(e){return m("website",e.target.value)}})]})]}),Object(z.jsx)(h.b,{title:"Upload Documents",uri:"v1/uploads",onUploadFinished:function(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e[0],m("image",t.id),m("imagePath",b.a.server+t.upload_path);case 3:case"end":return n.stop()}}),null,null,null,Promise)}}),Object(z.jsx)(T,{sitekey:"6Lc63KYfAAAAAB2od6DQhsYmix4yXz1vX4qQOH_j",onChange:function(e){return m("notARobot",e)}}),Object(z.jsx)("div",{className:"authe_action_box",children:Object(z.jsxs)("p",{children:["Have an account?",Object(z.jsx)(y.b,{to:"/company/login",className:"text_default_color text_bold cursor_pointer",children:"Sign In"})]})}),p.error?Object(z.jsx)("p",{style:{color:"red"},children:p.error}):null,p.isFromExistingCompany?Object(z.jsx)("div",{className:"button_container",children:Object(z.jsx)(W,{className:"button",title:"Claim Company",loading:p.onRequest,onClick:function(){return function(){var e,t,a;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(m("onRequest",!0),"undefined"==typeof x.a.get("SOJI_uft_token")){i.next=8;break}return i.next=4,u.a.awrap(b.b);case 4:return e=i.sent,i.next=7,u.a.awrap(e.deleteCookie());case 7:n.set(!1);case 8:return t={companyName:p.companyName,companyEmail:p.email,companyPhoneNumber:p.phoneNumber,claimCompanyId:p.company.id},i.next=11,u.a.awrap(b.b);case 11:return a=i.sent,i.next=14,u.a.awrap(a.post("v1/company/authe/claim_company",t));case 14:i.sent.on("static",(function(e){m("onRequest",!1);var t=e.response.data;201==e.response.status?o.set({state:!0,title:"Notification",desc:t,type:"success",onClose:function(){return r("/company/awaiting-activation")}}):o.set({state:!0,title:"Notification",desc:t,type:"success",onClose:function(){return window.location.reload()}})}));case 16:case"end":return i.stop()}}),null,null,null,Promise)}()}})}):Object(z.jsx)("div",{className:"button_container",children:Object(z.jsx)(W,{className:"button",title:"Sign Up",loading:p.onRequest,onClick:function(){return function(){var e,t,a;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if("undefined"==typeof x.a.get("SOJI_uft_token")){i.next=7;break}return i.next=3,u.a.awrap(b.b);case 3:return e=i.sent,i.next=6,u.a.awrap(e.deleteCookie());case 6:n.set(!1);case 7:if(p.notARobot){i.next=10;break}return m("error","Please verify you not a robot"),i.abrupt("return");case 10:return t={companyName:p.companyName,email:p.email,phoneNumber:p.phoneNumber,website:p.website,country:p.country},m("onRequest",!0),i.next=14,u.a.awrap(b.b);case 14:return a=i.sent,i.next=17,u.a.awrap(a.post("v1/company/authe/signup",t));case 17:i.sent.on("static",(function(e){m("onRequest",!1);var t=e.response.data;201==e.response.status?o.set({state:!0,title:"Notification",desc:t,type:"success",onClose:function(){return r("/company/awaiting-activation")}}):o.set({state:!0,title:"Notification",desc:t,type:"success"})}));case 19:case"end":return i.stop()}}),null,null,null,Promise)}()}})})]}):Object(z.jsx)(j.b,{})})}}}]);
//# sourceMappingURL=11.17f9e985.chunk.js.map