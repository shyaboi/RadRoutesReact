(this["webpackJsonprad-routes-home"]=this["webpackJsonprad-routes-home"]||[]).push([[0],{240:function(e,t,a){},717:function(e,t,a){},719:function(e,t,a){},720:function(e,t,a){"use strict";a.r(t);var c,r=a(2),n=a.n(r),s=a(49),l=a.n(s),i=(a(240),a(55)),o=a(14),j=a(11),d=a.n(j),b=a(20),u=a(9),h=a(721),O=a(722),x=a(723),m=a(724),p=a(725),f=a(726),g=a(727),v=a(225),N=a.p+"static/media/radroutes.e439f672.png",S=a(34),k=a.n(S),w=a(0),y=function(e){var t=Object(r.useState)(""),a=Object(u.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),l=Object(u.a)(s,2),i=l[0],j=l[1],S=Object(o.f)();Object(r.useEffect)((function(){}),[]);var y=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({email:i,password:c}),k.a.post("/login",t).then((function(e){var t=e.data,a=e.data.authed,c=e.data.enc;"1"==a?(console.log(a,c),localStorage.setItem("enc",c),S.push("/Home")):alert(t)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(h.a,{id:"logoCon",className:"txt-cen",fluid:!0,children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{className:"mt-4",children:Object(w.jsx)(x.a,{id:"logo",children:Object(w.jsx)(m.a,{href:"/",children:Object(w.jsx)("img",{src:N,alt:"rad routes logo",height:"350px"})})})})}),Object(w.jsx)(O.a,{className:"mr-5 ml-5  p-5 txt-cen",children:Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(p.a,{className:"mr-sm-2 mb-sm-0 sec",children:[Object(w.jsx)(f.a,{for:"exampleEmail",className:"mr-sm-2",children:Object(w.jsx)("h4",{children:"Email"})}),Object(w.jsx)(g.a,{onChange:function(e){return j(e.target.value)},type:"email",name:"email",id:"Email",placeholder:"rad@radroutes.com"})]}),Object(w.jsxs)(p.a,{className:"mt-4 mr-sm-2 mb-sm-0",children:[Object(w.jsx)(f.a,{for:"examplePassword",className:"mr-sm-2 sec",children:Object(w.jsx)("h4",{children:"Password"})}),Object(w.jsx)(g.a,{onChange:function(e){return n(e.target.value)},type:"password",name:"password",id:"Password",placeholder:"secret , shh don't tell anyone"})]}),Object(w.jsx)(v.a,{className:"mt-4",onClick:y,children:"Submit"})]})}),Object(w.jsx)(O.a,{className:"pb-4",children:Object(w.jsx)(x.a,{children:Object(w.jsx)(m.a,{href:"/Register",children:"Register"})})})]})},C=a(734),R=a(735),I=a.p+"static/media/rr.36c4f743.png",T=function(){var e=Object(b.a)(d.a.mark((function e(t){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=a(728),P=a(729),L=a(730),F=a(731),A=a(732),z=a(733),D=a(130),G=a.p+"static/media/rad.085e73e8.png",U=a.p+"static/media/routes.72dcc749.png",W=a(56),_=function(e){var t=Object(r.useState)(!1),a=Object(u.a)(t,2),c=a[0],n=a[1],s=Object(r.useState)(""),l=Object(u.a)(s,2),i=l[0],j=l[1],d=Object(o.f)();Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("enc");if(e){var t=Object(W.a)(e),a={user:t.user,email:t.email,avatar:t.avatar,routes:t.routes,joined:t.joined,d:t.morD};j(a)}else d.push("/Login")}()}),[]);return Object(w.jsx)("div",{children:Object(w.jsxs)(E.a,{light:!0,expand:"md",className:"fixed-top muhNav radGrad font-weight-bold ",children:[Object(w.jsx)(P.a,{className:"ml-4 brand",href:"/Home",children:Object(w.jsx)(D.LazyLoadImage,{id:"pics",effect:"blur",src:G,height:"70px",width:"100px"})}),Object(w.jsx)(L.a,{onClick:function(){return n(!c)}}),Object(w.jsxs)(F.a,{isOpen:c,navbar:!0,children:[Object(w.jsxs)(A.a,{className:"mr-auto ",navbar:!0,children:[Object(w.jsx)(z.a,{className:"border border-primary",children:Object(w.jsx)(m.a,{href:"/Home",children:Object(w.jsx)("strong",{children:"Home"})})}),Object(w.jsx)(z.a,{className:"border border-primaryGrad",children:Object(w.jsx)(m.a,{href:"/Editor",children:Object(w.jsx)("strong",{children:"Editor"})})}),Object(w.jsx)(z.a,{className:"border border-secondary",children:Object(w.jsx)(m.a,{href:"/FileUpload",children:Object(w.jsx)("strong",{children:"Upload a File"})})}),Object(w.jsx)(z.a,{className:"border border-secondaryGrad",children:Object(w.jsx)(m.a,{href:"/Peep",children:Object(w.jsx)("strong",{children:"Peep Code"})})})]}),Object(w.jsx)(m.a,{href:"/Profile",children:Object(w.jsx)("img",{src:i.avatar,alt:"",height:"60px",width:"65px",className:"rndNav shad"})}),Object(w.jsx)(P.a,{className:"ml-4 brand",href:"/Profile",children:Object(w.jsx)(D.LazyLoadImage,{id:"pics",effect:"blur",src:U,height:"55px",width:"130px"})})]})]})})},J=function(e){var t=Object(r.useState)("...Waiting for file to be loaded"),a=Object(u.a)(t,2),n=a[0],s=a[1],l=Object(r.useState)(""),i=Object(u.a)(l,2),o=i[0],j=i[1],m=Object(r.useState)("Availible"),N=Object(u.a)(m,2),S=N[0],y=N[1],E=Object(r.useState)("avail"),P=Object(u.a)(E,2),L=P[0],F=P[1],A=Object(r.useState)(),z=Object(u.a)(A,2),D=z[0],G=z[1],U=function(e){var t=e.target.value;j(t),T("http://radroutes.com/exists/".concat(t)).then(function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),!1===(a=t)&&(y("Route Availible"),F("avail")),!0===a&&(y("Route NOT Availible"),F("notAvail"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},W=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("avail"===L&&((t=new FormData).append("file",D),t.append("route",o),t.append("type",n),t.append("enc",c),k.a.post("http://radroutes.com/file",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){var t=e;console.log(),localStorage.removeItem("enc"),localStorage.setItem("enc",t.data)}))),"notAvail"!==L){e.next=4;break}return alert("Please choose another route, \n ".concat(o," is taken")),e.abrupt("return");case 4:if(""!==o){e.next=7;break}return alert("Please enter a valid route. \n Your route field is currently blank"),e.abrupt("return");case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("enc");e?c=e:console.log("You're not supposed to be here...")}()}),[]),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(_,{})}),Object(w.jsx)(h.a,{className:"pb-5 mt-5 pt-5 txt-cen ninja",children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(O.a,{className:"txt-cen",children:Object(w.jsx)(x.a,{children:Object(w.jsx)("img",{src:I,alt:"rad routes logo",height:"350px"})})}),Object(w.jsxs)(O.a,{className:"txt-cen",xl:"2",xs:"1",children:[Object(w.jsxs)(x.a,{className:"ninja p-5",children:[Object(w.jsxs)(p.a,{children:[Object(w.jsxs)(f.a,{children:["Your Rad Route will be hosted at https://radroutes.com/",o]}),Object(w.jsx)(g.a,{type:"text",name:"route",placeholder:"my-rad-route",onChange:function(e){U(e)}})]}),Object(w.jsxs)(f.a,{className:L,children:["Your Route is ",S]})]}),Object(w.jsxs)(x.a,{className:"ninja p-5",children:[Object(w.jsxs)(p.a,{children:[Object(w.jsx)(f.a,{for:"exampleFile",children:"Upload a file for your route:"}),Object(w.jsx)(g.a,{type:"file",onChange:function(e){!function(e){var t=e.target.files[0].name.split(".").pop();s(t);var a=e.target.files[0];G(a),console.log(a)}(e)},name:"file",id:"exampleFile"}),Object(w.jsxs)(R.a,{color:"muted",children:["Your File is a ",n," File"]})]}),Object(w.jsx)(p.a,{className:"ninjaVanish",children:Object(w.jsx)(g.a,{type:"select",name:"type",id:"exampleSelect",children:Object(w.jsx)("option",{name:"type",value:n})})})]})]}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{size:"lg",onClick:W,className:"ninja mt-5",children:"Submit"})})})]})})]})};var Y=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){!function(){var e=localStorage.getItem("enc");if(e){var t=Object(W.a)(e),a={user:t.user,email:t.email,avatar:t.avatar,routes:t.routes,joined:t.joined,d:t.morD};c(a)}}()}),[]),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(_,{})}),Object(w.jsx)(h.a,{className:"mt-5 pt-5 txt-cen",children:Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)("h1",{children:"Welcome"}),a.user]})})})]})},H=a(736),B=a(746),$=a(747),K=a(737),M=a(226),V=a.n(M);a(275),a(276),a(277),a(278),a(279),a(280),a(281),a(282),a(283),a(284),a(285),a(286),a(287);var X=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(!1),s=Object(u.a)(n,2),l=s[0],i=s[1],o=Object(r.useState)(!1),j=Object(u.a)(o,2),m=j[0],N=j[1],S=Object(r.useState)(!1),y=Object(u.a)(S,2),R=y[0],I=y[1],E=Object(r.useState)(""),P=Object(u.a)(E,2),L=P[0],F=P[1],A=Object(r.useState)(""),z=Object(u.a)(A,2),D=z[0],G=z[1],U=Object(r.useState)(""),W=Object(u.a)(U,2),J=W[0],Y=W[1],M=Object(r.useState)(!0),X=Object(u.a)(M,2),q=X[0],Q=X[1],Z=Object(r.useState)(""),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ce=Object(r.useState)(""),re=Object(u.a)(ce,2),ne=re[0],se=re[1],le=Object(r.useState)(!1),ie=Object(u.a)(le,2),oe=(ie[0],ie[1],Object(r.useState)("")),je=Object(u.a)(oe,2),de=je[0],be=je[1],ue=Object(r.useState)(""),he=Object(u.a)(ue,2),Oe=he[0],xe=he[1],me=Object(r.useState)("avail"),pe=Object(u.a)(me,2),fe=pe[0],ge=pe[1],ve=Object(r.useState)("Availible"),Ne=Object(u.a)(ve,2),Se=Ne[0],ke=Ne[1];Object(r.useEffect)((function(){if(localStorage.getItem("currentTheme")){var e=localStorage.getItem("currentTheme"),t=localStorage.getItem("currentThemeText"),a=localStorage.getItem("FontSize"),c=localStorage.getItem("Wrap"),r=localStorage.getItem("Lang"),n=localStorage.getItem("Funk");"Enabled"===c?(Q(!0),ae("Enabled")):(Q(!1),ae(c)),F(e),G(t),Y(a),se(r),xe(n)}else F("terminal"),G("Termial"),Y(44),Q(!0),ae("Enabled"),se("Python")}),[]);var we=function(e){T("http://radroute.run/exists/".concat(e)).then(function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),!1===(a=t)&&(ke("Route Availible"),ge("avail")),!0===a&&(ke("Route NOT Availible"),ge("notAvail"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},ye=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("avail"!==fe){e.next=15;break}console.log(ne),t=ne,e.t0=t,e.next="python"===e.t0?6:"ruby"===e.t0?8:"javascript"===e.t0?10:12;break;case 6:return t="py",e.abrupt("break",13);case 8:return t="rb",e.abrupt("break",13);case 10:return t="js",e.abrupt("break",13);case 12:return e.abrupt("break",13);case 13:a=JSON.stringify({route:de,pFile:Oe,type:t,enc:localStorage.getItem("enc")}),k.a.post("http://radroute.run/efile",a,{}).then((function(e){var t=e;console.log(t),localStorage.removeItem("enc"),localStorage.removeItem("Funk"),localStorage.setItem("enc",t.data),alert("Your file has been uploaded to Rad Routes!")}));case 15:if("notAvail"!==fe){e.next=18;break}return alert("Please choose another route, \n ".concat(de," is taken")),e.abrupt("return");case 18:if(""!==de){e.next=21;break}return alert("Please enter a valid route. \n Your route field is currently blank"),e.abrupt("return");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(e){var t=e.currentTarget.value,a=e.currentTarget.textContent;F(t),G(a),localStorage.setItem("currentTheme",t),localStorage.setItem("currentThemeText",a)},Re=function(e){var t=e.currentTarget.value;Y(t),localStorage.setItem("FontSize",t)},Ie=function(e){"1"===e.currentTarget.value?(Q(!0),ae("Enabled"),localStorage.setItem("Wrap","Enabled")):(Q(!1),ae("Disabled"),localStorage.setItem("Wrap","Disabled"))},Te=function(e){var t=e.currentTarget.value;e.currentTarget.textContent;se(t),localStorage.setItem("Lang",t)};return Object(w.jsxs)(h.a,{fluid:!0,children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(_,{})})})}),Object(w.jsxs)(h.a,{className:"mt-5 pt-5 txt-cen",children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{id:"editor-head",children:Object(w.jsx)(f.a,{for:"exampleText",children:Object(w.jsx)("h3",{children:"Create a Rad Route!"})})})}),Object(w.jsxs)(C.a,{onSubmit:ye,children:[Object(w.jsxs)(p.a,{className:"m-1 ninja",children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(f.a,{className:"prim",children:Object(w.jsx)("h4",{children:"Route will be hosted at "})})})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(f.a,{className:"sec",children:Object(w.jsx)("h4",{children:"RadRoute.run/files/"})}),Object(w.jsx)(f.a,{className:"primGrad",children:Object(w.jsx)("h4",{children:de})})]})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsxs)(f.a,{className:fe,children:[" ",Se]})})}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(g.a,{type:"route",value:de,onChange:function(e){!function(e){var t=e.target.value;be(t),we(t)}(e)},name:"route",id:"route",placeholder:"my-rad-api"})})})]}),Object(w.jsxs)(O.a,{fluid:!0,id:"drop-row",className:"m-1 ",children:[Object(w.jsxs)(H.a,{isOpen:a,toggle:function(){return c((function(e){return!e}))},children:[Object(w.jsx)(B.a,{caret:!0,color:"primary",className:"m-1 ninja",children:D}),Object(w.jsxs)($.a,{children:[Object(w.jsx)(K.a,{header:!0,children:"Pick Your Editor Theme"}),Object(w.jsx)(K.a,{onClick:Ce,value:"kuroir",children:"Kuroir"}),Object(w.jsx)(K.a,{onClick:Ce,value:"github",children:"GitHub"}),Object(w.jsx)(K.a,{onClick:Ce,value:"terminal",children:"Terminal"}),Object(w.jsx)(K.a,{onClick:Ce,value:"tomorrow",children:"Tomorrow"}),Object(w.jsx)(K.a,{onClick:Ce,value:"twilight",children:"Twilight"}),Object(w.jsx)(K.a,{onClick:Ce,value:"xcode",children:"Xcode"}),Object(w.jsx)(K.a,{onClick:Ce,value:"textmate",children:"textmate"}),Object(w.jsx)(K.a,{onClick:Ce,value:"solarized_dark",children:"Solarized Dark"}),Object(w.jsx)(K.a,{onClick:Ce,value:"solarized_light",children:"Solarized Light"})]})]}),Object(w.jsxs)(H.a,{isOpen:l,toggle:function(){return i((function(e){return!e}))},children:[Object(w.jsx)(B.a,{caret:!0,color:"primaryGrad",className:"m-1 ninja",children:J}),Object(w.jsxs)($.a,{children:[Object(w.jsx)(K.a,{header:!0,children:"Size in px"}),Object(w.jsx)(K.a,{onClick:Re,value:5,children:"5"}),Object(w.jsx)(K.a,{onClick:Re,value:10,children:"10"}),Object(w.jsx)(K.a,{onClick:Re,value:15,children:"15"}),Object(w.jsx)(K.a,{onClick:Re,value:20,children:"20"}),Object(w.jsx)(K.a,{onClick:Re,value:25,children:"25"}),Object(w.jsx)(K.a,{onClick:Re,value:30,children:"30"}),Object(w.jsx)(K.a,{onClick:Re,value:35,children:"35"}),Object(w.jsx)(K.a,{onClick:Re,value:40,children:"40"}),Object(w.jsx)(K.a,{onClick:Re,value:45,children:"45"}),Object(w.jsx)(K.a,{onClick:Re,value:50,children:"50"}),Object(w.jsx)(K.a,{onClick:Re,value:55,children:"55"}),Object(w.jsx)(K.a,{onClick:Re,value:88,children:"88"})]})]}),Object(w.jsxs)(H.a,{isOpen:m,toggle:function(){return N((function(e){return!e}))},children:[Object(w.jsxs)(B.a,{caret:!0,color:"secondary",className:"m-1 ninja",children:["Wrap ",te]}),Object(w.jsxs)($.a,{children:[Object(w.jsx)(K.a,{header:!0,children:"Set text wrap of the editor"}),Object(w.jsx)(K.a,{onClick:Ie,value:1,children:"Enabled"}),Object(w.jsx)(K.a,{onClick:Ie,value:2,children:"Disabled"})]})]}),Object(w.jsxs)(H.a,{isOpen:R,toggle:function(){return I((function(e){return!e}))},children:[Object(w.jsx)(B.a,{caret:!0,color:"secondaryGrad",className:"m-1 ninja",children:ne.charAt(0).toUpperCase()+ne.slice(1)}),Object(w.jsxs)($.a,{children:[Object(w.jsx)(K.a,{header:!0,children:"Set The Language"}),Object(w.jsx)(K.a,{onClick:Te,value:"javascript",children:"JavaScript (Node)"}),Object(w.jsx)(K.a,{onClick:Te,value:"python",children:"Python"}),Object(w.jsx)(K.a,{onClick:Te,value:"ruby",children:"Ruby"}),Object(w.jsx)(K.a,{disabled:!0,onClick:Te,value:"java",children:"Java"})]})]})]}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(V.a,{height:"50vh",width:"60vw",mode:ne,theme:L,fontSize:parseInt(J),wrapEnabled:q,editorProps:{$blockScrolling:!0},value:Oe,onChange:function(e){xe(e),localStorage.setItem("Funk",Oe)},id:"funktion",placeholder:"print('hello world')",type:"textarea",name:"funktion",showGutter:!0})})}),Object(w.jsx)("hr",{}),Object(w.jsx)(O.a,{id:"submitRow",children:Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{type:"submit",color:"primary",children:"Submit"})})})]})]})]})},q=(a(302),a(738)),Q=a(739),Z=a(740),ee=a(741),te=a(742),ae=a(72);var ce=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),s=Object(u.a)(n,2),l=s[0],i=s[1],o=Object(r.useState)(""),j=Object(u.a)(o,2),m=j[0],p=j[1],f=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T("http://radroute.run/all").then(function(){var e=Object(b.a)(d.a.mark((function e(t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.userTrunk),e.next=3,t.allRoutes;case 3:return a=e.sent,e.next=6,t.userTrunk;case 6:r=e.sent,c(a),p(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){f(),i("trunc")}),[]);var g=function(e){console.log(e.target.className),"trunc"===e.target.className?(e.target.className="notTrunc",console.log(l)):(e.target.className="trunc",console.log(l))},v=function(e){var t;return m?(t=m.find((function(t){return t.user_id===e})),Object(w.jsxs)("div",{children:[Object(w.jsxs)(q.a,{children:["User Name:"," ",Object(w.jsx)("strong",{children:t.user})]}),Object(w.jsx)("img",{className:"rndNav",height:"75px",width:"75px",src:t.avatar,alt:""})]})):Object(w.jsx)("div",{children:"Loading...."})};return Object(w.jsxs)(h.a,{fluid:!0,children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(_,{})}),Object(w.jsxs)(h.a,{className:"mt-5 pt-5 txt-cen ",children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{className:"shad radGrad p-3 rounded-pill stok",children:Object(w.jsx)("h1",{children:"Peep other users code and routes"})})}),Object(w.jsx)(O.a,{xs:"1",xl:"1",children:a.map((function(e){return Object(w.jsx)(O.a,{className:"p-5 mt-2 ",children:Object(w.jsx)(x.a,{children:Object(w.jsxs)(Q.a,{body:!0,children:[Object(w.jsxs)(O.a,{className:"d-flex align-items-center shad p-3 mr-5 ml-5",children:[Object(w.jsx)(x.a,{children:v(e.user_id)}),Object(w.jsxs)(x.a,{children:[Object(w.jsx)(q.a,{children:"Language:"}),Object(w.jsx)(Z.a,{children:e.ext})]})]}),Object(w.jsxs)(ee.a,{children:[Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)("strong",{children:"Route:"}),Object(w.jsx)("strong",{children:Object(w.jsx)("a",{href:"https://radroute.run/"+e.route,children:Object(w.jsxs)(te.a,{className:"raddGrad p-3 rounded-pill",children:["https://RadRoute.run/",e.route_name]})})}),Object(w.jsx)(q.a,{tag:"h5",children:" "}),Object(w.jsx)("hr",{})]})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(q.a,{className:"routesGrad rounded-pill p-2",children:Object(w.jsx)("strong",{children:"Code"})}),Object(w.jsx)(Z.a,{onClick:g,children:Object(w.jsx)("p",{className:l,children:Object(w.jsx)(ae.a,{codeString:"".concat(e.pFile)})})})]})}),Object(w.jsx)("hr",{}),Object(w.jsx)(O.a,{className:"shad ",children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(q.a,{children:"Run Code with Rad Routes Runner :"}),Object(w.jsx)(ae.a,{codeString:"rr -r ".concat(e.route_name)})]})})]})]})})})}))})]})]})},re=function(e){return Object(r.useEffect)((function(){}),[]),Object(w.jsxs)(h.a,{id:"logoCon",className:"txt-cen",fluid:!0,children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{className:"mt-5",children:Object(w.jsx)(x.a,{id:"logo",children:Object(w.jsx)(m.a,{href:"/",children:Object(w.jsx)("img",{src:N,alt:"rad routes logo",height:"250px"})})})})}),Object(w.jsx)(O.a,{className:"mr-5 ml-5  p-5 txt-cen",children:Object(w.jsx)(x.a,{children:Object(w.jsxs)(C.a,{method:"POST",action:"http://radroutes.com/register",encType:"multipart/form-data",children:[Object(w.jsxs)(p.a,{className:"mr-sm-2 mb-sm-0 sec",children:[Object(w.jsx)(f.a,{for:"username",className:"mr-sm-2",children:Object(w.jsx)("h4",{children:"User Name"})}),Object(w.jsx)(g.a,{type:"username",name:"username",id:"user",placeholder:"IAmRad"})]}),Object(w.jsxs)(p.a,{className:"mt-4 mr-sm-2 mb-sm-0 sec",children:[Object(w.jsx)(f.a,{for:"exampleEmail",className:"mr-sm-2",children:Object(w.jsx)("h4",{children:"Email"})}),Object(w.jsx)(g.a,{type:"email",name:"email",id:"Email",placeholder:"rad@radroutes.com"})]}),Object(w.jsxs)(p.a,{className:"mt-4 mr-sm-2 mb-sm-0",children:[Object(w.jsx)(f.a,{for:"examplePassword",className:"mr-sm-2 sec",children:Object(w.jsx)("h4",{children:"Password"})}),Object(w.jsx)(g.a,{type:"password",name:"password",id:"examplePassword",placeholder:"don't tell!"})]}),Object(w.jsx)(v.a,{className:"mt-4",children:"Submit"})]})})}),Object(w.jsx)(O.a,{className:"pb-4",children:Object(w.jsx)(x.a,{children:Object(w.jsx)(m.a,{href:"/Login",children:"Login"})})})]})},ne=a(743),se=a(744);var le=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(""),s=Object(u.a)(n,2),l=s[0],i=s[1],j=Object(r.useState)(""),d=Object(u.a)(j,2),b=d[0],m=d[1],p=Object(r.useState)(""),f=Object(u.a)(p,2),N=f[0],S=f[1],y=Object(r.useState)([]),C=Object(u.a)(y,2),R=C[0],I=C[1],T=Object(o.f)(),E=function(){var e=localStorage.getItem("enc");if(e){var t=Object(W.a)(e),a={user:t.user,email:t.email,avatar:t.avatar,routes:t.routes,joined:t.joined,d:t.morD};console.log(t.joined),c(a),I(t.routes)}};return Object(r.useEffect)((function(){E()}),[]),Object(w.jsxs)(h.a,{children:[Object(w.jsx)(h.a,{children:Object(w.jsx)(_,{})}),Object(w.jsx)(h.a,{className:"mt-5 pt-5 txt-cen",children:Object(w.jsxs)(Q.a,{children:[Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(ne.a,{top:!0,className:"rnd mx-auto shad profPic",src:a.avatar,alt:"Card image cap"})})}),Object(w.jsxs)(ee.a,{children:[Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(q.a,{tag:"h1",children:a.user}),Object(w.jsxs)(se.a,{tag:"h6",className:"mb-2 text-muted",children:["Joined: ",a.joined]})]})}),Object(w.jsxs)(O.a,{className:"m-2 p-2",children:[Object(w.jsx)(x.a,{children:"User Name:"}),Object(w.jsx)(x.a,{children:Object(w.jsx)(g.a,{onChange:function(e){return i(e.target.value)},type:"username",name:"username",id:"username",placeholder:a.user})})]}),Object(w.jsxs)(O.a,{className:"m-2 p-2",children:[Object(w.jsx)(x.a,{children:"Email:"}),Object(w.jsx)(x.a,{children:Object(w.jsx)(g.a,{onChange:function(e){return m(e.target.value)},type:"email",name:"email",id:"email",placeholder:a.email})})]}),Object(w.jsxs)(O.a,{className:"m-2 p-2",children:[Object(w.jsx)(x.a,{children:"Avatar URL:"}),Object(w.jsx)(x.a,{children:Object(w.jsx)(g.a,{onChange:function(e){return S(e.target.value)},type:"avatar",name:"avatar",id:"avatar",placeholder:a.avatar})})]}),Object(w.jsxs)(O.a,{children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{className:"p-3  m-4",color:"primary",onClick:function(){console.log("ok"),localStorage.removeItem("enc"),alert("Be Rad ".concat(a.user,"\n See you next time")),T.push("/")},children:"Logout"})}),Object(w.jsx)(x.a,{children:Object(w.jsx)(v.a,{className:"p-3  mt-4",color:"primaryGrad",onClick:function(e){console.log(e.target),console.log(b,l,N);var t=""!==b?b:a.email,c=""!==l?l:a.user,r=""!==N?N:a.avatar,n=JSON.stringify({email:t,user_name:c,avatar:r,enc:localStorage.getItem("enc")});k.a.post("http://radroute.run/udp",n).then((function(e){var t=e;localStorage.removeItem("enc"),localStorage.setItem("enc",t.data),E(),alert("Profile Updated!")}))},children:"Update Profile"})})]}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:"Active Routes:"})}),Object(w.jsx)(O.a,{md:"1",xl:"2",children:R.map((function(e){return Object(w.jsx)(x.a,{children:Object(w.jsxs)(Q.a,{children:[Object(w.jsx)(q.a,{children:"Hosted At:"}),Object(w.jsx)(q.a,{tag:"h3",className:"shad p-2 m-2",children:Object(w.jsxs)("a",{href:"https://radroute.run/".concat(e.route_name),children:["RadRoute.run/",e.route_name]})}),Object(w.jsx)(q.a,{children:"Raw Code:"}),Object(w.jsx)(Z.a,{className:"m-2",children:e.pFile}),Object(w.jsxs)(Z.a,{className:"shad m-2",children:["File Type: ",e.ext]}),Object(w.jsx)(v.a,{color:"secondary mb-2 mr-3 ml-3",children:"Download"}),Object(w.jsx)(O.a,{children:Object(w.jsx)(x.a,{children:Object(w.jsx)(ae.a,{codeString:"rr -r ".concat(e.route_name)})})})]})})}))})]})]})})]})},ie=a(745),oe=function(e){Object(o.f)();Object(r.useEffect)((function(){}),[]);return Object(w.jsxs)(h.a,{id:"logoCon",className:"txt-cen",fluid:!0,children:[Object(w.jsxs)(h.a,{children:[Object(w.jsx)(O.a,{className:"mt-4",children:Object(w.jsx)(x.a,{id:"logo",children:Object(w.jsx)("img",{src:N,alt:"rad routes logo",height:"350px"})})}),Object(w.jsx)(O.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(ie.a,{children:Object(w.jsx)(m.a,{href:"/Login",children:Object(w.jsx)(v.a,{className:"m-2 p-3",size:"lg",color:"primary",block:!0,children:"Login"})})}),Object(w.jsxs)(ie.a,{children:[Object(w.jsx)(ie.a,{children:Object(w.jsx)(m.a,{href:"/Register",children:Object(w.jsx)(v.a,{className:"m-2 p-3",size:"lg",color:"primaryGrad",block:!0,children:"Register"})})}),Object(w.jsx)(m.a,{href:"/Documentation",children:Object(w.jsx)(v.a,{className:"m-2 p-3",size:"lg",color:"secondary",block:!0,children:"Documentation"})})]}),Object(w.jsx)(ie.a,{children:Object(w.jsx)(m.a,{href:"/Documentation",children:Object(w.jsx)(v.a,{className:"m-2 p-3",size:"lg",color:"secondaryGrad",block:!0,children:"Contact"})})})]})})]}),Object(w.jsx)(O.a,{className:"mr-5 ml-5  p-5 txt-cen"})]})},je=function(e){return Object(w.jsx)(h.a,{children:Object(w.jsx)(O.a,{className:"txt-cen",children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(m.a,{href:"/",children:Object(w.jsx)("img",{src:N,alt:"rad routes logo",height:"350px"})}),"Docs Coming Soon"]})})})};a(717);var de=function(){return Object(r.useEffect)((function(){}),[]),Object(w.jsxs)(i.a,{children:[Object(w.jsx)(h.a,{fluid:!0,children:Object(w.jsx)(o.a,{path:"/",exact:!0,component:oe})}),Object(w.jsx)("div",{children:Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{path:"/FileUpload",exact:!0,component:J}),Object(w.jsx)(o.a,{path:"/Documentation",exact:!0,component:je}),Object(w.jsx)(o.a,{path:"/Login",exact:!0,component:y}),Object(w.jsx)(o.a,{path:"/Home",exact:!0,component:Y}),Object(w.jsx)(o.a,{path:"/Profile",exact:!0,component:le}),Object(w.jsx)(o.a,{path:"/Editor",exact:!0,component:X}),Object(w.jsx)(o.a,{path:"/Peep",exact:!0,component:ce}),Object(w.jsx)(o.a,{path:"/Register",exact:!0,component:re})]})})]})},be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,748)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(718),a(719);l.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(de,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var c=a.headers.get("content-type");404===a.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):he(t,e)}))}}(),be()}},[[720,1,2]]]);
//# sourceMappingURL=main.6f794d3c.chunk.js.map