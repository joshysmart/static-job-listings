(this["webpackJsonpstatic-job-listings"]=this["webpackJsonpstatic-job-listings"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),l=a(9),s=a.n(l);a(15);var i=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("img",{className:"mobile",src:"./images/bg-header-mobile.svg",alt:""}),n.a.createElement("img",{className:"desktop",src:"./images/bg-header-desktop.svg",alt:""}))},r=a(7),c=a(2),d=a(3),p=a(4),u=a(6),m=a(5),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t={disp:{borderLeft:this.props.job.featured&&"5px solid #5ba4a4"},displayNew:{display:!this.props.job.new&&"none"},displayFeatured:{display:!this.props.job.featured&&"none"}},a=this.props.job.languages.map((function(t){return n.a.createElement("button",{key:t,onClick:e.props.handleClick},t)})),o=this.props.job.tools.map((function(t){return n.a.createElement("button",{key:t,onClick:e.props.handleClick},t)}));return n.a.createElement("div",{className:"listing",style:t.disp},n.a.createElement("div",{className:"details"},n.a.createElement("img",{className:"logo",src:this.props.job.logo,alt:""}),n.a.createElement("div",null,n.a.createElement("div",{className:"info"},n.a.createElement("p",{className:"company"},this.props.job.company),n.a.createElement("p",{className:"new",style:t.displayNew},this.props.job.new&&"New!"),n.a.createElement("p",{className:"featured",style:t.displayFeatured},this.props.job.featured&&"Featured")),n.a.createElement("h2",{className:"position"},this.props.job.position),n.a.createElement("div",{className:"post-info"},n.a.createElement("p",{className:"postedAt"},this.props.job.postedAt," "),n.a.createElement("div",{className:"bullet"}),n.a.createElement("p",{className:"contract"},this.props.job.contract),n.a.createElement("div",{className:"bullet"}),n.a.createElement("p",{className:"location"},this.props.job.location," ")))),n.a.createElement("div",{className:"job-tags"},n.a.createElement("button",{onClick:this.props.handleClick},this.props.job.role),n.a.createElement("button",{onClick:this.props.handleClick},this.props.job.level),a,o))}}]),a}(n.a.Component),v=a(1),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleClick=e.handleClick.bind(Object(p.a)(e)),e.state={tags:new Set,display:!1,jobs:v},e}return Object(d.a)(a,[{key:"handleClick",value:function(e){var t=e.target;if("clear"===e.target.id)this.setState({tags:new Set,display:!1,jobs:v});else if("close"===e.target.id){var a=e.target.dataset.close;this.setState((function(e){e.tags.delete(a);var t=v.filter((function(t){return Object(r.a)(e.tags).every((function(e){return t.role===e||t.level===e||t.languages.includes(e)||t.tools.includes(e)}))}));return 0===e.tags.size&&(e.display=!1,e.jobs=v,console.log(a)),{jobs:t}}))}else this.setState((function(e){return{tags:e.tags.add(t.textContent),display:!0,jobs:v.filter((function(t){return Object(r.a)(e.tags).every((function(e){return t.role===e||t.level===e||t.languages.includes(e)||t.tools.includes(e)}))}))}}))}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.jobs.map((function(t){return n.a.createElement(g,{key:t.id,job:t,handleClick:e.handleClick,state:e.state})})),a=Object(r.a)(this.state.tags).map((function(t){return n.a.createElement("button",{key:t,className:"tag",onClick:e.handleClick},t,n.a.createElement("img",{className:"close",id:"close","data-close":t,src:"./images/icon-remove.svg",alt:""}))})),o={display:{opacity:this.state.display&&1,zIndex:!this.state.display&&-1}};return n.a.createElement("section",{className:"listings"},n.a.createElement("div",{className:"filter",style:o.display},n.a.createElement("div",{className:"buttons"},a),n.a.createElement("span",{className:"clear",id:"clear",onClick:this.handleClick},"Clear")),t)}}]),a}(n.a.Component);a(16);var f=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(i,null),n.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.94bc49d1.chunk.js.map