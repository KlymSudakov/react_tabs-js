(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),r=function(t,e){return t.find((function(t){return t.id===e}))||t[0]},o=c(0),l=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected,a=r(e,c);return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.title,i=a.id===e;return Object(o.jsx)("li",{className:d()({"is-active":i}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return!i&&n(t)},children:c})},e)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},j=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],u=function(){var t=Object(s.useState)(j[0].id),e=Object(i.a)(t,2),c=e[0],n=e[1],a=r(j,c);return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a.title)}),Object(o.jsx)(l,{tabs:j,selectedTabId:c,onTabSelected:function(t){var e=t.id;return n(e)}})]})};a.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2a4d01d6.chunk.js.map