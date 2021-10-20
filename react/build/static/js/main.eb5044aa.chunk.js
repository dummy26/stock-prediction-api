(this.webpackJsonpstock_prediction=this.webpackJsonpstock_prediction||[]).push([[0],{301:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(55),i=n.n(c),o=(n(301),n(11)),s=n(93),l=n(1);var u=function(e){var t=e.title,n=e.link;return console.log("HomePageCard render"),Object(l.jsx)("div",{className:"card",children:Object(l.jsx)(s.b,{to:n,children:Object(l.jsx)("h1",{children:t})})})};var d=function(){return console.log("home render"),Object(l.jsx)("div",{className:"home",children:Object(l.jsx)(u,{title:"Models",link:"/models"})})},j=n(112),b=n(538),h=n(525),p=n(523),f=n(537),O=n(540),x=n(48),v=n(530);var g=function(e){var t=e.children;return console.log("SimpleGrid render"),Object(l.jsx)(v.a,{container:!0,spacing:3,children:a.a.Children.map(t,(function(e){return Object(l.jsx)(v.a,{item:!0,xs:12,sm:6,md:4,children:e})}))})},m=n(32),y=n.n(m),k=n(47),w=n(533),S=n(535),D=n(536),P=n(37);function C(){var e=new Date;return e.getHours()>=16&&e.getMinutes()>=0}var L=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("-fetchPrediction called-"),e.next=3,fetch("http://localhost:8000/api/prediction/".concat(t,"/?")+new URLSearchParams({latest:!0}));case 3:return n=e.sent,e.next=6,n.json();case 6:return(r=e.sent).marketClosed=C(),e.abrupt("return",r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(y.a.mark((function e(t){var n,r,a,c,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=JSON.parse(localStorage.getItem(t)),r=!0,n?(a=new Date(n.pred_date),c=new Date,a.setHours(0,0,0,0),c.setHours(0,0,0,0),(a<c||a.getTime()===c.getTime()&&n.marketClosed!==C())&&(r=!1)):r=!1,!r){e.next=5;break}return e.abrupt("return",n);case 5:return e.next=7,L(t);case 7:return i=e.sent,o=t,s=i,localStorage.setItem(o,JSON.stringify(s)),e.abrupt("return",i);case 10:case"end":return e.stop()}var o,s}),e)})));return function(t){return e.apply(this,arguments)}}();var M=function(e){var t=e.model,n=e.setPredictionDate;console.log("ModelCard render");var a=Object(P.g)().url;a.endsWith("/")&&(a=a.slice(0,-1));var c=Object(r.useState)(),i=Object(o.a)(c,2),u=i[0],d=i[1],j=Object(r.useState)(!1),b=Object(o.a)(j,2),h=b[0],p=b[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(y.a.mark((function e(){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ModelCard fetchPrediction useEffect"),p(!0),e.next=4,_(t.ticker);case 4:r=e.sent,d(r),p(!1),n(r.pred_date);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,n]),Object(l.jsx)(w.a,{children:Object(l.jsx)(S.a,{component:s.b,to:"".concat(a,"/").concat(t.ticker),children:Object(l.jsxs)(D.a,{children:[Object(l.jsx)(f.a,{color:"textPrimary",variant:"h5",gutterBottom:!0,children:t.ticker}),Object(l.jsx)(f.a,{variant:"subtitle1",color:"textSecondary",children:"Prediction"}),Object(l.jsxs)(f.a,{variant:"h5",sx:{color:(null===u||void 0===u?void 0:u.prediction)>0?"success.main":"error.main"},children:[h&&"Loading...",u&&"".concat(null===u||void 0===u?void 0:u.prediction," %")]})]})})})};var E=function(e){var t=e.models,n=e.tickers;console.log("Models render");var a=Object(r.useState)([]),c=Object(o.a)(a,2),i=c[0],s=c[1],u=Object(r.useState)(""),d=Object(o.a)(u,2),v=d[0],m=d[1],y=n.map((function(e){return e.symbol})),k=Object(x.a)(),w=Object(r.useMemo)((function(){return i.length>0?t.filter((function(e){return i.includes(e.ticker)})):t}),[i,t]);return w.sort((function(e,t){return i.indexOf(e.ticker)-i.indexOf(t.ticker)})),Object(l.jsxs)(b.a,{style:{padding:"40px"},children:[Object(l.jsx)(h.a,{multiple:!0,filterSelectedOptions:!0,options:y,onChange:function(e,t){s(t)},renderInput:function(e){return Object(l.jsx)(p.a,Object(j.a)(Object(j.a)({},e),{},{variant:"filled",label:"Ticker",InputLabelProps:{style:{color:k.palette.text.primary}}}))}}),v&&Object(l.jsx)(f.a,{variant:"h4",align:"center",children:Object(l.jsxs)(O.a,{fontWeight:"fontWeightLight",my:5,children:["Predictions for: ",v]})}),Object(l.jsx)(g,{children:w.length<1?Object(l.jsx)("div",{children:"No models found"}):w.map((function(e){return Object(l.jsx)(M,{model:e,setPredictionDate:m},e.ticker)}))})]})},I=n(526),N=n(541),A=n(524),T=n(511),J=n(512),F=n(262),H=n(263),W=n(57),R=n(516),B=n(139),G=n(135),U=n(270),K=function(){var e=Object(k.a)(y.a.mark((function e(t,n){var r,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("---fetchPredictions called---"),e.next=3,fetch("http://localhost:8000/api/predictions/".concat(t,"/?")+new URLSearchParams({period:n}));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(k.a)(y.a.mark((function e(t,n,r){var a,c,i,o,s,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=JSON.parse(localStorage.getItem("".concat(t,"-predictions"))),!z(a)){e.next=5;break}if(!(c=a.predictions)||c.length!==r){e.next=5;break}return e.abrupt("return",c.slice(r-n,c.length));case 5:return e.next=7,K(t,n);case 7:return i=e.sent,n===r&&((o=new Date).setHours(0,0,0,0),s={date:o,marketClosed:C()},l={predictions:i,metaData:s},localStorage.setItem("".concat(t,"-predictions"),JSON.stringify(l))),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),z=function(e){if(!(null===e||void 0===e?void 0:e.metaData))return!1;var t=e.metaData,n=t.date,r=t.marketClosed;n=new Date(n);var a=new Date;return a.setHours(0,0,0,0),n.getTime()===a.getTime()&&r===C()},Q=n(99),V=n(517),X=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];function Y(e){e=e.split("-");var t=X[parseInt(e[1])-1],n=parseInt(e[2]);return"".concat(n," ").concat(t)}var Z=[{days:7,label:"1 week"},{days:14,label:"2 weeks"}];var $=function(e){var t=e.ticker;console.log("Graph render");var n=Object(r.useState)([]),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(0),u=Object(o.a)(s,2),d=u[0],j=u[1],b=Object(x.a)();Object(r.useEffect)((function(){console.log("Graph fetchPredictions useEffect");var e=!0;return i([]),function(){var n=Object(k.a)(y.a.mark((function n(){var r,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Z[d].days,n.next=3,q(t,r,Z[Z.length-1].days);case 3:a=n.sent,e&&i(a);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){return e=!1}}),[t,d]);var h=c.map((function(e){return{date:Y(e.pred_date),prediction:e.prediction,actual:e.actual}}));return Object(l.jsxs)("div",{style:{width:"100%",height:"100%"},children:[Object(l.jsx)(I.a,{value:d,onChange:function(e,t){j(t)},centered:!0,sx:{borderBottom:1,borderColor:"divider"},children:Z.map((function(e){return Object(l.jsx)(N.a,{label:e.label},e.days)}))}),h.length>0?Object(l.jsx)(T.a,{minWidth:100,children:Object(l.jsxs)(J.a,{data:h,margin:{top:30,right:30,left:30,bottom:30},children:[Object(l.jsx)(F.a,{dataKey:"date",tick:{fill:b.palette.text.secondary}}),Object(l.jsx)(H.a,{padding:{bottom:30},tick:{fill:b.palette.text.secondary},children:Object(l.jsx)(W.a,{value:"% Change in Closing Price",angle:-90,position:"insideBottomLeft",style:{fill:b.palette.text.secondary}})}),Object(l.jsx)(R.a,{stroke:b.palette.grey[800]}),Object(l.jsx)(B.a,{contentStyle:{backgroundColor:b.palette.grey[900]}}),Object(l.jsx)(G.a,{wrapperStyle:{position:"relative"}}),Object(l.jsx)(U.a,{type:"monotone",dataKey:"prediction",stroke:Q.a[200],strokeWidth:2,name:"Prediction",isAnimationActive:!1}),Object(l.jsx)(U.a,{type:"monotone",dataKey:"actual",stroke:V.a[300],strokeWidth:2,name:"Actual",isAnimationActive:!1})]})}):Object(l.jsx)(f.a,{variant:"h6",children:"Loading graph..."})]})};var ee=function(e){var t=e.model;return console.log("ModelDetail render"),Object(l.jsxs)(b.a,{style:{width:"80%",height:"80%"},children:[t?Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{variant:"h3",align:"center",children:Object(l.jsx)(O.a,{fontWeight:"fontWeightLight",my:2,children:t.ticker})})}):Object(l.jsx)("div",{children:"Loading...."}),Object(l.jsx)($,{ticker:t.ticker})]})},te=n(542),ne=n(518),re=n(520),ae=n(521),ce=n(269),ie="yyyy-MM-dd",oe=function(e,t){var n=new Date(e);return n.setDate(n.getDate()+t),n},se=function(e){if(0===e.getDay()||6===e.getDay())return!0;var t=new Date;return t.setHours(0,0,0,0),e.setHours(0,0,0,0),5===t.getDay()?C()?e>oe(t,3):e>t:6===t.getDay()?e>oe(t,2):e>oe(t,1)||e.getTime()===oe(t,1).getTime()&&!C()};var le=function(e){var t=e.model;console.log("ModelPredict render");var n=Object(r.useState)(null),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],h=u[1],O=Object(r.useState)(!1),x=Object(o.a)(O,2),v=x[0],g=x[1],m=Object(r.useState)(!1),w=Object(o.a)(m,2),S=w[0],D=w[1],P=function(){var e=Object(k.a)(y.a.mark((function e(n){var r,a,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),g(!0),e.prev=2,r=Object(ce.a)(c,ie),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(2),e.t0 instanceof RangeError?D(!0):console.log(e.t0),g(!1),h(""),e.abrupt("return");case 12:return e.next=14,fetch("http://localhost:8000/api/prediction/".concat(t.ticker,"/?")+new URLSearchParams({pred_date:r}));case 14:return a=e.sent,e.next=17,a.json();case 17:i=e.sent,h(i),g(!1);case 20:case"end":return e.stop()}}),e,null,[[2,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)(b.a,{sx:{m:5,width:"80%",height:"80%"},children:t?Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"50%",height:"40%",justifyContent:"space-between"},children:[Object(l.jsxs)("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",height:"50%",justifyContent:"space-between"},children:[Object(l.jsx)(ne.b,{dateAdapter:ae.a,children:Object(l.jsx)(re.a,{label:"Prediction Date",value:c,onChange:function(e){try{Object(ce.a)(e,ie)}catch(t){t instanceof RangeError?D(!0):console.log(t)}finally{i(e)}},inputFormat:ie,mask:"____-__-__",renderInput:function(e){return Object(l.jsx)(p.a,Object(j.a)(Object(j.a)({},e),{},{required:!0}))},shouldDisableDate:se,onError:function(e,t){switch(e){case"invalidDate":case"shouldDisableDate":D(!0);break;case null:D(!1)}}})}),Object(l.jsx)(te.a,{disabled:S,type:"submit",variant:"contained",children:"Predict"})]}),Object(l.jsxs)(f.a,{variant:"h5",children:[v&&"Predicting ...",!v&&d&&"Prediction: ".concat(d.prediction)]})]}):Object(l.jsx)("div",{children:"Loading...."})})},ue=Object(A.a)({root:{flexGrow:1,display:"flex",width:"100%",height:"100%"}}),de={visibility:"visible",width:"100%",height:"100%"},je={visibility:"hidden",width:0,height:0};var be=function(e){var t=e.all_models;console.log("Model render");var n=Object(r.useState)(0),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(P.f)().symbol,u=ue(),d=t.filter((function(e){return e.ticker.toLowerCase()===s.toLowerCase()}))[0];return Object(l.jsxs)("div",{style:{width:"100%",height:"100%"},children:[t.length<1&&Object(l.jsx)(f.a,{variant:"h4",children:"Loading..."}),t.length>0&&!d&&Object(l.jsx)(f.a,{variant:"h2",children:"404 Not Found"}),d&&Object(l.jsxs)("div",{className:u.root,children:[Object(l.jsxs)(I.a,{value:c,onChange:function(e,t){i(t)},orientation:"vertical",sx:{borderRight:1,borderColor:"divider",bgcolor:"grey.900",overflow:"visible"},children:[Object(l.jsx)(N.a,{label:"Details"}),Object(l.jsx)(N.a,{label:"Predict"})]}),Object(l.jsx)("div",{style:0===c?de:je,children:Object(l.jsx)(ee,{model:d})}),Object(l.jsx)("div",{style:1===c?de:je,children:Object(l.jsx)(le,{model:d})})]})]})},he=n(519),pe=n(267),fe=n(532),Oe="http://localhost:8000/api",xe={},ve=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:xe,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=Object(r.useState)(n),c=Object(o.a)(a,2),i=c[0],s=c[1],l=Object(r.useState)(!0),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(!1),h=Object(o.a)(b,2),p=h[0],f=h[1];return Object(r.useEffect)((function(){console.log("useFetchApi useEffect"),function(){var n=Object(k.a)(y.a.mark((function n(){var r,a;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),f(!1),n.prev=2,n.next=5,fetch("".concat(Oe,"/").concat(e,"/?")+new URLSearchParams(t));case 5:r=n.sent,n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(2),n.t0 instanceof TypeError?(f(!0),j(!1)):console.error(n.t0),n.abrupt("return");case 12:if(r.ok){n.next=16;break}return f(!0),j(!1),n.abrupt("return");case 16:return n.next=18,r.json();case 18:a=n.sent,s(a),j(!1);case 21:case"end":return n.stop()}}),n,null,[[2,8]])})));return function(){return n.apply(this,arguments)}}()()}),[e,t]),[i,d,p]},ge=Object(pe.a)({palette:{mode:"dark"}});var me=function(){console.log("app render");var e=ve("models"),t=Object(o.a)(e,3),n=t[0],r=t[1],a=t[2],c=n.map((function(e){return e.ticker}));return Object(l.jsxs)(fe.a,{theme:ge,children:[Object(l.jsx)(he.a,{}),Object(l.jsxs)("div",{className:"App",style:{width:"100vw",height:"100vh"},children:[r&&Object(l.jsx)(f.a,{variant:"h4",children:"Loading..."}),a&&Object(l.jsx)(f.a,{variant:"h4",children:"Something went wrong. Please try again"}),!r&&!a&&Object(l.jsx)(s.a,{children:Object(l.jsxs)(P.c,{children:[Object(l.jsxs)(P.a,{exact:!0,path:"/",children:[Object(l.jsx)(d,{})," "]}),Object(l.jsxs)(P.a,{exact:!0,path:"/models",children:[Object(l.jsx)(E,{models:n,tickers:c})," "]}),Object(l.jsxs)(P.a,{path:"/models/:symbol",children:[Object(l.jsx)(be,{all_models:n})," "]})]})})]})]})},ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,544)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(me,{})}),document.getElementById("root")),ye()}},[[443,1,2]]]);
//# sourceMappingURL=main.eb5044aa.chunk.js.map