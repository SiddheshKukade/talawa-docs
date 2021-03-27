(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(146)),o={id:"installation-overview",title:"Overview"},l={unversionedId:"features/installation/installation-overview",id:"features/installation/installation-overview",isDocsHomePage:!1,title:"Overview",description:"This section is a work in progress.",source:"@site/docs/features/installation/overview.md",slug:"/features/installation/installation-overview",permalink:"/talawa-docs/docs/features/installation/installation-overview",editUrl:"https://github.com/PalisadoesFoundation/talawa-docs/edit/master/website/docs/features/installation/overview.md",version:"current",sidebar:"someSidebar",previous:{title:"Admin Portal Overview",permalink:"/talawa-docs/docs/applications/admin-overview"},next:{title:"Overview",permalink:"/talawa-docs/docs/features/messaging-and-chat/messaging-and-chat-overview"}},s=[{value:"Overall Guidance",id:"overall-guidance",children:[]},{value:"Code: INS-001",id:"code-ins-001",children:[{value:"Single Click Installation Mobile App",id:"single-click-installation-mobile-app",children:[]}]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This section is a work in progress."))),Object(i.b)("h2",{id:"overall-guidance"},"Overall Guidance"),Object(i.b)("p",null,"We need to ensure that the app, the API and the admin portal install flawlessly, ideally with a single click. The only parameters that should be required are:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"App:")," None for installation, however the registration process should be initiated upon starting the app. Registration should be as easy as possible."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"API:")," Backend database authentication parameters, hostname, username, password. Not much more."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Admin Portal:")," API URI, admin username and password with verification. Not much more.")),Object(i.b)("p",null,"Use the ease of installation of other social media apps like LinkedIn, Instagram and WhatsApp as a guide."),Object(i.b)("h2",{id:"code-ins-001"},"Code: INS-001"),Object(i.b)("h3",{id:"single-click-installation-mobile-app"},"Single Click Installation Mobile App"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Authored by")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"Shannika Jackson")," __. Last updated on")," ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"March 16,2021")," ")),Object(i.b)("p",null,"This feature aims to ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"enhance user experience")," ")," by ",Object(i.b)("em",{parentName:"p"}," ",Object(i.b)("strong",{parentName:"em"},"simplifying the installation process")," "),"."))}p.isMDXComponent=!0}}]);