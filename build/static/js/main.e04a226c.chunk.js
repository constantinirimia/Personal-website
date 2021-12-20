(this["webpackJsonpPersonal-website"]=this["webpackJsonpPersonal-website"]||[]).push([[1],{17:function(e,t,n){"use strict";var i=n(0),c=n(15),l=n(3),a=n(10),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,j=s.REACT_APP_GA_TRACKING_ID;"production"===r&&a.a.initialize(j);var b=function(){var e=Object(l.e)().pathname;return Object(i.useEffect)((function(){"production"===r&&(a.a.set({page:e}),a.a.pageview(e))}),[e]),null},o=n(4),u=n(6),d=[{index:!0,label:"Constantin Irimia",path:"/"},{label:"About",path:"/about"},{label:"Skills",path:"/skills"},{label:"Statistics",path:"/stats"},{label:"Blog",path:"/blog"},{label:"Contact",path:"/contact"}],h=n(1),O=Object(i.lazy)((function(){return n.e(5).then(n.t.bind(null,78,7))})),x=function(){var e=Object(i.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{className:"hamburger-container",children:[Object(h.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(h.jsx)("ul",{children:n?Object(h.jsx)("li",{className:"menu close-menu",children:Object(h.jsx)("div",{onClick:function(){return c(!n)},className:"menu-hover",children:"\u2715"})}):Object(h.jsx)("li",{className:"menu open-menu",children:Object(h.jsx)("div",{onClick:function(){return c(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(h.jsx)(i.Suspense,{fallback:Object(h.jsx)(h.Fragment,{}),children:Object(h.jsx)(O,{right:!0,isOpen:n,children:Object(h.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:e.path,onClick:function(){return c(!n)},children:Object(h.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(h.jsxs)("header",{id:"header",children:[Object(h.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(h.jsx)(o.b,{to:e.path,children:e.label},e.label)}))}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(o.b,{to:e.path,children:e.label})},e.label)}))})}),Object(h.jsx)(x,{})]})},p=n(20),f=function(){return Object(h.jsxs)("section",{id:"sidebar",children:[Object(h.jsxs)("section",{id:"intro",children:[Object(h.jsx)(o.b,{to:"/",className:"logo",children:Object(h.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(h.jsxs)("header",{children:[Object(h.jsx)("h2",{children:"Constantin Irimia"}),Object(h.jsx)("p",{children:"Full Stack Software Engineer "})]})]}),Object(h.jsxs)("section",{className:"blurb",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsxs)("p",{children:["I'm a software engineer who loves building things by writing code. I am passionate about machine learning and artificial intelligence and how I can use these to create a positive impact to everything that surrounds us."," "]}),Object(h.jsx)("ul",{className:"actions",children:Object(h.jsx)("li",{children:window.location.pathname.includes("/skills")?Object(h.jsx)(o.b,{to:"/about",className:"button",children:"About Me"}):Object(h.jsx)(o.b,{to:"/skills",className:"button",children:"Learn More"})})})]}),Object(h.jsxs)("section",{id:"footer",children:[Object(h.jsx)(p.a,{}),Object(h.jsxs)("p",{className:"copyright",children:["\xa9 Constantin Irimia ",Object(h.jsx)(o.b,{to:"/",children:"cirimia100@gmail.com"}),"."]})]})]})},g=function(){var e=Object(l.e)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(h.jsxs)(c.b,{children:[Object(h.jsx)(b,{}),Object(h.jsx)(g,{}),Object(h.jsxs)(c.a,{link:"/favicon.ico",titleTemplate:"%s | Constantin Irimia",defaultTitle:"Constantin Irimia",defer:!1,children:[e.title&&Object(h.jsx)("title",{children:e.title}),Object(h.jsx)("meta",{name:"description",content:e.description})]}),Object(h.jsxs)("div",{id:"wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(h.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Constantin Irimia's personal website."};t.a=v},20:function(e,t,n){"use strict";n(0);var i=n(24),c=n(25),l=n(26),a=n(27),s=[{link:"https://github.com/constantinirimia",label:"Github",icon:c.faGithub},{link:"https://www.linkedin.com/in/constantin-irimia/",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:cirimia100@gmail.com",label:"Email",icon:a.faEnvelope}],r=n(1);t.a=function(){return Object(r.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)(i.a,{icon:e.icon,size:"lg"})})},e.label)}))})}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),l=n(14),a=n(4),s=n(3),r=n(17),j=(n(38),n(1));console.log(c.a.version);var b=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,74))})),o=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,82))})),u=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,75))})),d=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,76))})),h=Object(i.lazy)((function(){return n.e(4).then(n.bind(null,80))})),O=Object(i.lazy)((function(){return n.e(6).then(n.bind(null,81))})),x=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,77))})),m=function(){return Object(j.jsx)(a.a,{basename:"",children:Object(j.jsx)(i.Suspense,{fallback:Object(j.jsx)(r.a,{}),children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{exact:!0,path:"/",element:Object(j.jsx)(u,{})}),Object(j.jsx)(s.a,{path:"/about",element:Object(j.jsx)(b,{})}),Object(j.jsx)(s.a,{path:"/stats",element:Object(j.jsx)(O,{})}),Object(j.jsx)(s.a,{path:"/contact",element:Object(j.jsx)(o,{})}),Object(j.jsx)(s.a,{path:"/blog",element:Object(j.jsx)(x,{})}),Object(j.jsx)(s.a,{path:"/skills",element:Object(j.jsx)(h,{})}),Object(j.jsx)(s.a,{component:d,status:404})]})})})},p=function(){return Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(j.jsx)(p,{}),f):Object(l.render)(Object(j.jsx)(p,{}),f)}},[[39,2,3]]]);
//# sourceMappingURL=main.e04a226c.chunk.js.map