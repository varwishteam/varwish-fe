(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){"use strict";n.d(t,"ACTIONS",function(){return l}),n.d(t,"createWishlist",function(){return s}),n.d(t,"getWishlist",function(){return u}),n.d(t,"getAllWishlists",function(){return m}),n.d(t,"updateWishlist",function(){return d}),n.d(t,"deleteWishlist",function(){return E}),n.d(t,"createCategory",function(){return p}),n.d(t,"getAllCategories",function(){return b}),n.d(t,"updateCategory",function(){return h}),n.d(t,"deleteCategory",function(){return f}),n.d(t,"createItem",function(){return g}),n.d(t,"updateItem",function(){return O}),n.d(t,"deleteItem",function(){return y});var a=n(20),r=n(29);n.d(t,"ITEM",function(){return r.b});var o=n(32);n.d(t,"USER",function(){return o.a});var c=n(84);n.d(t,"logIn",function(){return c.a}),n.d(t,"logOut",function(){return c.b}),n.d(t,"signUp",function(){return c.c});var i=n(85);n.d(t,"MODAL",function(){return i.a}),n.d(t,"MODAL_TYPE",function(){return i.b}),n.d(t,"closeModal",function(){return i.c}),n.d(t,"openModal",function(){return i.d});n(86);var l={WISHLIST:r.c,CATEGORY:r.a,ITEM:r.b},s=function(e){return Object(a.a)("WISHLIST",e)},u=function(e){return Object(a.c)("WISHLIST",e)},m=function(){return Object(a.b)("WISHLIST")},d=function(e){return Object(a.e)("WISHLIST",e)},E=function(e){return Object(a.d)("WISHLIST",e)},p=function(e){return Object(a.a)("CATEGORY",e)},b=function(){return Object(a.b)("CATEGORY")},h=function(e){return Object(a.e)("CATEGORY",e)},f=function(e){return Object(a.d)("CATEGORY",e)},g=function(e){return Object(a.a)("ITEM",e)},O=function(e){return Object(a.e)("ITEM",e)},y=function(e){return Object(a.d)("ITEM",e)}},114:function(e,t,n){e.exports=n(236)},119:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},20:function(e,t,n){"use strict";var a=n(8),r=n(1),o=n(22),c=n(46);n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"d",function(){return m});var i=function(e,t){return function(n,o){var c="ITEM"===e?a.a.ENDPOINTS.ITEMS(t.wishlist):a.a.ENDPOINTS[e],i=t;return"WISHLIST"===e&&(i.user=o().userReducer.user.id),a.a.post(c,i).then(function(t){return"WISHLIST"===e||"ITEM"===e?t[0]:t}).then(function(t){return n({type:r.ACTIONS[e].CREATE.SUCCESS,payload:t}),t}).catch(function(t){throw n({type:r.ACTIONS[e].CREATE.ERROR,payload:t}),t})}},l=function(e){return function(t,n){return a.a.get(a.a.ENDPOINTS[e]).then(function(n){return"WISHLIST"===e&&(!function(e){var t=[];e.forEach(function(e){t.push.apply(t,Object(o.a)(e.items))}),c.b.dispatch({type:r.ITEM.GET_ALL.SUCCESS,payload:t})}(n),n.forEach(function(e){delete e.items})),t({type:r.ACTIONS[e].GET_ALL.SUCCESS,payload:n}),n}).catch(function(n){throw t({type:r.ACTIONS[e].GET_ALL.ERROR,payload:n}),n})}},s=function(e,t){return function(n,o){return a.a.get(a.a.ENDPOINTS[e]+"/"+t).then(function(t){return n({type:r.ACTIONS[e].GET.SUCCESS,payload:t}),t}).catch(function(t){throw n({type:r.ACTIONS[e].GET.ERROR,payload:t}),t})}},u=function(e,t){return function(n,o){var c="ITEM"===e?a.a.ENDPOINTS.ITEMS(t.wishlist):a.a.ENDPOINTS[e],i=t;return"WISHLIST"===e&&(i.user=o().userReducer.user.id),a.a.put(c+"/"+t.id,i).then(function(t){return n({type:r.ACTIONS[e].UPDATE.SUCCESS,payload:t}),t}).catch(function(t){throw n({type:r.ACTIONS[e].UPDATE.ERROR,payload:t}),t})}},m=function(e,t){return function(n){var o="ITEM"===e?a.a.ENDPOINTS.ITEMS(t.wishlist):a.a.ENDPOINTS[e];return a.a.delete(o+"/"+t.id).then(function(a){return console.log(a),n({type:r.ACTIONS[e].DELETE.SUCCESS,payload:t.id}),a}).catch(function(t){n({type:r.ACTIONS[e].DELETE.ERROR,payload:t})})}}},229:function(e,t,n){},230:function(e,t,n){},231:function(e,t,n){},232:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(56),c=n.n(o),i=(n(119),n(10)),l=n(11),s=n(13),u=n(12),m=n(14),d=n(5),E=n(15),p=n(108),b=n(46);function h(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar navbar-light bg-faded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"drawer","data-target":"#main-drawer","aria-expanded":"false"},r.a.createElement("span",{className:"sr-only"},"Toggle drawer"),r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"nav-item"},"VarWish"))))}var f=n(35),g=n(1),O=Object(f.f)(function(e){var t=e.history,n=e.isLoggedIn,a=e.dispatchLogOut;return n?r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item",onClick:function(){a().then(function(){return t.push("/")})}},r.a.createElement("i",{className:"material-icons"},"close"),"Log Out"):r.a.createElement(E.b,{to:"/login",color:"inherit"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Log In"))}),y=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},function(e){return{dispatchLogOut:function(){return e(Object(g.logOut)())}}})(O),S=Object(d.b)(function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},null)(function(e){return!e.isLoggedIn&&r.a.createElement(E.b,{to:"/sign-up",color:"inherit"},r.a.createElement("button",{type:"button",className:"btn btn-primary"},"Sign Up"))}),C=(n(190),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"}))}),T=(n(191),document.getElementById("modal-root")),v=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).el=document.createElement("div"),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){T.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){T.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.modalType,a=e.children,o=e.openedModal,i=e.dispatchCloseModal;return a?o===n?c.a.createPortal(r.a.createElement("div",{id:"modal",className:"modal d-block",tabIndex:"-1",role:"dialog"},r.a.createElement("div",{className:"modal-backdrop",onClick:i}),r.a.createElement("div",{className:"modal-dialog  modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},t),r.a.createElement("button",{type:"button",className:"close",onClick:i,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},a)))),this.el):null:(console.error("Error in Modal component: You need to pass some children to be rendered in the Modal"),null)}}]),t}(a.Component),N=Object(d.b)(function(e){return{openedModal:e.modalReducer.openedModal}},function(e){return{dispatchCloseModal:function(){return e(Object(g.closeModal)())}}})(v),R=n(113),I=n(237),w=n(238),U=function(e){var t=e.input,n=e.label,a=e.type,o=e.meta,c=o.touched,i=o.error,l=o.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t.name},n),r.a.createElement("div",null,r.a.createElement("input",Object.assign({className:"form-control ".concat(i&&"is-invalid")},t,{type:a})),c&&(i&&r.a.createElement("span",{className:"text-danger"},i)||l&&r.a.createElement("span",{className:"text-warning"},l))))};function j(e){var t=e.name,n=e.type,a=e.label;return r.a.createElement(w.a,{name:t,component:U,type:n,label:a})}var _=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.wishlist;e&&this.props.initialize({name:e.name,description:e.description})}},{key:"render",value:function(){var e=this.props,t=e.wishlist,n=e.handleSubmit,a=e.submitting,o=e.pristine,c=e.invalid,i=e.dispatchCreateWishlist,l=e.dispatchUpdateWishlist,s=e.closeModal,u=e.modalType;return r.a.createElement("form",{id:"wishlistForm",onSubmit:n(function(e){return u===g.MODAL_TYPE.WISHLIST.CREATE?(e.items=[],i(e).then(s).catch(function(e){throw new R.a(e)})):u===g.MODAL_TYPE.WISHLIST.UPDATE?(e.id=t.id,l(e).then(s).catch(function(e){throw new R.a(e)})):void 0}),className:"m-0"},r.a.createElement(j,{name:"name",type:"text",label:"Wishlist name"}),r.a.createElement(j,{name:"description",type:"text",label:"Wishlist description"}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:s},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:o||c||a},"Save")))}}]),t}(a.Component),L=Object(I.a)({form:"wishlistForm",validate:function(e){var t={};return e.name||(t.name="Required"),e.description||(t.description="Required"),t}})(Object(d.b)(null,function(e){return{dispatchCreateWishlist:function(t){return e(Object(g.createWishlist)(t))},dispatchUpdateWishlist:function(t){return e(Object(g.updateWishlist)(t))},closeModal:function(){return e(Object(g.closeModal)())}}})(_)),A=function(){return r.a.createElement(L,{modalType:g.MODAL_TYPE.WISHLIST.CREATE})},M=function(e){var t=e.wishlist;return r.a.createElement(L,{modalType:g.MODAL_TYPE.WISHLIST.UPDATE,wishlist:t})},D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.category;e&&this.props.initialize({name:e.name})}},{key:"render",value:function(){var e=this.props,t=e.category,n=e.handleSubmit,a=e.submitting,o=e.pristine,c=e.invalid,i=e.dispatchCreateCategory,l=e.dispatchUpdateCategory,s=e.closeModal,u=e.modalType;return r.a.createElement("form",{id:"categoryForm",onSubmit:n(function(e){return u===g.MODAL_TYPE.CATEGORY.CREATE?i(e).then(s).catch(function(e){throw new R.a(e)}):u===g.MODAL_TYPE.CATEGORY.UPDATE?(e.id=t.id,l(e).then(s).catch(function(e){throw new R.a(e)})):void 0}),className:"m-0"},r.a.createElement(j,{name:"name",type:"text",label:"Category name"}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:s},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:o||c||a},"Save")))}}]),t}(a.Component),k=Object(I.a)({form:"categoryForm",validate:function(e){var t={};return e.name||(t.name="Required"),e.categoryDescription||(t.categoryDescription="Required"),t}})(Object(d.b)(null,function(e){return{dispatchCreateCategory:function(t){return e(Object(g.createCategory)(t))},dispatchUpdateCategory:function(t){return e(Object(g.updateCategory)(t))},closeModal:function(){return e(Object(g.closeModal)())}}})(D)),P=function(){return r.a.createElement(k,{modalType:g.MODAL_TYPE.CATEGORY.CREATE})},W=function(e){var t=e.category;return r.a.createElement(k,{modalType:g.MODAL_TYPE.CATEGORY.UPDATE,category:t})},G=function(e){var t=e.input,n=e.label,a=e.options,o=e.selectedOption,c=e.meta,i=c.touched,l=c.error,s=c.warning;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t.name},n),r.a.createElement("div",null,r.a.createElement("select",Object.assign({value:o,className:"form-control ".concat(l&&"is-invalid")},t),a.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})),i&&(l&&r.a.createElement("span",{className:"text-danger"},l)||s&&r.a.createElement("span",{className:"text-warning"},s))))};function Y(e){var t=e.name,n=e.label,a=e.options,o=e.selectedOption;return r.a.createElement(w.a,{name:t,component:G,label:n,options:a,selectedOption:o})}var x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this.props.item;e&&this.props.initialize({item_name:e.item_name,note:e.note,link:e.link,price:e.price,amount:e.amount,category:e.category})}},{key:"render",value:function(){var e=this.props,t=e.item,n=e.wishlistId,a=e.handleSubmit,o=e.submitting,c=e.pristine,i=e.invalid,l=e.dispatchCreateItem,s=e.dispatchUpdateItem,u=e.closeModal,m=e.modalType,d=e.categories;return r.a.createElement("form",{id:"itemForm",onSubmit:a(function(e){return e.wishlist=n,m===g.MODAL_TYPE.ITEM.CREATE?l(e).then(u).catch(function(e){throw new R.a(e)}):m===g.MODAL_TYPE.ITEM.UPDATE?(e.id=t.id,s(e).then(u).catch(function(e){throw new R.a(e)})):void 0}),className:"m-0"},r.a.createElement(j,{name:"item_name",type:"text",label:"Item name"}),r.a.createElement(j,{name:"note",type:"text",label:"Note"}),r.a.createElement(j,{name:"link",type:"url",label:"Link"}),r.a.createElement(j,{name:"price",type:"number",label:"Price"}),r.a.createElement(j,{name:"amount",type:"number",label:"Amount"}),r.a.createElement(Y,{name:"category",label:"Category",options:d,selectedOption:t&&t.category}),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:u},"Cancel"),r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:c||i||o},"Save")))}}]),t}(a.Component),H=Object(I.a)({form:"itemForm",validate:function(e){var t={};return e.item_name||(t.item_name="Required"),e.note||(t.note="Required"),e.link||(t.link="Required"),e.amount||(t.amount="Required"),e.price||(t.price="Required"),t}})(Object(d.b)(function(e){return{categories:e.categories}},function(e){return{dispatchCreateItem:function(t){return e(Object(g.createItem)(t))},dispatchUpdateItem:function(t){return e(Object(g.updateItem)(t))},closeModal:function(){return e(Object(g.closeModal)())}}})(x)),F=function(e){var t=e.item,n=e.wishlistId;return r.a.createElement(H,{modalType:g.MODAL_TYPE.ITEM.CREATE,item:t,wishlistId:n})},q=function(e){var t=e.item,n=e.wishlistId;return r.a.createElement(H,{modalType:g.MODAL_TYPE.ITEM.UPDATE,item:t,wishlistId:n})},V=(n(229),function(e){var t,n=e.wishlist,a=e.items;return r.a.createElement(E.b,{to:"/wishlists/".concat(n.id),className:"homepage-wishlist"},r.a.createElement("div",{className:"card homepage-wishlist--container"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title homepage-wishlist--title"},n.name),r.a.createElement("div",{className:"card-text homepage-wishlist--text"},a&&a.length>0&&r.a.createElement("ul",null,(t=a,t.length<=5?t:t.slice(0,5)).map(function(e){return r.a.createElement("li",{key:e.id},e.item_name)}))))))});var z=Object(d.b)(function(e){return{wishlists:e.wishlists}},null)(Object(f.f)(function(e){var t=e.location,n=e.wishlists;return r.a.createElement("div",{className:"d-flex flex-column justify-content-between flex-grow-1"},r.a.createElement("ul",{className:"nav flex-column border-bottom"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(E.b,{className:"nav-link p-0",to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item ".concat("/"===t.pathname&&"active"),"data-toggle":"drawer","data-target":"#main-drawer"},"Wishlists")),r.a.createElement("ul",{className:"nav flex-column ml-4"},n.sort(function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}).map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(E.b,{className:"nav-link p-0",to:"/wishlists/".concat(e.id)},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item ".concat(t.pathname.includes("/wishlists/".concat(e.id))&&"active"),"data-toggle":"drawer","data-target":"#main-drawer"},e.name)))}))),r.a.createElement("li",{className:"nav-item border-top"},r.a.createElement(E.b,{className:"nav-link p-0",to:"/categories"},r.a.createElement("button",{type:"button",className:"btn btn-primary btn-block list-group-item ".concat(t.pathname.includes("/categories")&&"active"),"data-toggle":"drawer","data-target":"#main-drawer"},"Categories")))),r.a.createElement("ul",{className:"nav flex-column border-top"},r.a.createElement("li",null,r.a.createElement(y,null))))}));function X(e){var t=e.children;return r.a.createElement("div",{className:"position-relative vw-100 vh-100"},r.a.createElement("div",{className:"bmd-layout-container bmd-drawer-f-l bmd-drawer-in-lg-up bmd-drawer-overlay-md-down"},r.a.createElement("header",{className:"bmd-layout-header d-lg-none"},r.a.createElement(h,null)),r.a.createElement("div",{id:"main-drawer",className:"bmd-layout-drawer bg-faded","aria-expanded":"false","aria-hidden":"true"},r.a.createElement("header",{className:"d-flex flex-column align-items-center"},r.a.createElement("i",{className:"material-icons md-48"},"list_alt"),r.a.createElement("span",{className:"h3 navbar-brand font-weight-bold"},"VarWish")),r.a.createElement(z,null)),r.a.createElement("main",{className:"bmd-layout-content"},r.a.createElement("div",{className:"container-fluid p-2"},t))))}var $=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement(E.b,{to:"/"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"VarWish")),r.a.createElement("div",{className:"navbar-authbuttons"},r.a.createElement(y,{type:"button"}),r.a.createElement(S,{type:"button"}))),t)},B=n(112),J=(n(230),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.isLoggedIn&&this.props.getAllWishlists(),this.props.isLoggedIn&&this.props.getAllCategories()}},{key:"render",value:function(){var e=this.props,t=e.isLoggedIn,n=e.wishlists,a=e.items,o=e.openWishlistCreateModal;return t?r.a.createElement("div",{className:"home"},r.a.createElement("header",{className:"nav header"},r.a.createElement("h1",{className:"header__title"},"Wishlists"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-icon header__button",onClick:o},r.a.createElement("i",{className:"material-icons"},"add"),"New Wishlist")),r.a.createElement("main",{className:"main-content"},n&&n.length>0&&function(e,t){return e.sort(function(e,t){var n=e.name.toUpperCase(),a=t.name.toUpperCase();return n<a?-1:n>a?1:0}).map(function(e){return r.a.createElement(V,{key:e.id||"id-not-yet-available",wishlist:e,items:t.filter(function(t){return t.wishlist===e.id})})})}(n,a)),r.a.createElement("aside",null,r.a.createElement(N,{title:"New wishlist",modalType:g.MODAL_TYPE.WISHLIST.CREATE},r.a.createElement(A,null)))):r.a.createElement(r.a.Fragment,null,"Not logged in")}}]),t}(a.Component)),K=Object(d.b)(function(e){return{user:e.userReducer.user,isLoggedIn:e.userReducer.isLoggedIn,wishlists:e.wishlists,items:e.items}},function(e){return{getAllWishlists:function(){return e(Object(g.getAllWishlists)())},getAllCategories:function(){return e(Object(g.getAllCategories)())},openWishlistCreateModal:function(){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.WISHLIST.CREATE}))}}})(J),Q=n(22),Z=(n(231),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={redirectToReferrer:!1,loginErrors:[]},n.login=function(e){return n.props.dispatchLogIn(e).catch(function(e){throw window.$(".login-form").on("webkitAnimationEnd",function(){window.$(".login-form").removeClass("shake")}),window.$(".login-form").addClass("shake"),n.setState({loginErrors:Object(Q.a)(Object.values(e))}),new R.a(e)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from,t=this.state,n=t.redirectToReferrer,a=t.loginErrors,o=this.props,c=o.handleSubmit,i=o.submitting,l=o.pristine,s=o.invalid;return n?r.a.createElement(f.a,{to:e}):r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{id:"loginForm",onSubmit:c(this.login),className:"login-form"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please log in"),a.length>0&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},a.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement(j,{name:"username",type:"text",label:"Username"}),r.a.createElement(j,{name:"password",type:"password",label:"Password"}),r.a.createElement(j,{name:"rememberLogin",type:"checkbox",label:"Remember me"}),r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary btn-block btn-outline mt-3",disabled:l||s||i},i?r.a.createElement(C,null):"Log In")))}}]),t}(a.Component)),ee=Object(I.a)({form:"loginForm",validate:function(e){var t={};return e.username||(t.username="Required"),e.password||(t.password="Required"),t}})(Object(d.b)(null,function(e){return{dispatchLogIn:function(t,n){return e(Object(g.logIn)(t,n))}}})(Z));var te=Object(f.f)(function(e){var t=e.location;return r.a.createElement("div",{className:"d-flex flex-column align-items-center"},r.a.createElement("h1",null,"404 - Not found"),r.a.createElement("p",null,"There's nothing on this path \"",t.pathname,'"'),r.a.createElement(E.b,{to:"/"},r.a.createElement("button",{className:"btn btn-primary"},"Go to homepage")))}),ne=n(58),ae=n(19),re=(n(232),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",username:"",email:"",passwordSet:"",passwordConfirm:"",errors:{},signUpErrors:[]},n.handleSignUp=function(e){e.preventDefault(),n.setState({isLoading:!0}),n.props.dispatchSignUp(Object(ae.a)({},n.state)).then(function(){n.setState({isLoading:!1})}).catch(function(e){n.setState({signUpErrors:Object(Q.a)(Object.values(e)),isLoading:!1})})},n.handleChange=function(e){return function(t){n.setState(Object(ne.a)({},e,t.target.value))}},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.resetSignUpErrors()}},{key:"render",value:function(){var e=this.state,t=e.username,n=e.passwordSet,a=e.passwordConfirm,o=e.email,c=e.firstName,i=e.lastName,l=e.signUpErrors,s=e.isLoading;return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"form-signup"},r.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Sign Up"),!!l.length&&r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Invalid values"),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"username",placeholder:"Username",value:t,onChange:this.handleChange("username")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",id:"email",className:"form-control",placeholder:"Email",value:o,onChange:this.handleChange("email")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"first-name",placeholder:"First name",value:c,onChange:this.handleChange("firstName")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"last-name",placeholder:"Last name",value:i,onChange:this.handleChange("lastName")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Type in yout password",value:n,onChange:this.handleChange("passwordSet")})),r.a.createElement("div",{className:"bmd-form-group"},r.a.createElement("input",{type:"password",className:"form-control",id:"password-confirm",placeholder:"Confirm a password",value:a,onChange:this.handleChange("passwordConfirm")})),r.a.createElement("button",{type:"button",className:"btn btn-lg btn-primary btn-block btn-outline mt-3",onClick:this.handleSignUp},s?r.a.createElement(C,null):"Sign-Up")))}}]),t}(a.Component)),oe=Object(d.b)(null,function(e){return{dispatchSignUp:function(t){return e(Object(g.signUp)(t))},resetSignUpErrors:function(){return e({type:g.USER.SIGN_UP.RESET_ERRORS})}}})(re),ce=(n(233),n(234),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.onUpdate,a=e.onDelete;return r.a.createElement("div",{className:"item-card card w-100 m-2"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-auto"},r.a.createElement("img",{src:"//placehold.it/100",className:"img-fluid",alt:""})),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card-block"},r.a.createElement("h4",{className:"card-title"},t.item_name),r.a.createElement("p",{className:"card-text"},t.note))),r.a.createElement("div",{className:"card-block"},r.a.createElement("div",{className:"col d-flex flex-column"},r.a.createElement("button",{type:"button",className:"btn text-secondary bmd-btn-icon",onClick:function(){return n(t)}},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("button",{type:"button",className:"btn text-secondary bmd-btn-icon",onClick:function(){return a(t)}},r.a.createElement("i",{className:"material-icons"},"delete"))))))}}]),t}(a.Component)),ie=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-unstyled items-list"},e.map(function(e,t){return r.a.createElement("li",{key:e.id},r.a.createElement(ce,{item:e,onUpdate:n.props.openUpdateItemModal,onDelete:n.handleDeleteItem}))})))},n.renderHeader=function(){var e=n.props,t=e.openWishlistUpdateModal,a=e.wishlist,o=e.dispatchDeleteWishlist,c=e.openCreateItemModal;return r.a.createElement("div",{className:"nav header"},r.a.createElement("h1",{className:"nav-item header__title"},a.name),r.a.createElement("p",{className:"header__description"},a.description),r.a.createElement("div",{className:"btn-group d-block header__buttons header__buttons--right",role:"group","aria-label":"Wihslist actions"},r.a.createElement("button",{type:"button",className:"btn btn-secondary btn-icon",onClick:t},r.a.createElement("i",{className:"material-icons"},"edit"),"Edit"),r.a.createElement("button",{type:"button",className:"btn btn-danger btn-icon","data-toggle":"snackbar","data-content":"Wishlist ".concat(a.name," deleted"),"data-html-allowed":"true","data-timeout":"5000",onClick:function(){return o(a)}},r.a.createElement("i",{className:"material-icons"},"delete"),"Delete")),r.a.createElement("div",{className:"btn-group d-block header__buttons header__buttons--left"},r.a.createElement("button",{className:"btn btn-primary btn-icon new-item-btn",onClick:c},r.a.createElement("i",{className:"material-icons"},"add"),"New item")))},n.handleDeleteItem=function(e){e.wishlist=n.props.wishlist.id,n.props.dispatchDeleteItem(e).then(function(){return n.forceUpdate()})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getWishlist()}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.wishlist,a=e.items;return r.a.createElement(r.a.Fragment,null,void 0===n?r.a.createElement("p",null,"Wishlist with id: ",t.params.wishlistId," was not found!"):r.a.createElement("div",{className:"wishlist-detail"},this.renderHeader(),r.a.createElement("section",{className:"items-section"},a&&this.renderItems(a)),r.a.createElement("aside",null,r.a.createElement(N,{title:"Editing ".concat(n.name),modalType:g.MODAL_TYPE.WISHLIST.UPDATE},r.a.createElement(M,{wishlist:n})),r.a.createElement(N,{title:"New item",modalType:g.MODAL_TYPE.ITEM.CREATE},r.a.createElement(F,{wishlistId:n.id})),r.a.createElement(N,{title:"Editing ".concat(this.props.currentlyEditedItem.item_name),modalType:g.MODAL_TYPE.ITEM.UPDATE},r.a.createElement(q,{wishlistId:n.id,item:this.props.currentlyEditedItem})))))}}]),t}(a.Component),le=Object(f.f)(Object(d.b)(function(e,t){return{wishlist:e.wishlists.filter(function(e){return e.id===t.match.params.wishlistId})[0],items:e.items.filter(function(e){return e.wishlist===t.match.params.wishlistId}),openedModal:e.modalReducer.openedModal,currentlyEditedItem:e.modalReducer.currentlyEditedItem}},function(e,t){return{getWishlist:function(){return e(Object(g.getWishlist)(t.match.params.wishlistId))},dispatchDeleteWishlist:function(n){e(Object(g.deleteWishlist)(n)).then(function(){t.history.push("/")})},openWishlistUpdateModal:function(){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.WISHLIST.UPDATE}))},openCreateItemModal:function(){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.ITEM.CREATE}))},openUpdateItemModal:function(t){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.ITEM.UPDATE,item:t}))},dispatchDeleteItem:function(t){return e(Object(g.deleteItem)(t))}}})(ie)),se=(n(235),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).renderCategories=function(e){return r.a.createElement("ul",{className:"list-group"},e.map(function(e,t){return r.a.createElement("li",{key:e.id,className:"d-flex flex-row list-group-item ".concat(t%2===0&&"bg-light")},r.a.createElement("span",null,e.name),r.a.createElement("div",{className:"flex-grow-1"}),r.a.createElement("button",{type:"button",className:"btn text-secondary bmd-btn-icon",onClick:function(){return n.props.openUpdateCategoryModal(e)}},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("button",{type:"button",className:"btn text-secondary bmd-btn-icon",onClick:function(){return n.handleDeleteCategory(e)}},r.a.createElement("i",{className:"material-icons"},"delete")))}))},n.handleDeleteCategory=function(e){n.props.dispatchDeleteCategory(e).then(function(){return n.forceUpdate()})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.isLoggedIn&&this.props.getAllCategories()}},{key:"render",value:function(){var e=this.props,t=e.openCategoryCreateModal,n=e.categories;return r.a.createElement("div",{className:"categories"},r.a.createElement("header",{className:"header nav"},r.a.createElement("h1",{className:"header__title"},"Categories"),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-icon header__button",onClick:t},r.a.createElement("i",{className:"material-icons"},"add"),"New Category")),r.a.createElement("main",{className:"main-content"},n&&n.length>0&&this.renderCategories(n)),r.a.createElement("aside",null,r.a.createElement(N,{title:"New category",modalType:g.MODAL_TYPE.CATEGORY.CREATE},r.a.createElement(P,null)),r.a.createElement(N,{title:"Editing ".concat(this.props.currentlyEditedCategory.name),modalType:g.MODAL_TYPE.CATEGORY.UPDATE},r.a.createElement(W,{category:this.props.currentlyEditedCategory}))))}}]),t}(a.Component)),ue=Object(d.b)(function(e){return{categories:e.categories,currentlyEditedCategory:e.modalReducer.currentlyEditedCategory}},function(e){return{openCategoryCreateModal:function(){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.CATEGORY.CREATE}))},openUpdateCategoryModal:function(t){return e(Object(g.openModal)({modalType:g.MODAL_TYPE.CATEGORY.UPDATE,category:t}))},dispatchDeleteCategory:function(t){return e(Object(g.deleteCategory)(t))}}})(se);var me=function(){return r.a.createElement(f.a,{to:{pathname:"/"}})},de=function(e){return{isLoggedIn:e.userReducer.isLoggedIn}},Ee=Object(d.b)(de,null)(function(e){var t=e.component,n=e.isLoggedIn,a=Object(B.a)(e,["component","isLoggedIn"]);return r.a.createElement(f.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(f.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}),pe=Object(d.b)(de,null)(function(e){return e.isLoggedIn?r.a.createElement(X,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:K}),r.a.createElement(f.b,{path:"/login",component:me}),r.a.createElement(f.b,{path:"/sign-up",component:me}),r.a.createElement(f.b,{exact:!0,path:"/wishlists",component:me}),r.a.createElement(Ee,{path:"/wishlists/:wishlistId",component:le}),r.a.createElement(Ee,{path:"/categories",component:ue}),r.a.createElement(f.b,{component:te}))):r.a.createElement($,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/",component:K}),r.a.createElement(f.b,{path:"/login",component:ee}),r.a.createElement(f.b,{path:"/sign-up",component:oe}),r.a.createElement(f.b,{component:te})))}),be=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:b.b},r.a.createElement(p.a,{loading:r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),persistor:b.a},r.a.createElement(E.a,{basename:"/varwish-fe"},r.a.createElement(pe,null))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,t,n){"use strict";function a(e){return{CREATE:{SUCCESS:"".concat(e,"_CREATE_SUCCESS"),ERROR:"".concat(e,"_CREATE_ERROR")},GET:{SUCCESS:"".concat(e,"_GET_SUCCESS"),ERROR:"".concat(e,"_GET_ERROR")},GET_ALL:{SUCCESS:"".concat(e,"_GET_ALL_SUCCESS"),ERROR:"".concat(e,"_GET_ALL_ERROR")},UPDATE:{SUCCESS:"".concat(e,"_UPDATE_SUCCESS"),ERROR:"".concat(e,"_UPDATE_ERROR")},DELETE:{SUCCESS:"".concat(e,"_DELETE_SUCCESS"),ERROR:"".concat(e,"_DELETE_ERROR")}}}n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c});var r=a("WISHLIST"),o=a("CATEGORY"),c=a("ITEM")},32:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={SIGN_UP:{SUCCESS:"USER_SIGN_UP_SUCCESS",ERROR:"USER_SIGN_UP_ERROR",RESET_ERRORS:"USER_SIGN_UP_RESET_ERRORS"},UPDATE:{SUCCESS:"USER_UPDATE_SUCCESS",ERROR:"USER_UPDATE_ERROR"},DELETE:{SUCCESS:"USER_DELETE_SUCCESS",ERROR:"USER_DELETE_ERROR"},LOGIN:{SUCCESS:"USER_LOGIN_SUCCESS",ERROR:"USER_LOGIN_ERROR",RESET_ERRORS:"USER_LOGIN_RESET_ERRORS"},LOGOUT:{SUCCESS:"USER_LOGOUT_SUCCESS",ERROR:"USER_LOGOUT_ERROR"}}},46:function(e,t,n){"use strict";var a=n(7),r=n(80),o=n(109),c=n.n(o),i=n(110),l=n(19),s=n(1);var u=n(239),m=n(8),d=n(22);function E(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case s.ACTIONS[e].CREATE.SUCCESS:return[].concat(Object(d.a)(t),[n.payload]);case s.ACTIONS[e].GET_ALL.SUCCESS:return n.payload;case s.ACTIONS[e].GET.SUCCESS:case s.ACTIONS[e].UPDATE.SUCCESS:return[].concat(Object(d.a)(t.filter(function(e){return e.id!==n.payload.id})),[n.payload]);case s.ACTIONS[e].DELETE.SUCCESS:return Object(d.a)(t.filter(function(e){return e.id!==n.payload}));default:return t}}}n.d(t,"b",function(){return f}),n.d(t,"a",function(){return g});var p=Object(a.c)({wishlists:E("WISHLIST"),categories:E("CATEGORY"),items:E("ITEM"),userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.USER.SIGN_UP.SUCCESS:return Object(l.a)({},e,{isLoggedIn:!0,user:t.payload,signUpError:null});case s.USER.SIGN_UP.ERROR:return Object(l.a)({},e,{isLoggedIn:!1,user:null,signUpError:t.payload});case s.USER.SIGN_UP.RESET_ERRORS:return Object(l.a)({},e,{signUpError:null});case s.USER.UPDATE.SUCCESS:return Object(l.a)({},e,{user:t.payload});case s.USER.DELETE.SUCCESS:return Object(l.a)({},e,{user:{}});case s.USER.LOGIN.SUCCESS:return Object(l.a)({},e,{isLoggedIn:!0,user:t.payload});case s.USER.LOGIN.ERROR:case s.USER.LOGOUT:return Object(l.a)({},e,{isLoggedIn:!1,user:{}});default:return e}},modalReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.MODAL.OPEN:return Object(l.a)({},e,{openedModal:t.payload.modalType,currentlyEditedItem:t.payload.item||{},currentlyEditedCategory:t.payload.category||{}});case s.MODAL.CLOSE:return Object(l.a)({},e,{openedModal:null,currentlyEditedItem:{},currentlyEditedCategory:{}});default:return e}},form:u.a}),b={key:"root",storage:c.a,blacklist:["modalReducer","form"]},h=Object(r.a)(b,p),f=Object(a.e)(h,{userReducer:{isLoggedIn:!1,user:{}},wishlists:[],categories:[],items:[],modalReducer:{openedModal:null,currentlyEditedItem:{},currentlyEditedCategory:{}}},Object(a.d)(Object(a.a)(i.a,function(e){return function(e){return function(t){return t.type===s.USER.LOGIN.SUCCESS&&m.a.setToken(t.payload.key),t.type===s.USER.SIGN_UP.SUCCESS&&m.a.setToken(t.payload.key),"persist/REHYDRATE"===t.type&&t.payload&&m.a.setToken(t.payload.userReducer.user.key),t.type===s.USER.LOGOUT&&m.a.setToken(null),e(t)}}}),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e})),g=Object(r.b)(f)},8:function(e,t,n){"use strict";var a={apiUrl:"https://varwish-be.herokuapp.com/",originUrl:"https://varwishteam.github.io/varwish-fe/"},r=void 0,o=function(e,t,n){return fetch(a.apiUrl+t+"/",{method:e,headers:{"Content-Type":"application/json",Authorization:r&&"Token  ".concat(r),Origin:a.originUrl},body:JSON.stringify(n)}).then(function(t){return t.ok?"delete"===e?"deleted":t.json():t.json().then(function(e){return Promise.reject(e)})})};t.a={get:function(e,t){return o("get",e,t)},post:function(e,t){return o("post",e,t)},put:function(e,t){return o("put",e,t)},delete:function(e,t){return o("delete",e,t)},setToken:function(e){console.log("Setting currentAuthToken to ".concat(e)),r=e},ENDPOINTS:{LOGIN:"rest-auth/login",LOGOUT:"rest-auth/logout",SIGN_UP:"sign-up",WISHLIST:"wishlists",CATEGORY:"categories",ITEMS:function(e){return"wishlists/".concat(e,"/items")}}}},84:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var a=n(8),r=n(32),o=function(e){var t=e.username,n=e.password,o=e.rememberLogin;return function(e){return a.a.post(a.a.ENDPOINTS.LOGIN,{username:t,password:n}).then(function(t){t.user&&t.key?e({type:r.a.LOGIN.SUCCESS,payload:{id:t.user,key:t.key,rememberLogin:o}}):e({type:r.a.LOGIN.ERROR,payload:t})})}},c=function(){return function(e){return a.a.post(a.a.ENDPOINTS.LOGOUT),e({type:r.a.LOGOUT}),Promise.resolve("logged_out")}},i=function(e){var t=e.firstName,n=e.lastName,o=e.username,c=e.email,i=e.passwordSet,l=e.passwordConfirm;return function(e){return a.a.post(a.a.ENDPOINTS.SIGN_UP,{username:o,email:c,password1:i,password2:l,first_name:t,last_name:n}).then(function(t){t.user&&t.key?e({type:r.a.SIGN_UP.SUCCESS,payload:{id:t.user,key:t.key}}):e({type:r.a.SIGN_UP.ERROR,payload:{error:t}})})}}},85:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i});var a={OPEN:"MODAL_OPEN",CLOSE:"MODAL_CLOSE"};function r(e){return{CREATE:"".concat(e,"_CREATE_MODAL"),UPDATE:"".concat(e,"_UPDATE_MODAL")}}var o={WISHLIST:r("WISHLIST"),ITEM:r("ITEM"),CATEGORY:r("CATEGORY")},c=function(e){var t=e.modalType,n=e.item,r=e.category;return{type:a.OPEN,payload:{modalType:t,item:n,category:r}}},i=function(){return{type:a.CLOSE}}},86:function(e,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.80013e6c.chunk.js.map