(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(5),s=n.n(r),i=(n(14),n(2)),l=n(3),o=n(6),d=n(7),h=n(9),j=n(8),u=(n(15),n(0)),m=function(e){return Object(u.jsx)("nav",{className:"navbar navbar-light bg-dark justify-content-center",children:Object(u.jsx)("form",{className:"form-inline m-2",onSubmit:e.handleFormSubmit,children:Object(u.jsx)("input",{className:"form-control",value:e.value,name:"search",onChange:e.handleInputChange,type:"search",placeholder:"Search"})})})},b=(n(17),function(e){return Object(u.jsxs)("table",{className:"table table-striped table-dark table-sortable text-center",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"Image"}),Object(u.jsx)("th",{scope:"col","data-field":"name","data-sortable":"true",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("name","last","first")},children:"Name"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("phone")},children:"Phone"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("email")},children:"Email"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("dob","date")},children:"DOB"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("dob","date","age")},children:"Age"})}),Object(u.jsx)("th",{scope:"col",children:Object(u.jsx)("span",{onClick:function(){return e.sortBy("nat")},children:"Nationality"})})]})}),Object(u.jsx)("tbody",{children:e.state.filteredEmployees.map((function(t){var n=t.name,c=n.first,a=n.last,r="".concat(c," ").concat(a),s=e.formatDate(t.dob.date);return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{src:t.picture.thumbnail,alt:r})}),Object(u.jsx)("td",{className:"align-middle",children:r}),Object(u.jsx)("td",{className:"align-middle",children:Object(u.jsx)("a",{href:"tel:+1".concat(t.phone),children:t.phone})}),Object(u.jsx)("td",{className:"align-middle email",children:Object(u.jsx)("a",{href:"mailto:".concat(t.email),children:t.email})}),Object(u.jsx)("td",{className:"align-middle",children:s}),Object(u.jsx)("td",{className:"align-middle age",children:Object(u.jsx)("a",{href:"mailto:".concat(t.dob.age),children:t.dob.age})}),Object(u.jsx)("td",{className:"align-middle nationality",children:Object(u.jsx)("a",{href:"mailto:".concat(t.nat),children:t.nat})})]},t.login.uuid)}))})]})}),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={search:"",employees:[],filteredEmployees:[],sortDirections:e.initialSortDirections},e.componentDidMount=function(){fetch("https://randomuser.me/api/?results=100&nat=us,dk,fr,gb,es,ch,ie,nl,br,au,tr,br").then((function(e){return e.json()})).then((function(t){e.setState({employees:t.results}),e.setState({filteredEmployees:t.results})}))},e.handleInputChange=function(t){var n=t.target.value;e.setState({search:n}),e.filterEmployees(n.toLowerCase().trim())},e.handleFormSubmit=function(e){e.preventDefault()},e.sortBy=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=e.state.filteredEmployees;e.state.sortDirections[t]?e.setState({filteredEmployees:a.reverse(),sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"===e.state.sortDirections[t]?"desc":"asc"))}):(a=e.state.filteredEmployees.sort((function(e,a){return e=e[t],a=a[t],n?c&&e[n]===a[n]?e[c].localeCompare(a[c]):e[n].localeCompare(a[n]):e.localeCompare(a)})),e.setState({filteredEmployees:a,sortDirections:Object(l.a)(Object(l.a)({},e.initialSortDirections),{},Object(i.a)({},t,"asc"))}))},e.filterEmployees=function(t){t?e.setState({filteredEmployees:e.state.employees.filter((function(n){return n.name.first.toLowerCase().concat(" ",n.name.last.toLowerCase()).includes(t)||n.phone.includes(t)||n.phone.replace(/[^\w\s]/gi,"").includes(t)||n.email.includes(t)||n.nat.includes(t)||e.formatDate(n.dob.date).includes(t)}))}):e.setState({filteredEmployees:e.state.employees})},e.formatDate=function(e){e=new Date(e);var t=[];return t.push(("0"+e.getDate()).slice(-2)),t.push(("0"+(e.getMonth()+1)).slice(-2)),t.push(e.getFullYear()),t.join("-")},e}return Object(d.a)(n,[{key:"initialSortDirections",get:function(){return{name:"",phone:"",email:"",dob:"",age:"",nationality:""}}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(m,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),Object(u.jsx)("div",{className:"container mt-4",children:Object(u.jsx)(b,{state:this.state,sortBy:this.sortBy,filterEmployees:this.filterEmployees,formatDate:this.formatDate})})]})}}]),n}(c.Component),f=(n(18),function(){return Object(u.jsxs)("header",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center",children:"Type in the search bar to begin searching, click on headings to filter."})]})});var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{}),Object(u.jsx)(p,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.d3af2088.chunk.js.map