(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(2),c=a.n(r);a(12),a(13);function o(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," bg-body-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Darkmode"))))))}function s(e){const[t,a]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",id:"myBox",value:t,onChange:e=>{console.log("onchange"),a(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"#042743"},rows:"8"})),n.a.createElement("button",{className:"btn btn-primary",onClick:()=>{console.log("clicked button"),a("Your text area is updated");let l=t.toUpperCase();a(l),e.showAlert("Converted to Uppercase!","Success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:()=>{console.log("clicked");let l=t.toLowerCase();a(l),e.showAlert("Converted to Lowercase!","Success")}},"Convert to Lowercase"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{a(""),e.showAlert("All text are clear!","Success")}},"clear text"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{const t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Coppied","Success")}},"Copy text"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{let l=t.split(/[ ]+/);a(l.join("")),e.showAlert("Extra spaces are removed","Success")}},"Remove extra space")),n.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"#042743"}},n.a.createElement("h1",null,"Your text summary"),n.a.createElement("p",null,""===t?t.split(" ").length-1:t.split(" ").length," ","Words and ",t.length," Characters"),n.a.createElement("p",null,.008*t.split(" ").length," Minutes to read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,t.length>0?t:"Enter something in the textbox to preview here")))}function m(e){return e.alert&&n.a.createElement("div",{class:"alert alert-success alert-dismissible fade show",role:"alert"},n.a.createElement("strong",null,e.alert.type),": ",e.alert.msg)}o.defaultProps={title:"Textutils",aboutText:"About us"};var i=function(){const[e,t]=Object(l.useState)("light"),[a,r]=Object(l.useState)(null),c=(e,t)=>{r({msg:e,type:t}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-5"},n.a.createElement(o,{title:"textutils",mode:e,toggleMode:()=>{"light"===e?(t("dark"),document.body.style.backgroundColor="#042743",c("Dark mode has been enabled","Success")):(t("light"),document.body.style.backgroundColor="white",c("light mode has been enabled","Success"))}}),n.a.createElement(m,{alert:a}),n.a.createElement(s,{showAlert:c,heading:"Enter the text to analyze",mode:e})))};var u=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=t;a(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),u()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.906ab13f.chunk.js.map