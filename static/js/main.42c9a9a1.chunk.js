(this.webpackJsonpprotfolioapp=this.webpackJsonpprotfolioapp||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(30),o=n.n(s),l=n(4),i=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(l.b,{className:"navbar-brand",exact:!0,to:"/",children:"Mr_morsalin"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(a.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.c,{className:"nav-link","aria-current":"page",exact:!0,to:"/",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.c,{className:"nav-link",exact:!0,to:"/about",children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/services",children:"Services"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{className:"nav-link",exact:!0,to:"/contact",children:"Contact"})}),Object(a.jsx)(l.b,{className:"btn btn-outline-info text-light",exact:!0,to:"/users/add",children:"Add user"})]}),Object(a.jsxs)("form",{className:"d-flex",children:[Object(a.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(a.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})},j=n(2),u=n(8),b=n.n(u),d=n(10),m=n(14),h=n(11),p=n.n(h),x=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){s()}),[]);var s=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3003/user");case 2:t=e.sent,r(t.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(d.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:3003/user/".concat(t));case 2:s();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"mt-2",children:[Object(a.jsx)("h2",{className:"text-center text-info bg-dark p-2",children:"user data"}),Object(a.jsxs)("table",{class:"table table-dark w-75  m-auto ",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"col",children:"#"}),Object(a.jsx)("th",{scope:"col",children:"Name"}),Object(a.jsx)("th",{scope:"col",children:"Username"}),Object(a.jsx)("th",{scope:"col",children:"Email"}),Object(a.jsx)("th",{scope:"col",children:"Phone"}),Object(a.jsx)("th",{scope:"col",children:"Web site"}),Object(a.jsx)("th",{scope:"col",children:"Options"})]})}),Object(a.jsx)("tbody",{className:"table-light",children:n.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{scope:"row",children:t+1}),Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.username}),Object(a.jsx)("td",{children:e.email}),Object(a.jsx)("td",{children:e.phone}),Object(a.jsx)("td",{children:e.website}),Object(a.jsxs)("td",{children:[Object(a.jsx)(l.b,{className:"btn btn-danger",to:"user/edit/".concat(e.id),children:"Edit"}),Object(a.jsx)(l.b,{className:"btn btn-info",children:"Update"}),Object(a.jsx)(l.b,{className:"btn btn-success",onClick:function(){return o(e.id)},children:"del"})]})]})}))})]})]})},O=function(){return Object(a.jsx)("div",{children:"about page"})},f=function(){return Object(a.jsx)("div",{children:"contact pages"})},v=function(){return Object(a.jsx)("div",{children:"services page"})},g=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("h1",{className:"page__not__found",children:[Object(a.jsx)("img",{className:"img",src:"https://cdn5.vectorstock.com/i/1000x1000/37/99/worker-construction-man-with-hammer-tool-vector-25143799.jpg",width:"50%",alt:""}),"Page not found"]})})},N=n(13),w=n(15),k=function(){var e=Object(j.f)(),t=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),n=Object(m.a)(t,2),r=n[0],s=n[1],o=r.name,l=r.username,i=r.email,u=r.phone,h=r.website,x=function(e){s(Object(w.a)(Object(w.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))},O=function(){var t=Object(d.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,p.a.post("http://localhost:3003/user",r);case 4:e.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:function(e){return O(e)},action:"",className:"w-75 p-3 m-auto bg-info rounded",children:[Object(a.jsx)("h3",{children:"Add User"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"name",onChange:function(e){return x(e)},type:"text",className:"form-control",placeholder:"Enter a name",value:o})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"username",onChange:function(e){return x(e)},type:"text",className:"form-control",placeholder:"Enter a username",value:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"email",onChange:function(e){return x(e)},type:"email",className:"form-control",placeholder:"Enter a email",value:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"phone",onChange:function(e){return x(e)},type:"text",className:"form-control",placeholder:"Enter a phone",value:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"website",onChange:function(e){return x(e)},type:"text",className:"form-control",placeholder:"Enter a web site",value:h})}),Object(a.jsx)("button",{className:"btn btn-outline-dark my-3",children:"submit"})]})})},y=(n(61),function(){var e=Object(j.f)(),t=Object(j.g)().id;Object(c.useEffect)((function(){v()}),[]);var n=Object(c.useState)({name:"",username:"",email:"",phone:"",website:""}),r=Object(m.a)(n,2),s=r[0],o=r[1],l=s.name,i=s.username,u=s.email,h=s.phone,x=s.website,O=function(e){o(Object(w.a)(Object(w.a)({},s),{},Object(N.a)({},e.target.name,e.target.value)))},f=function(){var n=Object(d.a)(b.a.mark((function n(a){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a.preventDefault(),n.prev=1,n.next=4,p.a.put("http://localhost:3003/user/".concat(t),s);case 4:e.push("/"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:3003/user/".concat(t));case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{noValidate:!0,onSubmit:function(e){return f(e)},action:"",className:"w-75 p-3 m-auto bg-info rounded",children:[Object(a.jsx)("h3",{children:"Edit User"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"name",onChange:function(e){return O(e)},type:"text",className:"form-control",placeholder:"Enter a name",value:l})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"username",onChange:function(e){return O(e)},type:"text",className:"form-control",placeholder:"Enter a username",value:i})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"email",onChange:function(e){return O(e)},type:"email",className:"form-control",placeholder:"Enter a email",value:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"phone",onChange:function(e){return O(e)},type:"text",className:"form-control",placeholder:"Enter a phone",value:h})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{name:"website",onChange:function(e){return O(e)},type:"text",className:"form-control",placeholder:"Enter a web site",value:x})}),Object(a.jsx)("button",{className:"btn btn-outline-dark my-3",children:"submit"})]})})}),E=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)(i,{}),Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:x}),Object(a.jsx)(j.a,{exact:!0,path:"/about",component:O}),Object(a.jsx)(j.a,{exact:!0,path:"/contact",component:f}),Object(a.jsx)(j.a,{exact:!0,path:"/services",component:v}),Object(a.jsx)(j.a,{exact:!0,path:"/users/add",component:k}),Object(a.jsx)(j.a,{exact:!0,path:"/user/edit/:id",component:y}),Object(a.jsx)(j.a,{component:g})]})]})})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.42c9a9a1.chunk.js.map