(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var r,a=n(12),i=n.n(a),s=n(27),c=n.n(s),l=n(6),o=n.n(l),u=n(1),b=n(61),d=n(256),f=n(274),p=n(272),j=n(19),O=n.n(j),h=n(21),v=n(271),m=n(80),x=n(273),g=n(2),y=h.a.div(r||(r=O()(["\n    height: 100%;\n    width: 100%;\n    display: inline-flex;\n    padding: 0 20px;\n    justify-content: flex-end;\n    align-items: center;\n"]))),w=function(e){var t=e.data,n=e.modalState,r=e.modalStateHandler,a=e.modalState2,i=e.modalStateHandler2,s=(e.buttonLoadingHandler,e.buttonLoading);e.alertState;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(y,{children:[Object(g.jsx)(x.a,{onClick:function(){return r(!0)}}),Object(g.jsx)(x.b,{onClick:function(){return i(!0)}})]}),Object(g.jsx)(v.a,{visible:n,setModal:function(){return r(!1)},actionDescription:"Are you sure you want to delete promo code ("+t.promoCode+")?",buttonLoading:s,actionButtonText:"Okay, Delete"}),Object(g.jsx)(m.a,{visible:a,onRequestClose:function(){return i(!1)}})]})},D=function(e){e.setRowsData;return[{id:"1",field:"serialNumber",label:"S/N",visible:!0,searchable:!0,editable:!1,sortable:!0,resizable:!0,cellRenderer:p.a,width:"70px"},{id:"2",field:"document",label:"Document Title",visible:!0,searchable:!0,editable:!1,sortable:!0,resizable:!0,cellRenderer:p.a},{id:"3",field:"createdAt",label:"Create At",visible:!0,searchable:!0,editable:!1,sortable:!0,resizable:!0,cellRenderer:p.a},{id:"4",field:"investigationStatus",label:"Investigation Status",visible:!0,searchable:!0,editable:!1,sortable:!0,resizable:!0,cellRenderer:p.a},{id:"buttons",width:"max-content",visible:!0,pinned:!0,sortable:!1,resizable:!1,cellRenderer:w}]};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(){var e=Object(u.useState)({fetchedData:!1}),t=c()(e,2),n=t[0],r=t[1],a=function(e,t){n[e]=t,r(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))};return Object(u.useEffect)((function(){!function(){var e;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.a);case 2:return e=t.sent,t.next=5,o.a.awrap(e.get("v1/suspected_users/get-all_recent_documents"));case 5:t.sent.on("static",(function(e){var t;return o.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:t=e.response.data,a("fetchedData",t);case 2:case"end":return n.stop()}}),null,null,null,Promise)}));case 7:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),Object(g.jsx)("div",{className:"container content_Container",children:n.fetchedData?Object(g.jsx)(f.a,{getColumns:D,MOCK_DATA:[],texts:"No Results fo"}):Object(g.jsx)(d.a,{})})}}}]);
//# sourceMappingURL=16.007fe900.chunk.js.map