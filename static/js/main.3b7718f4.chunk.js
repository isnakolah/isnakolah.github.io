(this["webpackJsonpportfolio-client"]=this["webpackJsonpportfolio-client"]||[]).push([[0],{80:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),r=n(18),a=n.n(r),i=n(17),s=n(43),l=n(7),b=n(106),j=n(97),u=n(105),d=n(96),m=n(6),h=n(104),g=n(60),f=Object(g.a)({typography:{fontFamily:["Poppins","roboto"].join(","),fontWeightBold:400,fontWeightMedium:200,fontWeightLight:100,fontWeightRegular:200},palette:{primary:{main:"#cccccc"}}}),p="linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",O="linear-gradient(to right, rgba(101, 223, 201, 80%), rgba(186, 235, 242, 0%))",x=n(108),v=n(98),y=n(99),k=n(100),C=n(101),w=n(57),N=n.n(w),S=n(56),I=n.n(S),F=n(55),E=n.n(F),D=n(54),M=n.n(D),R=n.p+"static/media/profile-photo.ae0cbdf3.jpg",z=n(2),T=Object(d.a)((function(){return{root:{background:p,textAlign:"center",borderRadius:"2rem 0 0 2rem",fontSize:"0.85rem"},card:{backgroundColor:"transparent",boxShadow:"none",cursor:"pointer",textDecoration:"none","& img":{width:"5rem",height:"5rem",borderRadius:"50%"}},nav:{"& a":{margin:"1rem 0 1rem 0",borderRadius:"2rem",color:"rgb(18 120 134)","&:hover":{background:O},"& span":{padding:"0rem 1rem"}}},active:{color:"rgb(43 73 97) !important",background:O}}})),P=function(){var e=T();return Object(z.jsxs)(j.a,{container:!0,className:e.root,direction:"column",alignItems:"center",justify:"space-evenly",children:[Object(z.jsx)(j.a,{item:!0,children:Object(z.jsxs)(x.a,{className:e.card,component:i.b,to:"/",children:[Object(z.jsx)(b.a,{src:R,alt:"profile photo",component:"img",mx:"auto"}),Object(z.jsxs)(v.a,{children:[Object(z.jsx)(y.a,{variant:"h6",children:"Daniel Nakolah"}),Object(z.jsx)(y.a,{children:"FullStack Software Engineer"})]})]})}),Object(z.jsx)(j.a,{children:Object(z.jsxs)(k.a,{component:"nav",className:e.nav,children:[Object(z.jsxs)(C.a,{component:i.c,to:"/portfolio",activeClassName:e.active,children:[Object(z.jsx)(M.a,{}),Object(z.jsx)(y.a,{component:"span",children:"Portfolio"})]}),Object(z.jsxs)(C.a,{component:i.c,to:"/my-offer",activeClassName:e.active,children:[Object(z.jsx)(E.a,{}),Object(z.jsx)(y.a,{component:"span",children:"My Offer"})]}),Object(z.jsxs)(C.a,{component:i.c,to:"/contact-me",activeClassName:e.active,children:[Object(z.jsx)(I.a,{}),Object(z.jsx)(y.a,{component:"span",children:"Contact Me"})]}),Object(z.jsxs)(C.a,{component:i.c,to:"/cv",activeClassName:e.active,children:[Object(z.jsx)(N.a,{}),Object(z.jsx)(y.a,{component:"span",children:"My CV"})]})]})}),Object(z.jsx)(j.a,{item:!0})]})},B=n(23),W=["C#(DotNet).","React.js.","Python.","Django."],H=function(){var e=Object(o.useState)(0),t=Object(B.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(0),a=Object(B.a)(r,2),i=a[0],s=a[1],l=Object(o.useState)(!0),u=Object(B.a)(l,2),d=u[0],m=u[1],h=Object(o.useState)(!1),g=Object(B.a)(h,2),f=g[0],p=g[1];return Object(o.useEffect)((function(){if(n!==W.length){if(i!==W[n].length+1||n===W.length-1||f){if(0===i&&f)return p(!1),void c((function(e){return e+1}));var e=setTimeout((function(){s((function(e){return e+(f?-1:1)}))}),Math.max(f?75:i===W[n].length?1e3:150,parseInt(350*Math.random())));return function(){return clearTimeout(e)}}p(!0)}}),[i,n,f]),Object(o.useEffect)((function(){var e=setTimeout((function(){m((function(e){return!e}))}),500);return function(){return clearTimeout(e)}}),[d]),Object(z.jsx)(j.a,{item:!0,container:!0,direction:"column",justify:"center",component:b.a,pr:"1rem",children:Object(z.jsxs)(j.a,{item:!0,variant:"h4",component:y.a,children:["Hi, I'm Daniel a FullStack Engineer skilled in"," ",Object(z.jsx)("strong",{children:"".concat(W[n].substring(0,i)).concat(d?"|":" ")})]})})},L=n(102),A=n.p+"static/media/not-found.6f7a8f59.png",J=Object(d.a)((function(){return{root:{background:"none",boxShadow:"none","& img":{width:"auto",height:"80%"},"& h4":{padding:"0"}}}})),V=function(){var e=J();return Object(z.jsxs)(j.a,{container:!0,justify:"center",alignContent:"center",component:x.a,className:e.root,children:[Object(z.jsx)(L.a,{component:"img",src:A,alt:"something went wrong"}),Object(z.jsx)(v.a,{component:y.a,variant:"h4",children:"404. Page Not Found."})]})},Y=n(58),$=n(59),q=n(62),G=n(61),K=n(103),Q=function(e){Object(q.a)(n,e);var t=Object(G.a)(n);function n(e){var o;return Object(Y.a)(this,n),(o=t.call(this,e)).state={hasError:!1},o}return Object($.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(z.jsxs)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,component:"section",children:[Object(z.jsx)(y.a,{variant:"h5",children:"OOPS!! Something went awfully wrong. You may need to refresh the page."}),Object(z.jsx)(K.a,{component:b.a,variant:"outlined",onClick:function(){window.location.reload()},mt:"2rem",children:"Refresh"})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return console.log(e),{hasError:!0}}}]),n}(o.Component),U=function(e){return(299*e.r+587*e.g+144*e.b)/1e3},X=function(e){if(e&&void 0!==e&&""!==e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:void 0}},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128;if(void 0===e)return"#000";var n=X(e);return void 0==n?"#000":U(n)>=t?"rgb(27 20 20 / 90%)":"rgb(255 255 255 / 58%)"},_=Object(d.a)((function(){return{root:{height:"calc(80vh - 3rem)",borderRadius:"2rem",opacity:"0.5",backdropFilter:"blur"}}})),ee=function(){var e=_(),t=Object(o.useState)([]),n=Object(B.a)(t,2),c=n[0],r=n[1];return Object(o.useEffect)((function(){var e=setTimeout((function(){var e=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}();r({textColor:Z(e),backgroundColor:e})}),6e4/72);return function(){clearTimeout(e)}})),Object(z.jsx)(j.a,{container:!0,justify:"center",alignContent:"center",className:e.root,style:{color:c.textColor,backgroundColor:c.backgroundColor},children:Object(z.jsx)(y.a,{variant:"h3",children:"I love you Candy"})})},te=Object(o.lazy)((function(){return n.e(6).then(n.bind(null,111))})),ne=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,112))})),oe=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,113))})),ce=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,114))})),re=Object(d.a)((function(){return{"@global":{"*::-webkit-scrollbar":{width:"0.4em"},"*::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.2)"}},root:{minHeight:"100vh",background:"linear-gradient(to right top, rgb(101 223 201), rgb(108 219 235))"},main:{minHeight:"80vh",width:"60%",background:p,borderRadius:"2rem",zIndex:"2",backdropFilter:"blur(2rem)"},topCircle:{top:"5%",right:"15%"},bottomCircle:{bottom:"5%",left:"10%"},loading:{width:"100%",height:"100%"},backdrop:{zIndex:f.zIndex.drawer+1,color:"#fff"}}})),ae=Object(m.a)((function(e){var t;return{root:(t={background:"linear-gradient(to right bottom,rgba(255, 255, 255, 0.8),rgba(255, 255, 255, 0.3))",position:"absolute",borderRadius:"50%"},Object(s.a)(t,e.breakpoints.down("xl"),{height:"13rem",width:"13rem"}),Object(s.a)(t,e.breakpoints.up("xl"),{height:"20rem",width:"20rem"}),t)}}))(b.a),ie=function(){var e=re();return Object(z.jsxs)(h.a,{theme:f,children:[Object(z.jsx)(j.a,{container:!0,className:e.root,alignItems:"center",justify:"center",component:"main",children:Object(z.jsxs)(j.a,{container:!0,item:!0,component:"section",className:e.main,children:[Object(z.jsx)(j.a,{item:!0,container:!0,xs:4,component:"aside",children:Object(z.jsx)(P,{})}),Object(z.jsx)(j.a,{item:!0,container:!0,xs:8,component:b.a,p:"1.5rem",height:"80vh",className:e.content,children:Object(z.jsx)(Q,{children:Object(z.jsx)(o.Suspense,{fallback:Object(z.jsx)(j.a,{item:!0,container:!0,justify:"center",alignItems:"center",className:e.loading,children:Object(z.jsx)(u.a,{component:j.a,color:"secondary"})}),children:Object(z.jsxs)(l.d,{children:[Object(z.jsx)(l.b,{exact:!0,path:"/",component:H}),Object(z.jsx)(l.b,{exact:!0,path:"/portfolio",component:te}),Object(z.jsx)(l.b,{exact:!0,path:"/cv",component:ne}),Object(z.jsx)(l.b,{exact:!0,path:"/my-offer",component:oe}),Object(z.jsx)(l.b,{exact:!0,path:"/contact-me",component:ce}),Object(z.jsx)(l.b,{exact:!0,path:"/i-love-you-candy",component:ee}),Object(z.jsx)(l.b,{exact:!0,path:"/404",component:V}),Object(z.jsx)(l.a,{to:"/404"})]})})})})]})}),Object(z.jsx)(ae,{className:e.topCircle}),Object(z.jsx)(ae,{className:e.bottomCircle})]})},se=function(e){e&&e instanceof Function&&n.e(7).then(n.bind(null,115)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),o(e),c(e),r(e),a(e)}))};n(80),n(81);a.a.render(Object(z.jsx)(c.a.StrictMode,{children:Object(z.jsx)(i.a,{children:Object(z.jsx)(ie,{})})}),document.getElementById("root")),se()}},[[82,1,2]]]);
//# sourceMappingURL=main.3b7718f4.chunk.js.map