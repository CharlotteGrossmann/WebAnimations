(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(12),a=n.n(i),r=(n(22),n(13)),o=n(14),l=n(17),j=n(16),h=(n(23),n(15)),b=n.n(h),u=n(0),d=function(e){var t=e.title;return Object(u.jsx)("header",{className:"header",children:Object(u.jsx)("h1",{children:t})})};d.defaultProps={title:"Web Animations"};var f=d;var O=function(e){var t=e.onClick,n=e.text;return Object(u.jsx)("button",{onClick:t,className:"btn ",children:n})},p=(n(43),n.p+"static/media/random.47fd956a.jpg");var v=function(){return Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("h1",{children:"This is my footer"}),Object(u.jsx)("img",{src:p}),Object(u.jsx)(O,{text:"social media"})]})},x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={response:{}},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.get("/api/v1/say-something").then((function(t){var n=t.data;e.setState({response:n})}))}},{key:"render",value:function(){var e,t=!1;return e=t?"Yes":"Very Yes",Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{title:"This is my header"}),Object(u.jsx)("h1",{children:"This is my Title "}),Object(u.jsx)("h3",{children:this.state.response.body}),Object(u.jsxs)("p",{children:["Variable Content: ",Object(u.jsx)("span",{className:"variable",children:e})]}),Object(u.jsx)(O,{text:"change variable",onClick:function(){t=!t,console.log(t)}}),Object(u.jsx)(v,{})]})}}]),n}(c.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.b99c81d4.chunk.js.map