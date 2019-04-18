(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){e.exports=a(54)},41:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),s=a.n(l),c=(a(41),a(12)),o=a(13),i=a(15),m=a(14),u=a(16),d=a(10),E=a(4),b=a(30),h=a(31),g=a(11),p={CREATE:"USER_CREATE",UPDATE:"USER_UPDATE",DELETE:"USER_DELETE",LOGIN:{SUCCESS:"USER_LOGIN_SUCCESS",ERROR:"USER_LOGIN_ERROR"},LOGIN_:"USER_LOGIN_ERROR",LOGOUT:"USER_LOGOUT"},f=a(5),v=a(25),O=a(32),w=a.n(O),N=a(33),y=a(7);var L=a(35),j={CREATE:"WISHLIST_CREATE",UPDATE:"WISHLIST_UPDATE",DELETE:"WISHLIST_UPDATE"};var R=Object(f.c)({wishlistsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.CREATE:return Object(y.a)({},e,{wishlists:[].concat(Object(L.a)(e.wishlists),[t.payload])});case j.UPDATE:return Object(y.a)({},e,{wishlists:[e.wishlists.filter(function(e){return e.id!==t.payload.id}),t.payload]});case j.DELETE:return Object(y.a)({},e,{wishlists:[e.wishlists.filter(function(e){return e.id!==t.payload.id})]});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.CREATE:case p.UPDATE:return Object(y.a)({},e,{user:t.payload});case p.DELETE:return Object(y.a)({},e,{user:{}});case p.LOGIN.SUCCESS:return Object(y.a)({},e,{isLoggedIn:!0,user:t.payload});case p.LOGIN.ERROR:return Object(y.a)({},e,{isLoggedIn:!1});case p.LOGOUT:return Object(y.a)({},e,{isLoggedIn:!1,user:{}});default:return e}}}),T={key:"root",storage:w.a},I=Object(v.a)(T,R),S=Object(f.e)(I,{userReducer:{isLoggedIn:!1}},Object(f.d)(Object(f.a)(N.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),U=Object(v.b)(S),_={apiUrl:"https://varwish-be.herokuapp.com/",originUrl:"https://varwishteam.github.io/varwish-fe/"};var C=Object(g.f)(function(e){var t=e.history;return e.isLoggedIn?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item",onClick:function(){setTimeout(function(){return t.push("/")},100),S.dispatch({type:p.LOGOUT})}},r.a.createElement("i",{className:"material-icons"},"close"),"Log Out"):r.a.createElement(E.b,{to:"/login",color:"inherit"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Log In"))}),k=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},null)(C);var x=Object(d.b)(function(e){return{user:e.userReducer.user,isLoggedIn:e.userReducer.isLoggedIn}},null)(function(e){return e.user,e.isLoggedIn?r.a.createElement("main",{className:"d-flex flex-row flex-wrap"},r.a.createElement(E.b,{to:"/wishlists/1",className:"w-50"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Wishlist 1")),r.a.createElement(E.b,{to:"/wishlists/2",className:"w-50"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Wishlist 2")),r.a.createElement(E.b,{to:"/wishlists/3",className:"w-50"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Wishlist 3"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"VarWish"),r.a.createElement(k,{type:"button"})),"Not logged in")}),D=a(21),A=(a(53),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",rememberMe:"yes",redirectToReferrer:!1},a.login=function(e){var t,n;e.preventDefault(),(t=a.state.username,n=a.state.password,new Promise(function(e,a){fetch(_.apiUrl+"rest-auth/login/",{method:"POST",headers:{"Content-Type":"application/json",Origin:_.originUrl},body:JSON.stringify({username:t,password:n})}).then(function(t){t.ok?t.json().then(function(t){S.dispatch({type:p.LOGIN.SUCCESS,payload:{firstName:"John",lastName:"Doe",key:t.key}}),e()}):t.json().then(function(e){a(e.non_field_errors[0])}).catch(function(e){console.error(e),a("Error logging in.")})}).catch(function(e){console.error("Error:",e),a("Login error")})})).then(function(){a.setState({redirectToReferrer:!0})}).catch(function(e){a.setState({errorMessage:e})})},a.handleChange=function(e){return function(t){a.setState(Object(D.a)({},e,t.target.value))}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,t=this.state,a=t.username,n=t.password,l=t.rememberMe,s=t.errorMessage;return t.redirectToReferrer?r.a.createElement(g.a,{to:e}):r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"form-login"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please log in"),s&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},s),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"email",placeholder:"Username or Email",value:a,onChange:this.handleChange("username")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:n,onChange:this.handleChange("password")})),r.a.createElement("div",{className:"checkbox-inline"},r.a.createElement("label",{htmlFor:"rememberMe"},r.a.createElement("input",{type:"checkbox",id:"rememberMe",value:l,onChange:this.handleChange("rememberMe")}),"Remember me")),r.a.createElement("button",{className:"btn btn-lg btn-primary btn-block btn-outline",onClick:this.login},"Log in")))}}]),t}(n.Component)),W=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"WishlistDetail")}}]),t}(n.Component);function G(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar navbar-light bg-faded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"drawer","data-target":"#main-drawer","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle drawer"),r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},"VarWish"))))}function P(){return r.a.createElement("div",{className:"d-flex flex-column justify-content-between flex-grow-1"},r.a.createElement("ul",{className:"nav flex-column border-bottom"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link p-0",to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item","data-toggle":"drawer","data-target":"#main-drawer"},"Wishlists")))),r.a.createElement("ul",{className:"nav flex-column border-top"},r.a.createElement("li",null,r.a.createElement(k,null))))}function M(e){var t=e.children;return r.a.createElement("div",{className:"position-relative vw-100 vh-100"},r.a.createElement("div",{className:"bmd-layout-container bmd-drawer-f-l bmd-drawer-in-lg-up bmd-drawer-overlay-md-down"},r.a.createElement("header",{className:"bmd-layout-header d-lg-none"},r.a.createElement(G,null)),r.a.createElement("div",{id:"main-drawer",className:"bmd-layout-drawer bg-faded","aria-expanded":"false","aria-hidden":"true"},r.a.createElement("header",{className:"d-flex flex-column align-items-center"},r.a.createElement("i",{className:"material-icons md-48"},"list_alt"),r.a.createElement("span",{className:"h3 navbar-brand font-weight-bold"},"VarWish")),r.a.createElement(P,null)),r.a.createElement("main",{className:"bmd-layout-content"},r.a.createElement("div",{className:"container-fluid p-4"},t))))}function V(){return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h1",null,"404"),r.a.createElement("p",{className:"h2"},"Not found"))}function F(e){var t=e.component,a=e.isLoggedIn,n=Object(h.a)(e,["component","isLoggedIn"]);return r.a.createElement(g.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(g.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var J=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},null)(function(e){var t=e.isLoggedIn;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.d,null,!t&&r.a.createElement(g.b,{exact:!0,path:"/",component:x}),r.a.createElement(g.b,{path:"/login",component:A}),r.a.createElement(M,null,r.a.createElement(g.d,null,t&&r.a.createElement(g.b,{exact:!0,path:"/",component:x}),r.a.createElement(F,{path:"/wishlists/:wishlistId",component:W,isLoggedIn:t}),r.a.createElement(g.b,{component:V})))))}),X=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:S},r.a.createElement(b.a,{loading:r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),persistor:U},r.a.createElement(E.a,{basename:"/varwish-fe"},r.a.createElement(J,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.bbf72608.chunk.js.map