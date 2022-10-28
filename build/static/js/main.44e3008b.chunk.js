(this["webpackJsonpfrontend-mentor-rest-countries-api"]=this["webpackJsonpfrontend-mentor-rest-countries-api"]||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(21),r=a.n(o),s=a(14),i=a(55),l=a(9),d=a(183),p=a(99),j=a(47),x=a(30),b=a.n(x),h=a(27),u=a.n(h),m=a(57),g=a(13),v=a.n(g),f=a(189),O=a(69),y=a(178),w=a(190),k=a(179),N=a(181),C=a(170),S=a(182),I=a(93),B=a.n(I),F=a(94),z=a.n(F),R=a(2);function W(e){var t=e.children,a=e.window,n=Object(y.a)({target:a?a():void 0});return Object(R.jsx)(w.a,{appear:!1,direction:"down",in:!n,children:t})}var L=v()((function(e){return{appbar:{backgroundColor:"var(--appbar)",color:"var(--text)",boxShadow:"0 5px 10px -5px rgb(0 0 0 / 10%)",padding:"0 calc(4vw + ".concat(e.spacing(2),"px)")},spaceBetween:{justifyContent:"space-between"},button:{color:"var(--text)",textTransform:"capitalize",fontSize:"14px",fontWeight:600}}}))((function(e){var t=e.classes,a=e.state,n=e.setState;return Object(R.jsx)(W,Object(O.a)(Object(O.a)({},e),{},{children:Object(R.jsx)(k.a,{className:t.appbar,elevation:0,children:Object(R.jsxs)(N.a,{disableGutters:!0,className:t.spaceBetween,children:[Object(R.jsx)(C.a,{variant:"h1",component:"h1",children:"Where in the world?"}),Object(R.jsx)(S.a,{onClick:"dark"===a?function(){n("light"),document.documentElement.setAttribute("data-theme","light")}:function(){n("dark"),document.documentElement.setAttribute("data-theme","dark")},className:t.button,startIcon:"dark"===a?Object(R.jsx)(B.a,{}):Object(R.jsx)(z.a,{}),children:"Dark Mode"})]})})}))})),E=a(191),A=a(184),D=a(95),T=a.n(D),Z=v()((function(e){return{root:{backgroundColor:"var(--element)",width:"400px",marginRight:e.spacing(1),marginBottom:e.spacing(4),padding:"".concat(e.spacing(1.2),"px ").concat(e.spacing(2.5),"px"),borderRadius:"5px",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)"},input:{backgroundColor:"transparent",fontSize:"14px",fontWeight:300,color:"var(--text)","&::placeholder":{fontSize:"12px",fontWeight:300,color:"var(--text)"}}}}))(E.a);var P=v()((function(e){return{lightIcon:{color:"var(--text)",opacity:"0.7"},darkIcon:{color:"var(--text)",opacity:"0.7"}}}))((function(e){var t=e.classes,a=e.state,n=e.handleFetchSearch;c.a.useEffect((function(){document.getElementById("search").addEventListener("input",(function(e){o(e.target.value)}))}),[]);var o=function(e){n(e)};return Object(R.jsx)(Z,{id:"search",variant:"filled",placeholder:"Search for a country...",startAdornment:Object(R.jsx)(A.a,{position:"start",children:Object(R.jsx)(T.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon})})})})),q=a(96),J=a.n(q),M=a(97),G=a.n(M);var U=v()((function(e){return{dropdown:{position:"relative",width:"200px",backgroundColor:"var(--element)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",borderRadius:"5px"},dropdownLabel:{display:"flex",flexFlow:"row nowrap",justifyContent:"space-between",alignItems:"center",padding:"".concat(e.spacing(1.75),"px ").concat(e.spacing(2.5),"px"),cursor:"pointer","& span":{color:"var(--text)",fontSize:"14px",fontWeight:300}},dropdownOptions:{position:"absolute",top:"55px",width:"200px",backgroundColor:"var(--element)",color:"var(--text)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",borderRadius:"5px",zIndex:5,overflow:"hidden"},option:{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px"),cursor:"pointer",transition:"background-color 250ms ease","&:hover":{backgroundColor:"rgb(0 0 0 / 10%)"},"&:first-child":{padding:"".concat(e.spacing(2.5),"px ").concat(e.spacing(3.5),"px ").concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px")},"&:last-child":{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(3.5),"px ").concat(e.spacing(2.5),"px ").concat(e.spacing(3.5),"px")}},lightIcon:{color:"var(--text)"},darkIcon:{color:"var(--text)"}}}))((function(e){var t=e.classes,a=e.state,n=e.handleFetchRegion,o=c.a.useState(!1),r=Object(s.a)(o,2),i=r[0],l=r[1];c.a.useEffect((function(){document.getElementById("dropdown").addEventListener("click",(function(e){d(e.target.dataset.value),l(!1)}))}),[]);var d=function(e){n(e)};return Object(R.jsxs)("div",{className:t.dropdown,children:[Object(R.jsxs)("div",{className:t.dropdownLabel,onClick:function(){l(!i)},children:[Object(R.jsx)("span",{children:"Filter by Region"}),i?Object(R.jsx)(J.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon}):Object(R.jsx)(G.a,{fontSize:"small",className:"dark"===a?t.darkIcon:t.lightIcon})]}),Object(R.jsxs)("div",{id:"dropdown",className:t.dropdownOptions,style:i?{display:"block"}:{display:"none"},children:[Object(R.jsx)("div",{className:t.option,"data-value":"All",children:"All"}),Object(R.jsx)("div",{className:t.option,"data-value":"Africa",children:"Africa"}),Object(R.jsx)("div",{className:t.option,"data-value":"Americas",children:"America"}),Object(R.jsx)("div",{className:t.option,"data-value":"Asia",children:"Asia"}),Object(R.jsx)("div",{className:t.option,"data-value":"Europe",children:"Europe"}),Object(R.jsx)("div",{className:t.option,"data-value":"Oceania",children:"Oceania"})]})]})})),Y=a(185),H=a(186),K=a(187),Q=a(188);var V=v()((function(e){return{card:{width:"100%",maxWidth:"265px",height:"auto",backgroundColor:"var(--element)",borderRadius:"8px",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",transition:"transform 250ms ease",margin:e.spacing(2),"&:hover":{transform:"translateY(-5px)"},"& h2":{color:"var(--text)"},"& span":{color:"var(--text)"}},padding:{padding:e.spacing(4)},media:{boxShadow:"inset 0 -12px 15px -2px rgb(0 0 0 / 20%)"}}}))((function(e){var t=e.classes,a=e.datas,n=e.onClickCard;return Object(R.jsx)(c.a.Fragment,{children:a.map((function(e,a){return Object(R.jsx)(Y.a,{elevation:0,className:t.card,children:Object(R.jsxs)(H.a,{onClick:function(){return n(e.name.common)},children:[Object(R.jsx)(K.a,{className:t.media,component:"img",alt:"Country flag",height:"150",image:e.flags.png,title:"Country flag",loading:"lazy"}),Object(R.jsxs)(Q.a,{className:t.padding,children:[Object(R.jsx)(C.a,{variant:"h2",component:"h2",children:e.name.common}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:e.population.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:e.region})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:""===e.capital?"Undefined":e.capital})]})]})]})},a)}))})}));var X=v()((function(e){return{skeleton:{width:"100%",maxWidth:"265px",height:"313px",borderRadius:"8px",backgroundImage:"var(--gradient)",boxShadow:"0 0 12px -5px rgb(0 0 0 / 20%)",backgroundSize:"800px 104px",animation:"shineEffect 1.2s forwards infinite linear",margin:e.spacing(2)}}}))((function(e){var t=e.classes;return Object(R.jsxs)(c.a.Fragment,{children:[Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton}),Object(R.jsx)(f.a,{container:!0,className:t.skeleton})]})})),$="https://restcountries.com/v3.1/all",_=function(e){return"https://restcountries.com/v3.1/name/".concat(e)},ee=function(e){return"https://restcountries.com/v3.1/region/".concat(e)};var te=v()((function(e){return{wrapperDashboard:{display:"flex",justifyContent:"center",alignItems:"flex-start",width:"100%",height:"auto",backgroundColor:"transparent"},header:{display:"flex",flexFlow:"row wrap",justifyContent:"space-between",alignItems:"flex-start",width:"100%",height:"auto",margin:"calc(64px + ".concat(e.spacing(4.5),"px) 0 ").concat(e.spacing(4.5),"px 0"),padding:"0 calc(4vw + ".concat(e.spacing(2),"px)"),backgroundColor:"transparent"},main:{display:"flex",flexFlow:"row wrap",alignItems:"flex-start",width:"100%",maxWidth:"1440px",height:"auto",backgroundColor:"transparent",padding:"0 4vw",marginBottom:e.spacing(5)}}}))((function(e){var t=e.classes,a=e.state,n=e.setState,o=c.a.useState(!0),r=Object(s.a)(o,2),i=r[0],d=r[1],p=c.a.useState([]),x=Object(s.a)(p,2),h=x[0],g=x[1],v=Object(l.f)();c.a.useEffect((function(){0===h.length?u.a.get($).then((function(e){var t=e.data;g(t),d(!1)})):d(!1)}),[]);var O=function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),"All"!==t){e.next=7;break}return e.next=4,u.a.get($);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get(ee(t));case 9:e.t0=e.sent;case 10:a=e.t0,g(a.data),d(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(j.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),""!==t){e.next=7;break}return e.next=4,u.a.get($);case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,u.a.get(_(t));case 9:e.t0=e.sent;case 10:a=e.t0,g(a.data),d(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(e){var t=String(e);localStorage.setItem("tab",t),v.push("/".concat(t))};return Object(R.jsxs)(f.a,{container:!0,className:t.wrapperDashboard,children:[Object(R.jsx)(L,{state:a,setState:n}),Object(R.jsxs)(f.a,{container:!0,className:t.header,children:[Object(R.jsx)(P,{state:a,handleFetchSearch:y}),Object(R.jsx)(U,{state:a,handleFetchRegion:O})]}),Object(R.jsx)(m.a,{query:{maxWidth:560},children:function(e){return e?Object(R.jsx)("main",{className:t.main,style:{justifyContent:"center"},children:i?Object(R.jsx)(X,{}):Object(R.jsx)(V,{datas:h,onClickCard:w})}):Object(R.jsx)("main",{className:t.main,style:{justifyContent:"space-between"},children:i?Object(R.jsx)(X,{}):Object(R.jsx)(V,{datas:h,onClickCard:w})})}})]})})),ae=a(98),ne=a.n(ae),ce=v()((function(e){return{root:{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(5),"px"),color:"var(--text)",backgroundColor:"var(--element)",borderRadius:"5px",fontSize:"14px",textTransform:"none",marginBottom:e.spacing(5)}}}))(S.a),oe=v()((function(e){return{root:{padding:"".concat(e.spacing(.4),"px ").concat(e.spacing(2.7),"px"),color:"var(--text)",backgroundColor:"var(--element)",borderRadius:"5px",fontSize:"14px",textTransform:"none",margin:e.spacing(1)}}}))(S.a);var re=v()((function(e){return{wrapperDetails:{display:"flex",justifyContent:"center",alignItems:"flex-start",width:"100%",height:"auto",backgroundColor:"transparent"},header:{display:"flex",flexFlow:"row wrap",justifyContent:"flex-start",alignItems:"flex-start",width:"100%",height:"auto",margin:"calc(64px + ".concat(e.spacing(4.5),"px) 0 ").concat(e.spacing(4.5),"px 0"),padding:"0 calc(4vw + ".concat(e.spacing(2),"px)"),backgroundColor:"transparent"},main:{display:"flex",flexFlow:"row wrap",justifyContent:"center",alignItems:"center",width:"100%",maxWidth:"1440px",height:"auto",backgroundColor:"transparent",padding:"0 calc(4vw + ".concat(e.spacing(2),"px)")},flag:{width:"40%",minWidth:"300px",objectFit:"cover",objectPosition:"center center",marginBottom:"3rem",aspectRatio:"16 / 9"},wrapperInformation:{height:"auto",color:"var(--text)"},wrapperZones:{display:"flex",flexWrap:"nowrap",width:"100%",height:"auto",backgroundColor:"transparent",padding:"0 ".concat(e.spacing(10),"px")},leftZone:{height:"auto",marginBottom:e.spacing(2),marginRight:e.spacing(4),"& p":{margin:"".concat(e.spacing(.5),"px 0")}},rightZone:{height:"auto","& p":{margin:"".concat(e.spacing(.5),"px 0")}},borders:{display:"flex",flexFlow:"row wrap",alignItems:"center",marginBottom:e.spacing(2)}}}))((function(e){var t,a=Object(l.f)(),n=Object(l.g)(),o=e.classes,r=e.state,i=e.setState,d=c.a.useState({}),p=Object(s.a)(d,2),x=p[0],h=p[1],g=c.a.useState(""),v=Object(s.a)(g,2),O=v[0],y=v[1],w=c.a.useState(""),k=Object(s.a)(w,2),N=k[0],S=k[1],I=c.a.useState(""),B=Object(s.a)(I,2),F=B[0],z=B[1],W=c.a.useState([]),E=Object(s.a)(W,2),A=E[0],D=E[1];c.a.useEffect((function(){Object(j.a)(b.a.mark((function e(){var t,a,n,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("tab"),e.next=3,u.a.get(_(t));case 3:return a=e.sent,n=Object(s.a)(a.data,1),c=n[0],e.next=8,u.a.get((r=c.borders,"https://restcountries.com/v3.1/alpha?codes=".concat(r.join(","))));case 8:o=e.sent,h(c),D(o.data.map((function(e){return e.name.common}))),S(Object.values(c.currencies).map((function(e){return e.name})).join(", ")),z(Object.values(c.languages).map((function(e){return e})).join(", ")),y(c.tld.join(", "));case 14:case"end":return e.stop()}var r}),e)})))()}),[n]);var T=function(e){var t=String(e.target.textContent);localStorage.setItem("tab",t),a.push("/".concat(t))};return Object(R.jsxs)(f.a,{container:!0,className:o.wrapperDetails,children:[Object(R.jsx)(L,{state:r,setState:i}),Object(R.jsx)(f.a,{container:!0,className:o.header,children:Object(R.jsx)(ce,{variant:"contained",startIcon:Object(R.jsx)(ne.a,{}),onClick:function(){localStorage.setItem("tab","/"),a.push("/")},children:"Back"})}),Object(R.jsxs)("main",{className:o.main,children:[Object(R.jsx)("img",{className:o.flag,src:null===x||void 0===x||null===(t=x.flags)||void 0===t?void 0:t.svg,alt:"Country Flag",loading:"lazy"}),Object(R.jsx)(m.a,{query:{maxWidth:849},children:function(e){var t,a;return e?Object(R.jsxs)(f.a,{container:!0,className:o.wrapperInformation,style:{width:"100%",flexDirection:"column"},children:[Object(R.jsx)(C.a,{variant:"h1",component:"h1",style:{paddingLeft:"0",marginBottom:"1rem"}}),Object(R.jsxs)(f.a,{container:!0,className:o.wrapperZones,style:{flexDirection:"column",padding:"0"},children:[Object(R.jsxs)("div",{className:o.leftZone,style:{width:"auto"},children:[Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Native Name:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x||null===(t=x.name)||void 0===t?void 0:t.official})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.population})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.region})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Sub Region:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.subregion})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.capital})]})]}),Object(R.jsxs)("div",{className:o.rightZone,style:{width:"auto"},children:[Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Top Level Domain:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:O})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Currencies:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:N})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Languages:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:F})]})]})]}),Object(R.jsxs)(f.a,{container:!0,className:o.borders,style:{paddingLeft:"0",marginTop:"32px"},children:["Border Countries:"," ",A.map((function(e){return Object(R.jsx)(oe,{variant:"contained",onClick:T,children:e},e)}))]})]}):Object(R.jsxs)(f.a,{container:!0,className:o.wrapperInformation,style:{width:"60%",flexDirection:"row"},children:[Object(R.jsx)(C.a,{variant:"h1",component:"h1",style:{paddingLeft:"80px",marginBottom:"1rem"}}),Object(R.jsxs)(f.a,{container:!0,className:o.wrapperZones,style:{flexDirection:"row"},children:[Object(R.jsxs)("div",{className:o.leftZone,style:{width:"auto"},children:[Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Native Name:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x||null===(a=x.name)||void 0===a?void 0:a.official})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Population:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.population})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Region:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.region})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Sub Region:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.subregion})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Capital:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:null===x||void 0===x?void 0:x.capital})]})]}),Object(R.jsxs)("div",{className:o.rightZone,style:{width:"auto",marginLeft:"32px"},children:[Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Top Level Domain:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:O})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Currencies:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:N})]}),Object(R.jsxs)("p",{children:[Object(R.jsxs)(C.a,{variant:"body2",component:"span",children:["Languages:"," "]}),Object(R.jsx)(C.a,{variant:"body1",component:"span",children:F})]})]})]}),Object(R.jsxs)(f.a,{container:!0,className:o.borders,style:{paddingLeft:"80px",marginTop:"0"},children:["Border Countries:"," ",A.map((function(e){return Object(R.jsx)(oe,{variant:"contained",onClick:T,children:e},e)}))]})]})}})]})]})})),se={typography:{h1:{fontSize:"clamp(16px, 2vw, 20px)",fontWeight:800},h2:{fontSize:"17px",fontWeight:800,marginBottom:"1rem"},body1:{fontSize:"14px",fontWeight:300},body2:{fontSize:"14px",fontWeight:600}}};var ie=function(){var e=c.a.useState("light"),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(R.jsx)(d.a,{theme:Object(p.a)(se),children:Object(R.jsx)(i.a,{children:Object(R.jsxs)(l.c,{children:[Object(R.jsx)(l.a,{path:"/",exact:!0,children:Object(R.jsx)(te,{state:a,setState:n})}),Object(R.jsx)(l.a,{path:"/:name",exact:!0,children:Object(R.jsx)(re,{state:a,setState:n})})]})})})},le=(a(164),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,192)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),o(e),r(e)}))});r.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(ie,{})}),document.getElementById("root")),le()}},[[165,1,2]]]);
//# sourceMappingURL=main.44e3008b.chunk.js.map