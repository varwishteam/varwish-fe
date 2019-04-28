(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(223)},110:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},220:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(50),i=a.n(l),s=(a(110),a(12)),o=a(13),c=a(16),m=a(14),u=a(15),d=a(6),E=a(9),p=a(99),h=a(5),b=a(73),f=a(100),g=a.n(f),S=a(101),O=a(8),v={SIGN_UP:{SUCCESS:"USER_SIGN_UP_SUCCESS",ERROR:"USER_SIGN_UP_ERROR",RESET_ERRORS:"USER_SIGN_UP_RESET_ERRORS"},UPDATE:{SUCCESS:"USER_UPDATE_SUCCESS",ERROR:"USER_UPDATE_ERROR"},DELETE:{SUCCESS:"USER_DELETE_SUCCESS",ERROR:"USER_DELETE_ERROR"},LOGIN:{SUCCESS:"USER_LOGIN_SUCCESS",ERROR:"USER_LOGIN_ERROR",RESET_ERRORS:"USER_LOGIN_RESET_ERRORS"},LOGOUT:{SUCCESS:"USER_LOGOUT_SUCCESS",ERROR:"USER_LOGOUT_ERROR"}},R={apiUrl:"https://varwish-be.herokuapp.com/",originUrl:"https://varwishteam.github.io/varwish-fe/"},N=void 0,y=function(e,t,a){return fetch(R.apiUrl+t+"/",{method:e,headers:{"Content-Type":"application/json",Authorization:N&&"Token  ".concat(N),Origin:R.originUrl},body:JSON.stringify(a)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},w=function(e,t){return y("get",e,t)},C=function(e,t){return y("post",e,t)},U=function(e,t){return y("put",e,t)},L=function(e,t){return y("delete",e,t)},T=function(e){console.log("Setting currentAuthToken to ".concat(e)),N=e},I={LOGIN:"rest-auth/login",LOGOUT:"rest-auth/logout",SIGN_UP:"sign-up",WISHLISTS:"wishlists"},_={CREATE:{SUCCESS:"WISHLIST_CREATE_SUCCESS",ERROR:"WISHLIST_CREATE_ERROR"},GET:{SUCCESS:"WISHLIST_GET_SUCCESS",ERROR:"WISHLIST_GET_ERROR"},GET_ALL:{SUCCESS:"WISHLIST_GET_ALL_SUCCESS",ERROR:"WISHLIST_GET_ALL_ERROR"},UPDATE:{SUCCESS:"WISHLIST_UPDATE_SUCCESS",ERROR:"WISHLIST_UPDATE_ERROR"},DELETE:{SUCCESS:"WISHLIST_DELETE_SUCCESS",ERROR:"WISHLIST_DELETE_ERROR"}},j={OPEN:"MODAL_OPEN",CLOSE:"MODAL_CLOSE"},k={CREATE:"WISHLIST_CREATE_MODAL",UPDATE:"WISHLIST_UPDATE_MODAL"},D=function(e){return{type:j.OPEN,payload:e}},A=function(){return{type:j.CLOSE}};var W=a(30);var G=a(226),x=Object(h.c)({wishlistsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.CREATE.SUCCESS:return Object(O.a)({},e,{wishlists:[].concat(Object(W.a)(e.wishlists),[t.payload[0]])});case _.GET_ALL.SUCCESS:return Object(O.a)({},e,{wishlists:t.payload});case _.GET.SUCCESS:return Object(O.a)({},e,{wishlists:[].concat(Object(W.a)(e.wishlists),[t.payload])});case _.UPDATE.SUCCESS:return Object(O.a)({},e,{wishlists:[e.wishlists.filter(function(e){return e.id!==t.payload.id}),t.payload]});case _.DELETE.SUCCESS:return Object(O.a)({},e,{wishlists:[e.wishlists.filter(function(e){return e.id!==t.payload.id})]});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.SIGN_UP.SUCCESS:return Object(O.a)({},e,{isLoggedIn:!0,user:t.payload,signUpError:null});case v.SIGN_UP.ERROR:return Object(O.a)({},e,{isLoggedIn:!1,user:null,signUpError:t.payload});case v.SIGN_UP.RESET_ERRORS:return Object(O.a)({},e,{signUpError:null});case v.UPDATE.SUCCESS:return Object(O.a)({},e,{user:t.payload});case v.DELETE.SUCCESS:return Object(O.a)({},e,{user:{}});case v.LOGIN.SUCCESS:return Object(O.a)({},e,{isLoggedIn:!0,user:t.payload});case v.LOGIN.ERROR:case v.LOGOUT:return Object(O.a)({},e,{isLoggedIn:!1,user:{}});default:return e}},modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.OPEN:return Object(O.a)({},e,{openedModal:t.payload});case j.CLOSE:return Object(O.a)({},e,{openedModal:null});default:return e}},form:G.a}),P={key:"root",storage:g.a,blacklist:["modalReducer","form"]},M=Object(b.a)(P,x),H=Object(h.e)(M,{userReducer:{isLoggedIn:!1,user:{}},wishlistsReducer:{wishlists:[]},modalReducer:{openedModal:null}},Object(h.d)(Object(h.a)(S.a,function(e){return function(e){return function(t){return t.type===v.LOGIN.SUCCESS&&T(t.payload.key),"persist/REHYDRATE"===t.type&&t.payload&&T(t.payload.userReducer.user.key),t.type===v.LOGOUT&&T(null),e(t)}}}),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),F=Object(b.b)(H);function V(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar navbar-light bg-faded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"drawer","data-target":"#main-drawer","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle drawer"),r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},"VarWish"))))}var X=a(29),B=Object(X.f)(function(e){var t=e.history,a=e.isLoggedIn,n=e.dispatchLogOut;return a?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item",onClick:function(){n().then(function(){return t.push("/")})}},r.a.createElement("i",{className:"material-icons"},"close"),"Log Out"):r.a.createElement(E.b,{to:"/login",color:"inherit"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Log In"))}),J=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},function(e){return{dispatchLogOut:function(){return e(function(e){return C(I.LOGOUT).then(function(t){e({type:v.LOGOUT})})})}}})(B),q=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},null)(function(e){return!e.isLoggedIn&&r.a.createElement(E.b,{to:"/sign-up",color:"inherit"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Sign Up"))}),z=(a(181),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))}),Y=(a(182),document.getElementById("modal-root")),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).el=document.createElement("div"),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Y.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){Y.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.modalType,n=e.children,l=e.openedModal,s=e.dispatchCloseModal;return n?l===a?i.a.createPortal(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"modal",className:"modal d-block",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-backdrop",onClick:s}),r.a.createElement("div",{className:"modal-dialog  modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},t),r.a.createElement("button",{type:"button",className:"close",onClick:s,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},n))))),this.el):null:(console.error("Error in Modal component: You need to pass some children to be rendered in the Modal"),null)}}]),t}(n.Component),K=Object(d.b)(function(e){return{openedModal:e.modalReducer.openedModal}},function(e){return{dispatchCloseModal:function(){return e(A())}}})($),Q=a(104),Z=a(224),ee=a(225),te=function(e){var t=e.input,a=e.label,n=e.type,l=e.meta,i=l.touched,s=l.error,o=l.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t.name},a),r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:"form-control ".concat(s&&"is-invalid")},t,{type:n})),i&&(s&&r.a.createElement("span",{className:"text-danger"},s)||o&&r.a.createElement("span",{className:"text-warning"},o))))};function ae(e){var t=e.name,a=e.type,n=e.label;return r.a.createElement(ee.a,{name:t,component:te,type:a,label:n})}var ne=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.wishlist;e&&this.props.initialize({wishlistName:e.name,wishlistDescription:e.description})}},{key:"render",value:function(){var e=this.props,t=e.wishlist,a=e.handleSubmit,n=e.submitting,l=e.pristine,i=e.invalid,s=e.dispatchCreateWishlist,o=e.dispatchUpdateWishlist,c=e.closeModal,m=e.modalType;return r.a.createElement("form",{id:"wishlistForm",onSubmit:a(function(e){return m===k.CREATE?s(e).then(c).catch(function(e){throw new Q.a(e)}):m===k.UPDATE?(e.wishlistId=t.id,o(e).then(c).catch(function(e){throw new Q.a(e)})):void 0}),className:"m-0"},r.a.createElement(ae,{name:"wishlistName",type:"text",label:"Wishlist name"}),r.a.createElement(ae,{name:"wishlistDescription",type:"text",label:"Wishlist description"}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:c},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:l||i||n},"Save")))}}]),t}(r.a.Component),re=Object(Z.a)({form:"wishlistForm",validate:function(e){var t={};return e.wishlistName||(t.wishlistName="Required"),e.wishlistDescription||(t.wishlistDescription="Required"),t}})(Object(d.b)(null,function(e){return{dispatchCreateWishlist:function(t){return e(function(e){return function(t,a){return C(I.WISHLISTS,{name:e.wishlistName,description:e.wishlistDescription,user:a().userReducer.user.id,items:e.items||[]}).then(function(e){return t({type:_.CREATE.SUCCESS,payload:e}),e}).catch(function(e){throw t({type:_.CREATE.ERROR,payload:e}),e})}}(t))},dispatchUpdateWishlist:function(t){return e(function(e){return function(t,a){return U(I.WISHLISTS+"/"+e.wishlistId,{name:e.wishlistName,description:e.wishlistDescription,user:a().userReducer.user.id,items:e.items||[]}).then(function(e){return t({type:_.UPDATE.SUCCESS,payload:e}),e}).catch(function(e){throw t({type:_.UPDATE.ERROR,payload:e}),e})}}(t))},closeModal:function(){return e(A())}}})(ne)),le=function(e){var t=e.wishlist;return r.a.createElement(re,{modalType:k.CREATE,wishlist:t})},ie=function(e){var t=e.wishlist;return r.a.createElement(re,{modalType:k.UPDATE,wishlist:t})},se=(a(220),function(e){var t,a=e.wishlist;return r.a.createElement(E.b,{to:"/wishlists/".concat(a.id),className:"w-50 homepage-wishlist"},r.a.createElement("button",{type:"button",className:"btn btn-primary homepage-wishlist--container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title homepage-wishlist--title"},a.name),r.a.createElement("div",{className:"card-text homepage-wishlist--text"},a.items&&a.items.length>0&&r.a.createElement("ul",null,(t=a.items,t.length<=5?t:t.slice(0,5)).map(function(e){return r.a.createElement("li",{key:e.id},e.item_name)})))))))});var oe=Object(X.f)(function(e){var t=e.location;return r.a.createElement("div",{className:"d-flex flex-column justify-content-between flex-grow-1"},r.a.createElement("ul",{className:"nav flex-column border-bottom"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link p-0",to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item ".concat(("/"===t.pathname||t.pathname.includes("/wishlists"))&&"active"),"data-toggle":"drawer","data-target":"#main-drawer"},"Wishlists")))),r.a.createElement("ul",{className:"nav flex-column border-top"},r.a.createElement("li",null,r.a.createElement(J,null))))});function ce(e){var t=e.children;return r.a.createElement("div",{className:"position-relative vw-100 vh-100"},r.a.createElement("div",{className:"bmd-layout-container bmd-drawer-f-l bmd-drawer-in-lg-up bmd-drawer-overlay-md-down"},r.a.createElement("header",{className:"bmd-layout-header d-lg-none"},r.a.createElement(V,null)),r.a.createElement("div",{id:"main-drawer",className:"bmd-layout-drawer bg-faded","aria-expanded":"false","aria-hidden":"true"},r.a.createElement("header",{className:"d-flex flex-column align-items-center"},r.a.createElement("i",{className:"material-icons md-48"},"list_alt"),r.a.createElement("span",{className:"h3 navbar-brand font-weight-bold"},"VarWish")),r.a.createElement(oe,null)),r.a.createElement("main",{className:"bmd-layout-content"},r.a.createElement("div",{className:"container-fluid p-4"},t))))}var me=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(E.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"VarWish")),r.a.createElement("div",{className:"navbar-authbuttons"},r.a.createElement(J,{type:"button"}),r.a.createElement(q,{type:"button"}))),t)},ue=a(103),de=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.isLoggedIn&&this.props.getAllWishlists()}},{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,a=e.wishlists,n=e.openWishlistCreateModal;return t?r.a.createElement("main",{className:"d-flex flex-row flex-wrap"},r.a.createElement("button",{type:"button",className:"btn btn-dark w-50",onClick:n},r.a.createElement("i",{className:"material-icons"},"add"),"New Wishlist"),a&&a.length>0&&function(e){return e.map(function(e){return r.a.createElement(se,{key:e.id||"id-not-yet-available",wishlist:e})})}(a),r.a.createElement(K,{title:"New wishlist",modalType:k.CREATE},r.a.createElement(le,null))):r.a.createElement(r.a.Fragment,null,"Not logged in")}}]),t}(n.Component),Ee=Object(d.b)(function(e){return{user:e.userReducer.user,isLoggedIn:e.userReducer.isLoggedIn,wishlists:e.wishlistsReducer.wishlists}},function(e){return{getAllWishlists:function(){return e(function(e,t){return w(I.WISHLISTS).then(function(t){return e({type:_.GET_ALL.SUCCESS,payload:t}),t}).catch(function(t){throw e({type:_.GET_ALL.ERROR,payload:t}),t})})},openWishlistCreateModal:function(){return e(D(k.CREATE))}}})(de),pe=a(33),he=(a(221),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",rememberLogin:!0,redirectToReferrer:!1,loginErrors:[]},a.login=function(e){e.preventDefault(),a.props.dispatchLogIn(Object(O.a)({},a.state)).catch(function(e){a.setState({loginErrors:Object(W.a)(Object.values(e))})})},a.handleChange=function(e){return function(t){a.setState(Object(pe.a)({},e,"rememberLogin"===e?t.target.checked:t.target.value))}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,t=this.state,a=t.username,n=t.password,l=t.rememberLogin,i=t.redirectToReferrer,s=t.loginErrors;return i?r.a.createElement(X.a,{to:e}):r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"form-login"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please log in"),s.length>0&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},s.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"Username or Email",value:a,onChange:this.handleChange("username")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:n,onChange:this.handleChange("password")})),r.a.createElement("div",{className:"checkbox-inline"},r.a.createElement("label",{htmlFor:"rememberLogin"},r.a.createElement("input",{type:"checkbox",id:"rememberLogin",checked:l,onChange:this.handleChange("rememberLogin")}),"Remember me")),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary btn-block btn-outline",onClick:this.login},"Log in")))}}]),t}(n.Component)),be=Object(d.b)(null,function(e){return{dispatchLogIn:function(t,a){return e(function(e){var t=e.username,a=e.password,n=e.rememberLogin;return function(e){return C(I.LOGIN,{username:t,password:a}).then(function(t){t.user&&t.key?e({type:v.LOGIN.SUCCESS,payload:{id:t.user,key:t.key,rememberLogin:n}}):e({type:v.LOGIN.ERROR,payload:t})})}}(t))}}})(he);var fe=Object(X.f)(function(e){var t=e.location;return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h1",null,"404 - Not found"),r.a.createElement("p",null,"There's nothing on this path \"",t.pathname,'"'),r.a.createElement(E.b,{to:"/"},r.a.createElement("button",{className:"btn btn-primary"},"Go to homepage")))}),ge=(a(222),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",username:"",email:"",passwordSet:"",passwordConfirm:"",errors:{},signUpErrors:[]},a.handleSignUp=function(e){e.preventDefault(),a.setState({isLoading:!0}),a.props.dispatchSignUp(Object(O.a)({},a.state)).then(function(){a.setState({isLoading:!1})}).catch(function(e){a.setState({signUpErrors:Object(W.a)(Object.values(e)),isLoading:!1})})},a.handleChange=function(e){return function(t){a.setState(Object(pe.a)({},e,t.target.value))}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.props.resetSignUpErrors()}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.passwordSet,n=e.passwordConfirm,l=e.email,i=e.firstName,s=e.lastName,o=e.signUpErrors,c=e.isLoading;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"form-signup"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign Up"),!!o.length&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Invalid values"),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"Username",value:t,onChange:this.handleChange("username")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",id:"email",className:"form-control",placeholder:"Email",value:l,onChange:this.handleChange("email")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"first-name",placeholder:"First name",value:i,onChange:this.handleChange("firstName")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"last-name",placeholder:"Last name",value:s,onChange:this.handleChange("lastName")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Type in yout password",value:a,onChange:this.handleChange("passwordSet")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password-confirm",placeholder:"Confirm a password",value:n,onChange:this.handleChange("passwordConfirm")})),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary btn-block btn-outline mt-3",onClick:this.handleSignUp},c?r.a.createElement(z,null):"Sign-Up")))}}]),t}(n.Component)),Se=Object(d.b)(null,function(e){return{dispatchSignUp:function(t){return e(function(e){var t=e.firstName,a=e.lastName,n=e.username,r=e.email,l=e.passwordSet,i=e.passwordConfirm;return function(e){return C(I.SIGN_UP,{username:n,email:r,password1:l,password2:i,first_name:t,last_name:a}).then(function(t){t.user&&t.key?e({type:v.SIGN_UP.SUCCESS,payload:{id:t.user,key:t.key}}):e({type:v.SIGN_UP.ERROR,payload:{error:t}})})}}(t))},resetSignUpErrors:function(){return e({type:v.SIGN_UP.RESET_ERRORS})}}})(ge),Oe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).renderItems=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"h6 text-muted"},"Items:"),r.a.createElement("ul",{className:"list-unstyled"},e.map(function(e,t){return r.a.createElement("li",{key:e.id,className:"d-flex flex-row ".concat(t%2===0&&"bg-light")},r.a.createElement("span",null,e.item_name),r.a.createElement("div",{className:"flex-grow-1"}),r.a.createElement("button",{type:"button",className:"btn text-info bmd-btn-icon"},r.a.createElement("i",{className:"material-icons"},"info")),r.a.createElement("button",{type:"button",className:"btn bmd-btn-icon"},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("button",{type:"button",className:"btn text-danger bmd-btn-icon"},r.a.createElement("i",{className:"material-icons"},"delete")))})))},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.match,a=e.openWishlistUpdateModal,n=e.wishlist,l=e.dispatchDeleteWishlist;return r.a.createElement(r.a.Fragment,null,void 0===n?r.a.createElement("p",null,"Wishlist with id: ",t.params.wishlistId," was not found!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"nav"},r.a.createElement("h1",{className:"nav-item"},n.name),r.a.createElement("div",{className:"flex-grow-1"}),r.a.createElement("div",{className:"btn-group d-block",role:"group","aria-label":"Wihslist actions"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:a},r.a.createElement("i",{className:"material-icons"},"edit"),"Edit"),r.a.createElement("button",{type:"button",className:"btn btn-danger","data-toggle":"snackbar","data-content":"Wishlist ".concat(n.name," deleted"),"data-html-allowed":"true","data-timeout":"5000",onClick:function(){return l(n)}},r.a.createElement("i",{className:"material-icons"},"delete"),"Delete"))),r.a.createElement("span",{className:"h6 text-muted"},"Description:"),r.a.createElement("p",null,n.description),n.items&&this.renderItems(n.items),r.a.createElement(K,{title:"Editing ".concat(n.name),modalType:k.UPDATE},r.a.createElement(ie,{wishlist:n}))))}}]),t}(n.Component),ve=Object(X.f)(Object(d.b)(function(e,t){return{wishlist:e.wishlistsReducer.wishlists.filter(function(e){return e.id===t.match.params.wishlistId})[0],openedModal:e.modalReducer.openedModal}},function(e,t){return{dispatchDeleteWishlist:function(a){e(function(e){return function(t){return L(I.WISHLISTS+"/"+e.id).then(function(e){return t({type:_.DELETE.SUCCESS,payload:e}),e}).catch(function(e){t({type:_.DELETE.ERROR,payload:e})})}}(a)).then(function(){t.history.push("/")})},openWishlistUpdateModal:function(){return e(D(k.UPDATE))}}})(Oe));var Re=function(){return r.a.createElement(X.a,{to:{pathname:"/"}})};function Ne(e){var t=e.component,a=e.isLoggedIn,n=Object(ue.a)(e,["component","isLoggedIn"]);return r.a.createElement(X.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(X.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var ye=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},null)(function(e){var t=e.isLoggedIn;return t?r.a.createElement(ce,null,r.a.createElement(X.d,null,r.a.createElement(X.b,{exact:!0,path:"/",component:Ee}),r.a.createElement(X.b,{path:"/login",component:Re}),r.a.createElement(X.b,{path:"/sign-up",component:Re}),r.a.createElement(X.b,{exact:!0,path:"/wishlists",component:Re}),r.a.createElement(Ne,{path:"/wishlists/:wishlistId",component:ve,isLoggedIn:t}),r.a.createElement(X.b,{component:fe}))):r.a.createElement(me,null,r.a.createElement(X.d,null,r.a.createElement(X.b,{exact:!0,path:"/",component:Ee}),r.a.createElement(X.b,{path:"/login",component:be}),r.a.createElement(X.b,{path:"/sign-up",component:Se}),r.a.createElement(X.b,{component:fe})))}),we=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:H},r.a.createElement(p.a,{loading:r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),persistor:F},r.a.createElement(E.a,{basename:"/varwish-fe"},r.a.createElement(ye,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[105,1,2]]]);
//# sourceMappingURL=main.8b53ccd6.chunk.js.map