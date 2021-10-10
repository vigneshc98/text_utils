(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(5),o=c.n(a),r=(c(10),c(2)),l=(c(11),c(4)),i=c.n(l),d=c(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)("h5",{style:{color:"rgb(113, 105, 105)"},children:"Themes"}),Object(d.jsx)("div",{className:"bg-primary rounded mx-2",onClick:function(){e.toggleMode("primary")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(d.jsx)("div",{className:"bg-danger rounded mx-2",onClick:function(){e.toggleMode("danger")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(d.jsx)("div",{className:"bg-success rounded mx-2",onClick:function(){e.toggleMode("success")},style:{height:"30px",width:"30px",cursor:"pointer"}}),Object(d.jsx)("div",{className:"bg-warning rounded mx-2",onClick:function(){e.toggleMode("warning")},style:{height:"30px",width:"30px",cursor:"pointer"}})]}),Object(d.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:function(){"light"===e.mode?e.toggleMode("dark"):e.toggleMode("light")}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})}function u(e){var t=Object(s.useState)("enter text here"),c=Object(r.a)(t,2),n=c[0],a=c[1],o={backgroundColor:"dark"===e.mode?"black":"orange"===e.orangemode?"red":"#0073cf",color:"dark"===e.mode?"white":"orange"===e.orangemode?"red":"white"};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"container",style:"dark"===e.mode?{color:"white"}:"orange"===e.orangemode?{color:"red"}:{color:"black"},children:[Object(d.jsx)("h1",{children:e.heading}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:n,onChange:function(e){a(e.target.value)},style:"dark"===e.mode?{backgroundColor:"#0a2235",color:"white"}:"orange"===e.orangemode?{backgroundColor:"orange",color:"red"}:{backgroundColor:"white",color:"black"}})}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){var t=n.toUpperCase();a(t),e.showAlert("Converted to upper case!","success")},style:o,children:"convert to uppercase"}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){var t=n.toLocaleLowerCase();a(t),e.showAlert("Converted to lower case!","success")},style:o,children:"convert to Lowecase"}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){a(n+n),e.showAlert("Text multiplied successfully!","success")},style:o,children:"Multiply words"}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){navigator.clipboard.writeText(n),e.showAlert("Text copied to clipboard successfully!","success")},style:o,children:"Copy"}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){var t=n.split(/[ ]+/);a(t.join(" ")),e.showAlert("Extra space cleared successfully!","success")},style:o,children:"Clear Extra Space"}),Object(d.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-3 my-1",onClick:function(){a(""),e.showAlert("Text cleared successfully!","success")},style:o,children:"Clear"})]}),Object(d.jsxs)("div",{className:"container",style:"dark"===e.mode?{color:"white"}:"orange"===e.orangemode?{color:"red"}:{color:"black"},children:[Object(d.jsx)("h2",{children:"Your text summary"}),Object(d.jsxs)("p",{children:[n.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",n.length," characters"]}),Object(d.jsxs)("p",{children:["Takes ",.008*n.split(" ").filter((function(e){return 0!==e.length})).length," Minutes to read"]}),Object(d.jsx)("h2",{children:"Preview"}),Object(d.jsx)("span",{children:n.length>0?n:"Nothing to preivew!..."})]})]})}function h(e){return Object(d.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(d.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(d.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})})}b.prototype={title:i.a.string.isRequired,aboutText:i.a.string.isRequired},b.defaultProps={title:"text-here",aboutText:"about-text here"};var m=function(){var e=Object(s.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(null),o=Object(r.a)(a,2),l=o[0],i=o[1],m=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),1500)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{title:"TextUtil",aboutText:"About us",mode:c,toggleMode:function(e){console.log(e),document.body.classList.remove("bg-light"),document.body.classList.remove("bg-dark"),document.body.classList.remove("bg-primary"),document.body.classList.remove("bg-danger"),document.body.classList.remove("bg-success"),document.body.classList.remove("bg-warning"),"dark"===e||"light"===e?"light"===c?(n("dark"),document.body.style.backgroundColor="#0a2235",m("Dark mode has been enabled","success"),document.title="Utils-DarkMode"):(n("light"),document.body.style.backgroundColor="white",m("Light mode has been enabled","success"),document.title="Utils-LightMode"):(n("light"),document.body.classList.add("bg-"+e))}}),Object(d.jsx)(h,{alert:l}),Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsx)(u,{heading:"enter your text here",mode:c,showAlert:m})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),s(e),n(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.5d1ae49d.chunk.js.map