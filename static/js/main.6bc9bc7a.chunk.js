(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{13:function(e,t,n){e.exports={formContainer:"Login_formContainer__l6Sc5",error:"Login_error__1qOce",text:"Login_text__1ezFN"}},17:function(e,t,n){e.exports={packsContainer:"Packs_packsContainer__16oNN",filtersContainer:"Packs_filtersContainer__3B5zs",tableHeaders:"Packs_tableHeaders__2SXmM",addButton:"Packs_addButton__Z7p1n"}},18:function(e,t,n){e.exports={cardsContainer:"Cards_cardsContainer__JoXOV",filtersContainer:"Cards_filtersContainer__2FGvO",tableHeaders:"Cards_tableHeaders__MwYNV",paginator:"Cards_paginator__MpeFQ"}},20:function(e,t,n){e.exports={input:"SuperInputText_input__awbh6",superInput:"SuperInputText_superInput__5NKs3",errorInput:"SuperInputText_errorInput__2jH9u",error:"SuperInputText_error__570P8"}},23:function(e,t,n){e.exports={navbarContainer:"Header_navbarContainer__PJb6n",menuIcon:"Header_menuIcon__1nmXt"}},24:function(e,t,n){e.exports={messageContainer:"Error404_messageContainer__3oMS9",mainImage:"Error404_mainImage__26ILy",errorText:"Error404_errorText__3hRkk"}},25:function(e,t,n){e.exports={buttonStyle:"SuperButton_buttonStyle__1YUs3",default:"SuperButton_default__3Ewh5",red:"SuperButton_red__6k63U"}},26:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__dwd8H",currentPage:"Paginator_currentPage__3WxEO",paginationContainer:"Paginator_paginationContainer__3QLvX"}},27:function(e,t,n){e.exports={modal:"Modal_modal__UMjzS",overlay:"Modal_overlay__2rgZc",children:"Modal_children__3m75A"}},33:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3RnLF",spanClassName:"SuperCheckbox_spanClassName__34fdC"}},34:function(e,t,n){e.exports={formContainer:"Registration_formContainer__2EKGT",error:"Registration_error__17O2b"}},43:function(e,t,n){e.exports={mainContainer:"Routes_mainContainer__3q4oz"}},45:function(e,t,n){e.exports={container:"Test_container__3_l_J"}},46:function(e,t,n){e.exports={searchContainer:"Search_searchContainer__3-9Kc"}},47:function(e,t,n){e.exports={packItem:"Pack_packItem__3DyQL"}},48:function(e,t,n){e.exports={cardContainer:"Card_cardContainer__1nc8G"}},54:function(e,t,n){},55:function(e,t,n){},8:function(e,t,n){e.exports={hidden:"Navbar_hidden__1Mlkl",menuContainer:"Navbar_menuContainer__wyTKk",highlight:"Navbar_highlight__1d_A9"}},80:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(21),s=n.n(a),i=(n(54),n(6)),o=(n(55),n(5)),d=n(23),j=n.n(d),u=n(8),l=n.n(u),b=n(7),O=n(43),h=n.n(O),p=n(24),x=n.n(p),f=n(0);var m=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:x.a.messageContainer,children:[Object(f.jsx)("img",{className:x.a.mainImage,src:"https://svgsilh.com/svg/1298794.svg",alt:"cat"}),Object(f.jsxs)("div",{className:x.a.errorText,children:[Object(f.jsx)("h1",{children:"Ooooops..."}),Object(f.jsx)("h2",{children:"404"}),Object(f.jsx)("h3",{children:"Page not found :("})]})]})})};var g=function(){return Object(f.jsx)("div",{children:"Profile"})},C=n(3),_=n(2),S=n(44),k=n.n(S).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),v=function(e){return k.post("auth/forgot",{email:e,from:"test-front-admin <olkaaamartynova@gmail.com>",message:"<div style=\"background-color: #00ff00; padding: 15px\">\n                            password recovery link: \n                     <a href='http://localhost:3000/Cards?#/new-password/$token$'>Click</a>\n                     </div>"}).then((function(e){return e.data}))},N=function(e,t){return k.post("auth/set-new-password",{password:e,resetPasswordToken:t}).then((function(e){return e.data}))},P={},T=n(13),E=n.n(T),R=n(15),w=n(25),I=n.n(w),A=function(e){var t=e.red,n=e.className,c=Object(R.a)(e,["red","className"]),r="".concat(I.a.buttonStyle," ").concat(t?I.a.red:I.a.default," ").concat(n);return Object(f.jsx)("button",Object(_.a)({className:r},c))},y=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),d=Object(o.a)(s,2),j=d[0],u=d[1],l=Object(C.b)(),O=Object(b.g)().token,h=Object(C.c)((function(e){return e.resetPassword.isNewPassword})),p=O||"";return h?Object(f.jsx)(b.a,{to:ze.LOGIN}):Object(f.jsxs)("div",{className:E.a.formContainer,children:[Object(f.jsx)("div",{children:"Reset Password"}),Object(f.jsxs)("form",{children:[Object(f.jsx)("input",{type:"password",onChange:function(e){a(e.currentTarget.value)}}),Object(f.jsx)("input",{type:"password",onChange:function(e){u(e.currentTarget.value)}}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)(A,{onClick:function(){r===j?l(function(e,t){return function(n){N(e,t).then((function(){n({type:"SET-RESET-PASSWORD",isNewPassword:!0})})).catch((function(e){console.log(e.error)}))}}(r,p)):alert("Password mismatch")},children:"Send"})})})]}),Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{className:E.a.text,to:ze.LOGIN,children:"Login"})})]})},L={};var D=function(){var e=Object(C.c)((function(e){return e.newPassword.isForgot})),t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(C.b)();return e?Object(f.jsx)(b.a,{to:ze.RESET_PASSWORD}):Object(f.jsxs)("div",{className:E.a.formContainer,children:[Object(f.jsxs)("form",{children:[Object(f.jsx)("span",{children:"Email:"}),Object(f.jsx)("div",{children:Object(f.jsx)("input",{type:"email",onChange:function(e){a(e.currentTarget.value)}})}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:Object(f.jsx)(A,{onClick:function(){var e;s((e=r,function(t){v(e).then((function(){t({type:"SET-RECOVERY-PASSWORD",isForgot:!0})})).catch((function(e){console.log(e.error)}))}))},children:"Send"})})})]}),Object(f.jsx)("div",{children:Object(f.jsx)(i.b,{className:E.a.text,to:ze.LOGIN,children:"Login"})})]})},G=n(20),M=n.n(G),F=function(e){var t=e.type,n=e.onChange,c=e.onChangeText,r=e.onKeyPress,a=e.onEnter,s=e.error,i=(e.className,e.spanClassName),o=e.placeholder,d=Object(R.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","placeholder"]),j="".concat(M.a.error," ").concat(i||""),u="".concat(M.a.input," ").concat(s?M.a.errorInput:M.a.superInput);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("input",Object(_.a)({type:t||"text",onChange:function(e){n&&n(e),c&&c(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),"Enter"===e.key&&a&&a()},className:u,placeholder:o},d)),s&&Object(f.jsx)("span",{className:j,children:s})]})},H=n(33),K=n.n(H),W=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,r=(e.spanClassName,e.children),a=Object(R.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(c||"");return Object(f.jsxs)("label",{children:[Object(f.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),r&&Object(f.jsx)("span",{className:K.a.spanClassName,children:r})]})},U=n(45),B=n.n(U),z=function(){return Object(f.jsxs)("div",{className:B.a.container,children:[Object(f.jsx)(F,{}),Object(f.jsx)(A,{children:"Click me "}),Object(f.jsx)(W,{})]})},q=function(e){return k.get("cards/pack",{params:Object(_.a)({},e)})},Q=function(){return k.post("cards/pack",{cardsPack:{name:"Testik 2",type:"pack"}})},J=function(e){return k.put("cards/pack",{cardsPack:{_id:e,name:"Testik 2 changed"}})},Y=function(e){return k.delete("cards/pack",{params:{id:e}})},V={packsList:[],packsParams:{packName:"",min:0,max:50,sortPacks:0,page:1,pageCount:10,cardPacksTotalCount:0},error:null},X=function(e){return function(t){q(e).then((function(e){t({type:"SET_PACKS",packsList:e.data.cardPacks}),t({type:"SET_CARD_PACKS_TOTAL_COUNT",cardPacksTotalCount:e.data.cardPacksTotalCount})}))}},Z=n(17),$=n.n(Z),ee=n(46),te=n.n(ee),ne=function(e){var t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1];return Object(f.jsxs)("div",{className:te.a.searchContainer,children:[Object(f.jsx)(F,{placeholder:"Type name",onChange:function(e){a(e.currentTarget.value)}}),Object(f.jsx)(A,{onClick:function(){e.setFilteredResults(r)},children:"Search"})]})},ce=n(26),re=n.n(ce),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=(Object(R.a)(e,["totalItemsCount","pageSize","currentPage","onPageChanged","portionSize"]),Math.ceil(t/n)),d=[],j=1;j<=i;j++)d.push(j);var u=Math.ceil(i/s),l=Object(c.useState)(1),b=Object(o.a)(l,2),O=b[0],h=b[1],p=(O-1)*s+1,x=O*s;return Object(f.jsxs)("div",{className:re.a.paginationContainer,children:[O>1&&Object(f.jsx)(A,{onClick:function(){h(O-1)},children:"Previous"}),d.filter((function(e){return e>=p&&e<=x})).map((function(e){return Object(f.jsx)("span",{className:re.a.pageNumber+" "+(r===e?re.a.currentPage:""),onClick:function(t){return a(e)},children:e},e)})),O<u&&Object(f.jsx)(A,{onClick:function(){h(O+1)},children:"Next"})]})},se=n(47),ie=n.n(se),oe=function(e){var t=e.pack._id;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("tr",{className:ie.a.packItem,children:[Object(f.jsx)("td",{children:e.pack.name}),Object(f.jsx)("td",{children:e.pack.cardsCount}),Object(f.jsx)("td",{children:e.pack.updated}),Object(f.jsx)(A,{onClick:function(){e.updatePack(e.pack._id)},children:"update"}),Object(f.jsx)(A,{onClick:function(){e.deletePack(e.pack._id)},children:"delete"}),Object(f.jsx)("td",{children:Object(f.jsx)(i.b,{to:"".concat(ze.CARDS,"/").concat(t),children:"cards"})}),Object(f.jsx)("td",{children:Object(f.jsx)(i.b,{to:"".concat(ze.LEARNING,"/").concat(e.pack._id),children:"learn"})})]})})},de=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.packs.packsParams})),n=Object(C.c)((function(e){return e.packs.packsList}));Object(c.useEffect)((function(){e(X(t))}),[t.packName,t.page]);var r=function(n){e(function(e,t){return function(n){J(e).then((function(){n(X(t))}))}}(n,t))},a=function(n){e(function(e,t){return function(n){Y(e).then((function(){n(X(t))}))}}(n,t))};return Object(f.jsxs)("div",{className:$.a.packsContainer,children:[Object(f.jsx)("h2",{children:"Packs"}),Object(f.jsxs)("div",{className:$.a.filtersContainer,children:[Object(f.jsx)(ne,{setFilteredResults:function(t){e(function(e){return{type:"SET_PACKS_SEARCH_TERM",packName:e}}(t))}}),Object(f.jsx)(ae,{totalItemsCount:t.cardPacksTotalCount,pageSize:t.pageCount,currentPage:t.page,onPageChanged:function(t){e(function(e){return{type:"PACKS/SET_PAGE",page:e}}(t))},portionSize:10})]}),Object(f.jsxs)("table",{className:$.a.tableContainer,children:[Object(f.jsxs)("tr",{className:$.a.tableHeaders,children:[Object(f.jsx)("td",{children:"Name"}),Object(f.jsx)("td",{children:"Cards Count"}),Object(f.jsx)("td",{children:"Updated"}),Object(f.jsx)(A,{onClick:function(){e(function(e){return function(t){Q().then((function(){t(X(e))}))}}(t))},className:$.a.addButton,children:"ADD"})]}),n.map((function(e){return Object(f.jsx)(oe,{pack:e,updatePack:r,deletePack:a},e._id)}))]})]})},je=n(18),ue=n.n(je),le=function(e){return k.get("cards/card",{params:Object(_.a)({},e)})},be=function(e){return k.post("cards/card",{card:e})},Oe=function(e,t,n){return k.put("cards/card",{card:{_id:e,question:t,comments:n}})},he=function(e){return k.delete("cards/card",{params:{id:e}})},pe={cardsList:[],cardsParams:{minGrade:0,maxGrade:100,page:1,pageCount:10,cardsTotalCount:0,cardAnswer:"",cardQuestion:"",cardsPack_id:"",sortCards:0},error:null},xe=function(e){return{type:"CARDS/SET_ERROR",error:e}},fe=function(e){return function(t){le(e).then((function(e){t({type:"SET_CARDS",cardsList:e.data.cards}),t({type:"SET_CARD_TOTAL_COUNT",cardsTotalCount:e.data.cardsTotalCount})})).catch((function(e){t(xe(e.response.data.error))}))}},me=n(48),ge=n.n(me),Ce=function(e){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("tr",{className:ge.a.cardContainer,children:[Object(f.jsx)("td",{children:e.card.question}),Object(f.jsx)("td",{children:e.card.answer}),Object(f.jsx)("td",{children:e.card.grade}),Object(f.jsx)("td",{children:e.card.updated}),Object(f.jsx)(A,{onClick:function(){e.updateCard(e.card._id)},children:"update"}),Object(f.jsx)(A,{onClick:function(){e.deleteCard(e.card._id)},children:"delete"})]})})},_e=function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.cards.cardsParams})),n=Object(C.c)((function(e){return e.cards.cardsList})),r=Object(b.g)().id;Object(c.useEffect)((function(){e(function(e){return{type:"CARDS/SET_PACK_ID",id:e}}(r)),e(fe(t))}),[t.cardAnswer,t.cardQuestion,t.page,t.cardsPack_id]);var a=function(n){e(function(e,t,n,c){return function(r){Oe(e,t,n).then((function(){r(fe(c))})).catch((function(e){r(xe(e.response.data.error))}))}}(n,"new question","new comments",t))},s=function(n){e(function(e,t){return function(n){he(e).then((function(){n(fe(t))})).catch((function(e){n(xe(e.response.data.error))}))}}(n,t))};return Object(f.jsxs)("div",{className:ue.a.cardsContainer,children:[Object(f.jsx)("h2",{children:"Cards"}),Object(f.jsx)("div",{className:ue.a.paginator,children:Object(f.jsx)(ae,{totalItemsCount:t.cardsTotalCount,pageSize:t.pageCount,currentPage:t.page,onPageChanged:function(t){e(function(e){return{type:"CARDS/SET_PAGE",page:e}}(t))},portionSize:10})}),Object(f.jsx)("div",{className:ue.a.filtersContainer}),Object(f.jsxs)("table",{className:ue.a.tableContainer,children:[Object(f.jsxs)("tr",{className:ue.a.tableHeaders,children:[Object(f.jsx)("td",{children:"Question"}),Object(f.jsx)("td",{children:"Answer"}),Object(f.jsx)("td",{children:"Grade"}),Object(f.jsx)("td",{children:"Updated"}),Object(f.jsx)(A,{onClick:function(){e(function(e,t){return function(n){be(e).then((function(){n(fe(t))})).catch((function(e){n(xe(e.response.data.error))}))}}({answer:"this is the answer",question:"this is the question,",cardsPack_id:r,grade:3,rating:6,shots:2,type:"card",user_id:"",created:"",updated:"",_v:0,_id:""},t))},children:"Add"})]}),n.map((function(e){return Object(f.jsx)(Ce,{card:e,packId:e.cardsPack_id,updateCard:a,deleteCard:s},e._id)}))]})]})};var Se=function(e){return Object(f.jsxs)("div",{className:E.a.formContainer,children:[Object(f.jsx)("div",{children:"SIGN IN"}),Object(f.jsx)(F,{type:"email",placeholder:"Enter email",onChange:e.onChangeHandlerEmail}),Object(f.jsx)("div",{children:Object(f.jsx)(F,{type:"password",placeholder:"Password",onChange:e.onChangeHandlerPassword})}),Object(f.jsx)("div",{children:Object(f.jsx)(W,{onChange:e.onChangeHandlerRememberMe,children:"Remember Me"})}),e.error&&Object(f.jsx)("span",{className:E.a.error,children:e.error}),Object(f.jsx)("div",{children:Object(f.jsx)(A,{onClick:e.onClickHandler,children:"Sign In"})})]})},ke=function(e,t,n){return k.post("auth/login",{email:e,password:t,rememberMe:n})},ve=function(){return k.delete("auth/me")},Ne={user:{},isLogin:!1,error:null},Pe=function(e){return{type:"SET_IS_LOGIN",payload:e}},Te=function(e){return{type:"SET_ERROR",error:e}};var Ee=function(){var e=Object(C.b)(),t=Object(c.useState)(""),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),d=Object(o.a)(s,2),j=d[0],u=d[1],l=Object(c.useState)(!1),O=Object(o.a)(l,2),h=O[0],p=O[1],x=Object(C.c)((function(e){return e.login.isLogin})),m=Object(C.c)((function(e){return e.login.error})),g=Object(c.useCallback)((function(e){a(e.currentTarget.value)}),[a]),_=Object(c.useCallback)((function(e){u(e.currentTarget.value)}),[u]),S=Object(c.useCallback)((function(e){p(e.currentTarget.checked)}),[p]);return x?Object(f.jsx)(b.a,{to:ze.PROFILE}):Object(f.jsxs)("div",{children:[Object(f.jsx)(Se,{onChangeHandlerEmail:g,onChangeHandlerPassword:_,onChangeHandlerRememberMe:S,onClickHandler:function(){e(function(e,t,n){return function(c){ke(e,t,n).then((function(e){c(Pe({user:e.data,isLogin:!0,error:null}))})).catch((function(e){var t=e.response?e.response.data.error:e.message+", more details in the console";c(Te(t))}))}}(r,j,h))},error:m}),Object(f.jsxs)("span",{children:[Object(f.jsx)(i.b,{className:E.a.text,to:ze.REGISTRATION,children:"Registration"}),Object(f.jsx)(i.b,{className:E.a.text,to:ze.RESET_PASSWORD,children:"   Forget password"})]})]})},Re=function(e,t){return k.post("auth/register",{email:e,password:t})},we={isRegistered:!1,error:null},Ie=n(34),Ae=n.n(Ie),ye=function(e){return Object(f.jsxs)("div",{className:Ae.a.formContainer,children:["Registration",Object(f.jsx)(F,{onChangeText:e.onEmailChange,type:"email"}),Object(f.jsx)(F,{onChangeText:e.onPasswordChange,type:"password"}),e.error&&Object(f.jsx)("span",{className:Ae.a.error,children:e.error}),Object(f.jsx)(A,{onClick:e.registerUser,children:"Register"})]})},Le=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(o.a)(a,2),i=s[0],d=s[1],j=Object(C.b)(),u=Object(C.c)((function(e){return e.registration.isRegistered})),l=Object(C.c)((function(e){return e.registration.error}));return u?Object(f.jsx)(b.a,{to:"/login"}):Object(f.jsx)("div",{children:Object(f.jsx)(ye,{onEmailChange:function(e){r(e)},onPasswordChange:function(e){d(e)},registerUser:function(){j(function(e,t){return function(n,c){Re(e,t).then((function(e){n({type:"TOGGLE_IS_REGISTERED",payload:{isRegistered:!0}})})).catch((function(e){n(function(e){return{type:"SET_ERROR",payload:{error:e}}}(e.response.data.error))}))}}(n,i))},error:l})})},De=function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h4",{children:"Question"}),Object(f.jsx)("h3",{children:e.card.question}),Object(f.jsxs)("span",{children:["id:",e.card._id]}),Object(f.jsx)("div",{children:!e.checked&&Object(f.jsx)(A,{onClick:function(t){return e.setIsChecked(!0)},children:"Check"})}),Object(f.jsx)("div",{children:e.checked&&Object(f.jsx)("div",{children:Object(f.jsxs)("h3",{children:["Answer:",e.card.answer]})})})]})},Ge=function(){Object(C.c)((function(e){return e.cards.cardsList})),Object(C.c)((function(e){return e.login.isLogin}));var e=Object(c.useState)({_id:""}),t=Object(o.a)(e,2),n=t[0],r=(t[1],Object(c.useState)(!1)),a=Object(o.a)(r,2),s=a[0],i=a[1];return Object(f.jsx)("div",{children:Object(f.jsx)(De,{card:n,checked:s,setIsChecked:i})})},Me=n(27),Fe=n.n(Me),He=function(e){var t=e.isShown,n=e.height,c=e.width,r=e.showBackground,a=e.closeModalWindow,s=e.scrollUp,i=e.top,o=e.left,d=e.position,j=e.children;return Object(f.jsxs)("div",{children:[t&&Object(f.jsx)("div",{className:Fe.a.modal,style:{width:c,height:n,position:d,top:"".concat(i,"%"),left:"".concat(o,"%")},children:Object(f.jsx)("div",{className:Fe.a.children,onClick:s,children:j})}),t&&r&&Object(f.jsx)("div",{className:Fe.a.overlay,onClick:a})]})},Ke=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){r(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{onClick:function(){r(!0)},children:"Modal 1"}),Object(f.jsxs)(He,{closeModalWindow:a,isShown:n,showBackground:!0,width:600,height:400,top:50,left:50,position:"absolute",children:[Object(f.jsx)("h3",{children:"Modal 1"}),Object(f.jsx)(A,{onClick:a,children:"Close"})]})]})},We=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){r(!1)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(A,{onClick:function(){r(!0)},children:"Modal 2"}),Object(f.jsxs)(He,{closeModalWindow:a,isShown:n,showBackground:!0,width:600,height:400,top:50,left:50,position:"absolute",children:[Object(f.jsx)("h3",{children:"Modal 2"}),Object(f.jsx)(F,{}),Object(f.jsx)(F,{}),Object(f.jsx)(F,{}),Object(f.jsx)(A,{onClick:a,children:"Close"})]})]})},Ue=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){window.pageYOffset>300?r(!0):r(!1)};Object(c.useEffect)((function(){window.addEventListener("scroll",a)}),[]);return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(He,{scrollUp:function(){window.scrollTo({top:0,behavior:"smooth"})},isShown:n,showBackground:!1,width:100,height:70,top:85,left:10,position:"fixed",children:Object(f.jsx)("span",{style:{cursor:"pointer"},children:"UP"})})})},Be=function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{style:{marginTop:"300px"},children:[Object(f.jsx)(Ke,{}),Object(f.jsx)(We,{})]}),Object(f.jsx)(Ue,{}),Object(f.jsx)("div",{style:{marginTop:"5000px"},children:"bottom"})]})},ze={LOGIN:"/login",REGISTRATION:"/registration",PROFILE:"/profile",RESET_PASSWORD:"/reset-password",NEW_PASSWORD:"/new-password",TEST:"/test",PACKS:"/packs",CARDS:"/cards",LEARNING:"/learning",MODALS:"/modals"};var qe=function(){return Object(f.jsx)("div",{className:h.a.mainContainer,children:Object(f.jsxs)(b.d,{children:[Object(f.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(f.jsx)(b.a,{to:ze.LOGIN})}}),Object(f.jsx)(b.b,{path:ze.LOGIN,render:function(){return Object(f.jsx)(Ee,{})}}),Object(f.jsx)(b.b,{path:ze.REGISTRATION,render:function(){return Object(f.jsx)(Le,{})}}),Object(f.jsx)(b.b,{path:ze.PROFILE,render:function(){return Object(f.jsx)(g,{})}}),Object(f.jsx)(b.b,{path:ze.RESET_PASSWORD,render:function(){return Object(f.jsx)(y,{})}}),Object(f.jsx)(b.b,{path:ze.NEW_PASSWORD,render:function(){return Object(f.jsx)(D,{})}}),Object(f.jsx)(b.b,{path:ze.PACKS,render:function(){return Object(f.jsx)(de,{})}}),Object(f.jsx)(b.b,{path:"".concat(ze.CARDS,"/:id"),render:function(){return Object(f.jsx)(_e,{})}}),Object(f.jsx)(b.b,{path:ze.LEARNING,render:function(){return Object(f.jsx)(Ge,{})}}),Object(f.jsx)(b.b,{path:ze.TEST,render:function(){return Object(f.jsx)(z,{})}}),Object(f.jsx)(b.b,{path:ze.MODALS,render:function(){return Object(f.jsx)(Be,{})}}),Object(f.jsx)(b.b,{render:function(){return Object(f.jsx)(m,{})}})]})})},Qe=function(){var e=Object(C.b)();return Object(f.jsx)("div",{onClick:function(){e((function(e){ve().then((function(t){e(Pe({user:{},isLogin:!1,error:null})),alert(t.data.info)})).catch((function(t){var n=t.response?t.response.data.error:t.message+", more details in the console";alert(n),e(Te(n))}))}))},children:"Logout"})};var Je=function(e){var t=function(){e.setCollapsed(!0)};return Object(f.jsx)("div",{className:e.isCollapsed?l.a.hidden:l.a.menuContainer,children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.LOGIN,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Login"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.REGISTRATION,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Registration"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.PROFILE,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Profile"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.RESET_PASSWORD,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Reset Password"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.NEW_PASSWORD,className:l.a.menuItem,activeClassName:l.a.highlight,children:"New Password"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.PACKS,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Packs"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.TEST,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Test"})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:ze.LOGIN,children:Object(f.jsx)(Qe,{})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{onClick:t,to:ze.MODALS,className:l.a.menuItem,activeClassName:l.a.highlight,children:"Modals"})})]})})};var Ye=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(f.jsxs)("div",{className:j.a.menuContainer,children:[Object(f.jsx)("div",{className:j.a.navbarContainer,children:Object(f.jsx)("img",{onClick:function(){r(!n)},className:j.a.menuIcon,src:"https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg",alt:"menu"})}),Object(f.jsx)(Je,{isCollapsed:n,setCollapsed:r})]})};var Ve=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(i.a,{children:[Object(f.jsx)(Ye,{}),Object(f.jsx)(qe,{})]})})},Xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},Ze=n(28),$e={},et={},tt=n(49),nt=Object(Ze.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOGIN":return Object(_.a)(Object(_.a)({},e),t.payload);case"SET_ERROR":return Object(_.a)(Object(_.a)({},e),{},{error:t.error});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_IS_REGISTERED":case"SET_ERROR":return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-RECOVERY-PASSWORD":return Object(_.a)(Object(_.a)({},e),{},{isForgot:t.isForgot});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;return t.type,e},resetPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-RESET-PASSWORD":return Object(_.a)(Object(_.a)({},e),{},{isNewPassword:t.isNewPassword});default:return e}},test:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return t.type,e},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PACKS":return Object(_.a)(Object(_.a)({},e),{},{packsList:t.packsList});case"SET_PACKS_SEARCH_TERM":return Object(_.a)(Object(_.a)({},e),{},{packsParams:Object(_.a)(Object(_.a)({},e.packsParams),{},{packName:t.packName})});case"SET_CARD_PACKS_TOTAL_COUNT":return Object(_.a)(Object(_.a)({},e),{},{packsParams:Object(_.a)(Object(_.a)({},e.packsParams),{},{cardPacksTotalCount:t.cardPacksTotalCount})});case"PACKS/SET_PAGE":return Object(_.a)(Object(_.a)({},e),{},{packsParams:Object(_.a)(Object(_.a)({},e.packsParams),{},{page:t.page})});case"PACKS/SET_ERROR":return Object(_.a)(Object(_.a)({},e),{},{error:t.error});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CARDS":return Object(_.a)(Object(_.a)({},e),{},{cardsList:t.cardsList});case"SET_CARD_TOTAL_COUNT":return Object(_.a)(Object(_.a)({},e),{},{cardsParams:Object(_.a)(Object(_.a)({},e.cardsParams),{},{cardsTotalCount:t.cardsTotalCount})});case"CARDS/SET_PAGE":return Object(_.a)(Object(_.a)({},e),{},{cardsParams:Object(_.a)(Object(_.a)({},e.cardsParams),{},{page:t.page})});case"CARDS/SET_PACK_ID":return Object(_.a)(Object(_.a)({},e),{},{cardsParams:Object(_.a)(Object(_.a)({},e.cardsParams),{},{cardsPack_id:t.id})});case"CARDS/SET_ERROR":return Object(_.a)(Object(_.a)({},e),{},{error:t.error});default:return e}}}),ct=Object(Ze.c)(nt,Object(Ze.a)(tt.a));window.store=ct,s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(C.a,{store:ct,children:Object(f.jsx)(Ve,{})})}),document.getElementById("root")),Xe()}},[[80,1,2]]]);
//# sourceMappingURL=main.6bc9bc7a.chunk.js.map